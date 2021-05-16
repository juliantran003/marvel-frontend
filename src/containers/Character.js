import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Character = ({ favoriteComicTab, setFavoriteComicTab }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const id = location.id;
  const name = location.name;
  const image_src = location.image_src;
  const description = location.description;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backend-julian.herokuapp.com/comics/${id}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  });

  const clickHandle = (props) => {
    const find = favoriteComicTab.find((comic) => comic.id === props.id);
    if (find === undefined) {
      const newTab = [...favoriteComicTab];
      newTab.push(props);
      setFavoriteComicTab(newTab);
      console.log(favoriteComicTab);
      alert("Added to favorites");
    } else {
      alert("Comic already added to favorites");
    }
  };

  return isLoading ? (
    <span>Loading</span>
  ) : (
    <div className="character-detail-container">
      <h1>{name}</h1>
      <div className="character-detail-container-item">
        <img className="thumbnail" src={image_src} alt="" />
        <p className="description"> {description}</p>
      </div>
      <h1>COMICS STARRING : {name}</h1>
      <div className="item-container">
        {data.comics.length === 0 ? (
          <p className="description">No comics found for this character</p>
        ) : (
          data.comics.map((comics, iindex) => {
            return (
              <div className="item">
                <img
                  className="thumbnail"
                  src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                  alt=""
                />
                <button
                  className="add-favorites"
                  onClick={() => {
                    clickHandle({
                      id: comics._id,
                      title: comics.title,
                      image_src: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
                      description: comics.description,
                    });
                  }}
                >
                  Add to favorites
                </button>
                <h2>{comics.title}</h2>
                <p className="description">{comics.description}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Character;
