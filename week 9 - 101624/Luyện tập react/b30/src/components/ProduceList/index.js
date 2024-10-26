import { produceList } from "./data.js";
import ProduceItem from "./ProduceItem";

function ProduceList() {
    return (
        <>
            <div className="produce__list">
                {produceList.map(item => (
                    <ProduceItem key={item.id} item={item} />
                ))}
            </div>
        </>
    );
}

export default ProduceList;