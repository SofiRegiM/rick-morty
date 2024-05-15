'use client' // Asegúrate de marcar como Client Component

import { useRouter } from 'next/navigation' // Para redireccionar
import { useEffect } from 'react'

const HomePage: React.FC = () => {
  const router = useRouter()

  // Redireccionar a /characters al cargar
  useEffect(() => {
    router.push('/characters')
  }, [router])

  return null // No se muestra nada, ya que redirige automáticamente
}

export default HomePage
