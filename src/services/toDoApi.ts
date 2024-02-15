/* eslint-disable @typescript-eslint/no-explicit-any */
const URL = 'https://todolist-4usd.onrender.com';

export type Todo = {
    id: number,
    value: string,
    checked: boolean
};

export async function todosApi(): Promise<Todo[]> {
    try {
        const response = await fetch(`${URL}/todos`);
        return response.json() as Promise<Todo[]>;
    } catch (e: any) {
        console.log(e.message);
        alert('Serviço indisponível');
        return [];
    }
}

export async function addTodo(todo: string) {
    const response = await fetch(`${URL}/todos`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            value: todo,
            checked: false,
        }),
    });
    return response.json();
}

export async function updateTodo(todo: Todo) {
    const response = await fetch(`${URL}/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    return response.json();
}

export async function deleteTodo(id: number) {
    try {
        const response = await fetch(`${URL}/todos/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Erro ao excluir tarefa');
        }
    } catch (e: any) {
        console.log(e.message);
        alert('Serviço indisponível');
    }
}
