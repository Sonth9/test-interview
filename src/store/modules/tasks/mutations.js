const GET_LIST_TASKS = (state, data) => {
  state.listTasks = data;
};

const ADD_TASK = (state, data) => {
  state.listTasks.push(data);
};

const UPDATE_TASK = (state, data) => {
  state.listTasks = state.listTasks.map(item => {
    if(item.id === data.id) return data
    if(item.id !== data.id) return item
  })
};

const DELETE_TASK = (state, data) => {
  state.listTasks.splice(state.listTasks.indexOf(data), 1);
};



export default {
  GET_LIST_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK
};
