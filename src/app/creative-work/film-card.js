import Image from "next/image";

export default function FilmCard({ title, description, videoLink }) {
    return (
        <div id="film-card" className="group flex flex-wrap sm:flex-nowrap h-fit w-full max-w-screen-md place-self-center p-6 items-start rounded-2xl bg-secondary/15 hover:bg-secondary-500/40 shadow-xl shadow-secondary-950/10 transition ease-in-out duration-300 hover:-translate-y-1 outline outline-0 hover:outline-2 outline-secondary-500/60">
            <div className="shrink w-full">
                <iframe fill="true" className="w-full aspect-video object-cover rounded-xl" src={videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
            </div>
            <div className="shrink-0 h-fit sm:pl-7 sm:pt-0 sm:w-64 w-full pt-3">
                <h5 className="block">{title}</h5>
                <p className="block">{description}</p>
            </div>
        </div>
    );
}