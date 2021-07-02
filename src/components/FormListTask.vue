<template>
  <b-form>
    <div class="box">
      <div class="form-title">To Do List</div>
      <div class="row">
        <div class="col-md-12 col-xs-12">
          <b-form-group 
            class="required" 
            label="" 
            label-for="title"
          >
            <b-form-input
              id="title"
              type="text"
              required
              placeholder="Search..."
            />
          </b-form-group>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-xs-12">
          <div class="list">
            <div class="item">
              <div class="row d-flex">
                <div class="col-md-8 col-xs-8">
                  <div class="d-flex">
                    <input
                      type="checkbox"
                      class="mr-15"
                    />
                    <span>Do homework</span>
                  </div>
                </div>
                <div class="col-md-4 col-xs-4">
                  <button class="btn bg-info">Detail</button>
                  <button class="btn bg-danger ml-15">Remove</button>
                </div>
              </div>
            </div>
            <div class="detail">
              <div class="row">
                <div class="col-md-12 col-xs-12">
                    <b-form-group 
                      class="required" 
                      label=""
                      label-for="title"
                    >
                      <b-form-input
                        id="title"
                        type="text"
                        required
                        placeholder="Search..."
                      />
                    </b-form-group>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 col-xs-12">
                  <b-form-group 
                    class="required" 
                    label="Description" 
                    label-for="description"
                    label-align-sm="left"
                  >
                    <b-form-textarea
                      name="description"
                      rows="5"
                      max-rows="5"
                    />
                  </b-form-group>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 col-xs-6">
                  <b-form-group 
                    class="required" 
                    label="Due Date" 
                    label-for="description"
                    label-align-sm="left"
                  >
                    <date-picker
                      format="DD/MM/YYYY"
                      value-type="format"
                      class="custom-datepicker w-100"
                      required
                    />
                  </b-form-group>
                </div>
                <div class="col-md-6 col-xs-6">
                  <b-form-group
                    label="Piority"
                  >
                    <b-form-select
                      class="form-select"
                      name="origin"
                    />
                  </b-form-group>
                </div>
              </div>
              <div class="actions center mt-15">
                <button class="btn bg-success w-100">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-form>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { getValueFromStorageByKey, LOCAL_STORAGE_KEY } from "./../utils/localStorage";
export default {
  name: "FormListTask",
  components: {
    DatePicker
  },
  data() {
    return {
      
    };
  },
  created() {
    this.getListTask()
  },
  methods: {
    getListTask() {
      const dataLocalStorage = getValueFromStorageByKey(LOCAL_STORAGE_KEY.LIST_TASKS) || [];
      this.$store.dispatch('tasks/getListTasks', dataLocalStorage)
    }
  },
}
</script>

<style scoped>
@import "./../assets/css/component/list-task.scss";
</style>