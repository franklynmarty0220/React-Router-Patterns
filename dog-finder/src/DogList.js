import React from "react";
import {Link} from "react-router-dom";
import "./DogList.css";

function DogList({dogs}) {
    return(
        <div className="DogList">
            <div className="col">
                <h1 className="Doglist-center"> Here is our list of Doggos! 
                </h1>
                <div className="row">
                {dogs.map(dog => (
                    <div className="col-3 text-center" key={(dog.name)}>
                        <img src={d.src} alt={d.name} />
                        <h3 className="mt-3">
                          <Link to={`/dogs/${d.name.toLowerCase()}`}>{dog.name}</Link>
                        </h3>
                    </div>
                     ))}
                </div>
            </div>
        </div>
           
    )
}

export default DogList;