<template>
  <ul class="todo-main">
    <Item v-for="(todo, index) in todoList " :key="index" :todo="todo" :index="index" :del="del"></Item>
  </ul>
</template>
<script>
import Item from './TodoItem'
export default {
  props: {
    todoList: Array,
    del: Function
  },
  components: {
    Item
  }
}
</script>
<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
  ul{
    margin-top: 15px;
  }
</style>
