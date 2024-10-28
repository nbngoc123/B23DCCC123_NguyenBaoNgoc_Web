import Task from "./Task";
import AddTask from '../Control/AddTask';


function Note() {
    
    const sizeMax = {
        overflowY: 'auto', /* Add vertical scroll if content exceeds height */
        maxHeight: '700px', /* Set a maximum height for the container  */
    
    }
    return (
        <>
            <div className="note-container ">

                <div className="note-content"> 
                    <div style={sizeMax} className="task-area">
                        <Task />
                    </div>
                </div>

            </div>

        </>
    );
}

export default Note;
