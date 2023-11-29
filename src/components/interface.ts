export interface FormItem {
  label?: string | any;
  key: string;
  type?: string;
  defaultValue?: any;
  disabled?: boolean;
  options?: Array<any>;
  min?: number,
  max?: number,
  precision?: number,
  dateType?: string,
  size?: string,
  layout?: {
    span?: number,
    offset?: number,
    push?: number,
    pull?: number,
  };
  placeholder?: string | any;
  attrs?: {
    [propName: string]: any,
  };
  rules?: [];
  [propName: string]: any
}

export interface Column {
  label?: string | any,
  prop?: string,
  width?: string | number | any,
  type?: 'selection' | 'index' | 'expand',
  fixed?: boolean | 'left' | 'right',
  align?: 'left' | 'center' | 'right',
  heanderSlot?: 'string',
  attrs?: {
    [propName: string]: any
  }
}