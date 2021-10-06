type MethodNames = 'init';
export const DEFAULT_NAME = '_tp';

/**
 * Represents a model that is created in embedded script
 * as part of script initialization.
 */
interface LoaderObject {
  /**
   * Queue that accumulates method calls during downloading
   * and loading of widget's script file.
   */
  q: Array<[MethodNames, {}]>;
}

/**
 * Loads widget instance.
 *
 * @param win Global window object which stores pre-loaded and post-loaded state of widget instance.
 * @param defaultConfig A configurations that are merged with user.
 * @param scriptElement The script tag that includes installation script and triggered loader.
 * @param render A method to be called once initialization done and DOM element for hosting widget is ready.
 */
export default (
  win: any,
  scriptElement: Element | null,
  render: (element: HTMLElement, config: any) => void,
) => {
  // get a hold of script tag instance, which has an
  // attribute `id` with unique identifier of the widget instance
  const instanceName =
    scriptElement?.attributes.getNamedItem('id')?.value ?? DEFAULT_NAME;
  console.log('scriptElement:', scriptElement);

  const loaderObject: LoaderObject = win[instanceName];
  console.log('loaderObject:', loaderObject);
  if (!loaderObject || !loaderObject.q) {
    throw new Error(
      `Widget didn't find LoaderObject for instance [${instanceName}]. ` +
        `The loading script was either modified, no call to 'init' method was done ` +
        `or there is conflicting object defined in \`window.${instanceName}\` .`,
    );
  }

  // check that the widget is not loaded twice under the same name
  if (win[`loaded-${instanceName}`]) {
    throw new Error(
      `Widget with name [${instanceName}] was already loaded. ` +
        `This means you have multiple instances with same identifier (e.g. '${DEFAULT_NAME}')`,
    );
  }

  // this will an root element of the widget instance
  let targetElement: HTMLElement;

  // iterate over all methods that were called up until now
  for (let i = 0, len = loaderObject.q.length; i < len; i++) {
    const item = loaderObject.q[i];
    console.log('item:', item);
    // const methodName = item[0];
    // if (i === 0 && methodName !== 'init') {
    //   throw new Error(
    //     `Failed to start Widget [${instanceName}]. 'init' must be called before other methods.`,
    //   );
    // } else if (i !== 0 && methodName === 'init') {
    //   continue;
    // }

    // switch (methodName) {
    //   case 'init':
    const loadedObject = { ...item[1] };
    console.log('loadedObject:', loadedObject);

    // the actual rendering of the widget
    // @ts-ignore
    const wrappingElement = loadedObject.element ?? win.document.body;
    targetElement = wrappingElement.appendChild(
      win.document.createElement('div'),
    );
    targetElement.setAttribute(
      'id',
      `${instanceName}-${Math.floor(Math.random() * 9999999999)}`,
    );
    render(targetElement, loadedObject);

    // store indication that widget instance was initialized
    win[`loaded-${instanceName}`] = true;
    //   }
  }

  // // once finished processing all async calls, we going
  // // to convert LoaderObject into sync calls to methods
  // win[instanceName] = (method: MethodNames, ...args: any[]) => {
  //   switch (method) {
  //     case 'event': {
  //       targetElement?.dispatchEvent(
  //         new CustomEvent('widget-event', { detail: { name: args?.[0] } }),
  //       );
  //       break;
  //     }
  //     default:
  //       console.warn(`Unsupported method [${method}]`, args);
  //   }
  // };
};
