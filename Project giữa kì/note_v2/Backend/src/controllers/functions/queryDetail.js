const connection = require('../../config/database');

exports.getInfo = async (id) => {
    try {
        const [results] = await connection.promise().query('SELECT * FROM notes WHERE id = ?', [id]);
        return results.length > 0 ? results[0] : null;
    } catch (error) {
        console.error('Error fetching note:', error); // Added error logging
        throw error; // Re-throw the error to be handled by the calling function
    }
};

exports.getInfoStatus = async (type, status) => {
    try {
        const [results] = await connection.promise().query('SELECT id, title, content FROM notes WHERE status = ?', [status]);
        const count = results.length;
        if (type === 'count') {
            return `Có ${count} task.`;
        } else if (type === 'detail') {
            return results.length > 0 ? 


            results.map((note, index) => 
                `Task ${index + 1}:\n` +
                `ID: ${note.id}\n` +
                `Title: ${note.title}\n` +
                `Content: ${note.content}\n` +
                '\n'
            ).join('') : 
            'Không có task nào.';
            
            
            
        }
    } catch (error) {
        console.error('Error fetching notes by status:', error);
        throw error;
    }
};

const computeTime = require('./computeTime');
const calculateElapsedTime = computeTime.calculateElapsedTime
const calculateRateProcess = computeTime.calculateRateProcess
// type = process -> rate process, type != process -> elapsed time
exports.getProcess = async (type, id, title) => {
    if (id) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT due_date, created_at FROM notes WHERE id = ?', [id], (error, results) => {
                if (error) {
                    reject(error);
                } else if (results.length > 0) {
                    const due_date = results[0].due_date;
                    const created_at = results[0].created_at;
                    const elapsedTime = calculateElapsedTime(created_at)
                    const rateProcess = calculateRateProcess(created_at, due_date)
                    if (type==='process') {
                        resolve(`Tiến trình của bạn: ${rateProcess}%`)
                    }  else {
                        resolve(`Thời gian bạn đã thực hiện: ${elapsedTime}`)
                    }               
                } else {
                    reject(new Error('Note not found'));
                }
            })
        });
    } else if (title) {
        return new Promise((resolve, reject) => {
            connection.query('SELECT due_date, created_at FROM notes WHERE title = ?', [title], (error, results) => {
                if (error) {
                    reject(error)
                } else if (results.length > 0) {
                    const due_date = results[0].due_date;
                    const created_at = results[0].created_at;
                    const elapsedTime = calculateElapsedTime(created_at)
                    const rateProcess = calculateRateProcess(created_at, due_date)
                    if (type==='process') {
                        resolve(`Tiến trình của bạn: ${rateProcess}%`)
                    }  else {
                        resolve(`Thời gian bạn đã thực hiện: ${elapsedTime}`)
                    }               
                } else {
                    reject(new Error('Note not found'))
                }
            });
        })
    }
}
