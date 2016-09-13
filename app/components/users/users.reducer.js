const usersState = [ // initial state that is passed to users reducer
    {
        id: 'jhhjj-9292-djdj',
        name: "Danny Pule",
        age: "32"
    },
    {
        id: 'jhhjj-9292-0809',
        name: "User Two",
        age: "32"
    }
];

const users = (state = usersState, action) => {
  return state;
};

export default users;