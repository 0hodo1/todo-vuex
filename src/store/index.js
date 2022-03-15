import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, todo: "Learn Vue", isCompleted: true },
      { id: 2, todo: "Learn Vuex", isCompleted: false },
      { id: 3, todo: "Learn Vue Router", isCompleted: true },
    ],
  },
  getters: {
    todosCount(state) {
      return state.todos.length;
    },

    completedTodosCount(state) {
      return state.todos.filter((todo) => todo.isCompleted).length;
    },

    notCompletedTodosCount(state) {
      return state.todos.filter((todo) => !todo.isCompleted).length;
    },
  },
  mutations: {
    add(state, { todoName, isCompleted }) {
      let todo = {
        id: Math.floor(Math.random() * 10000),
        todo: todoName,
        isCompleted: isCompleted,
      };
      state.todos.push(todo);
    },
    change(state, id) {
      let todo = state.todos.find((todo) => todo.id === id);
      todo.isCompleted = !todo.isCompleted;
    },
  },
  actions: {
    addAction(context, object) {
      context.commit("add", object);
      // setTimeout(() => {
      // }, 2000);
    },

    changeToggle(context, id) {
      context.commit("change", id);
    },
  },
  modules: {},
});
