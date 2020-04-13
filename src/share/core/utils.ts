import { browser, Tabs } from 'webextension-polyfill-ts';

// Get Active Tab
export function getActiveTab(): Promise<Tabs.Tab> {
  return new Promise(resolve => {
    browser.tabs
      .query({ currentWindow: true, active: true })
      .then(tabs => tabs[0])
      .then(resolve);
  });
}
export function trimNewLines(s: string) {
  return s.replace(/^[\s\n]+/, '').replace(/[\s\n]+$/, '');
}

interface FetchUrlParam {
  post?: any;
  query?: any;
  url: string;
  header?: { [key: string]: string };
}
export function fetchUrl(param: FetchUrlParam): Promise<string> {
  return new Promise((resolve, reject) => {
    const fetchParam: RequestInit = {
      method: param.post ? 'POST' : 'GET',
    };
    const headers: Record<string, string> = {};
    let url = param.url;
    if (param.query) {
      url += '?' + new URLSearchParams(param.query).toString();
    }
    if (fetchParam.method === 'POST') {
      // 遍历一下，查找是否有File
      let hasFile = false;
      for (const name in param.post) {
        if (param.post[name] instanceof File) {
          hasFile = true;
          break;
        }
      }
      if (hasFile) {
        const formBody = new FormData();
        for (const name in param.post) {
          if (param.post[name] instanceof File) {
            formBody.append(name, param.post[name], param.post[name].name);
          } else {
            formBody.append(name, param.post[name]);
          }
        }
        fetchParam.body = formBody;
      } else {
        headers['Content-Type'] = 'application/x-www-form-urlencoded';
        fetchParam.body = new URLSearchParams(param.post).toString();
      }
    }
    if (param.header) {
      // tslint:disable-next-line
      for (const name in param.header) {
        headers[name] = param.header[name];
      }
    }
    fetchParam.headers = headers;
    fetch(url, fetchParam)
      .then(r => r.text())
      .then(resolve)
      .catch(reject);
  });
}

export function t(key: string, params?: any) {
  const s = browser.i18n.getMessage(key, params);
  return s || key;
}
