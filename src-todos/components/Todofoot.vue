<template>
  <div class="todo-footer">
    <label @click="select">
      <input type="checkbox" v-model="isCheck"/>
    </label>
    <span>
          <span>已完成{{completeItems}}</span> / 全部{{todoList.length}}
        </span>
    <button class="btn btn-danger" @click="deleteAll">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  props: {
    todoList: Array,
    deleteCompleteItem: Function,
    selectAll: Function
  },
  methods: {
    deleteAll () {
      this.deleteCompleteItem()
    },
    select () {
      this.selectAll()
    }
  },
  computed: {
    completeItems: function () {
      return this.todoList.reduce((total, todoList) => total + (todoList.complete ? 1 : 0), 0)
    },
    isCheck: {
      get () {
        // eslint-disable-next-line eqeqeq
        return this.completeItems == this.todoList.length
      },
      set (val) {
        this.selectAll(val)
      }
    }
  }
}
</script>
<style scoped>
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 10px;
  }

</style>
