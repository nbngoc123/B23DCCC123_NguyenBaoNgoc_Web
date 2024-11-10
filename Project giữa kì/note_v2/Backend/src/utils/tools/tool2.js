// tool này có chức năng tác động đế database

exports.toolUpdate = [
    {
        type: "function",
        function: {
            name: "updateTodo",
            description: "Sửa hoặc cập nhật thông tin của một todo list từ cơ sở dữ liệu theo id, title, content, due_date, create_at, status, rate_prosess.",
            parameters: {
                type: "object",
                properties: {
                    id: {
                        type: "string",
                        description: "ID của todo list cần truy vấn.",
                    },
                    title: {
                        type: "string",
                        description: "Tiêu đề của todo list do người dùng yêu cầu cập nhật (nếu người dùng yêu cầu cập nhật todo thì có thể chỉ cần cung cấp title chính xác để dựa vào đó để tìm kiếm và cập nhật thông tin khác mà không cần id).",
                    },
                    content: {
                        type: "string",
                        description: "Nội dung của todo list do người dùng yêu cầu cập nhật."
                    },
                    due_date: {
                        type: "string",
                        format: "date-time",
                        description: "Ngày hạn của todo list do người dùng yêu cầu cập nhật ở định dạng ISO 8601."
                    },
                    status: {
                        type: "boolean",
                        description: "Trạng thái của todo list do người dùng yêu cầu cập nhật (true: hoàn thành, false: đang thực hiện).",
                    },
                },
                required: ["id", "title", "content", "due_date", "due_date", "status"],
                additionalProperties: false,
            },
        }
    }
];
