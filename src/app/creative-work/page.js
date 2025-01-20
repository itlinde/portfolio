import Image from "next/image";
import FilmCard from "./film-card";
import Carousel from "./carousel";
import Gallery from "./photo-gallery";
import DrawingsGallery from "./drawings-gallery";
import Header from "./header";

export default function Page() {
    return (
        <div className="flex flex-col px-7 mb-14 max-w-screen-lg mx-auto justify-center space-y-8">      
            <Header />

            <section id="drawings-paintings" className="">
                <div className="sticky top-16 bg-background">
                    <h4 className="">drawings & paintings</h4>
                    <p className="pb-5">Some works that were fun to make:</p>
                </div>
                <DrawingsGallery />
            </section>
            
            <section id="photography" className="">
                <div className="sticky top-16 bg-background">
                    <h4 className="">photography</h4>
                    <p className="pb-5">I'm unhealthily attached to my camera. Here are some of my favourites :)</p>
                </div>
                <Gallery />
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