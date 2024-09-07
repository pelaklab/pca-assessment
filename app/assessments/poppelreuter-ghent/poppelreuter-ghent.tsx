import Image from "next/image";

const PoppelreuterGhent: React.FC = () => {
    return <Image
        src="/poppelreuter-ghent-overlapping-figure.png"
        alt="overlapping-figures"
        objectFit="cover"
        height={500}
        width={500}
        className={"pt-10"}
    />
}

export { PoppelreuterGhent }