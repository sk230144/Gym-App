import { trainers } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

const galleryItems = [
  {
    id: "class-strength",
    type: "image",
    title: "Personalized Strength Training",
    description: "Our trainers work with you to build a plan that meets your strength goals.",
  },
  {
    id: "video-1",
    type: "video",
    title: "Dynamic HIIT Sessions",
    description: "Experience our high-energy classes that are designed to maximize calorie burn.",
    videoUrl: "https://videos.pexels.com/video-files/853886/853886-hd.mp4",
  },
  {
    id: "class-yoga",
    type: "image",
    title: "Restorative Yoga",
    description: "Find your balance and improve flexibility in our calming yoga studio.",
  },
  {
    id: "class-hiit",
    type: "image",
    title: "Group Motivation",
    description: "Achieve more together in our supportive and energetic group classes.",
  },
];

export default function ClassesPage() {
  return (
    <div className="container mx-auto max-w-7xl py-16 md:py-24 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Classes & Training</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          See our expert trainers in action and discover a class that's right for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainers.map((trainer, index) => (
          <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardContent className="p-6 items-center flex flex-col">
              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image
                      src={trainer.imageUrl}
                      alt={`Portrait of ${trainer.name}`}
                      width={128}
                      height={128}
                      className="object-cover"
                      data-ai-hint={trainer.imageHint}
                  />
              </div>
              <h3 className="font-headline text-xl font-bold text-primary">{trainer.name}</h3>
              <p className="text-sm text-primary font-semibold mb-2">{trainer.specialization}</p>
              <p className="text-muted-foreground text-sm flex-grow">{trainer.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-20 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">In the Zone</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A glimpse into the energy and focus at FlexFit Gym.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {galleryItems.map((item) => {
                const image = PlaceHolderImages.find(img => img.id === item.id);
                return (
                    <Card key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                        {item.type === 'video' ? (
                             <div className="aspect-video">
                                <video
                                    src={item.videoUrl}
                                    className="object-cover w-full h-full"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                                    <PlayCircle className="w-12 h-12 text-white/80 mb-2 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                    <p className="text-sm text-neutral-200">{item.description}</p>
                                </div>
                             </div>
                        ) : (
                            image && (
                                <>
                                    <Image
                                        src={image.imageUrl}
                                        alt={image.description}
                                        width={800}
                                        height={600}
                                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={image.imageHint}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                        <p className="text-sm text-neutral-200">{item.description}</p>
                                    </div>
                                </>
                            )
                        )}
                    </Card>
                );
            })}
        </div>
    </div>
  );
}
