export const request = (query) => {
    return fetch('http://localhost:3000', {
        method: 'POST',
        body: JSON.stringify({ query }),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
}
