<template>
    <TodosHeader/>
    <AddTodo 
      v-model="inputText"        
      :addTodo="addTodo"
      :isShowBorderBottom="!!todosStore.localTodos.length"
    />
    <TodosList 
      :todos="todosStore.localTodos"
      :removeTodo="removeTodo"
      :toggleTodo="toggleTodo"
    />
  </template>
  
  <script>
  import { ref } from 'vue';
  import TodosList from './TodosList.vue';
  import AddTodo from './AddTodo.vue';
  import TodosHeader from './TodosHeader.vue';
  import { useTodosStore } from '@/store'
  
  export default {
    name: 'TodosComponent',
    components: { TodosList, AddTodo, TodosHeader },
  
    setup() {
      const inputText = ref('');
      const todosStore = useTodosStore();
  
      const addTodo = () => {
        if (inputText.value.trim() !== '') {
            todosStore.addLocalTodo({
            id: Date.now().toString(),
            title: inputText.value,
            completed: false,
          });
          inputText.value = '';
        }
      };
  
      const removeTodo = (itemIndex) => {
        todosStore.removeLocalTodo(itemIndex);
      };
  
      const toggleTodo = (index) => {
        todosStore.toggleLocalTodo(index)
      };
  
      return {
        inputText,
        todosStore,
        addTodo,
        removeTodo,
        toggleTodo,
      };
    },
  };
  </script>
  
<style scoped>


</style>
  