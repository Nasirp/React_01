
import { useEffect, useState } from "react";
import Shimer from "./Shimer";
import { PROXY_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";

const RestaurentMenu = () =>{
    const {resId} = useParams();
    // console.log(resId);
    
    const resInfo = useRestaurentMenu(resId);
   const [showIndex, setShowIndex] = useState(null)
   const dummy = "dummy data";

   if( resInfo === null)  return   <Shimer/>
    

     const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

       
     const {itemCards} = 
           resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

       console.log(itemCards);

    const categories =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
       
        (c)=>

            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  
    
    return (

        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
            {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {
              categories.map((category, index)=>
              
               <RestaurentCategory 
                   key={category.card.card.title}
                   data={category?.card?.card}
                   show={index === showIndex ? true : false}
                   setShowIndex={()=> setShowIndex(index)}
                  dummy = {dummy}
                   />)
                 
             
            }
            
            
        </div>
    )
}
export default RestaurentMenu;