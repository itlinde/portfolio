import Image from "next/image";
import FilmCard from "./film-card";
import { Carousel } from "flowbite-react";


export default function Page() {
    return (
        <div className="flex flex-col px-7 max-w-screen-lg mx-auto justify-center">
            <h2 className="py-7 place-self-center">film & photography</h2>
            <section id="films">
                <h4>films & videos</h4>
                <p className="pb-5">Small film projects!</p>
                <FilmCard title={"Saviour Complex"}
                        description={"A music video project to Saviour Complex by Pheobe Bridgers."}
                        videoLink={"https://www.youtube.com/embed/sr1LzMzJdgo?si=Xtg5FwG6GNLEG6j3"}
                />

            </section>
            <section id="photography" className="py-6">
                <h4>photography</h4>
                <p className="pb-5">Some of my favourite photos I've taken:</p>
                <div id="masonry-gallery" className="columns-2 md:columns-3 gap-8 space-y-8">
                    <Image src="/images/photo-gallery/ph-sunset.jpeg" className="aspect-2/3 object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/granville-geese.jpeg" className="aspect-2/3 object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/lanterns.jpeg" className="aspect-square object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/room-sunlight.jpeg" className="aspect-square object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/parents-nice.jpeg" className="aspect-4/3 object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/france-train.jpeg" className="aspect-3/2 object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/hk-night.jpeg" className="aspect-3/2 object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/hk-green.jpeg" className="aspect-4/5 object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/flowers-salt-spring.jpeg" className="aspect-3/2 object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/eros-psyche.jpeg" className="aspect-2/3 object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/nicole-aquarium.jpeg" className="aspect-3/2 object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/stars.jpeg" className="aspect-2/3 object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/sam-window.jpeg" className="aspect-3/2 object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/lanterns-night.jpeg" className="aspect-4/3 object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/circle-k.jpeg" className="aspect-3/2 object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/fish.jpeg" className="aspect-2/3 object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/me-aquarium.jpeg" className="aspect-3/2 object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/france-boats.jpeg" className="aspect-square object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/moon.jpeg" className="aspect-4/5 object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/ph-boat.jpeg" className="aspect-4/5 object-cover rounded-lg" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/japan-reflection.jpeg" className="aspect-4/3 object-cover rounded-lg" width={500} height={500} alt="..."/>
                    
                </div>
            </section>
        </div>
    );
}