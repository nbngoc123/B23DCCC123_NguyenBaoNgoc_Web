import React, { useState } from 'react';
import "./AddTodoItem.css"
import { format } from 'date-fns';


const AddTodoItem = ({ onAddItem, setcancelForm, setAddTask }) => {
    const [newItem, setNewItem] = useState({
        id: 0,
        due_date: new Date(),
        created_at: new Date(),
        title: '',
        content: '',
        status: false,
        rate_prosess: 0,
        actual_duration: 0,
    });
    const [errors, setErrors] = useState({
            title: '',
        due_date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem((prevItem) => ({
            ...prevItem,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        const newErrors = {};
        if (!newItem.title.trim()) {
            newErrors.title = 'Add Title*';
            isValid = false;
        }
        if (!newItem.due_date) {
            newErrors.due_date = 'Add Date and Time*';
            isValid = false;
        }
        setErrors(newErrors);
        if (isValid) {
            onAddItem(newItem);
            // setTodoList([...todoList, newItem]);
            setNewItem({
                id: 0,
                due_date: newItem.due_date,
                created_at: newItem.created_at,
                title: '',
                content: '',
                status: false,
                rate_prosess: 0,
            });
        }
    };

    const HandleCancelForm = () => {
        setAddTask(true)
        setcancelForm()
};
    const [showAdvanced, setShowAdvanced] = useState(false)
    const showAvaned = () => setShowAdvanced(!showAdvanced)

    return (
        <form onSubmit={handleSubmit} className="add-todo-form">
            <h2>Add Todo Item</h2>
            {/* Display createdAt */}
            <div className="form-group">
                <label htmlFor="created_at">Time Current:</label>
                <span className='time-value'>{format(new Date(newItem.created_at), 'dd MMMM yyyy HH:mm')}</span>
            </div>
            {/* Rest of your form fields */}
            <div className="form-group">
                <label htmlFor="datetime">Date and Time:</label>
                <input type="datetime-local" name="due_date" value={newItem.due_date} onChange={handleChange} />
                {errors.due_date && <span className="error" style={{ color: 'red', fontSize: '0.8rem', fontWeight: 'bold' } }>{errors.due_date}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" value={newItem.title} onChange={handleChange} />
                {errors.title && <span className="error"><p style={{ color: 'red', fontSize: '0.8rem', fontWeight: 'bold' }} >{errors.title}</p></span>}
            </div>
            <div className="form-group">
                <label htmlFor="content">Content:</label>
                <textarea name="content" value={newItem.content} onChange={handleChange} />
            </div>

            <button type="button" className="advance-button" onClick={showAvaned}>{showAdvanced ? "▲" : "Advance"}</button>

            {showAdvanced && (
                <div className='form-advance'>
                    <div className="form-group">
                        <label htmlFor="priority_level">Priority Level:</label>
                        <input type="number" name="priority_level" value={newItem.priority_level} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status:</label>
                        <input type="checkbox" name="status" checked={newItem.status} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="actual_duration">Actual Duration:</label>
                        <input type="number" name="actual_duration" value={newItem.actual_duration} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rate_prosess">Rate Process:</label>
                        <input type="number" name="rate_prosess" value={newItem.rate_prosess} onChange={handleChange} step="0.1" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="effort_score">Effort Score:</label>
                        <input type="text" name="effort_score" value={newItem.effort_score} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="likelihood_to_complete">Likelihood to Complete:</label>
                        <input type="number" name="likelihood_to_complete" value={newItem.likelihood_to_complete} onChange={handleChange} step="0.1" />
                    </div>
                </div>
            )}

            <div className="from-controler">
                <button type="button" onClick={HandleCancelForm} className="cancel-button">Cancel</button>
                <button type="submit" className='submit-cancel-button'>Add Item</button>
            </div>

        </form>
    );
};

export default AddTodoItem;



// {
//     id: 0,
//     due_date: new Date(newItem.datetime).toISOString(),
//     created_at: newItem.datetime,
//     title: '',
//     content: '',
//     priority_level: 1,
//     status: false,
//     actual_duration: 0,
//     rate_prosess: 0,
//     effort_score: '',
//     likelihood_to_complete: 0,
// }