import { useEffect, useState } from "react";
import RestCards from "./RestCards";
import "./style.css";
import Shimmer from "./Shimmer";
const Body = () => {
  const [top,setTop]=useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const a = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const abc = await a.json();
    setTop(
      abc.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if(top.length === 0)
  {
    return <Shimmer/>
  }

  return (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            const resList = top.filter((a) => a.info.avgRating > 4);
            setTop(resList);
          }}
        >
          Top Restro's
        </button>
      </div>
      <div className="restarunts">
        {top.map((a) => {
          return <RestCards resName={a} key={a.info.resId} />;
        })}
      </div>
    </div>
  );
};

export default Body;
