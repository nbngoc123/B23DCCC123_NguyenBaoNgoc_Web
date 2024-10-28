import { data } from './Data'
import './Note.css'; // Import file CSS cho Note

function GetData() {
    function normalizeData(data) {
        return data.map(item => {
            try {
                const jsonData = JSON.parse(item.content.replace(/```json\n|\n```/g, '').trim());
        return jsonData; 
            } catch (error) {
        return null; 
            }
    }).filter(item => item !== null); 
    }
    
    const normalizedData = normalizeData(data);
    console.log("norm", normalizedData);
    
  return (
    <div>
      {normalizedData.map((item, index) => (
        <div key={index} className="note-container"> {/* Sử dụng className để áp dụng style */}
          <h1 className="note-title">{item.Title}</h1>
          <div className="note-content">
            <p>{item.Description}</p>
            <span className="note-status">{item.Status}</span>
          </div>
          <div className="note-recommendation">
            <h2>Recommendation:</h2>
            <p>{item.prediction.Recommendation}</p> 
            </div>
          <div className="note-dates">
            <p>Created: {item.Creation_time} - Due: {item.Due_date}</p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default GetData;