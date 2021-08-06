import React, {useState, useEffect} from 'react';
import './App.css';

export default function Catalog() {
    const [character, setCharacter] = useState();
    const [race, setRace] = useState();
    const [gender, setGender] = useState();

    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'your key'
        }
    
        const fetchData = async () => {
            const rawCharacters = await fetch('https://the-one-api.dev/v2/character', { headers: headers })
            const characters = await rawCharacters.json();
            const character = characters.docs[0];
            setCharacter(character.name)
            setRace(character.race)
            setGender(character.gender)
        };
    
        fetchData();
        }, []);

    return (
        <div>
            <h3>{character}</h3>
            <p>{race}</p>
            <p>{gender}</p>
        </div>
    );
}