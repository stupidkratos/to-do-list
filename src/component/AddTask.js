import React from 'react'

function AddTask({handleSubmit, handleInputChange, newTask}) {
    return (
        <form onSubmit={handleSubmit} className="form">
        <label htmlFor="newitem">Add to the todo list</label>
        <input type="text" id="newitem" value={newTask} onChange={handleInputChange}/>
        <button type="submit">ADD ITEM</button>
        </form>
    );
}

export default AddTask;