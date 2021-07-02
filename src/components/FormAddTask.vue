<template>
  <b-form>
    <validationObserver ref="observerFormAdd" tag="form">
      <div class="box">
        <div v-if="!dataDetail" class="form-title">New Tasks</div>
        <div class="row">
          <div class="col-md-12 col-xs-12">
            <b-form-group 
              class="required" 
              label="" 
              label-for="title"
            >
              <ValidationProvider rules="required">
                <div slot-scope="{ errors }">
                  <b-form-input
                    type="text"
                    required
                    placeholder="Add new task..."
                    v-model="form.name"
                  />
                  <span :class="{ error: errors.length > 0 }">
                    {{ errors.length > 0 ? 'Task title is a required field' : '' }}
                  </span>
                </div>
              </ValidationProvider>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-xs-12">
            <b-form-group
              label="Description" 
              label-for="description"
              label-align-sm="left"
            >
              <b-form-textarea
                name="description"
                rows="5"
                max-rows="5"
                v-model="form.description"
              />
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-xs-6">
            <b-form-group 
              label="Due Date" 
              label-for="dueDate"
              label-align-sm="left"
            >
              <date-picker
                format="DD/MM/YYYY"
                value-type="format"
                class="custom-datepicker w-100"
                :disabled-date="notAfterDate"
                v-model="form.dueDate"
              />
            </b-form-group>
          </div>
          <div class="col-md-6 col-xs-6">
            <b-form-group
              label="Piority"
            >
              <b-form-select
                class="form-select"
                name="piority"
                :options="piorityOpts"
                v-model="form.piority"
              />
            </b-form-group>
          </div>
        </div>
        <div class="actions center mt-15">
          <button 
            v-if="dataDetail"
            class="btn bg-success w-100" 
            @click.prevent="handleUpdateTask"
          >Update</button>
          <button
            v-else
            class="btn bg-success w-100" 
            @click.prevent="handleAddTask"
          >Add</button>
        </div>
      </div>
    </validationObserver>
  </b-form>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { PIORITY_OPTS } from "./../constants/otpsCommon";
import { getValueFromStorageByKey, LOCAL_STORAGE_KEY, setValueToStorageByKey } from "./../utils/localStorage";
import moment from "moment";
export default {
  name: "FormAddTask",
  components: {
    DatePicker
  },
  props: {
    dataDetail: {
      type: Object
    }
  },
  data() {
    return {
      piorityOpts: PIORITY_OPTS,
      form: {
        id: 0,
        name: "",
        description: null,
        dueDate: moment().format("DD/MM/YYYY"),
        piority: 2
      }
    }
  },
  created() {
    this.dataDetail && this.cloneData(this.dataDetail)
  },

  methods: {
    cloneData(data) {
      this.form = {
        id: data.id,
        name: data.name,
        description: data.description,
        dueDate: data.dueDate,
        piority: data.piority
      }
    },

    async handleAddTask() {
      const $vm = this;
      const isValid = await $vm.$refs.observerFormAdd.validate();
      if(isValid) {
        let dataLocalStorage = await getValueFromStorageByKey(LOCAL_STORAGE_KEY.LIST_TASKS) || []
        $vm.form.id = await dataLocalStorage.length + 1;
        this.$store.dispatch('tasks/addTasks', $vm.form);
        dataLocalStorage.push($vm.form)
        setValueToStorageByKey(LOCAL_STORAGE_KEY.LIST_TASKS, dataLocalStorage)
        this.$toasted.clear();
        this.$toasted.global.showSuccessMessage({
          message: 'Add task success'
        });
        this.clearForm();
      }
    },

    async handleUpdateTask() {
      const $vm = this;
      const isValid = await $vm.$refs.observerFormAdd.validate();
      if(isValid) {
        let dataLocalStorage = await getValueFromStorageByKey(LOCAL_STORAGE_KEY.LIST_TASKS) || []
        this.$store.dispatch('tasks/updateTask', $vm.form);
        dataLocalStorage = dataLocalStorage.map(item => {
          if(item.id === $vm.form.id) return $vm.form
          if(item.id !== $vm.form.id) return item
        })
        setValueToStorageByKey(LOCAL_STORAGE_KEY.LIST_TASKS, dataLocalStorage)
        this.$toasted.clear();
        this.$toasted.global.showSuccessMessage({
          message: 'Update task success'
        });
        this.$emit('updateSuccess')
      }
    },
    
    clearForm () {
      this.form = {
        id: 0,
        name: null,
        description: null,
        dueDate: moment().format("DD/MM/YYYY"),
        piority: 2
      }
    },

    notAfterDate(date) {
      let now = new Date();
      return date < new Date(now.getFullYear(), now.getMonth(), now.getDate());
    }
  }
}
</script>