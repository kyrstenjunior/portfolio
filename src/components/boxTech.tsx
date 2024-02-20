import Image from "next/image";

export default function Box({ img, starFull, title, stars}: {img: string, starFull: string, title: string, stars: number}) {
    const arr: number[] = [];
    const dif: number[] = [];
    const verifica: number = 3 - stars;

    for(let i = 1; i <= stars; i++) {
        arr.push(i);
    }

    for(let i = 1; i <= verifica; i++) {
        dif.push(i)
    }

    return (
        <div className="flex flex-col items-center justify-center bg-blue-950 w-40 h-40 rounded-lg hover:drop-shadow-lg hover:shadow-lg hover:shadow-slate-800">
            <span className="mb-3 capitalize">{ title }</span>
            <Image className="mb-2" src={img} width={55} alt="Html" />
            <div className="flex">

                { arr.map((index) => (
                    <Image key={index} src={starFull} alt="star-color" />
                )) }

                { dif.map((index) => (
                    <Image key={index} className="grayscale" src={starFull} alt="star-disabled" />
                )) }

            </div>
        </div>
    )
}