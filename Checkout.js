import React,{useState} from "react";

function Checkout({total}){

const [coupon,setCoupon]=useState("")
const [discount,setDiscount]=useState(0)

const applyCoupon=()=>{

if(coupon==="SAVE20"){
setDiscount(total*0.2)
}
else{
alert("Invalid Coupon")
}

}

return(

<div>

<h2>💳 Checkout</h2>

<input
type="text"
placeholder="Enter Coupon Code"
value={coupon}
onChange={(e)=>setCoupon(e.target.value)}
/>

<button onClick={applyCoupon}>
Apply Coupon
</button>

<h3>Total : ₹{total}</h3>

<h3>Discount : ₹{discount}</h3>

<h2>Final Price : ₹{total-discount}</h2>

</div>

)

}

export default Checkout