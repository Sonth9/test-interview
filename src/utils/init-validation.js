import Vue from 'vue';
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import { max } from 'vee-validate/dist/rules';
import {
  REQUIRED,
  REQUIRED_FIELD,
  REQUIRED_SELECT,
  TOM_TAT_THONG_BAO_MAX_LENGTH
} from '../constants/validateMessages';
import { lowerCase } from 'bootstrap-vue/esm/utils/string';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

extend('required', {
  validate (value, { input }) {
    if (['', null, undefined].indexOf(value) === -1) {
      return true;
    }
    let message = REQUIRED;
    if (input === 'select') message = REQUIRED_SELECT;

    return message;
  },
  params: ['input'],
  computesRequired: true
});

extend('required_field', {
  validate (value, args) {
    if (value !== '') {
      return true;
    }

    return args.fieldName
      ? REQUIRED_FIELD(lowerCase(args.fieldName))
      : REQUIRED;
  },
  params: ['fieldName'],
  computesRequired: true
});
extend('max', {
  ...max,
  message: TOM_TAT_THONG_BAO_MAX_LENGTH
});
