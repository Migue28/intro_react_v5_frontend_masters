import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("Inu");
  //const [breed, setBreed] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            /*When there is a change in the input, it will be catch and 
            that value will be the location value*/
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Location"
          ></input>
        </label>
        <label htmlFor="animal">
          Animals
          <select
            id="animal"
            value={animal}
            onChange={(event) => setAnimal(event.target.value)}
            onBlur={(event) => setAnimal(event.target.value)}
          >
            <option>All</option>
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        {/* <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
            onBlur={(event) => setBreed(event.target.value)}
            disabled={!breeds.length}
          >
            <option>All</option>
            {BREEDS.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label> */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
