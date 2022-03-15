<template>
  <div class="is-completed">
    <div class="completed-todo">
      <span class="material-icons"> check_circle_outline </span>
      <br /><span>{{ comletedCount }}</span>
    </div>
    <div class="not-completed-todo">
      <span class="material-icons"> highlight_off </span>
      <br /><span>{{ notCompletedTodosCount }}</span>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();

    const comletedCount = computed(() => {
      return store.getters.completedTodosCount;
    });
    const notCompletedTodosCount = computed(() => {
      return store.getters.notCompletedTodosCount;
    });

    return { comletedCount, notCompletedTodosCount };
  },
};
</script>

<style scoped>
.is-completed {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
}
.completed-todo,
.not-completed-todo {
  padding: 75px 90px;
  border-radius: 250px;
  text-align: center;
  color: rgb(156, 165, 250);
  font-size: 25px;
  cursor: pointer;
}
.completed-todo {
  border: 2px solid rgb(156, 165, 250, 0.1);
  background-color: rgb(156, 165, 250, 0.2);
}
.not-completed-todo {
  border: 2px solid rgb(156, 165, 250, 0.1);
  background-color: rgb(25, 73, 146, 0.1);
}
.material-icons {
  font-size: 48px;
}
</style>
