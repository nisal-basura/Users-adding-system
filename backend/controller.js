const users =[
    {
        id:1,
        name:'Nisal',
    },
    {
        id:2,
        name:'Basura',
    }
];

const getUsers = (cb) => {
    cb(users);
};


const getUsersById =(id, cb)=> {
    const user = users.find(user => user.id == id)
    cb(user);
}

exports.getUsers = getUsers;
exports.getUsersById = getUsersById;