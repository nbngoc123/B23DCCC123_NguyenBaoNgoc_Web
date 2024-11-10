// nhiều tool hơn
const OpenAI = require('openai');
const express = require('express');
const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.inference.ai.azure.com";
const modelName = "gpt-4o-mini";
const client = new OpenAI({ baseURL: endpoint, apiKey: token });
const router = require('./routers/todo');



const func = require('./controllers/functions/queryFunc')
const allTool = require('./utils/tools/tool1');
const detailF = require('./controllers/functions/queryDetail');


const getInfoStatus = detailF.getInfoStatus;
const getDetail = detailF.getInfo;
const getProcess = detailF.getProcess;
const getDueDate = func.getDueDate;
const deleteTodo = func.deleteTodo;
const createTodo = func.createTodoFunc;

// const updateTodo = func.updateTodoFunc;

const tools = allTool.toolbase


// Hàm xử lý chat và gọi API OpenAI
const getChatResponse = async (userMessage) => {
    try {
        const response = await client.chat.completions.create({
            model: modelName,
            messages: [
                { role: "system", content: "Tôi là một trợ lý hỗ trợ người dùng hữu ích. Sử dụng các công cụ được cung cấp để hỗ trợ người dùng." },
                { role: "user", content: userMessage }
            ],
            tools: tools,
        });

        console.log("Phản hồi từ OpenAI:", response);

        // Kiểm tra nếu OpenAI yêu cầu gọi công cụ (tool)
        if (response.choices && response.choices[0].message.tool_calls) {
            for (const toolCall of response.choices[0].message.tool_calls) {
                const { name, arguments: args } = toolCall.function;
                const params = JSON.parse(args);

                let result;
                if (name === 'getDueDate') {
                    const { id } = params;
                    result = await getDueDate(id); // Gọi hàm getDueDate
                } else if (name === 'deleteTodo') {
                    const { id } = params;
                    result = await deleteTodo(id); // Gọi hàm deleteTodo
                } else if (name === 'getDetail') {
                    const { id } = params;
                    result = await getDetail(id); // Gọi hàm getDetail
                } else if (name === 'getInfoStatus') {
                    const { type, status } = params;
                    result = await getInfoStatus(type, status); // Gọi hàm getInfoStatus
                } else if (name === 'getProcess') {
                    const { type, id, title } = params
                    result = await getProcess(type, id, title); // Gọi hàm getProcess
                } else if (name === 'createTodo') {
                    const { title, content, due_date } = params;
                    result = await createTodo(title, content, due_date); // Gọi hàm createTodo
                }
                else {
                    throw new Error(`Công cụ ${name} không được hỗ trợ.`);
                }
                // Gửi kết quả vào phản hồi của OpenAI
                response.choices[0].message.content = result;

                console.log("Kết quả từ công cụ:", result);
            }
        }

        return response;
    } catch (error) {
        console.error("Lỗi khi gọi OpenAI API:", error);
        throw new Error('An error occurred while processing your request.');
    }
};

const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000'
}));



app.use('/', router);

app.post('/api/tool/', async (req, res) => {
    const { prompt } = req.body;
    try {
        const response = await getChatResponse(prompt);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});










// Bắt đầu server Express
app.listen(3006, () => {
    console.log('Server is running on port 3000');
});
