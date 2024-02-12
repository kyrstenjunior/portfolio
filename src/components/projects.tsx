import Image from "next/image";
import placeholder from "../../public/placeholder.png";
import { tecnologias } from "@/database/tecnologias";
import { dm_serif } from "@/app/fonts";
import styled from "../../public/hardskills/styled-components.svg";
import ejs from "../../public/hardskills/ejs.svg";
import mongo from "../../public/hardskills/mongodb.svg";
import redirect from "../../public/redirect.svg";

export default function Projects() {
    return (
        <section className="mt-28">
            
            <h2 className={`${dm_serif.className} text-3xl`}>Projetos</h2>

            <div className="flex">
                <div className="mt-16 w-1/2">

                    <h3 className="text-2xl mb-3">Pokédex</h3>

                    <div className="flex gap-16 justify-between">
                        <div className="w-1/3">
                            <Image className="rounded-lg" src={placeholder} width={320} alt="placeholder-image" />
                        </div>

                        <div className="w-2/3">
                            <p className="mb-5">
                                Utilizando requisição HTTP com Axios, os dados recuperados foram manipulados no front utilizando os hooks useState, useEffect e useRef. Estilização feita com Styled-Components. O projeto possui sistema de busca de pokemons. Ao clicar em qualquer pokemon, é possível ver seu nome, tipo e imagem através de um modal que se abre. Este modal foi implementado com o Material UI.
                            </p>
                            <div className="flex gap-5">
                                <a href="https://github.com/kyrstenjunior/projeto-pokedex" target="_blank" className="py-2 px-3 bg-blue-700 hover:bg-blue-500 rounded-lg">
                                    Ver código
                                </a>
                                <a className="flex items-center gap-2 py-2 px-3 bg-slate-500 rounded-lg cursor-default">
                                    <span>Ver projeto</span>
                                    <Image src={redirect} width={12} alt="redirect-icon" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-950 rounded-lg mt-6 h-14 flex items-center gap-5 px-5">
                        <Image src={tecnologias[0].img} width={33} alt="Html" title="Html" />
                        <Image src={tecnologias[1].img} width={33} alt="Css" title="Css" />
                        <Image src={tecnologias[2].img} width={33} alt="Javascript" title="Javascript" />
                        <Image src={tecnologias[3].img} width={33} alt="React Js" title="React Js" />
                        <Image src={styled} width={33} alt="Styled Components" title="Styled Components" />
                    </div>
                </div>

                <div className="mt-16 w-1/2">

                    <h3 className="text-2xl mb-3">Portal de Notícias</h3>

                    <div className="flex gap-16 justify-between">
                        
                        <div className="w-1/3">
                            <Image className="rounded-lg" src={placeholder} width={320} alt="placeholder-image" />
                        </div>

                        <div className="w-2/3">
                            <p className="mb-5">
                            Projeto desenvolvido utilizando as dependências: express para melhor performance da aplicação, ejs para integração com o front end e mongoose para integrar o banco de dados não relacional do MongoDB Atlas.
                            </p>
                            <div className="flex gap-5">
                                <a href="https://github.com/kyrstenjunior/portal-noticias" target="_blank" className="py-2 px-3 bg-blue-700 hover:bg-blue-500 rounded-lg">
                                    Ver código
                                </a>
                                <a className="flex items-center gap-2 py-2 px-3 bg-slate-500 rounded-lg cursor-default">
                                    <span>Ver projeto</span>
                                    <Image src={redirect} width={12} alt="redirect-icon" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-950 rounded-lg mt-6 h-14 flex items-center gap-5 px-5">
                        <Image src={tecnologias[0].img} width={33} alt="Html" title="Html" />
                        <Image src={tecnologias[1].img} width={33} alt="Css" title="Css" />
                        <Image src={tecnologias[2].img} width={33} alt="Javascript" title="Javascript" />
                        <Image src={tecnologias[3].img} width={33} alt="React Js" title="React Js" />
                        <Image src={styled} width={33} alt="Styled Components" title="Styled Components" />
                    </div>
                </div>
            </div>

        </section>
    )
}