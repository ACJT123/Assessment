export enum Dept {
  IT = "IT",
  FINANCE = "Finance",
  SECURITY = "Security",
}

export interface IEmployee {
  name: string;
  dept: Dept | string;
  active: boolean;
  number: number;
  email: string;
  address: string;
  photo: any;
}
