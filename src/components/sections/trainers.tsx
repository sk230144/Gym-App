import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { trainers } from "@/lib/data";
import Image from "next/image";

const TrainersSection = () => {
  return (
    <section id="trainers" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Meet Our Expert Trainers</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated professionals ready to guide you on your fitness journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="items-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                        src={trainer.imageUrl}
                        alt={`Portrait of ${trainer.name}`}
                        width={128}
                        height={128}
                        className="object-cover"
                        data-ai-hint={trainer.imageHint}
                    />
                </div>
                <CardTitle className="font-headline pt-4">{trainer.name}</CardTitle>
                <CardDescription className="text-primary font-semibold">{trainer.specialization}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{trainer.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
