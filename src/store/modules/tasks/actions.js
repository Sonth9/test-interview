
// eslint-disable-next-line no-unused-vars
const getListTasks = (context, payload) => {
  context.commit("GET_LIST_TASKS", payload);
};


const addTasks = (context, payload) => {
  context.commit("ADD_TASK", payload);
};



const deleteTask = (context, payload) => {
  context.commit("DELETE_TASK", payload);
};

export default {
  getListTasks,
  addTasks,
  deleteTask,
};
