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
}
