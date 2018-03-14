const APIURL = '/api/todos';

export async function getTodos(){
    return await fetchErrorHandling(await fetch(APIURL));
}

export async function updateTodo(todo) {
    let fetchResponse = await fetch(`${APIURL}/${todo._id}`, {
        method: 'put',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({completed: !todo.completed})
    });
    return await fetchErrorHandling(fetchResponse);
}

export async function addTodo(name){
    let fetchResponse = await fetch(APIURL, {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({name: name})
    });
    return await fetchErrorHandling(fetchResponse);
}

export async function removeTodo(id){
    let fetchResponse = await fetch(`${APIURL}/${id}`, {method: 'delete'});
    await fetchErrorHandling(fetchResponse);
}

function fetchErrorHandling(resp){
    if(!resp.ok){
        if(resp.status >= 400 && resp.status < 500){
            return resp.json().then(data => {
                throw {errorMessage: data.message};
            });
        }else{
            throw {errorMessage: 'Please try again later, server is not respondind right now!'};
        }
    }
    return resp.json()
}