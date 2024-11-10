import { format } from 'date-fns';
import './Form.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Form ({ task, newItem, setNewItem, HandleCancel, handleSubmit, isSaved }) {
    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setNewItem((prevItem) => ({
            ...prevItem,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };
    
    const handleDelete = (e) => {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này không?");
        if (confirmDelete) {
            axios.delete(`http://localhost:3006/?id=${task.id}`)
            .then((response) => {
                console.log("Xóa thành công:", response)
                HandleCancel()
                isSaved()
            })
            .catch(error => console.error('Lỗi khi xóa:', error));
        };
    };
    

    const [showAdvanced, setShowAdvanced] = useState(false)
    const showAvaned = () => setShowAdvanced(!showAdvanced)



    return (
        <>


<form onSubmit={handleSubmit} className="add-todo-form">
                <div className="form-group">
                    <label htmlFor="id">ID: {task.id}</label>
                </div>
                <div className="form-group">
                    <label htmlFor="datetime">Date and Time:</label>
                    <input type="datetime-local" name="due_date" value={newItem.due_date} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" value={newItem.title} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content:</label>
                    <textarea name="content" value={newItem.content} onChange={handleChange} />
                </div>
                <div className='advance-btn'>
                <button type='button' onClick={handleDelete}  className='advance-button delete'>Xóa nhiệm vụ</button>

                <button type="button" className="advance-button" onClick={showAvaned}>{showAdvanced ? "▲" : "Advance"}</button>
                </div>

            {showAdvanced && (
                <div className='form-advance'>
                    <div className="form-group">
                        <label htmlFor="priority_level">Priority Level:</label>
                        <input type="number" name="priority_level" value={newItem.priority_level} onChange={handleChange} min='1' max='3' />
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
                        <input type="number" name="rate_prosess" value={newItem.rate_prosess} onChange={handleChange} step="0.1" min='0' max='1' />
                    </div>
                    <div>

                    </div>
                </div>
            )}

                <div className="from-controler">
                    <button type="button" onClick={HandleCancel} className="cancel-button">Cancel</button>
                    <button type="submit" className='submit-cancel-button'>Save</button>
                </div>
                
                

                
            </form>


        
        </>
    )
}

export default Form;
