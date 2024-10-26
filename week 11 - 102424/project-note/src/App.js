import './App.css';
import Login from './components/Login';
import Signin from './components/Sign';
import Menu from './components/Menu';
import ProduceList from './components/ProduceList/index.js';
import Country from './components/Country';
import Modal from './components/Modal';
import Note from './components/Note';

const isLoggedIn = false;

function App() {
  return (
    <>
      {/* <div style={{ display: "flex", position: 'fixed', width: "100%", top: 0, zIndex: 100 }}>
        <Menu />
        <Modal />
      </div>

      <Country /> */}
      <Note />

      <ProduceList />
    </>

  );
}

export default App;
