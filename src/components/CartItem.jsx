
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className=" w-[80%] flex flex-row gap-16 border-b-2 ">

      

        <div className="  h-[180px] w-80 " >
          <img src={item.image}  className=" h-full object-contain  " />
        </div>

        <div className="flex flex-col gap-2" >
          <h1 className="text-2xl font-bold  " >{item.title}</h1>
          <h1 className="text-sm " >{item.description}</h1>
          <div>
            <p className="font-semibold " >${item.price}</p>
            <div
            onClick={removeFromCart}  >
              <MdDelete  className="scale-125 cursor-pointer" />
            </div>
          </div>

        </div>


      

    </div>
  );
};

export default CartItem;
