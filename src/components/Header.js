import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () =>{
    const [btnName, setBtnName] = useState("login")

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser);
 
     //subscribing to the store  using a selector
    const cartItems = useSelector((store)=> store.cart.items)

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg" >
            <div className="logo_container">
                <img className="w-40" src={LOGO_URL}/>
            </div>
            <div className="flex items-center ">
                <ul className="flex p-4 m-4" >
                <li className="px-4">onlineStatus: {onlineStatus ? "🟢" : "🔴"}</li>
                <li className="px-4">
                <Link to="/">Home</Link>
                </li>
                    <li className="px-4">
                    <Link to="about">About</Link>
                    </li>
                    
                    <li className="px-4">
                    <Link to="contactUs">Contact US</Link>

                    </li>
                    <li className="px-4">
                        <Link to = "grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                    <Link to = "/cart">Cart ({cartItems.length} item)</Link>
                    </li>
            
                    <button className="login" onClick={()=> {
                        setBtnName("Logout")
                    }
                      
                    }>{btnName}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};
export default Header; 
