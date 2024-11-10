import Task from "./Task";
import Agent from '../Agent';
function Note() {

    
    const sizeMax = {
        overflowY: 'auto', /* Add vertical scroll if content exceeds height */
        maxHeight: '700px', /* Set a maximum height for the container  */
    
    }
    const styleTask = {
        flexDirection: 'column',
        height: '100%', /* Ensure the chat area takes up full height */
        minHeight: '500px', /* Set a minimum height to prevent collapse */ /* or max-height as you see fit */
        maxHeight: '700px', /* Set a maximum height or remove if not needed */
        gap: '10px',
        ...sizeMax, 
        flex: 2, 
        marginLeft: '10px',
        };

    return (
        <>
            <div className="note-container ">

                <div className="note-content" style={{ display: 'flex', alignItems: 'center' }}> 
                    <div style={styleTask} className="task-area">   
                        <Task />
                    </div>
                    <div style={{ sizeMax, flex: 1, marginLeft: '10px', border: '1px solid #ccc', borderRadius: '6px'  }} className="task-area">
                        <Agent />
                    </div>
                </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                
                {/* đồ thị here. */}
            </div>

            </div>

        </>
    );
}

export default Note;
