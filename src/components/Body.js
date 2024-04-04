import RestroCard, {withPromtedLebel} from "./RestroCard";
import React from "react";
import { useEffect, useState,useContext } from "react";
import { PROXY_URL,SWIGGY_API } from "../utils/constant";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = ()=>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filterNewData, setFilterNewData] = useState([]);
    const [searchText, setSearchText] = useState("");

    const {loggedInUser,setUserName} = useContext(UserContext);
    // const RestaurentCardPromoted = withPromtedLebel(RestroCard)
    useEffect(()=>{
      fetchData();
      
    },[]);

       const fetchData = async() => {
       const data = await fetch(PROXY_URL + SWIGGY_API);
       const json = await data.json();
     
       // optional chaining ?
       const filterData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
       setListOfRestaurants(filterData);
       setFilterNewData(filterData);
       setListOfRestaurants(filterData);
    }
       
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false)
    return (
         <h1>
            Looks Like you are offline!! Please check yourinternet connection 
         </h1>
        )
   
    

    return listOfRestaurants.length===0 ? (<Shimer/>) : (
        <div className="body">
        <div className="filter flex">
       <div className="search m-4 p-4">
        <input type="text" 
               className="border border-solid to-black w-60 h-9 rounded-lg text-lg" 
               value={searchText}
               onChange={(e)=>{
                setSearchText(e.target.value)
               }}
               ></input>
        <button className="bg-green-100 px-4 py-2 m-4 rounded-lg shadow-md"
              onClick={()=>{
               const filterRestaurant = listOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())

               );
               setFilterNewData(filterRestaurant);
              }}
             >search</button>
       </div>
          <div className="search m-4 p-4 flex items-center">
            <button 
               className="px-4 py-2 bg-gray-100 rounded-lg shadow-lg" 
               onClick={()=>{
                    const filterList = listOfRestaurants.filter(
                    (result)=> result.info.avgRating > 4.3
                );
                setListOfRestaurants(filterList);
                }}>Top Rated Restro
            </button>
            <div className="mx-5">
            <label>uaerName : </label>
            <input className="p-2 border border-black" 
             value={loggedInUser}
             onChange={(e)=>setUserName(e.target.value)} />
          </div>
          </div>

         
            
        </div>

            <div className="restro_container flex flex-wrap">
                {filterNewData.map((restaurant)=>(

                    <Link 
                      key={restaurant.info.id}  
                      to={"/restaurents/"+restaurant.info.id}>
                      <RestroCard resData={restaurant}/></Link>
                  
                ))
                
                }
                
                
                
            </div>
        </div>
    );
};
export default Body;