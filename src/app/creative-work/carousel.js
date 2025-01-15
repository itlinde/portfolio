"use client";

import FilmCard from "./film-card";
import { useEffect } from "react";

export default function Carousel() {
    useEffect(() => {
        const slides = document.getElementById("slides");
        const prevButton = document.getElementById("prev");
        const nextButton = document.getElementById("next");

        const totalSlides = slides.children.length;
        
        if (nextButton && prevButton) {
            nextButton.addEventListener("click", nextSlide);
            prevButton.addEventListener("click", prevSlide);    
        }
    }, []);
    
    let currentSlide = 0; // starts at 0
    
    // update carousel slide positions
    function switchSlides() {
        const offset = -currentSlide * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }
    
    // when next button is clicked:
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides; // uses % to 'wrap' back to 0 if currentSlide exceeds (totalSlides - 1)
        switchSlides();
    }
    
    // when previous button is clicked:
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        switchSlides();
    }

    return (
    <div className="max-w-screen-lg">
        <button id="prev" className="absolute flex items-center justify-center w-9 h-9 left-2 top-1/2 transform -translate-y-1/2 bg-secondary text-textPrimary rounded-xl">
            <p>prev</p>
        </button>
        <button id="prev" className="absolute flex items-center justify-center w-9 h-9 left-2 top-1/2 transform -translate-y-1/2 bg-secondary text-textPrimary rounded-xl">
            <p>next</p>
        </button>

        <div id="carousel" className="">
            <div id="slides" className="flex transition-transform duration-500">
                <FilmCard title={"Saviour Complex"}
                        description={"A music video project to Saviour Complex by Pheobe Bridgers."}
                        videoLink={"https://www.youtube.com/embed/sr1LzMzJdgo?si=Xtg5FwG6GNLEG6j3"}
                        />
                <FilmCard title={"Saviour Complex"}
                        description={"A music video project to Saviour Complex by Pheobe Bridgers."}
                        videoLink={"https://www.youtube.com/embed/sr1LzMzJdgo?si=Xtg5FwG6GNLEG6j3"}
                        />
            </div>
        </div>
    </div>
    );
}