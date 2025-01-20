import Image from "next/image";

export default function DrawingsGallery() {
    return (
        <div>
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
      </div>
    );
}