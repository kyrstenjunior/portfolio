import { dm_serif } from "@/app/fonts"

export default function Header() {
  return (
    <nav className="flex justify-between items-center h-10 pt-10">
      <h2 className={`${dm_serif.className} text-4xl`}>KJ</h2>
      <ul className="flex gap-9 text-xl">
        <li><a href="#">Sobre mim</a></li>
        <li><a href="#">Hardskills</a></li>
        <li><a href="#">Projetos</a></li>
        <li>
          <a href="#" className="py-2 px-3 bg-blue-700 hover:bg-blue-500 rounded-lg">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  )
}