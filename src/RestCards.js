import "./style.css";

const RestCards = (props) => {
    console.log(props);
  const { resName } = props;
  const { cloudinaryImageId, name, resId } = resName?.info; // optional chaining mechanism with destructuring of the props
//   console.log(resName.info.image.urls?.url); // example of optinal chaining if urls is present then fetch the data if not return undefined..useful for managing the nexted data
// console.log(name);
console.log(resName.info.cuisines);  
let arrayCuisine = [];
  let cuisine = (resName.info.cuisines)?.join(",")
//  cuisine.join(",")
  return (
    <div className="resName" style={{ backgroundColor: "#ACE2E1" }}>
      <img className="resLogoClass" alt="Biryani" src={cloudinaryImageId}></img>
      <h3> {name}</h3>
      <h4> {cuisine}</h4>
      <h5> {resName.info.avgRating}</h5>
    </div>
  );
};

export default RestCards;
