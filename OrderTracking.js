import React,{useState} from "react";

function OrderTracking(){

const [status,setStatus]=useState("Order Placed")

const updateStatus=()=>{

if(status==="Order Placed"){
setStatus("Packed")
}

else if(status==="Packed"){
setStatus("Out for Delivery")
}

else if(status==="Out for Delivery"){
setStatus("Delivered")
}
}
return(
<div>
<h2>📦 Order Tracking</h2>
<h3>Status : {status}</h3>
<button onClick={updateStatus}>
Update Status
</button>
</div>
)
}
export default OrderTracking