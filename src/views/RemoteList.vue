<template>

    <div>        
        <div class="todo-item" v-for="todo in todosStore.remoteTodos" :key="todo.id">
            <p :class="['todo-text', { completed: todo.completed }]">{{ todo.title }}</p>
        </div>        
    </div>
    
  </template>
  
  <script>
  import {onMounted} from "vue";
  import { useTodosStore } from '@/store'

  
  export default {
    name: 'RemoteList',
    components: {

    },

    setup() {
      const todosStore = useTodosStore();

      onMounted(()=>{
        if (!todosStore.remoteTodos.length) fetchTodos()
      })

      const fetchTodos = () => {
        todosStore.fetchRemoteTodoList()
      }

      return {
        todosStore
      }
    }    
  }
  </script>
  
  <style scoped>

  </style>
  