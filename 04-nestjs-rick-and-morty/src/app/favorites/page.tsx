"use client";

import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import CharacterList, { Character } from '@/components/CharacterList';  // Importa la interfaz correctamente

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]') as Character[];
    setFavorites(savedFavorites);
  }, []);

  const toggleFavorite = (id: number) => {
    const updatedFavorites = favorites.map((character) =>
      character.id === id ? { ...character, isFavorite: !character.isFavorite } : character,
    );
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <Navigation />
      <h1 className="text-center text-2xl my-4">Favoritos</h1>
      <CharacterList characters={favorites} onToggleFavorite={toggleFavorite} />
    </>
  );
};

export default FavoritesPage;