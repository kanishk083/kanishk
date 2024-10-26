 import RestaurantCard from "./Resturtantcard";
 const Resturantlist = [
 ];



const Body = () => {
  return (
    <>
    <div className="Search-container">
      <input className="Search-input"
      value={""}
      type="text"
      placeholder="search"/>
      <button className="Search-btn"><Search></Search></button>
    </div>
    <div className ="restaurtant-list">
          {Resturantlist.map((restaurant) =>{
              return <RestaurantCard {... restaurant.data} />;
          })}

      </div>
    </>
  )
}
export default Body




