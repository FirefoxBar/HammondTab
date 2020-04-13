import { browser } from 'webextension-polyfill-ts';
import { APIs } from './var';

/**
 * Background API封装
 */
class BackgroundAPI {
  openURL(url: string) {
    return browser.runtime.sendMessage({
      method: APIs.OPEN_URL,
      url,
    });
  }
}

const Api = new BackgroundAPI();

export default Api;
