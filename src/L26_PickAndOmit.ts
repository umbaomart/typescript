export function L26_PickAndOmit() {
    type Todo = {
        id: string
        name: string
        status: string
        completed: boolean
    }

    // type NewTodo = Pick<Todo, "name" | "status"> // Pick only name and status
    type NewTodo = Omit<Todo, "id">

    function saveTodo(todo: Todo): Todo {
        // todo.id = crypto.randomUUID()
        // return todo // or
        return { ...todo, id: crypto.randomUUID() }
    }

    function renderTodo(todo: Todo) {
        const div = document.createElement("div");
        div.id = todo.id
        // DO the rest

    }
}