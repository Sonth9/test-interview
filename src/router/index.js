import Vue from "vue";
import Router from "vue-router";

import { ROUTE_NAME, MENU_ROUTE_NAME } from "@/constants/constants";

const Tasks = (resolve) => {
  // require.ensure is Webpack's special syntax for a code-split point.
  require.ensure(["@/views/Tasks"], () => {
    resolve(require("@/views/Tasks"));
  });
};


Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: {
        name: ROUTE_NAME.TASKS,
      },
    },
    {
      path: ROUTE_NAME.TASKS,
      name: ROUTE_NAME.TASKS,
      menuName: MENU_ROUTE_NAME.TASKS,
      component: Tasks
    }
  ]
});

export default router;
