import React from "react";

const Characters = ({characters}) => {
  return (
    <div className="container">
      <div className="row">
        {characters.map((item, index) => (
          <div key={index} className="card-rick-and-morty col-lg-3 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <img className="card-img-top" src={item.image} alt="character" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <hr />
                <p className="card-text">Specie:</p>
                <p className="card-text">{item.species}</p>
                <p className="card-text">Location:</p>
                <p className="card-text">{item.location.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Characters }