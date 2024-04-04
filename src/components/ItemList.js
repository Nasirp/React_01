import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";


const ItemList = ({ items,dummy }) => {


    const dispatch = useDispatch();
    const handleCartItem = (item) =>{
      dispatch(addItem(item));
    }
  console.log(dummy); 
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-6/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
          <div className="absolute">
          <button className="p-2 bg-white text-green-800 shadow-lg mx-8 rounded-lg  w-24"
          
              onClick={()=>handleCartItem(item)}>
              
              Add +</button>
          </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full rounded-lg"/>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
