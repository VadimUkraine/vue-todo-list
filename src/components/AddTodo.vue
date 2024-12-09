<template>
    <div :class="['input-wrapper', { 'input-wrapper_border-bottom': isShowBorderBottom }]">
        <input 
            class="input-todo"
            type="text" 
            :value="modelValue" 
            placeholder="Enter the text"
            @input="$emit('update:modelValue', $event.target.value)" 
        />
        <button class="add-todo-btn" @click="addTodo">Add todo</button>
    </div>
</template>
  
<script>
export default {
    name: 'AddTodo',
    props: {
      modelValue: String,
      addTodo: {
        type: Function,
        required: true
      },
      isShowBorderBottom: {
        type: Boolean,
        default: false 
      }
    },
}

</script>
  
<style scoped>

.input-wrapper {
    padding: 5px 5px 25px 5px;    
}

.input-wrapper_border-bottom {
    border-bottom: 1px solid grey;
}

.input-todo {
    margin-inline: 7px;
    border: none;
    border-bottom: 3px solid blue;
    outline: 0;
    height: 30px;
    min-width: 250px;
    padding: 5px;
}

.add-todo-btn {
    height: 30px;
    border-radius: 7px;
    cursor: pointer;
    padding-inline: 10px;
}

</style>
  