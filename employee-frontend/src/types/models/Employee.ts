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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  photo: any;
}
