
import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";
const RestroCard = (props) =>{
    const {resData} = props;
    const { name, cloudinaryImageId, areaName, avgRating, cuisines, costForTwo } =
    resData?.info;
    const {loggedInUser} = useContext(UserContext)
    return(
        <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg h-60" alt="res_logo"  
            src={`${CDN_URL}/${cloudinaryImageId}`}
                />
        <h3 className="font-bold py-4 text-lg">{name }</h3>
        <p>{areaName}</p>
        <h4 className="cuisines">{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars {costForTwo}</h4>
        <h4>user: {loggedInUser}</h4>
        </div>
    )
}

// export const withPromtedLebel = (RestroCard) =>{
//     return (props) =>{
//         return(
//             <div>
//                 <label>Promoted</label>
//                 <RestroCard />
//             </div>
//         )
//     }
// }

export default RestroCard;
