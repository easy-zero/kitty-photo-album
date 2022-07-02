export interface Data {
  id: string;
  name: string;
  type: string;
  filePath: null | string;
  parent: null | { id: number };
}

export interface Cache {
  [index: string]: {
    parentId: string;
    data: Array<any>;
  };
}

export interface NodeIcon {
  [index: string]: string;
}
