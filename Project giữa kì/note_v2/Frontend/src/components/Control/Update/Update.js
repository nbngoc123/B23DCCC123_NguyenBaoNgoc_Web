import { FaSyncAlt } from "react-icons/fa";
import './Update.css';

function Update({ isSaved }) {
    const activeReload = () => {
        isSaved();
    };
    return (
        <>
           <div className="container">
                <button onClick={activeReload} className="reload-button"><FaSyncAlt /></button>
            </div>
        </>
    )
}

export default Update;