import Vue from "vue";
import Toasted from "vue-toasted";
const successToastedOptions = {
  containerClass: "success-toasted",
  position: "top-right",
  duration: 5000
};

const errorToastedOptions = {
  containerClass: "error-toasted",
  position: "top-right",
  duration: 5000
};

Vue.use(Toasted);

Vue.toasted.register(
  "showErrorMessage",
  payload => {
    return payload.message;
  },
  errorToastedOptions
);

Vue.toasted.register(
  "showSuccessMessage",
  payload => {
    return payload.message;
  },
  successToastedOptions
);
