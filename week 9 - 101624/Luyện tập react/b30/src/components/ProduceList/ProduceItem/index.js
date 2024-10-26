function ProduceItem({ item }) {
    const { name, image, price } = item;

    return (    
        <div className="produce__item">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>${price} / lb</p>
                    <button>Add to Cart</button>
                    </div> 
    );
}

export default ProduceItem;