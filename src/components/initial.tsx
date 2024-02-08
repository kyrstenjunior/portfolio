import Image from "next/image";
import minhaImg from '../../public/minha-imagem.png';
import { fira, dm_serif } from "@/app/fonts";

export default function Initial() {
    return (
        <section className="flex items-center justify-center gap-16 mt-32">
            <div>
                <Image src={minhaImg} width={236} alt="Kyrsten Júnior" />
            </div>
            <div>
                <p className={`${fira.className} text-2xl`}>
                    Olá! Me chamo<br/>Kyrsten Júnior e eu sou
                </p>
                <h1 className={`${dm_serif.className} text-6xl`}>
                    Desenvolvedor<br/>FRONT END
                </h1>
            </div>
        </section>
    )
}