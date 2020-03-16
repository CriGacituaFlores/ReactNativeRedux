const initialState = [
  { id: 1, desc: "todo 1", completed: false },
  { id: 2, desc: "todo 2", completed: false },
  { id: 3, desc: "todo 3", completed: false },
  { id: 4, desc: "todo 4", completed: false }
];

export default (state = initialState, action) => {
  console.log(state);
  return state;
};
