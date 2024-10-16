import logo from './logo.svg';
import './App.css';

function Getting(props) {
  return (
    <div className="app">
      <h1>My schedule</h1>
      <div><button>Add</button></div>
      <div>{props.text}</div>
    </div>
  );
}


// Sử dụng functional component
const App = () => { // Đổi tên Appe thành App
  return <Getting text="today, i going to go to the market" />;
}

export default App; 