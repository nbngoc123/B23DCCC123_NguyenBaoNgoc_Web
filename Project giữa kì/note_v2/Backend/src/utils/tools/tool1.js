exports.toolbase = [
{
    type: "function",
    function: {
        name: "getDueDate",
        description: "Lấy hạn (due date) của todo list trong bảng notes trong database.",
        parameters: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    description: "ID của todo list công việc.",
                },
            },
            required: ["id"],
            additionalProperties: false,
        },
    }
},
{
    type: "function",
    function: {
        name: "deleteTodo",
        description: "Xóa một todo list từ cơ sở dữ liệu theo id từ người dùng.",
        parameters: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    description: "ID của todo list cần xóa. ",
                },
            },
            required: ["id"],
            additionalProperties: false,
        },
    }
},
{
    type: "function",
    function: {
        name: "getDetail",
        description: "Lấy thông tin chi tiết của một todo list từ cơ sở dữ liệu theo ID các trường chính là id, title, content, due_date, create_at, status, rate_prosess.",
        parameters: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    description: "ID của todo list cần truy vấn.",
                },
            },
            required: ["id"],
            additionalProperties: false,
        },
    }
},
{
    type: "function",
    function: {
        name: "getInfoStatus",
        description: "Lấy thông tin các todo list theo trạng thái (status) từ cơ sở dữ liệu.",
        parameters: {
            type: "object",
            properties: {
                type: {
                    type: "string",
                    description: "trạng thái muốn lấy khi người dùng muốn biết số lượng todo theo status thì truyền vào 'count', muốn lấy thông tin chi tiết của todo theo status thì truyền vào 'detail.",
                },
                status: {
                    type: "boolean",
                    description: "trạng thái của todo list (true: hoàn thành, false: đang thực hiện).",
                },
            },
            required: ["id"],
            additionalProperties: false,
        },
    }
},
{
    type: "function",
    function: {
        name: "getProcess",
        description: "trả về về tiến trình của 1 todo list được tính bằng cách lấy rate_prosess nhân với 100 và đơn vị là % ",
        parameters: {
            type: "object",
            properties: {
                type:{
                    type: "string",
                    description: "kiểu giá trị muốn tính ví dụ người dùng muốn tính tiến trình của todo thì truyền vào 'process', muốn tính thời gian đã thực hiện todo thì truyền vào 'actual_duration'",
                },
                id: {
                    type: "string",
                    description: "ID của todo list cần truy vấn.",
                },
                title: {
                    type: "string",
                    description: "Tiêu đề của todo list cần truy vấn.",
                },
            },
            required: ['type'],
            additionalProperties: false,
        },
    }
},
{
    type: "function",
    function: {
        name: "createTodo",
        description: "Tạo một to-do mới trong cơ sở dữ liệu với tiêu đề, nội dung, ngày hạn, ngày tạo và trạng thái.",
        parameters: {
            type: "object",
            properties: {
                title: {
                    type: "string",
                    description: "Tiêu đề của todo list mới."
                },
                content: {
                    type: "string",
                    description: "Nội dung của todo list mới."
                },
                due_date: {
                    type: "string",
                    format: "date-time",
                    description: "Ngày hạn của todo list ở định dạng ISO 8601."
                },
                status: {
                    type: "boolean",
                    description: "Trạng thái của todo list, sử dụng `true` cho 'completed' và `false` cho 'pending'."
                }
            },
            required: ["title", "content", "due_date"],
            additionalProperties: false
        }
    }
},
];