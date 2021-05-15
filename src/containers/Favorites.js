import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Favorites = () => {
  const characters = JSON.parse(Cookies.get("characters"));
  const comics = JSON.parse(Cookies.get("comics"));
  console.log(characters);
  return (
    <div className="item-container">
      <h1>YOUR FAVORITES</h1>
      <div className="favorites-container">
        <div className="favorites-sub-container">
          <h1>COMICS</h1>
          {Cookies.get("comics") === "[]" ? (
            <h3>No favorite comics added yet</h3>
          ) : (
            <div className="item-sub-container">
              {comics.map((comics, index) => {
                return (
                  <div className="item">
                    <img
                      className="thumbnail"
                      src={`${comics.image_src}`}
                      alt=""
                    />
                    <h2>{comics.title}</h2>
                    <p className="description">{comics.description}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="favorites-sub-container">
          <h1>CHARACTERS</h1>
          {Cookies.get("characters") === "[]" ? (
            <h3>No favorite characters added yet</h3>
          ) : (
            <div className="item-sub-container">
              {characters.map((characters, index) => {
                return (
                  <div className="item">
                    <Link
                      to={{
                        pathname: "/character",
                        id: characters.id,
                        name: characters.name,
                        image_src: characters.image_src,
                        description: characters.description,
                      }}
                    >
                      <img
                        className="thumbnail"
                        src={`${characters.image_src}`}
                        alt=""
                      />
                    </Link>

                    <h2>{characters.name}</h2>
                    <p className="description">{characters.description}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
