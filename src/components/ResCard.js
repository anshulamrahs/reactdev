import { CDN_URL } from "../utils/constants";


const ResCard = (props) => {
    const {resData} = props;
    
    const {cloudinaryImageId,name,cuisines,avgRating,slaString,} = resData?.info;
        return (
            <div className="w-60 bg-slate-300 h-[350px] px-2 mx-2 my-2">
                <img className="w-60 h-48 py-4 px-2 rounded" src={ CDN_URL + cloudinaryImageId} alt="biryani"/>
                <h3>{name}</h3>
                <h4 className="hh">{cuisines.join(" , ")}</h4>
                <h4>{avgRating}</h4>
                <h4>{slaString}</h4>
            </div>
        );
    };

    export  const withPromotedLabel = (ResCard) =>{

        return (props) => {
            return(
                <div>
                <label>Promoted</label>
                <ResCard {...props}/>
                </div>
            );
        };
    };
    

    export default ResCard;