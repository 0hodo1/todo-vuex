<template>
  <form @submit.prevent="addTodo" class="addForm">
    <input
      type="text"
      v-model="todo"
      placeholder="Please enter a todo"
      class="addInput"
    />
    <button type="submit" class="addButton">Add Todo</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const todo = ref("");

    const addTodo = () => {
      console.log(todo.value);

      const object = {
        todoName: todo.value,
        isCompleted: false,
      };

      store.dispatch("addAction", object);
      todo.value = "";
    };
    return { todo, addTodo };
  },
};
</script>

<style scoped>
.addForm {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.addInput {
  border: none;
  border-radius: 15px;
  padding: 20px 10px;
  width: 50%;
  font-size: 1.5rem;
  font-family: "Fredoka", sans-serif;
  background-color: rgb(255, 255, 255, 0.1);
  color: rgb(156, 165, 250);
  text-align: center;
}
.addInput::placeholder {
  color: rgb(156, 165, 250, 0.5);
  text-align: center;
}
.addInput:focus-visible {
  outline: rgb(156, 165, 250, 0.1);
  border: 2px solid rgb(156, 165, 250, 0.5);
  color: rgb(156, 165, 250);
}
.addButton {
  border: none;
  border-radius: 15px;
  padding: 20px 10px;
  font-family: "Fredoka", sans-serif;
  font-size: 1.5rem;
  background-color: rgb(25, 73, 146, 0.2);
  color: rgb(156, 165, 250);
  margin: 20px 0;
  width: 50%;
  cursor: pointer;
}
</style>
