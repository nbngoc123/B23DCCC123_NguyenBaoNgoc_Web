# Cấu trúc dự án `connect_mysql`

Dự án `connect_mysql` là một ứng dụng Node.js sử dụng Express.js để quản lý danh sách todo thông qua các API RESTful.  Ứng dụng kết nối đến một cơ sở dữ liệu SQL.

Cấu trúc thư mục:

```
connect_mysql/
├── package.json
├── package-lock.json
└── src/
    ├── app.js             // File chính của ứng dụng
    ├── config/
    │   └── database.js    // Cấu hình cơ sở dữ liệu
    ├── logs/              // Thư mục lưu trữ log
    ├── middleware/        // Middleware của ứng dụng
    ├── models/            // Models của ứng dụng
    ├── routers/
    │   └── todo/
    │       ├── index.js     // Router chính cho các API liên quan đến todo
    │       ├── gettodolist.js // API lấy danh sách todo
    │       ├── posttodolist.js // API thêm todo
    │       ├── puttodolist.js // API cập nhật todo
    │       └── deletetodolist.js // API xóa todo
    ├── schemas/
    │   └── catdog_schema.py //schema cho một ứng dụng khác, không liên quan đến todo
    └── utils/
        ├── create_table.sql // Script tạo bảng trong cơ sở dữ liệu
        └── logger.py
```



