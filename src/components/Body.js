import ResCard from "./ResCard";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {

  const [RestList, SetRestList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const [searchText, setSearchText] = useState("");

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
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text"
                 className="search-box" 
                 value={searchText}
                onChange={(e)=>{
                  setSearchText(e.target.value);
                }}
                />
                <button
                onClick={()=>{
                  const filteredText = RestList.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredResList(filteredText);
                }}
                >Search</button>
              </div>
              <button className="filter-btn" onClick={()=>{
                const filteredList = RestList.filter(
                  (res) => res.info.avgRating > 4
                );
                RestList(filteredList);
              }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
              {filteredResList.map((restaurant)=> (
                   <Link 
                   key={restaurant.info.id}
                   to={"/restaurants/"+restaurant.info.id}><ResCard resData={restaurant}/></Link> 
                ))
              }
            </div>
        </div>
    )
}

export default Body;