import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const OwnerSection = () => {
    const ownerImage = PlaceHolderImages.find(img => img.id === 'owner-1');

    return (
        <section id="owner" className="py-16 md:py-24 bg-card">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">A Word From Our Founder</h2>
                </div>
                <Card className="overflow-hidden shadow-xl">
                    <div className="grid md:grid-cols-3">
                        <div className="md:col-span-1">
                            {ownerImage && (
                                <div className="relative h-full min-h-[300px]">
                                    <Image
                                        src={ownerImage.imageUrl}
                                        alt={ownerImage.description}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={ownerImage.imageHint}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="md:col-span-2">
                            <CardContent className="p-8 md:p-12">
                                <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary">John Flex</h3>
                                <p className="text-md text-muted-foreground mb-4">Founder & Head Coach</p>
                                <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
                                    "Fitness is not about being better than someone else. It's about being better than you used to be."
                                </blockquote>
                                <p className="mt-6 text-foreground leading-relaxed">
                                    "I started FlexFit Gym with a simple idea: to create a space where anyone, regardless of their starting point, could find the support and tools they need to build a healthier, stronger life. Fitness transformed my own life, and my passion is to share that transformative power with our community. Here, we're more than just a gym; we're a family dedicated to lifting each other up. Welcome to FlexFit."
                                </p>
                            </CardContent>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}

export default OwnerSection;
