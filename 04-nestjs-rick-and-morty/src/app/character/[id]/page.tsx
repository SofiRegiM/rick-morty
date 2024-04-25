"use client";  // Marca el archivo como Client Component

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';  // Usa 'next/navigation' en lugar de 'next/router'
import axios from 'axios';

// Define la interfaz para un personaje
interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
}

const CharacterDetailPage: React.FC = () => {
  const { id } = useParams();  // Usa 'useParams' para obtener el ID del parámetro de la ruta
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    if (id) {
      const fetchCharacter = async () => {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(response.data as Character);
      };
      fetchCharacter();
    }
  }, [id]);

  if (!character) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
    </div>
  );
};

export default CharacterDetailPage;