<template>
    <div>        
        <div class="todo-item" v-for="(todo, index) in todos" :key="todo.id">
            <p :class="['todo-text', { completed: todo.completed }]" @click="toggleTodo(index)">{{ todo.title }}</p>
            <span class="todo-remove" @click="removeTodo(index)">&#x2716;</span>
        </div>        
    </div>
</template>
  
<script>
export default {
    name: 'TodosList',
    props: {
      todos: Array,
      removeTodo: {
        type: Function,
        required: true
      },
      toggleTodo: {
        type: Function,
        required: true
      },    
    }
  }
</script>
  
<style>

.todo-item {
    text-align: left;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
}

.todo-remove {
    cursor: pointer;
    margin-left: 7px;
}

.todo-remove:hover {
   color: red;
}

.todo-text {
    cursor: pointer;
}

.todo-text:hover {
  background-color: #f0f0f0;
}

.completed {
   text-decoration: line-through;
   color: gray;
}

</style>
  