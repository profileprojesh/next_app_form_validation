export async function createUser(data){
    console.log('Inside create user',data)
    const response = await fetch('/api/user', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}


export async function getallUser(){
    const response = await fetch('/api/user');
    // console.log(response)
    return await response.json()
}