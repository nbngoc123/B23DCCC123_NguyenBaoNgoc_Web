import Task from "./Task";
import './Note.css';

function Note() {
    
    const sizeMax = {
        overflowY: 'auto', /* Add vertical scroll if content exceeds height */
        maxHeight: '700px', /* Set a maximum height for the container  */
        maxWidth: '650'
    }
    return (
        <>
            <div className="note-container ">


                <div>
                    <div style={sizeMax}>
                        <Task />
                    </div>

                    <div className="agent" > 
                        <dev style={sizeMax}>
                        </dev>
                         
                    </div>

                </div>

                <div className="analysis" >
                    <div>
                        <p> analysis here </p>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Note;
