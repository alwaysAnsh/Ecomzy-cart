import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="  max-w-5xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]  " >
  {
    cart.length > 0  ? 
    (<div className="flex mt-6" >


      <div className="" >
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className=" flex flex-col  gap-6 h-fit w-full  " > 

        
          <div className="flex flex-col gap-8" >
            <div className="font-bold text-4xl " >Your Cart <div  className="font-bold text-3xl text-green-600 ">Summary</div> </div>
            
            <p>
              <span className="text-md " >Total Items: {cart.length}</span>
            </p>
          </div>
        

        <div className="flex flex-col align-bottom" >
          <p>Total Amount: <span className="font-bold text-md" >${totalAmount}</span></p>
          <button className=" mt-4 font-semibold text-lg px-12 py-2 bg-green-500 text-center border-green-400 rounded-sm  transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300  " >
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col gap-3 min-h-screen items-center justify-center text-center" >
      <h1 className="text-3xl font-bold " >Cart Empty</h1>
      <Link to={"/"}>
        <button className="mt-4 font-semibold text-lg px-4 py-2 bg-green-500 text-center border-green-400 rounded-full  transition ease-in-out  hover:rounded-full  hover:scale-110 hover:bg-green-600 duration-700  " >
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
