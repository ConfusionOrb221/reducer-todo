import React, {useReducer, useState} from 'react';
import reducer, {initialState, listToDo, clearCompleted} from '../reducers/Todo';

const List = () => {
    const [todo, dispatch] = useReducer(reducer, initialState);
    const [value, setValue] = useState();

    const handleChange = (event) =>{
        return event.target.value;
    }

    const handleSubmit = (event, value, todo) =>{
        event.preventDefault();
        return (todo, {type: 'NEW', value: value})
    }

    return (
        <> 
        <div className="list-container">
            <h1>Tasks</h1>
            {listToDo(todo, dispatch)}
        </div>
        <div>
            <form onSubmit={(event) => dispatch(handleSubmit(event, value, todo))}>
                Create a new Todo <br />
                Name: <input
                    type="text"
                    value={value}
                    onChange={event => setValue(handleChange(event))}
                />
                <input type="submit" value="Submit"/>
            </form>
            <button onClick={(event) => dispatch((todo, {type: 'CLEAR'}))}> Clear Completed </button>
        </div>
        </>
    );
};

export default List;