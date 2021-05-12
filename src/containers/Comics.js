import axios from "axios";
import { useState, useEffect } from "react";

const Comics = () => {
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
  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <div className="item-container">
      <h1>COMICS</h1>
      <div className="item-container">
        {data.results.map((results, index) => {
          return (
            <div className="item">
              <img
                className="thumbnail"
                src={`${results.thumbnail.path}.${results.thumbnail.extension}`}
                alt=""
              />
              <h2>{results.title}</h2>
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
  );
};

export default Comics;
