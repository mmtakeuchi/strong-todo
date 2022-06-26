import axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://strong-todo.herokuapp.com/api/todos/'
    : '/api/todos/';

export const getTodos = async () => {
  try {
    const response = await axios.get(BASE_URL).then((resp) => resp.data);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const postTodo = async (newTodo) => {
  try {
    const response = await axios
      .post(`${BASE_URL}`, newTodo)
      .then((resp) => resp.data);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const putTodo = async (endpoint, updatedTodo) => {
  try {
    const response = await axios
      .put(`${BASE_URL}${endpoint}`, updatedTodo)
      .then((resp) => resp.data);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (endpoint, todoId) => {
  try {
    const response = await axios
      .delete(`${BASE_URL}${endpoint}`, todoId)
      .then((resp) => resp.data);

    return response;
  } catch (error) {
    console.log(error);
  }
};
