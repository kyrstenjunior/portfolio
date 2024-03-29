import { dm_serif } from "@/app/fonts"

export default function Header() {
  return (
    <nav className=" container m-auto px-24 h-10 pt-10 flex justify-between items-center">
      <h2 className={`${dm_serif.className} text-4xl`}>KJ</h2>
      <ul className="flex gap-9 text-xl">
        <li><a href="#sobre-mim">Sobre mim</a></li>
        <li><a href="#hardskills">Hardskills</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li>
          <a href="#" className="py-2 px-3 bg-blue-700 hover:bg-blue-500 rounded-lg">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  )
}