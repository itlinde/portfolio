import Image from "next/image";
import FilmCard from "./film-card";
import Carousel from "./carousel";

export default function Page() {
    return (
        <div className="flex flex-col px-7 mb-14 max-w-screen-lg mx-auto justify-center space-y-8">
            <div id="title" className="">
                <h2 className="pt-7 place-self-center">my little hobbies</h2>
                <div className="flex justify-center space-x-6 pb-7 border-b border-secondary">
                    <a href="#drawings-paintings" className="font-averia block p-1 px-3 hover:text-textPrimary hover:bg-secondary/30 rounded-md transition ease-in-out duration-200">drawings & paintings</a>
                    <a href="#photography" className="font-averia block p-1 px-3 hover:text-textPrimary hover:bg-secondary/30 rounded-md transition ease-in-out duration-200">photography</a>
                    <a href="#films" className="font-averia block p-1 px-3 hover:text-textPrimary hover:bg-secondary/30 rounded-md transition ease-in-out duration-200">films & videos</a>
                </div>
            </div>
            <section id="drawings-paintings" className="">
                <div className="sticky top-16 bg-background">
                    <h4 className="">drawings & paintings</h4>
                    <p className="pb-5">Some works that were fun to make:</p>
                </div>
                {/* behaviour BEFORE md breakpoint */}
                <div className="md:hidden flex space-x-8">
                    <Image src="/images/drawings-paintings/japan-sketch.jpg" className="w-3/5 h-fit object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <div className="flex flex-col w-2/5 space-y-8 h-fit">
                        <Image src="/images/drawings-paintings/anna-karenina.jpg" className="object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                        <Image src="/images/drawings-paintings/water-lilies.jpg" className="object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    </div>
                </div>
                {/* behaviour AFTER md breakpoint */}
                <div className="hidden md:flex justify-between gap-8 overflow-hidden overflow-x-scroll snap-x snap-mandatory overscroll-x-contain">
                    <Image src="/images/drawings-paintings/anna-karenina.jpg" className="snap-center flex-1 object-cover rounded-lg bg-secondary/15 aspect-square " width={300} height={300} alt="..."/>
                    <Image src="/images/drawings-paintings/japan-sketch.jpg"  className="snap-center flex-[0.75] object-cover rounded-lg bg-secondary/15" width={200} height={300} alt="..."/>
                    <Image src="/images/drawings-paintings/water-lilies.jpg"  className="snap-center flex-1 object-cover rounded-lg bg-secondary/15 aspect-square " width={300} height={300} alt="..."/>
                </div>
            </section>
            
            <section id="photography" className="">
                <div className="sticky top-16 bg-background">
                    <h4 className="">photography</h4>
                    <p className="pb-5">I'm unhealthily attached to my camera. Here are some of my favourites :)</p>
                </div>
                <div id="masonry-gallery" className="columns-2 md:columns-3 gap-8 space-y-8">
                    <Image src="/images/photo-gallery/ph-sunset.jpeg" className="aspect-2/3 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/granville-geese.jpeg" className="aspect-2/3 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/lanterns.jpeg" className="aspect-square object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/room-sunlight.jpeg" className="aspect-square object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/parents-nice.jpeg" className="aspect-4/3 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/france-train.jpeg" className="aspect-3/2 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/hk-night.jpeg" className="aspect-3/2 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/hk-green.jpeg" className="aspect-4/5 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/flowers-salt-spring.jpeg" className="aspect-3/2 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/eros-psyche.jpeg" className="aspect-2/3 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/nicole-aquarium.jpeg" className="aspect-3/2 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/stars.jpeg" className="aspect-2/3 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/sam-window.jpeg" className="aspect-3/2 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/lanterns-night.jpeg" className="aspect-4/3 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/circle-k.jpeg" className="aspect-3/2 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/fish.jpeg" className="aspect-2/3 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/me-aquarium.jpeg" className="aspect-3/2 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/france-boats.jpeg" className="aspect-square object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/moon.jpeg" className="aspect-4/5 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/ph-boat.jpeg" className="aspect-4/5 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    <Image src="/images/photo-gallery/japan-reflection.jpeg" className="aspect-4/3 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                    
                </div>
            </section>

            <section id="films" className="">
                <div className="sticky top-16 bg-background z-[5] mb-2 ">
                    <h4><span className="tracking-wide">f</span>ilms & videos</h4>
                    <p className="pb-5">Small film projects!</p>
                </div>
                <div id="carousel" className="space-y-8">
                    <FilmCard title={"Bowen 2024"}
                            description={"Annual summer trip with my high school friends!"}
                            videoLink={"https://www.youtube.com/embed/8NAELVM96gI?si=pB1N9DHJ5KU_fi36"}
                    />
                    <FilmCard title={"Saviour Complex"}
                            description={"A music video project to Saviour Complex by Pheobe Bridgers."}
                            videoLink={"https://www.youtube.com/embed/sr1LzMzJdgo?si=16QcjdVn7QJBeyy1"}
                    />

                    {/* <Carousel/>  */}
                </div>

            </section>
        </div>
    );
}