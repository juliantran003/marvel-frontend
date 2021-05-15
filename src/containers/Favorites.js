import Cookies from "js-cookie";

const Favorites = () => {
  const characters = JSON.parse(Cookies.get("character"));
  console.log(characters);
  return (
    <div>
      <h1>Favorites</h1>
      {characters.map((characters, index) => {
        return (
          <div>
            <img className="thumbnail" src={`${characters.image_src}`} alt="" />
            <h1>{characters.name}</h1>
            <p>{characters.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
