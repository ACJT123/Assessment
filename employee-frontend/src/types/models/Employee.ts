export enum Dept {
  IT = "IT",
  FINANCE = "Finance",
  SECURITY = "Security",
}

export interface IEmployee {
  name: string;
  dept: Dept | string; // string is used for the schema validation
  active?: boolean;
  number: number;
  email: string;
  address: string;
  photo: any;
}
