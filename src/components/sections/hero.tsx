import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center p-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold tracking-tight drop-shadow-lg">
          Forge Your Strength, Define Your Future
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-neutral-200 drop-shadow-md">
          Welcome to FlexFit Gym, where we empower you to achieve your fitness goals with state-of-the-art facilities and expert guidance.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold px-8 py-6 rounded-full transition-transform transform hover:scale-105">
            <Link href="#about">Join Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
