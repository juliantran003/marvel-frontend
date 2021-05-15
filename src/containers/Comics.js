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

  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    const newResults = [];
    for (let i = 0; i < data.results.length; i++) {
      if (
        data.results[i].title
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

  return isLoading ? (
    <span>Loading...</span>
  ) : results.length === 0 ? (
    <div className="item-container">
      <div className="search-container">
        <h1>COMICS</h1>
        <input
          type="text"
          placeholder="Which comic are you looking for?"
          onChange={handleSearch}
        />
      </div>

      <div className="item-container">
        {data.results.map((results, index) => {
          return (
            <div className="item">
              <img
                className="thumbnail "
                src={`${results.thumbnail.path}.${results.thumbnail.extension}`}
                alt=""
              />
              <button className="add-favorites" type="submit">
                Add to favorites
              </button>
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
  ) : (
    <div className="item-container">
      <div className="search-container">
        <h1>COMICS</h1>
        <input
          type="text"
          placeholder="Which comic are you looking for?"
          onChange={handleSearch}
        />
      </div>

      <div className="item-container">
        {results.map((results, index) => {
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
