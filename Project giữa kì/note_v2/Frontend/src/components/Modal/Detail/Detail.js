import React, { useState } from 'react';
import { format } from 'date-fns';
import Form from './Form/Form';
import axios from 'axios';


function Detail({ id, task, todoList, isSaved, HandleCancel, handleDetail, ShowDetail }) {
    // phần này đang sửa để kéo giá trị đã có từ db để người dùng sửa tiếp



    const onAddItem = async (id, newItem) => {
        axios.put(`http://localhost:3006/?id=${id}`, newItem)
                .then(response => {
                    isSaved();
                    handleDetail()
                })
        
    };


    const [newItem, setNewItem] = useState({
            created_at: new Date(task.created_at),
            due_date: new Date(task.due_date),
            title: task.title,
            content: task.content,
            status: task.status,
            rate_prosess: 0,
            actual_duration: 0,
    });
    const [errors, setErrors] = useState({});

// hàm dưới này dùng cách tạo hàm trống để bên form gọi và dùng chỉnh sửa tùy form và fetch api mai chỉnh lại cả đây và bên form
    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        if (isValid) {

            onAddItem(task.id, newItem);

            setNewItem({
                id: 0,
                due_date: newItem.due_date,
                created_at: newItem.created_at,
                title: newItem.title,
                content: newItem.content,
                status: newItem.status,
            });
        }
    };

    return (
        <>
            <Form newItem={newItem} todoList={todoList} handleSubmit={handleSubmit} id={id} task={task} setNewItem={setNewItem} HandleCancel={HandleCancel} isSaved={isSaved}/>
        </>
    );
}

export default Detail;


// ngày mai sửa nút comfirm và canccel