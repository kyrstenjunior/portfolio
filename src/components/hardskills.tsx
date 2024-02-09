import { dm_serif } from "@/app/fonts";
import Image from "next/image";
import imgStarFull from "../../public/star-colorfull.svg";
import type { NextApiRequest, NextApiResponse } from "next";


import imgHtml from "../../public/hardskills/html.svg";
import imgCss from "../../public/hardskills/css.svg";
import imgJs from "../../public/hardskills/javascript.svg";
import imgReact from "../../public/hardskills/react.svg";
import imgJquery from "../../public/hardskills/jquery.svg";
import imgAngular from "../../public/hardskills/angular.svg";
import imgGit from "../../public/hardskills/git.svg";
import imgPhp from "../../public/hardskills/php.svg";
import imgNode from "../../public/hardskills/node.svg";
import imgJava from "../../public/hardskills/java.svg";

export default function HardSkills() {



    return (
        <section className="mt-28">
            <h2 className={`${dm_serif.className} text-3xl`}>Hard Skills</h2>
            <div className="flex">
                <div className="flex flex-col items-center justify-center bg-blue-950 w-40 h-40 rounded-lg">
                    <span className="mb-3">Html</span>
                    <Image className="mb-2" src={imgHtml} width={55} alt="Html" />
                    <div className="flex">
                        <Image src={imgStarFull} alt="star-color" />
                        <Image src={imgStarFull} alt="star-color" />
                        <Image src={imgStarFull} alt="star-color" />
                    </div>
                </div>
            </div>
        </section>
    )
}