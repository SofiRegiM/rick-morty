"use client";  // Asegúrate de marcar como Client Component para usar hooks

import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import CharacterList from '@/components/CharacterList';
import { Character } from '@/components/CharacterList';
import axios from 'axios';

// Una función para cargar personajes desde la API
const fetchCharacters = async () => {
  const response = await axios.get('https://rickandmortyapi.com/api/character');
  return response.data.results;
};

const HomePage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetchCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  function toggleFavorite(id: number): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
      <Navigation />  // Incluye la navegación
      <h1 className="text-center text-2xl my-4">Todos los Personajes</h1>
      <CharacterList characters={characters} onToggleFavorite={toggleFavorite} />
    </>
  );
};

export default HomePage;
