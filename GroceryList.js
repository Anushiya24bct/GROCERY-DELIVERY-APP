import React from "react";

function GroceryList({ groceries, addToCart }) {
  if(groceries.length === 0){
    return <h2>❌ Product Out Of Stock</h2>
  }
  return (
    <div className="products">

      {groceries.map((item)=>(
        <div className="card" key={item.id}>

          <img src={item.image} alt={item.name} width="150"/>

          <h3>{item.name}</h3>

          <p>₹{item.price}</p>

          <button onClick={()=>addToCart(item)}>
            Add to Cart
          </button>

        </div>
      ))}

    </div>
  );
}

export default GroceryList;
