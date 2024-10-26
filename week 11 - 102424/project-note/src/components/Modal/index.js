import { useState } from "react";
import Login from '../Login'

const modalStyle = {
    position: 'fixed', 
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000 // Ensure modal is on top
};

const loginStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    zIndex: 1001 // Ensure login is on top of modal background
};

const buttonStyle = {
    backgroundColor: '#4CAF50', /* Green */
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer'
};

function Modal() {
    const [showLogin, setShowLogin] = useState(false);

    const handleLogin = () => {
        setShowLogin(true);
    };

    return (
        <>
            <button style={buttonStyle} onClick={handleLogin}>Đăng kí </button>
            {showLogin && (
                <div style={modalStyle}>
                    <div style={loginStyle}>
                        <Login status={showLogin} setStatusLogin={setShowLogin} />
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;
