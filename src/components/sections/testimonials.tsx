import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Jessica P.",
    quote: "FlexFit Gym has completely changed my outlook on fitness. The trainers are incredibly supportive, and the community feels like family. I've never felt more motivated!",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Mark T.",
    quote: "The facilities are top-notch! I have everything I need for my weightlifting routine. The staff is friendly and always willing to help. Highly recommend this place.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Sarah L.",
    quote: "I was a beginner and felt intimidated by gyms, but FlexFit was so welcoming. The group classes are fun, and I've made great friends while getting healthier.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">What Our Members Say</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Real stories from real people in our community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find(img => img.id === testimonial.id);
            return (
                <Card key={testimonial.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    {image && (
                    <div className="aspect-w-3 aspect-h-2">
                        <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full"
                        data-ai-hint={image.imageHint}
                        />
                    </div>
                    )}
                    <CardContent className="p-6 flex-grow flex flex-col">
                        <div className="flex items-center mb-2">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                            ))}
                        </div>
                        <blockquote className="italic text-muted-foreground flex-grow">
                            "{testimonial.quote}"
                        </blockquote>
                        <p className="mt-4 font-bold text-primary text-right">- {testimonial.name}</p>
                    </CardContent>
                </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
