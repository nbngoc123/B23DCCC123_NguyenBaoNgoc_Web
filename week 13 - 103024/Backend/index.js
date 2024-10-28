const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post('/api/generate', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ 
      model: "tunedModels/todolistdataupdatekey2-v49pqdz54ztj",  // con này chỉ thu thập data từ note users
    });

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    console.log("Response text:", responseText);

    res.json({ response: responseText });

  } catch (error) {
    console.error("Lỗi khi gọi AI:", error);
    res.status(500).json({ error: 'Có lỗi xảy ra khi gọi Google Generative AI.' });
  }
});

app.post('/chats/withnote', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ 
      model: "tunedModels/todolistdata3-4t8eoouosa67",  
    });

    // con này chuyên để chat với data của người dùng
    // Model ID: tunedModels/todolistdata3-4t8eoouosa67
    // Base model: Gemini 1.5 Flash 001 Tuning
    //  Total training time: 6h 28m
    //  Tuned examples: 197 examples 
    // Epochs: 45
    //  Batch size: 16 
    //  Learning rate: 0.001 


    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    console.log("Response text:", responseText);

    res.json({ response: responseText });

  } catch (error) {
    console.error("Lỗi khi gọi AI", error);
    res.status(501).json({ error: ' quá nhiều requests' });
  }
})

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}/`);
});
