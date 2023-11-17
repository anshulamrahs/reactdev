import { CDN_URL } from "../utils/constants";


const ResCard = (props) => {
    const {resData} = props;
    
    const {cloudinaryImageId,name,cuisines,avgRating,slaString,} = resData?.info;
        return (
            <div className="res-card">
                <img className="imgs" src={ CDN_URL + cloudinaryImageId} alt="biryani"/>
                <h3>{name}</h3>
                <h4 className="hh">{cuisines.join(" , ")}</h4>
                <h4>{avgRating}</h4>
                <h4>{slaString}</h4>
            </div>
        )
    }

    export default ResCard;