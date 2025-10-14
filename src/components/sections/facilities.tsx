import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const facilities = [
  {
    id: "facility-weights",
    name: "Weights Area",
    description: "Fully equipped with free weights, benches, and squat racks to build your strength.",
  },
  {
    id: "facility-cardio",
    name: "Cardio Zone",
    description: "A wide range of treadmills, ellipticals, and bikes to get your heart pumping.",
  },
  {
    id: "facility-yoga",
    name: "Yoga Studio",
    description: "A peaceful space for yoga, meditation, and stretching classes to improve flexibility.",
  },
];

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Our World-Class Facilities</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to succeed, all under one roof.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => {
            const image = PlaceHolderImages.find(img => img.id === facility.id);
            return (
              <Card key={facility.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                <CardHeader>
                  <CardTitle className="font-headline">{facility.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
