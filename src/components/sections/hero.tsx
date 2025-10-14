"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const slides = [
  {
    id: "hero-background",
    title: "Forge Your Strength, Define Your Future",
    description: "Welcome to FlexFit Gym, where we empower you to achieve your fitness goals with state-of-the-art facilities and expert guidance.",
    buttonText: "Join Now",
    buttonLink: "https://wa.me/11234567890?text=I%20want%20to%20join%20the%20gym",
  },
  {
    id: "hero-slide-2",
    title: "Unleash Your Potential",
    description: "Discover our wide range of classes, from high-intensity interval training to calming yoga sessions.",
    buttonText: "Explore Classes",
    buttonLink: "#facilities",
  },
  {
    id: "hero-slide-3",
    title: "Expert Trainers, Real Results",
    description: "Our certified personal trainers are here to guide you on your journey to a healthier lifestyle.",
    buttonText: "Meet the Team",
    buttonLink: "#trainers",
  },
];

const HeroSection = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    return (
        <section className="relative w-full">
            <Carousel 
                className="w-full"
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {slides.map((slide) => {
                        const slideImage = PlaceHolderImages.find(img => img.id === slide.id);
                        return (
                            <CarouselItem key={slide.id}>
                                <div className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white">
                                    {slideImage && (
                                        <Image
                                            src={slideImage.imageUrl}
                                            alt={slideImage.description}
                                            fill
                                            className="object-cover"
                                            priority={slide.id === 'hero-background'}
                                            data-ai-hint={slideImage.imageHint}
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-black/60" />
                                    <div className="relative z-10 text-center p-4 max-w-3xl mx-auto">
                                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold tracking-tight drop-shadow-lg">
                                            {slide.title}
                                        </h1>
                                        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-neutral-200 drop-shadow-md">
                                            {slide.description}
                                        </p>
                                        <div className="mt-8 flex justify-center">
                                            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold px-8 py-6 rounded-full transition-transform transform hover:scale-105">
                                                <Link href={slide.buttonLink} {...(slide.buttonLink.startsWith('https://wa.me') ? {target: '_blank', rel: 'noopener noreferrer'} : {})}>
                                                    {slide.buttonText}
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/30 hover:bg-black/50 border-none" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/30 hover:bg-black/50 border-none" />
            </Carousel>
        </section>
    );
};

export default HeroSection;
