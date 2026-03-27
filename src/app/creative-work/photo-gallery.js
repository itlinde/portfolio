"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

// expands the image to fill up the screen and blurs/dims the background
const PreviewModal = ({setPreviewOpen, imageSrc, previewClassName}) => {
    return (
        <div className="z-20 fixed inset-0 flex h-screen items-center justify-center bg-black/50"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    setPreviewOpen(false);
                }
        }}>
            <Image src={`/images/photo-gallery/${imageSrc}.jpeg`} className={`fixed w-fit h-5/6 rounded-xl object-cover`} width={500} height={500} alt="..."/>
        </div>
    );
};


export default function Gallery() {
    const [imageSrc, setImageSrc] = useState(null);
    const [previewClassName, setPreviewClassName] = useState(null);
    const [previewOpen, setPreviewOpen] = useState(false);

    return (
        <>
            <div id="masonry-gallery" className="columns-2 md:columns-3 gap-8 space-y-8">
                <Image id="ph-sunset" onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setPreviewOpen(true);
                        setImageSrc(e.target.id);
                        // setPreviewClassName(e.target.className);
                    }
                }} src="/images/photo-gallery/ph-sunset.jpeg" className="aspect-2/3 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                <Image id="granville-geese" onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setPreviewOpen(true);
                        setImageSrc(e.target.id);
                        // setPreviewClassName(e.target.className);
                    }
                }} src="/images/photo-gallery/granville-geese.jpeg" className="aspect-2/3 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                <Image src="/images/photo-gallery/lanterns.jpeg" className="aspect-square object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                <Image src="/images/photo-gallery/room-sunlight.jpeg" className="aspect-square object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                <Image src="/images/photo-gallery/parents-nice.jpeg" className="aspect-4/3 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                <Image src="/images/photo-gallery/france-train.jpeg" className="aspect-3/2 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                <Image src="/images/photo-gallery/hk-night.jpeg" className="aspect-3/2 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                <Image src="/images/photo-gallery/hk-green.jpeg" className="aspect-4/5 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                <Image src="/images/photo-gallery/flowers-salt-spring.jpeg" className="aspect-3/2 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                <Image src="/images/photo-gallery/eros-psyche.jpeg" className="aspect-2/3 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
                <Image id="nicole-aquarium" onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setPreviewOpen(true);
                        setImageSrc(e.target.id);
                        // setPreviewClassName(e.target.className);
                    }
                }} src="/images/photo-gallery/nicole-aquarium.jpeg" className="aspect-3/2 object-cover rounded-lg bg-secondary/15" width={500} height={500} alt="..."/>
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
            {previewOpen && (<PreviewModal 
                setPreviewOpen={setPreviewOpen}
                imageSrc={imageSrc}
                previewClassName={previewClassName}
                />
            )}
        </>
    );
}