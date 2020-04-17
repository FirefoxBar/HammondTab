import { browser } from 'webextension-polyfill-ts';

function getStorage() {
  return browser.storage.local;
}

// export function
