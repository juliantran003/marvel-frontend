import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Character = () => {
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
        {data.comics.map((comics, iindex) => {
          return (
            <div className="item">
              <img
                className="thumbnail"
                src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                alt=""
              />
              <h2>{comics.title}</h2>
              <p className="description">{comics.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Character;
