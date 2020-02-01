import React from 'react';

export const initialState = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }
]

export const listToDo = (state, dispatch) =>{
    return state.map(res =>(
        <button onClick={() => toggleCompleted(state, res, dispatch)}>
            <ul>
                <li> Item: {res.item} </li>
                <li> Is Completed? : {`${res.completed}`} </li>
            </ul>
        </button>
    ));
}

const toggleCompleted = (state, res, dispatch) =>{
    state.forEach(obj =>{
        if(obj.id === res.id){
            obj.completed = !obj.completed
        }
    })
    dispatch((state, {type: 'TOGGLE'}))
}

function reducer(state, action) {
    switch(action.type){
        case 'NEW' :
            return [ ...state,{ 
                item: action.value,
                completed: false,
                id: new Date().getMilliseconds()
            }]
        case 'TOGGLE' : 
            return [...state]
        case 'CLEAR' : 
            return state.filter(res => res.completed !== true)
        default:
            return state;
    }
}

export default reducer