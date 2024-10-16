import React from "react";
import { useState } from "react";
const Counter2 = () => {
    const [count, setState] = useState(1);

    const handle = () => {
        setState(count + 1);
    }

    return (
        <>
        <div>
            <p> I am {count} years old.</p>;
            <button oneClick={handle}>onClick</button>;

        </div>
        </>
    )
}
export default Counter2;