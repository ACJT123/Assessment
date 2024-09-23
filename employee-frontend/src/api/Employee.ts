import { deleteData, getData, postData, putData } from "../lib/http";
import { IEmployee } from "../types/models/Employee";

export const addEmployee = async (data: IEmployee) => {
  const formData = new FormData();

  for (const key in data) {
    switch (key) {
      case "photo":
        formData.append("photo", data.photo);
        break;
      default:
        formData.append(key, data[key as keyof IEmployee]);
        break;
    }
  }

  return await postData("http://localhost:4200/api/employee", formData);
};

export const getAllEmployees = async () => {
  return await getData("http://localhost:4200/api/employee");
};

export const getEmployee = async (number: number) => {
  return await getData(`http://localhost:4200/api/employee/${number}`);
};

export const editEmployee = async (data: IEmployee) => {
  const formData = new FormData();

  for (const key in data) {
    switch (key) {
      case "photo":
        formData.append("photo", data.photo);
        break;
      default:
        formData.append(key, data[key as keyof IEmployee]);
        break;
    }
  }

  return await putData(
    `http://localhost:4200/api/employee/${data.number}`,
    formData
  );
};

export const deleteEmployee = async (number: number) => {
  return await deleteData(`http://localhost:4200/api/employee/${number}`);
};
