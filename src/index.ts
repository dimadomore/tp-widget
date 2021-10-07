import { h, render } from 'preact';

import { App } from './App';

const containerId = document.currentScript?.dataset.containerId ?? 'root';

const start = () => {
  if (containerId) {
    const appContainer = document.getElementById(containerId);

    if (appContainer) {
      const params = appContainer.dataset;

      render(h(App, { ...params }), appContainer);
    }
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}
