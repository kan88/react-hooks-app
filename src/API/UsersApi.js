class UsersAPI {
    fetchById(id) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => data)
    };
    fetchAll() {
        fetch(`https://jsonplaceholder.typicode.com/users/`)
            .then(response => response.json())
            .then(data => data)
    }
}

export const UsersApi = new UsersAPI()