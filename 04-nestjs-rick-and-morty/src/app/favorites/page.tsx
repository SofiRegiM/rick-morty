"use client";

import React, { useEffect, useState } from 'react';
import CharacterList from '@/components/CharacterList';
import { Character } from '@/components/CharacterList';

// No incluyas el componente de navegación aquí si ya está en el `RootLayout`
const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]') as Character[];
    setFavorites(savedFavorites);  // Cargar favoritos desde localStorage
  }, []);

  const toggleFavorite = (id: number) => {
    const updatedFavorites = favorites.map((character) =>
      character.id === id ? { ...character, isFavorite: !character.isFavorite } : character,
    );
    setFavorites(updatedFavorites);

    const updatedLocalStorage = updatedFavorites.filter((character) => character.isFavorite);
    localStorage.setItem('favorites', JSON.stringify(updatedLocalStorage));  // Persistir en localStorage
  };

  return (
    <>
      <h1 className="text-center text-2xl my-4">Favoritos</h1>  
      <CharacterList characters={favorites} onToggleFavorite={toggleFavorite} />  
    </>
  );
};

export default FavoritesPage;