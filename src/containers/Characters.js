import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Characters = ({ favoriteCharacterTab, setFavoriteCharacterTab }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-backend-julian.herokuapp.com/characters"
        );

        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  });

  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    const newResults = [];
    for (let i = 0; i < data.results.length; i++) {
      if (
        data.results[i].name
          .toLowerCase()
          .indexOf(event.target.value.toLowerCase()) !== -1
      ) {
        if (newResults.length <= 100) {
          newResults.push(data.results[i]);
        } else {
          break;
        }
      }
    }
    setResults(newResults);
  };

  const clickHandle = (props) => {
    const find = favoriteCharacterTab.find(
      (character) => character.id === props.id
    );
    if (find === undefined) {
      const newTab = [...favoriteCharacterTab];
      newTab.push(props);
      setFavoriteCharacterTab(newTab);
      console.log(favoriteCharacterTab);
      alert("Added to favorites");
    } else {
      alert("Character already added to favorites");
    }
  };

  return isLoading ? (
    <span>Loading...</span>
  ) : results.length === 0 ? (
    <div className="item-container">
      <div className="search-container">
        <h1>CHARACTERS</h1>
        <input
          type="text"
          placeholder="Which character are you looking for?"
          onChange={handleSearch}
        />
      </div>

      <div className="item-container">
        {data.results.map((results, index) => {
          return (
            <div className="item">
              <div className="thumbnail-box">
                <Link
                  to={{
                    pathname: "/character",
                    id: results._id,
                    name: results.name,
                    image_src: `${results.thumbnail.path}.${results.thumbnail.extension}`,
                    description: results.description,
                  }}
                >
                  <p id="click-here">
                    Click here for more information about this character
                  </p>
                  <img
                    className="thumbnail thumbnail-characters"
                    src={`${results.thumbnail.path}.${results.thumbnail.extension}`}
                    alt=""
                  />
                </Link>
              </div>

              <button
                className="add-favorites"
                onClick={() => {
                  clickHandle({
                    id: results._id,
                    name: results.name,
                    image_src: `${results.thumbnail.path}.${results.thumbnail.extension}`,
                    description: results.description,
                  });
                }}
              >
                Add to favorites
              </button>

              <h2>{results.name}</h2>
              <p className="description">
                {results.description
                  ? results.description
                  : "No description found"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="item-container">
      <div className="search-container">
        <h1>CHARACTERS</h1>
        <input
          type="text"
          placeholder="Which character are you looking for?"
          onChange={handleSearch}
        />
      </div>

      <div className="item-container">
        {results.map((results, index) => {
          return (
            // Ci-dessous je passe des données au path /character que je récupère avec useLocation
            <Link
              to={{
                pathname: "/character",
                id: results._id,
                name: results.name,
                image_src: `${results.thumbnail.path}.${results.thumbnail.extension}`,
                description: results.description,
              }}
            >
              <div className="item">
                <img
                  className="thumbnail"
                  src={`${results.thumbnail.path}.${results.thumbnail.extension}`}
                  alt=""
                />
                <h2>{results.name}</h2>
                <p className="description">
                  {results.description
                    ? results.description
                    : "No description found"}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
