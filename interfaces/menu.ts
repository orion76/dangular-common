export interface iSourceMenuTree {
  label: string,
  label_forms?: {
    plural: string,
    singular: string,
    prepositional: string,
  },
  level?: number,
  id?: any,
  type?: string,
  segment?: string,
  source?: string,
  path?: string[],
  parent?: iSourceMenuTree,
  data?: any,
  children?: iSourceMenuTree[],
  root?: any,
  link?: any
}
