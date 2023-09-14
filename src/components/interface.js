export interface FormItem {
  label?: string;
  key: string;
  type?: string;
  defaultValue?: any;
  disabled?: boolean;
  options?: Array<any>;
  layout?: {
    span?: number,
    offset?: number,
    push?: number,
    pull?: number,
  };
  placeholder?: string;
  attrs?: {
    [propName: string]: any,
  };
  rules?: [];
}
