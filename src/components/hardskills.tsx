import { dm_serif } from "@/app/fonts";
import { tecnologias } from "@/database/tecnologias";

import imgStarFull from "../../public/star-colorfull.svg";

import Box from "./boxTech";

export default function HardSkills() {
    return (
        <section className="mt-28">
            <h2 className={`${dm_serif.className} text-3xl`}>Hard Skills</h2>
            <div className="flex gap-16 justify-between mt-8">
                {
                    tecnologias.map((tech) => (
                        tech.id <= 5 ? (
                            <Box key={tech.id} img={tech.img} starFull={imgStarFull} title={tech.name} />
                        ) : null
                    ))
                }
            </div>
            <div className="flex gap-16 justify-between mt-16">
                {
                    tecnologias.map((tech) => (
                        tech.id > 5 ? (
                            <Box key={tech.id} img={tech.img} starFull={imgStarFull} title={tech.name} />
                        ) : null
                    ))
                }
            </div>
        </section>
    )
}