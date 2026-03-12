import React from "react";

function Cart({cart,setCart,setTotal}){

const increase=(item)=>{
setCart(
cart.map((c)=>
c.id===item.id ? {...c,qty:c.qty+1}:c
)
)
}

const decrease=(item)=>{
setCart(
cart
.map((c)=>
c.id===item.id ? {...c,qty:c.qty-1}:c
)
.filter((c)=>c.qty>0)
)
}

const remove=(item)=>{
setCart(cart.filter((c)=>c.id!==item.id))
}

const total=cart.reduce(
(sum,item)=>sum+item.price*item.qty,0
)

setTotal(total)

return(

<div>

<h2>🛒 Cart</h2>

{cart.map((item)=>(
<div key={item.id}>

{item.name} ₹{item.price}

<button onClick={()=>decrease(item)}>-</button>

{item.qty}

<button onClick={()=>increase(item)}>+</button>

<button onClick={()=>remove(item)}>Remove</button>

</div>
))}

<h3>Total ₹{total}</h3>

</div>
)
}
export default Cart