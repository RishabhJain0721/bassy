import axios from "axios";

export const createRecord = async ({ name, email, phone }) => {
  try {
    const response = await axios.post("/api/record", { name, email, phone });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRecords = async () => {
  try {
    const response = await axios.get("/api/record");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateRecord = async (id, { name, email, phone }) => {
  try {
    const response = await axios.patch(`/api/record/${id}`, {
      name,
      email,
      phone,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteRecord = async (id) => {
  try {
    const response = await axios.delete(`/api/record/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRecord = async (id) => {
  try {
    const response = await axios.get(`/api/record/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
