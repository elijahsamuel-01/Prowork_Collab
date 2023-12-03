import axios from "axios";

const URL: string = "http://localhost:4077/api/v1";

export const createAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/create-user`, data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginAccount = async (data: any) => {
  try {
    return await axios.post(`${URL}/login-user`, data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const getTasks = (projectID: string) => {
  try {
    return axios.get(`${URL}/view-user-task/:${projectID}`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const createTask = (projectID: string) => {
  try {
    return axios.get(`${URL}/create-task/:${projectID}`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (data: any, projectID: string, taskID: string) => {
  try {
    return axios.post(`/delete-task-project/:${projectID}/:${taskID}`, data);
  } catch (error) {
    console.log("err", error);
  }
};
export const addToProject = (project: any, userID: string) => {
  try {
    return axios.post(`${URL}/create-project/:${userID}`, project);
  } catch (error) {
    console.log("err", error);
  }
};

export const getProject = (userID: string) => {
  try {
    return axios.get(`${URL}/view-user-project/:${userID}`).then((res) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const addCard = (data: any, ID: string) => {
  try {
    return axios.patch(`${URL}/AddToProject/${ID}`, data);
  } catch (error) {
    console.log("err", error);
  }
};
