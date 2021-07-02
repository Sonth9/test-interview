import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const state = {
  listTasks: [
    {
      id: 1,
      name: "Do homwork",
      description: "Lorem Ipsum",
      dueDate: "12 May 2016",
      piority: 2
    },
    {
      id: 2,
      name: "Do homwork2",
      description: "Lorem Ipsum2",
      dueDate: "12 May 2016",
      piority: 2
    },
    {
      id: 3,
      name: "Do homwork3",
      description: "Lorem Ipsum3",
      dueDate: "12 May 2016",
      piority: 2
    },
    {
      id: 4,
      name: "Do homwork4",
      description: "Lorem Ipsum4",
      dueDate: "12 May 2016",
      piority: 2
    }
  ]
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
