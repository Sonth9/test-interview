const GET_LIST_TASKS = (state, data) => {
  state.listTasks = data;
  console.log('state.listTasks', state.listTasks);
};

const ADD_TASK = (state, data) => {
  state.listTasks.push(data);
  console.log('state.listTasks', state.listTasks);
};

const DELETE_TASK = (state, data) => {
  state.listTasks.splice(state.listTasks.indexOf(data), 1);
};



export default {
  GET_LIST_TASKS,
  ADD_TASK,
  DELETE_TASK
};
