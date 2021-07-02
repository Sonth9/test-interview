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
              v-model="keyword"
              @keyup="handleSearchForm($event.target.value)"
            />
          </b-form-group>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-xs-12">
          <div class="list mb-15" v-for="(item, index) in listTasksSortToDueDate" :key="index">
            <div class="item">
              <div class="row d-flex">
                <div class="col-md-8 col-xs-8">
                  <div class="d-flex">
                    <input
                      type="checkbox"
                      class="mr-15"
                      v-model="isChecked"
                    />
                    <span>{{ item.name }} {{ item.dueDate }}</span>
                  </div>
                </div>
                <div class="col-md-4 col-xs-4">
                  <button class="btn bg-info" @click.prevent="handleDetail(item)">Detail</button>
                  <button class="btn bg-danger ml-15" @click.prevent="handleDelete(item.id)">Remove</button>
                </div>
              </div>
            </div>
            <div 
              class="detail" 
              :key="keyDetail + item.id"
              v-if="(expanded.id == keyDetail + item.id) && (expanded.open == true)"
            >
              <FormAddTask 
                :data-detail="expanded.content" 
                @updateSuccess="updateSuccess"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-50" v-if="showBulkAction">
        <div class="col-md-12 col-xs-12">
          <div class="item">
            <div class="row d-flex">
              <div class="col-md-8 col-xs-8">
                <div class="d-flex">
                  <span>Bulk Action:</span>
                </div>
              </div>
              <div class="col-md-4 col-xs-4">
                <button class="btn bg-info" @click.prevent="handleNotWork">Done</button>
                <button class="btn bg-danger ml-15" @click.prevent="handleNotWork">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalConfirmDelete title="task" @confirmed="confirmDelete" />
  </b-form>
</template>

<script>
import { PIORITY_OPTS } from "./../constants/otpsCommon";
import FormAddTask from "./FormAddTask.vue";
import ModalConfirmDelete from './common/modal/ModalConfirmDelete';
import { getValueFromStorageByKey, LOCAL_STORAGE_KEY, setValueToStorageByKey } from "./../utils/localStorage";
import { mapGetters } from "vuex";
export default {
  name: "FormListTask",
  components: {
    ModalConfirmDelete,
    FormAddTask
  },
  data() {
    return {
      keyword: null,
      isChecked: false,
      showBulkAction: false,
      piorityOpts: PIORITY_OPTS,
      keyDetail: "detail_",
      expanded: {
        id: null,
        open: false,
        content: []
      },
      dataLocalStorage: [],
      form: {
        id: 0,
        name: "",
        description: null,
        dueDate: null,
        piority: 2
      }
    };
  },
  computed: {
    ...mapGetters({
      listTasks: 'tasks/listTasks'
    }),
    listTasksSortToDueDate() {
      const data = this.listTasks && this.listTasks.map(item => {
        return item
      }).sort((a, b) => {
        let myDateA = a.dueDate.split("/");
        let myDateB = b.dueDate.split("/");
        let newDateA = new Date( myDateA[2], myDateA[1] - 1, myDateA[0]);
        let newDateB = new Date( myDateB[2], myDateB[1] - 1, myDateB[0]);
        return newDateB.getTime() - newDateA.getTime()
      }) || []
      return data
    }
  },
  watch: {
    isChecked(val) {
      this.showBulkAction = val ? true : false
    }
  },
  created() {
    this.dataLocalStorage = getValueFromStorageByKey(LOCAL_STORAGE_KEY.LIST_TASKS) || [];
    this.getListTask()
  },
  methods: {
    getListTask() {
      this.$store.dispatch('tasks/getListTasks', this.dataLocalStorage)
    },
    handleSearchForm (keyword) {
      let dataSearch = this.dataLocalStorage.filter(item => item.name.toUpperCase().indexOf(keyword.toUpperCase()) !== -1)
      this.$store.dispatch('tasks/getListTasks', dataSearch)
    },
    handleDetail(item) {
      this.expanded = {
        id: `${this.keyDetail}${item.id}`,
        open: true,
        content: item
      }
    },
    updateSuccess() {
      this.getListTask();
      this.expanded.open = false;
    },
    handleDelete (id) {
      this.idDelete = id;
      this.$bvModal.show('modal-confirm-delete');
    },
    confirmDelete () {
      let dataLocalStorage = getValueFromStorageByKey(LOCAL_STORAGE_KEY.LIST_TASKS) || [];
      dataLocalStorage = dataLocalStorage.filter(item => item.id !== this.idDelete);
      this.$store.dispatch('tasks/deleteTask', this.idDelete)
      setValueToStorageByKey(LOCAL_STORAGE_KEY.LIST_TASKS, dataLocalStorage);
      this.$toasted.global.showSuccessMessage({
        message: 'Detele task success'
      });
      this.$bvModal.hide('modal-confirm-delete');
    },
    handleNotWork () {

    }
  }
}
</script>

<style scoped>
@import "./../assets/css/component/list-task.scss";
</style>