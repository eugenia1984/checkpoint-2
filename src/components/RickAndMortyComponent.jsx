import React, {useEffect, useState} from "react";
import axios from "axios";
import { Characters } from "./Characters";

const RickAndMortyComponent = () => {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    axios
      .get(url)
      .then((data) => {
        setCharacters(data.data.results);
        setInfo(data.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNextPage = () => {
    fetchCharacters(info.next);
    window.scrollTo(0, 0);
  };

  const handlePreviousPage = () => {
    fetchCharacters(info.prev);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);
  

  return(
    <div  className="main my-5 container"> 
      <h2 className="text-center mb-5">Rick and Morty</h2>
      <div className="container py-5">
        <nav>
          <ul className="pagination justify-content-center">
            {info.prev ? (
              <li className="page-item">
                <button className="page-link" onClick={handlePreviousPage}>
                  Previous
                </button>
              </li>
            ) : null}
            {info.next ? (
              <li className="page-item">
                <button className="page-link" onClick={handleNextPage}>
                  Next
                </button>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>

      <Characters characters={characters} />  
    </div>
  );
};

export { RickAndMortyComponent };