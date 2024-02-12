import Image from "next/image";

export default function Box({ img, starFull, title}: {img: string, starFull: string, title: string}) {
    return (
        <div className="flex flex-col items-center justify-center bg-blue-950 w-40 h-40 rounded-lg">
            <span className="mb-3 capitalize">{ title }</span>
            <Image className="mb-2" src={img} width={55} alt="Html" />
            <div className="flex">
                <Image src={starFull} alt="star-color" />
                <Image src={starFull} alt="star-color" />
                <Image className="grayscale" src={starFull} alt="star-disabled" />
            </div>
        </div>
    )
}