import Image from "next/image";

export default function Page() {
    return (
        <div className="flex flex-col px-7 max-w-screen-xl mx-auto justify-center">
            <h2 className="py-7 place-self-center">film & photography</h2>
            <section id="films">
                <h4>films & videos</h4>
                <p>Some personal film projects.</p>
            </section>
            <section id="photography" className="py-4">
                <h4>photography</h4>
                <p>Some of my favourite photos I've taken.</p>
            </section>
        </div>
    );
}