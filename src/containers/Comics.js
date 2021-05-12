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
    <div>
      <h1>Comics</h1>
      {data.results.map((results, index) => {
        return (
          <div>
            <img src={results.thumbnail.path} alt="" />
            <p>{results.title}</p>
            <p>{results.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comics;
