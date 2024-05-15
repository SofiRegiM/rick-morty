'use client'
import React from 'react'
import { Character as ImportedCharacter } from '@/components/CharacterList' // Renombra la importación
import Link from 'next/link'

export interface Character {
  // Declaración local
  id: number
  name: string
  image: string
  isFavorite: boolean
}

interface CharacterListProps {
  characters: ImportedCharacter[] // Usa la importación renombrada
  onToggleFavorite: (id: number) => void
}

const CharacterList: React.FC<CharacterListProps> = ({
  characters,
  onToggleFavorite,
}) => (
  <div className="grid grid-cols-3 gap-4 p-6">
    {characters.map((character) => (
      <div
        key={character.id}
        className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg"
      >
        <Link href={`/character/${character.id}`}>
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-40 object-cover"
          />
          <h3 className="text-lg font-semibold my-2">{character.name}</h3>
        </Link>
        <button
          onClick={() => onToggleFavorite(character.id)}
          className="text-lg"
        >
          {character.isFavorite ? '★' : '☆'}
        </button>
      </div>
    ))}
  </div>
)

export default CharacterList
