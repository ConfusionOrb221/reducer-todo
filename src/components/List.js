import React, {useReducer, useState} from 'react';
import reducer, {initialState, listToDo, clearCompleted} from '../reducers/Todo';

const List = () => {
    const [todo, dispatch] = useReducer(reducer, initialState);
    const [value, setValue] = useState();

    const handleChange = (event, setValue) =>{
        setValue(event.target.value);
    }

    const handleSubmit = (event, value, todo, dispatch) =>{
        event.preventDefault();
        dispatch((todo, {type: 'NEW', value: value}))
    }

    return (
        <> 
        <div>
            {listToDo(todo, dispatch)}
        </div>
        <div>
            <form onSubmit={(event) => handleSubmit(event, value, todo, dispatch)}>
                Create a new Todo <br />
                Name: <input
                    type="text"
                    value={value}
                    onChange={event => handleChange(event, setValue)}
                />
                <input type="submit" value="Submit"/>
            </form>
            <button onClick={(event) => dispatch((todo, {type: 'CLEAR'}))}> Clear Completed </button>
        </div>
        </>
    );
};

export default List;