const initialState = [
  { id: 1, desc: "todo 1", completed: false },
  { id: 2, desc: "todo 2", completed: false },
  { id: 3, desc: "todo 3", completed: false },
  { id: 4, desc: "todo 4", completed: false }
];

const COMPLETE = "COMPLETE";
const SUBMIT = "SUBMIT";

export const complete = id => ({
  type: COMPLETE,
  payload: {
    id
  }
});

export const submit = text => ({
  type: SUBMIT,
  payload: {
    id: Math.random().toString(36),
    desc: text,
    completed: false
  }
});

export default (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE:
      return state.map(x =>
        x.id === action.payload.id ? { ...x, completed: !x.completed } : x
      );
    case SUBMIT:
      return [action.payload].concat(state);
    default:
      return state;
  }
};
