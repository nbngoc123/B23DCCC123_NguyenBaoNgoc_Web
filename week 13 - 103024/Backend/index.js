const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// Bật CORS để cho phép frontend truy cập
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Để xử lý dữ liệu POST URL-encoded
app.use(express.json()); // Để xử lý dữ liệu POST JSON

// Định nghĩa endpoint POST tại /api/generate
app.post('/api/generate', async (req, res) => {
  const prompt = req.body.prompt; // Lấy prompt từ dữ liệu POST

  try {
    // Khởi tạo GoogleGenerativeAI với API_KEY
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ 
      model: "tunedModels/todolistdataupdatekey2-v49pqdz54ztj",
    });

    // Gửi prompt đến model AI và nhận phản hồi
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Log phản hồi để debug
    console.log("Response text:", responseText);

    // Trả phản hồi cho client
    res.json({ response: responseText });

  } catch (error) {
    // Xử lý lỗi khi gọi GoogleGenerativeAI
    console.error("Lỗi khi gọi AI:", error);
    res.status(500).json({ error: 'Có lỗi xảy ra khi gọi Google Generative AI.' });
  }
});

// Khởi động server và lắng nghe yêu cầu
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}/`);
});
