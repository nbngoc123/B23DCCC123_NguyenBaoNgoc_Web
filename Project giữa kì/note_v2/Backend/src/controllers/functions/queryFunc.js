const connection = require('../../config/database');

const getDueDate = async (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT due_date FROM notes WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
        } else if (results.length > 0) {
          resolve(results[0].due_date);
        } else {
          resolve(null);
        }
      });
    });
  };

exports.getDueDate = getDueDate;

// Xóa todo list theo ID
const deleteTodo = async (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM notes WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
        } else if (results.affectedRows > 0) {
          resolve(`Đã xóa todo list với ID ${id}`);
        } else {
          resolve(`Không tìm thấy todo list với ID ${id}`);
        }
      });
    });
  };
exports.deleteTodo = deleteTodo;

// Cập nhật todo list theo ID
const updateTodoFunc = async (id, title, content, due_date, status) => {
    return new Promise((resolve, reject) => {
        connection.query(
            'UPDATE notes SET title = ?, content = ?, due_date = ?, status = ? WHERE id = ?',
            [title, content, due_date, status, id],
            (error, results) => {
                if (error) {
                    reject(error);
                } else if (results.affectedRows > 0) {
                    resolve(`Đã cập nhật todo list với ID ${id}`);
                } else {
                    resolve(`Không tìm thấy todo list với ID ${id}`);
                }
            }
        );
    });
};
exports.updateTodoFunc = updateTodoFunc;

// tạo todo list
 const createTodoFunc = async (title, content, due_date) => {
     return new Promise((resolve, reject) => {
         const status = 0; // Set default status to 0
         const created_at = new Date(); // Get current date and time
         connection.query(
             'INSERT INTO notes (title, content, due_date, created_at, status) VALUES (?, ?, ?, ?, ?)',
             [title, content, due_date, created_at, status],
             (error, results) => {
                 if (error) {
                     reject(error);
                 } else {
                     resolve(`Đã tạo todo list với ID ${results.insertId}`);
                 }
             }
         );
     });
 };
 exports.createTodoFunc = createTodoFunc;
