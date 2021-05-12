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
      <div className="left">
        <img className="thumbnail" src={image_src} alt="" />
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div id="arrow">
        <i className="fas fa-arrow-right"></i>
      </div>

      <div className="right">
        {data.comics.map((comics, iindex) => {
          return (
            <div className="item">
              <img
                className="thumbnail"
                src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                alt=""
              />
              <h2>{comics.title}</h2>
              <p>{comics.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Character;
