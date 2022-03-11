import ResizeObserver from 'resize-observer-polyfill';

if (window && window.ResizeObserver === undefined) {
  window.ResizeObserver = ResizeObserver;
}
