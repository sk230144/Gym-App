import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const JoinUsSection = () => {
    const joinUsImage = PlaceHolderImages.find(img => img.id === 'join-us-background');

    return (
        <section id="join" className="relative py-20 md:py-32 text-white">
            {joinUsImage && (
                <Image
                    src={joinUsImage.imageUrl}
                    alt={joinUsImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={joinUsImage.imageHint}
                />
            )}
            <div className="absolute inset-0 bg-black/70" />
            <div className="relative z-10 container mx-auto max-w-7xl px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-headline font-bold drop-shadow-lg">
                    Ready to Start Your Journey?
                </h2>
                <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-neutral-200 drop-shadow-md">
                    Become a part of the FlexFit community and take the first step towards a healthier, stronger you. Explore our membership options and find the perfect fit.
                </p>
                <div className="mt-8 flex justify-center">
                    <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold px-8 py-6 rounded-full transition-transform transform hover:scale-105">
                        <Link href="/memberships">View Memberships</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default JoinUsSection;
