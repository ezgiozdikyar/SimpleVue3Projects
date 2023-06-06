<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>

    <div class="new-task-form">
      <TaskForm></TaskForm>
    </div>

    <nav class="filter">
      <button @click="filter = 'all'"> All Tasks</button>
      <button @click="filter = 'favs'"> Favorite Tasks</button>
    </nav>

    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ taskStore.getTotalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task"></TaskDetails>
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ taskStore.getFavCount }} favs left to do</p>
      <div v-for="task in taskStore.getFavs">
        <TaskDetails :task="task"></TaskDetails>
      </div>
    </div>
  </main>
</template>

<script>
  import { ref } from 'vue';
  import { useTasksStore } from "./stores/TaskStore"
  import TaskDetails from "./components/TaskDetails.vue"
  import TaskForm from "./components/TaskForm.vue"

  export default {
    components: { TaskDetails, TaskForm },
    setup() {
      const taskStore = useTasksStore();
      const filter = ref('all')

      return { taskStore, filter }
    }
  }
</script>

<style></style>