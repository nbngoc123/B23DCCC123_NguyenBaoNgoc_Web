import React, { useState } from 'react';
import "./AddTodoItem.css"

const AddTodoItem = ({ onAddItem }) => {
    const [newItem, setNewItem] = useState({
        date: { type: 1, datetime: '' },
        description: { id: 0, title: '', content: '', priority_level: 1 },
        process: { status: false, actual_duration: 0, rate_prosess: 0 },
        analysis: { predicted_delay: 0, predicted_completion: 0, effort_score: '', likelihood_to_complete: 0, classifier: 0 },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const [field, subfield] = name.split('.');
        setNewItem((prevItem) => ({
            ...prevItem,
            [field]: { ...prevItem[field], [subfield]: value },
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddItem(newItem);
        setNewItem({
            date: { type: 1, datetime: '' },
            description: { id: 0, title: '', content: '', priority_level: 1 },
            process: { status: false, actual_duration: 0, rate_prosess: 0 },
            analysis: { predicted_delay: 0, predicted_completion: 0, effort_score: '', likelihood_to_complete: 0, classifier: 0 },
        });
    };

    return (
        <form onSubmit={handleSubmit} className="add-todo-form">
            <h2>Add Todo Item</h2>
            <div className="form-group">
            <label htmlFor="date.datetime">Date and Time:</label>
                <input type="datetime-local" name="date.datetime" value={newItem.date.datetime} onChange={handleChange} />
            </div>
            <div className="form-group">
            <label htmlFor="description.title">Title:</label>
                <input type="text" name="description.title" value={newItem.description.title} onChange={handleChange} />
            </div>
            <div className="form-group">
            <label htmlFor="description.content">Content:</label>
                <textarea name="description.content" value={newItem.description.content} onChange={handleChange} />
            </div>
            <div className="form-group">
            <label htmlFor="description.priority_level">Priority Level:</label>
                <input type="number" name="description.priority_level" value={newItem.description.priority_level} onChange={handleChange} />
            </div>
            <div className="form-group">
            <label htmlFor="process.status">Status:</label>
                <input type="checkbox" name="process.status" checked={newItem.process.status} onChange={handleChange} />
            </div>
            <div className="form-group">
            <label htmlFor="process.actual_duration">Actual Duration:</label>
                <input type="number" name="process.actual_duration" value={newItem.process.actual_duration} onChange={handleChange} />
            </div>
            <div className="form-group">
            <label htmlFor="process.rate_prosess">Rate Process:</label>
                <input type="number" name="process.rate_prosess" value={newItem.process.rate_prosess} onChange={handleChange} step="0.1" />
            </div>
            <div className="form-group">
            <label htmlFor="analysis.predicted_delay">Predicted Delay:</label>
                <input type="number" name="analysis.predicted_delay" value={newItem.analysis.predicted_delay} onChange={handleChange} />
            </div>
            <div className="form-group">
            <label htmlFor="analysis.predicted_completion">Predicted Completion:</label>
                <input type="number" name="analysis.predicted_completion" value={newItem.analysis.predicted_completion} onChange={handleChange} />
            </div>
            <div className="form-group">
            <label htmlFor="analysis.effort_score">Effort Score:</label>
                <input type="text" name="analysis.effort_score" value={newItem.analysis.effort_score} onChange={handleChange} />
            </div>
            <div className="form-group">
            <label htmlFor="analysis.likelihood_to_complete">Likelihood to Complete:</label>
                <input type="number" name="analysis.likelihood_to_complete" value={newItem.analysis.likelihood_to_complete} onChange={handleChange} step="0.1" />
            </div>
            <div className="form-group">
            <label htmlFor="analysis.classifier">Classifier:</label>
                <input type="number" name="analysis.classifier" value={newItem.analysis.classifier} onChange={handleChange} />
            </div>
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddTodoItem;
