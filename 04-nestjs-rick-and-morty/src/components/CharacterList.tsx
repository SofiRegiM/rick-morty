import React from 'react';
import Link from 'next/link';
import { Character as ImportedCharacter } from '@/components/CharacterList';  // Cambia el nombre para evitar conflicto


export interface Character {
  id: number;
  name: string;
  image: string;
  isFavorite: boolean;  // Esto puede ser opcional
}

interface CharacterListProps {
  characters: Character[];
  onToggleFavorite: (id: number) => void;
}

const CharacterList: React.FC<CharacterListProps> = ({ characters, onToggleFavorite }) => (
  <div className="grid grid-cols-3 gap-4 p-6">
    {characters.map((character) => (
      <div
        key={character.id}
        className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <Link href={`/character/${character.id}`}>
          <img src={character.image} alt={character.name} className="w-full h-40 object-cover rounded-lg" />
          <h3 className="text-lg font-semibold my-2">{character.name}</h3>
        </Link>
        <p className="text-sm">Alive - Human</p>
        <p className="text-sm">Location: Earth</p>
        <button
          onClick={() => onToggleFavorite(character.id)}
          className="text-lg"
        >
          {character.isFavorite ? '★' : '☆'}
        </button>
      </div>
    ))}
  </div>
);

export default CharacterList;