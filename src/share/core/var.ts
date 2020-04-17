export interface LayoutItem {
  column: number;
  uuid: string;
  title: string;
  showPanel: boolean;
  className: string;
  style: any;
  plugin: string;
  config: any;
}

export enum APIs {
  OPEN_URL,
}
