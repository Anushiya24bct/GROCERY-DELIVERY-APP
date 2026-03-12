import React,{useState,useEffect} from "react";
import Header from "./components/Header";
import GroceryList from "./components/GroceryList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import OrderTracking from "./components/OrderTracking";
import "./App.css";

function App(){

const [groceries,setGroceries]=useState([])
const [cart,setCart]=useState([])
const [search,setSearch]=useState("")
const [total,setTotal]=useState(0)

useEffect(()=>{
fetch("/groceries.json")
.then(res=>res.json())
.then(data=>setGroceries(data))
},[])

const addToCart=(item)=>{

const exist=cart.find((c)=>c.id===item.id)

if(exist){
setCart(
cart.map((c)=>
c.id===item.id ? {...c,qty:c.qty+1}:c
)
)
}
else{
setCart([...cart,{...item,qty:1}])
}

}

const filtered=groceries.filter((item)=>
item.name.toLowerCase().includes(search.toLowerCase())
)
return(
<div>
<Header search={search} setSearch={setSearch}/>

<GroceryList groceries={filtered} addToCart={addToCart}/>

<Cart cart={cart} setCart={setCart} setTotal={setTotal}/>

<Checkout total={total}/>

<OrderTracking/>
</div>
)
}
export default App
