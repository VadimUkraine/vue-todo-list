import {defineStore} from "pinia";
import { getRemoteTodos } from "@/api";


export const useTodosStore = defineStore('todo', {
    state: () => ({ localTodos: [], remoteTodos: [] }),
    actions: {
        async fetchRemoteTodoList() {
            const response = await getRemoteTodos()
            this.remoteTodos = response.data;
        },
        addLocalTodo(todo) {
            this.localTodos.push(todo);
        },
        removeLocalTodo(itemIndex) {
            this.localTodos = this.localTodos.filter((_, index) => index !== itemIndex);
        },
        toggleLocalTodo(index) {
            this.localTodos[index].completed = !this.localTodos[index].completed;
        },
    }
})
