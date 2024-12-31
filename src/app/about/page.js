import Image from "next/image";

export default function Page() {
    return (
    <div className="flex flex-wrap-reverse max-w-screen-xl mx-auto w-full items-center p-7 justify-center md:space-x-14">
        <div className="max-w-md p-4">
            <h2>about me</h2>
            <p>Hi! I'm Isabella, a front-end enthusiast and enjoyer of really good design. ⭐️</p>
            <br/>
            <p>I love front-end development because it combines my passion for design and software development into one! My goal is to one day work at one of the world's leading design firms, where I'll be able to contribute to products that impact millions worldwide.</p>
            <br/>
            <p>Recently, I've enjoyed working with: </p>
            <ul className="list-disc list-inside">
                <li>React & Next.js</li>
                <li>Tailwind CSS</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>Swift</li>
            </ul>
            <br/>
            <p>When I'm not geeking out over my latest project, you'll find me at concerts and jazz cafés, taking walks with my camera, making short films with friends, and saving up for my next trip abroad. ✈️</p>
        </div>
        <div className="w-80 min-w-screen-sm h-96 relative p-4">
            <Image src="/images/me2.png" fill={true} className="object-cover rounded-2xl shadow-md shadow-secondary-500/70 border-2 border-secondary-500 transition ease-in-out duration-500 hover:scale-105 hover:-skew-y-2 hover:shadow-xl hover:shadow-secondary-500/30" alt="Picture of Isabella"/>
        </div>
    </div>
    );
}