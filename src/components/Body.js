import ResCard, {withPromotedLabel} from "./ResCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {

  const [RestList, SetRestList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  console.log(RestList);

  const [searchText, setSearchText] = useState("");

  const ResCardPromoted = withPromotedLabel(ResCard);

   useEffect(() =>{
    fetchData();
   },[]);

   const fetchData = async() => {
     const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

     const json = await data.json();
     //optional chaining 

    SetRestList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   };
//conditional rendering 
//   if (RestList == 0) {
 //   return <Shimmer/>
  // }
//conditional rendering using ternary operator 

const onlineStatus = useOnlineStatus();

if (onlineStatus === false) return (<h1>You are offline </h1>);

    return RestList == 0 ?( <Shimmer/> ) :(
        <div className="">
            <div className="flex my-4">
              <div className="">
                <input type="text"
                 className="border-black border-2 w-44 hover:border-black ml-4" 
                 value={searchText}
                onChange={(e)=>{
                  setSearchText(e.target.value);
                }}
                />
                <button
                className="px-6 py-2 mt-2 ml-3 rounded-xl bg-slate-500"
                onClick={()=>{
                  const filteredText = RestList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredResList(filteredText);
                }}
                >Search</button>
              </div>
              <button className="ml-4 bg-slate-500 px-4 rounded-xl" onClick={()=>{
                const filteredResList = RestList.filter(
                  (res) => res.info.avgRating > 4
                );
                SetRestList(filteredList);
              }}>Top Rated Restaurant</button>
            </div>
            <div className="flex flex-wrap">
              {filteredResList.map((restaurant)=> (
                   <Link 
                   key={restaurant.info.id}
                   to={"/restaurants/"+restaurant.info.id}>
                    { restaurant.info.isOpen ? <ResCardPromoted resData={restaurant}/> : <ResCard resData={restaurant}/>}</Link> 
                ))
              }
            </div>
        </div>
    )
}

export default Body;