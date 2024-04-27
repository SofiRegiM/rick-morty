"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterList from '@/components/CharacterList';
import { Character } from '@/components/CharacterList';
 

const CharactersPage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      setCharacters(response.data.results);
    };

    fetchCharacters();
  }, []);

  const toggleFavorite = (id: number) => {
    const updatedCharacters = characters.map((character) =>
      character.id === id ? { ...character, isFavorite: !character.isFavorite } : character,
    );

    setCharacters(updatedCharacters);

    const updatedFavorites = updatedCharacters.filter((character) => character.isFavorite);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));  
  };

  return (
    <>
      <h1 className="text-center text-2xl my-4">Todos los Personajes</h1>  
      <CharacterList characters={characters} onToggleFavorite={toggleFavorite} />  
    </>
  );
};

export default CharactersPage;

