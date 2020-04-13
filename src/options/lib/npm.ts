const URL = 'https://registry.npmjs.com/-/v1/search?text=%s&size=8&from=%d';

interface SearchResult {
  objects: SearchItem[];
  total: number;
}

interface SearchItem {
  package: {
    name: string;
    scope?: string;
    version: string;
    description: string;
    publisher: {
      username: string;
      email: string;
    }
    maintainers: {
      username: string;
      email: string;
    }[]
  }
}

export default function list() {
  //
}