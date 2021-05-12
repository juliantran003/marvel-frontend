import axios from "axios";
import { useState, useEffect } from "react";

const Characters = () => {
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
  }, []);

  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <div>
      <h1>Characters</h1>
      {data.results.map((results, index) => {
        return (
          <div>
            <img src={results.thumbnail.path} alt="" />
            <p>{results.name}</p>
            <p>{results.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
