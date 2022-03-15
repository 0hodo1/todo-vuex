<template>
  <div class="container">
    <List />
    <AddTodo />
    <Completed />
  </div>
</template>

<script>
// @ is an alias to /src
import List from "@/components/List";
import AddTodo from "@/components/AddTodo";
import Completed from "@/components/Completed";

export default {
  name: "HomeView",
  components: {
    List,
    AddTodo,
    Completed,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
