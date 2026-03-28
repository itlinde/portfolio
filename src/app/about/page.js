import Image from "next/image";

export default function Page() {
    return (
    <div className="flex flex-wrap-reverse md:flex-nowrap max-w-screen-xl mx-auto w-full items-center p-7 justify-center md:space-x-14 mb-20">
        <div className="max-w-md p-4">
            <h2 className="md:text-left text-center mb-4">Hey, I'm Isabella!</h2>
            <p>Some quick facts about me:</p>
            <br/>
            <ul className="list-disc list-inside">
                <li>3rd year Integrated Engineering student @ UBC, specializing in Computer Engineering</li>
                <li>Currently on exchange @ EPFL in Switzerland in the Computer Science masters section</li>
                <li>Yearning for a baked good 😔</li>
            </ul>
            <br/>
            <p>When I'm not knee-deep in VS Code or Figma, you can find me cafe hopping or planning my next trip :)</p>
        </div>
        <div className="w-80 min-w-screen-sm h-96 relative p-4">
            <Image src="/images/me2.png" fill={true} className="object-cover rounded-2xl shadow-md shadow-secondary-500/70 border-2 border-secondary-500 transition ease-in-out duration-500 hover:scale-105 hover:-skew-y-2 hover:shadow-xl hover:shadow-secondary-500/30" alt="Picture of Isabella"/>
        </div>
    </div>
    );
}