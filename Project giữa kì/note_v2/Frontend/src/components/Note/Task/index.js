// import { data } from "../Data/TodoListData"
import "./Task.css";
import AddTask from '../../Control/AddTask';
import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {calculateElapsedTime, calculateRateProcess} from '../../Control/Function/ComputeTime';
import Detail from '../../Modal/Detail/Detail';
import Update from '../../Control/Update/Update';

function Task() {
    const [todoList, setTodoList] = useState([]);
    const length = todoList.length
    // console.log(length)
    const [saved, setSaved] = useState(false);
    useEffect(() => {
    // Gọi API lấy danh sách to-do
    axios.get('http://localhost:3006')
        .then(response => {
            setTodoList(response.data);
            console.log(response.data)

            setTodoList(response.data.map(todoList => ({
                    ...todoList,
                    actual_duration: calculateElapsedTime(todoList),
                    rate_prosess: calculateRateProcess(todoList),
            })));
        })
        .catch(error => console.error("Lỗi khi tải dữ liệu:", error));
    }, [saved]);

    const isSaved = () => setSaved(!saved)


    const handleAddItem = async (newItem) => {

        axios.post('http://localhost:3006', newItem)
            .then(response => {

// Dòng này sử dụng giá trị hiện tại của todoList (trước khi cập nhật) để thêm newItem vào cuối danh sách.
// Tuy nhiên, vì setState trong React là bất đồng bộ, nên khi gọi setTodoList, giá trị todoList có thể chưa được cập nhật ngay lập tức, dẫn đến việc sử dụng todoList cũ nếu có thay đổi trong trạng thái trước đó.
// setTodoList(prevTodoList => [...prevTodoList, {...newItem, actual_duration: calculateElapsedTime(newItem)}]);:

// Dòng này sử dụng hàm callback để lấy giá trị cập nhật mới nhất của todoList (thông qua prevTodoList).
// Việc này đảm bảo bạn luôn làm việc với giá trị todoList mới nhất, tránh trường hợp xảy ra lỗi do cập nhật bất đồng bộ.
                setTodoList(prevTodoList => [...prevTodoList, {...newItem, actual_duration: calculateElapsedTime(newItem)}]);
            })
        
    };
    const [showDetail, setShowDetail] = useState(null);
    const handleDetail = (taskId) => {
        setShowDetail(prevId => (prevId === taskId ? null : taskId));
    };
    return (
        <div className="note">
            <div className="note-container">
                {/* <AddTodoItem onAddItem={handleAddItem} />  */}
                <AddTask handleItem={handleAddItem} todoList={todoList} setTodoList={setTodoList}/>
                <Update isSaved={isSaved} />
            </div>
            {todoList.map(task => (
                <div key={task.id} className="task-item">
                    <div style={{ width: '100%', height: '100%' }} className="task-content">
                        <h2 className="task-title"> Title: {task.title}</h2>
                        <div className="task-process">
                            <span>
                                <p className={`task-status ${task.status ? "completed" : "in-progress"}`}>{task.status ? "Completed" : "In Progress"}</p>
                            </span>
                        </div>
                    </div>
                    <div className="task-content">
                        <div style={{ width: '100%' }}>
                            <p className="task-description">Description: {task.content}</p>
                        </div>
                    </div>


                    <div className="task-time">
                        <div className="task-due">Due:
                            <p className="task-due-date" style={{ fontSize: '1rem', fontWeight: '500' }}>{format(new Date(task.due_date), 'dd MMMM yyyy HH:mm')}</p>
                        </div>
                        <p className="task-duration">Thời gian đã thực hiện: {task.actual_duration}h </p>

                        <button onClick={() => handleDetail(task.id)} className="task-detail">Detail</button>
                        {showDetail === task.id && <Detail task={task} handleDetail={() => handleDetail(task.id)} HandleCancel={() => setShowDetail(null)} isSaved={isSaved} />}
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Task;