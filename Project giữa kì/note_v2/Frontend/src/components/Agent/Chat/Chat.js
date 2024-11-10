// Message.js
import React from 'react';
import './Chat.css' // Import CSS file

const Chat = ({ messages }) => { // Receive messages from props
let isCodeBlock = false;
  return (
    //     <div id="message-container">
    //   {messages.map((message, index) => (
    //     <div key={index} className={`message ${message.role}`}>
    //       {message.content.split('\n').map((line, i) => (
    //         <p key={i} className='message-content'>{line}</p>
    //       ))}
    //     </div>
    //   ))}
    // </div>

    // <div id="message-container">
    //   {messages.map((message, index) => (
    //     <div key={index} className={`message ${message.role}`}>
    //       {message.content.split('\n').map((line, i) => {
    //         // Kiểm tra nếu line là header bằng cách dùng ký tự #
    //         if (line.startsWith('# ')) {
    //           return <h1 key={i} className='message-header'>{line.slice(2)}</h1>;
    //         } else if (line.startsWith('## ')) {
    //           return <h2 key={i} className='message-header'>{line.slice(3)}</h2>;
    //         } else if (line.startsWith('### ')) {
    //           return <h3 key={i} className='message-header'>{line.slice(4)}</h3>;
    //         } else {
    //           return <p key={i} className='message-content'>{line}</p>;
    //         }
    //       })}
    //     </div>
    //   ))}
    // </div>

    <div id="message-container">
  {messages.map((message, index) => (
    <div key={index} className={`message ${message.role}`}>
      {message.content.split('\n').map((line, i) => {
        // Kiểm tra header
        if (line.startsWith('# ')) {
          return <h1 key={i} className='message-header'>{line.slice(2)}</h1>;
        } else if (line.startsWith('## ')) {
          return <h2 key={i} className='message-header'>{line.slice(3)}</h2>;
        } else if (line.startsWith('### ')) {
          return <h3 key={i} className='message-header'>{line.slice(4)}</h3>;
        }
        // Kiểm tra code block
        else if (line.startsWith('```')) {
          // Thay đổi trạng thái isCodeBlock để bắt đầu/kết thúc code block
          isCodeBlock = !isCodeBlock;
          return null; // không cần render dòng ``` này
        } else if (isCodeBlock) {
          return <pre key={i} className='message-code'>{line}</pre>;
        }
        // Nội dung thông thường
        else {
          return <p key={i} className='message-content'>{line}</p>;
        }
      })}
    </div>
  ))}
</div>

  );
};


export default Chat;
