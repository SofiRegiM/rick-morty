'use client'
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import CharacterList from '@/components/CharacterList';
import { Character } from '@/components/CharacterList';

const CharactersPage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  // Inicializar personajes con un valor predeterminado o desde una fuente externa
  useEffect(() => {
    const initialCharacters: Character[] = [
      { id: 1, name: 'Rick Sanchez', image: 'url/to/image.jpg', isFavorite: false },
      // Añade otros personajes según sea necesario
    ];
    setCharacters(initialCharacters);
  }, []);

  const toggleFavorite = (id: number) => {
    const updatedCharacters = characters.map((character) =>
      character.id === id ? { ...character, isFavorite: !character.isFavorite } : character,
    );
    setCharacters(updatedCharacters);
  };

  return (
    <>
      <Navigation />
      <h1 className="text-center text-2xl my-4">Todos los Personajes</h1>
      <CharacterList characters={characters} onToggleFavorite={toggleFavorite} />  {/* Pasa la lista correcta */}
    </>
  );
};

export default CharactersPage;
