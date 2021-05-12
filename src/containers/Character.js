import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Character = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-backend-julian.herokuapp.com/comics"
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  const location = useLocation();
  const id = location.id;
  const characterComics = location.comics;
  console.log(characterComics);

  return isLoading ? (
    <span>Loading</span>
  ) : (
    <div>
      <p>{id}</p>
      <p>{characterComics}</p>
      {data.results.map((results, index) => {
        return (
          <div>
            {characterComics.indexOf(results._id) === -1 ? "" : results.title}
          </div>
        );
      })}
    </div>
  );
};

export default Character;
