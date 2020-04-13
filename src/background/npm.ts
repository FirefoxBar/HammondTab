interface MirrorItem {
  name: string;
  url: string;
}
const MIRROR_LIST: { [x: string]: MirrorItem } = {
  unpkg: {
    name: "unpkg",
    url: "https://unpkg.com/"
  },
  jsdelivr: {
    name: "jsDelivr",
    url: "https://cdn.jsdelivr.net/npm/"
  },
  zhihu: {
    name: "知乎",
    url: "https://unpkg.zhimg.com/"
  },
  eleme: {
    name: "饿了么",
    url: "https://npm.elemecdn.com/"
  },
  baidu: {
    name: "百度",
    url: "https://code.bdstatic.com/npm/"
  }
}

interface PkgItem {
  name: string;
  main?: string;
  version: string;
}

interface PkgInfo {
  'dist-tags': { [x: string]: string };
  versions: { [x: string]: PkgItem }
}

class Npm {
  private mirror: string = "npm";

  getVersion(name: string): PkgItem {
    const url = `${MIRROR_LIST[this.mirror].url}/${name}@latest/package.json`;
    return JSON.parse("");
  }

  download(pkg: PkgItem) {
    const url = `${MIRROR_LIST[this.mirror].url}/${pkg.name}@${pkg.version}/${pkg.main || 'index.js'}`;
  }
}