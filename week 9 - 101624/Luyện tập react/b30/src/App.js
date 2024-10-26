import './App.css';
import Login from './components/Login';
import Signin from './components/Sign';
import Menu from './components/Menu';
import ProduceList from './components/ProduceList/index.js';
import Country from './components/Country';

const isLoggedIn = true;

function App() {
  return (
    <>
      {isLoggedIn ? 
      <Login /> 
      : 
      <Signin />}

      {isLoggedIn && <div>Avatar</div>}
      <Country />
      
      <Menu />
      <ProduceList />
    </>

  );
}

export default App;
