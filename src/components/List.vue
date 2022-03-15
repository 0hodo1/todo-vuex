<template>
  <div class="page-title">Todos</div>
  <ul class="list">
    <div v-for="todo in todos" :key="todo.id">
      <a @click="handleToggle(todo)">
        <li v-if="todo.isCompleted" class="completed-list-title">
          {{ todo.todo }}
        </li>
        <li v-else class="not-completed-list-title">
          {{ todo.todo }}
        </li>
      </a>
    </div>
  </ul>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: {},
  setup() {
    const store = useStore();

    const todos = computed(() => {
      return store.state.todos;
    });

    const handleToggle = (todo) => {
      todo.isCompleted = !todo.isCompleted;
    };

    return {
      todos,
      handleToggle,
    };
  },
};
</script>

<style scoped>
.page-title {
  font-size: 70px;
  margin-top: 30px;
  text-align: center;
  color: rgb(156, 165, 250, 0.8);
}

.list {
  text-align: center;
  padding-right: 50px;
}

.completed-list-title,
.not-completed-list-title {
  font-size: 1.5rem;
  font-family: "Fredoka", sans-serif;
  font-weight: 300;
  margin: 20px auto;
  padding: 15px 0;
  border: 2px solid rgb(62, 86, 219, 0.1);
  border-radius: 15px;
  background-color: rgb(156, 165, 250, 0.2);
  list-style-type: none;
  color: rgb(0, 48, 121);
  cursor: pointer;
}
.completed-list-title {
  text-decoration: line-through;
}
</style>
