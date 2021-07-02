<template>
  <div id="main-wrapper">
    <div class="row">
      <div class="col-md-5">
        <FormAddTask />
      </div>
      <div class="col-md-7">
        <FormListTask />
      </div>
    </div>
  </div>
</template>

<script>
import FormAddTask from "../components/FormAddTask";
import FormListTask from "../components/FormListTask";
export default {
  name: "TrangChu",
  components: {
    FormAddTask,
    FormListTask
  }
};
</script>
