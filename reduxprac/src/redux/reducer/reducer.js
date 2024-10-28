let initialState = {
    count:0
}

function reducer(state=initialState, action){
    console.log(action)
    if (action.type === "INCREMENT"){
        //...state = let other states the same
        //must have return value
        return {...state, count: state.count + 1};
    }

    return {...state};
}

export default reducer;