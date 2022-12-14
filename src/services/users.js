export const getAll = `
query getAllUsers {
    allUsers{
      id
      name
      age
      address
      phone
    }
  }
`;

export const getOne = (id) => `
query getOneUser {
    User(id: ${id} ){
      id
      name
      age
      address
      phone
  }
}`;

export const update = (data, id) => `
mutation userMutation {
  updateUser(id:${id}, name: "${data.name}", age: "${data.age}", phone: "${data.phone}", address: "${data.address}") {
    id
    name
    age
    address
    phone
  }
}
`;

export const create = (data) => `
mutation userMutation {
  createUser( name: "${data.name}", age: "${data.age}", phone: "${data.phone}", address: "${data.address}") {
    id
    name
    age
    address
    phone
  }
}
`;

export const deleteUser = (id) => `
mutation delte {
  removeUser(id: ${id}) {
    id
  }
}
`

