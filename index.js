const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

//state

const initialCounerState = {
  count: 0,
};

const initialUserState = {
  user: [{ name: "leon pharma" }],
};

//action Object type and payload
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const addUser = () => {
  return {
    type: ADD_USER,
    payload: { name: "leon" },
  };
};

const counterReducer = (state, action) => {
    switch (action.type) {
        case INCREMENT: 
        return {
            ...state,
            count: count+1
        }
        case DECREMENT: 
        return {
            ...state,
            count: count - 1
        }

        default: state;
    }
};

//state
//dispath action
//reducer
