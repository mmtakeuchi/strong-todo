import axios from 'axios';

export const fetchTodos = async (url) => {
  try {
    const response = await axios.get(url).then((resp) => resp);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const postTodo = async (url, newTodo) => {
  try {
    const response = await axios.post(url, newTodo).then((resp) => resp);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (url, todoId) => {
  try {
    const response = await axios.delete(url, todoId).then((resp) => resp);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
