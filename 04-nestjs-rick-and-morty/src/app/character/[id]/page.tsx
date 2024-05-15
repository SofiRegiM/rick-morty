'use client' // Asegúrate de marcar como Client Component

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation' // Para obtener el ID de la URL
import axios from 'axios' // Para obtener datos de la API

interface Character {
  id: number
  name: string
  image: string
  status: string
  species: string
  gender: string
  origin: {
    name: string
  }
}

const CharacterDetailPage: React.FC = () => {
  const { id } = useParams() // Obtener el ID del parámetro de la ruta
  const [character, setCharacter] = useState<Character | null>(null)

  useEffect(() => {
    if (id) {
      const fetchCharacter = async () => {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`,
        ) // Obtener datos
        setCharacter(response.data) // Establecer el estado del personaje
      }

      fetchCharacter() // Llamar para obtener datos
    }
  }, [id]) // Ejecutar cuando el ID cambie

  if (!character) {
    return <div>Cargando...</div> // Mostrar mientras se cargan los datos
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
  )
}

export default CharacterDetailPage
