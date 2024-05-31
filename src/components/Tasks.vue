<template>
  <div v-for="task in tasks" :key="task.id">
    <TaskComp @delete-task="$emit('delete-task', task.id)" :task="task" />
  </div>
</template>

<script>
import TaskComp from "./Task";
export default {
  name: "TasksComp",
  props: {
    tasks: Array,
  },
  components: {
    TaskComp,
  },
  emits: ["delete-task"],
};
</script>
