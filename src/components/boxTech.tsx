import Image from "next/image";

export default function Box({currentFont, img, starFull}) {
    return (
        <section className="mt-28">
        <h2 className={`${currentFont} text-3xl`}>Hard Skills</h2>
        <div className="flex">
            <div className="flex flex-col items-center justify-center bg-blue-950 w-40 h-40 rounded-lg">
                <span className="mb-3">Html</span>
                <Image className="mb-2" src={img} width={55} alt="Html" />
                <div className="flex">
                    <Image src={starFull} alt="star-color" />
                    <Image src={starFull} alt="star-color" />
                    <Image src={starFull} alt="star-color" />
                </div>
            </div>
        </div>
    </section>
    )
}