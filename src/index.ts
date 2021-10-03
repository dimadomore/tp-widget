import { h, render } from 'preact';

import loader from './loader';
import { App } from './App';

loader(window, window.document.currentScript, (el, config) =>
  render(h(App, { ...config, element: el }), el),
);
