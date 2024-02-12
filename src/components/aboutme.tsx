import Image from "next/image";
import programming from '../../public/programming.svg';
import { fira, dm_serif } from "@/app/fonts";

export default function AboutMe() {
  return (
    <section className="flex items-center justify-between mt-28">
      <div className="w-1/2">
        <h2 className={`${dm_serif.className} text-3xl mb-7`}>Sobre Mim</h2>
        <article className={`${fira.className} text-2xl`}>
          Atuando com Angular, React, JavaScript, jQuery, PHP na Nairuz Marketing, liderando projetos bem-sucedidos de e-commerce em Magento e Liquid. Responsável por estimativas negociações de prazos e orientação da equipe. Também atendo chamados de suporte, mantendo contato direto com o cliente.
        </article>
      </div>
      <div className="w-1/2 flex justify-end">
        <Image src={programming} alt="Programando" width={456} />
      </div>
    </section>
  )
}