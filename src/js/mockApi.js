const ENDPOINT = "https://jsonplaceholder.typicode.com/users/";

export function getUsers() {
    return fetch(ENDPOINT)
        .then(res => {
            if(!res.ok) throw Error(res.statusText);
            return res.json()
        })
        .then(json => json)
}