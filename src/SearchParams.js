import React, {useState} from "react";
import {ANIMALS, Breeds} from "@frontendmasters/pet";

const SearchParams = ()=>{
    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal] = useState("Dog");
    const [breed, setBreed] = useState("");
    // const [breed, setBreed] = useState([]);
    //location - current Location, setLocation --
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location:
                    <input id="location" onChange= {e=> setLocation(e.target.value)}
                    placeholder="Location" value={location} />
                </label>
                <label htmlFor="animal">
                    Animal 
                    <select id="animal"
                    value={animal}
                    onChange = {e=> setAnimal(e.target.value)}
                    onBlur={e=>setAnimal(e.target.value)}
                    >
                        <option>All</option>
                        {ANIMALS.map(animal =>{
                        return <option key={animal} value={animal}>{animal}</option>
                        })}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed 
                    <select id="breed"
                    value={breed}
                    onChange = {e=> setBreed(e.target.value)}
                    onBlur={e=>setBreed(e.target.value)}
                    disabled={!breed.length}>
                        <option>All</option>
                        {breed.map(breed =>{
                        return <option key={breed} value={breed}>{breed}</option>
                        })}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;