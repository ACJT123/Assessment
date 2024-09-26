import { deleteData, getData, postData, putData } from "../lib/http";
import { BASE_URL } from "../types/models/Api";
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

  return await postData(BASE_URL, formData);
};

export const getAllEmployees = async () => {
  return await getData(BASE_URL);
};

export const getEmployee = async (number: number) => {
  return await getData(`${BASE_URL}/${number}`);
};

export const editEmployee = async (data: IEmployee, selectedNumber: number) => {
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

  return await putData(`${BASE_URL}/${selectedNumber}`, formData);
};

export const deleteEmployee = async (number: number) => {
  return await deleteData(`${BASE_URL}/${number}`);
};
