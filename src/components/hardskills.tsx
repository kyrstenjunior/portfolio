import { dm_serif } from "@/app/fonts";
import Image from "next/image";
import imgStarFull from "../../public/star-colorfull.svg";
import type { NextApiRequest, NextApiResponse } from "next";


import imgHtml from "../../public/hardskills/html.svg";

import { tecnologias } from "@/database/tecnologias";
import Box from "./boxTech";

export default function HardSkills() {
    return (
        {{ tecnologias.map((tech) => (
            <Box currentFont={dm_serif.className} img={tech.img} starFull={imgStarFull} />
        ))}}
    )
}