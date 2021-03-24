export type Roles = 'practitioner' | 'office_clerk' | 'operations_manager' | 'pharmacist';

export type QueryParamsCallback = () => {
  [key: string]: any;
};

export type BooleanCallback = () => boolean;
