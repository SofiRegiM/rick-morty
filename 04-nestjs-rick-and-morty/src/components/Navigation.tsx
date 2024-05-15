import Link from 'next/link'

const Navigation: React.FC = () => (
  <nav className="flex justify-between p-4 bg-gray-800 text-white">
    <Link href="/characters">Todos los Personajes</Link>
    <Link href="/favorites">Favoritos</Link>
  </nav>
)

export default Navigation
