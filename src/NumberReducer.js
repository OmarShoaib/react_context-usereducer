// UseReducer 
// This is a Pure function
// It does not change or update (or depend on) external api, external state, external variable.
// Every time you run the reducer it creates and returns a new object and
// it does not update the existing one.

const NumberReducer = (state, action) => {
    // type is a custom property, we can name it in any
    switch(action.type){
        case 'INCREMENT':
            return state + action.val;
        case 'DECREMENT':
            return state - action.val;
        default:
            return state;
    }
}

export default NumberReducer;

