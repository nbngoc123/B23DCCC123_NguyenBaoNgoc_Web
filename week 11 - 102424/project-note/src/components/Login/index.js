import React, { useState } from "react";

function Login({ status, setStatusLogin }) {
    const styleCloseButton = {
        cursor: "pointer",
        color: "red",
        fontSize: "20px",
        fontWeight: "bold",
        border: "1px solid red",
        borderRadius: "5px",
        padding: "5px",
        backgroundColor: "red",
        color: "white",
        zIndex: "1000",
        position: "absolute",
        right: "20px" 
    }

    const inputStyle = {
        padding: "8px",
        margin: "5px 0",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "100%"
    };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            username,
            password,
        };

    };
    const handleClose = () => {
        setStatusLogin(!status)
    }

    return (
        <>
            <div style={{position: 'relative'}}>
                <button style={styleCloseButton} onClick={handleClose}> Close </button>
                <h1 style={{ margin: '20px'}}>Login </h1>
                <div style={{ position: 'relative', padding: '20px', margin: '20px' }}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username</label>
                        <input
                            style={inputStyle}
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            style={inputStyle}
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>

        </>
    );
}

export default Login;