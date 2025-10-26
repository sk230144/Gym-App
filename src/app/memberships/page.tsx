import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const plans = [
    {
        name: "Basic Fit",
        price: "$29",
        features: [
            "Access to all gym equipment",
            "Standard locker room access",
            "Monthly fitness assessment",
        ],
    },
    {
        name: "Pro Flex",
        price: "$49",
        features: [
            "All Basic Fit features",
            "Access to all group classes",
            "Personalized workout plan",
            "Sauna and spa access",
        ],
        popular: true,
    },
    {
        name: "Ultimate Warrior",
        price: "$79",
        features: [
            "All Pro Flex features",
            "Unlimited personal training sessions",
            "Guest passes",
            "Nutritional guidance",
        ],
    },
];

export default function MembershipsPage() {
  return (
    <div className="bg-background text-foreground">
        <section className="text-center py-12 md:py-20 px-4 bg-card">
            <div className="relative inline-block mb-4">
                  <Image src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3Y5d3huMjRuZ2phMXQwc3VlMXY3MGVsenZwZ2N1cmFtaG5kNDU3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/axu6dFuca4HKM/giphy.gif" alt="Workout GIF" width={150} height={150} className="rounded-full mx-auto" />
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-extrabold text-primary animate-pulse">
                Get a 5-Day Free Trial!
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience everything FlexFit Gym has to offer, completely free for 5 days. No commitment required.
            </p>
        </section>

        <section className="py-16 md:py-24 px-4">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">Choose Your Plan</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <Card key={plan.name} className={`flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 ${plan.popular ? 'border-primary border-2' : ''}`}>
                             {plan.popular && <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-bold">Most Popular</div>}
                            <CardHeader className="text-center">
                                <CardTitle className="text-3xl font-headline">{plan.name}</CardTitle>
                                <CardDescription className="text-4xl font-bold text-primary">{plan.price}<span className="text-lg font-normal text-muted-foreground">/month</span></CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <ul className="space-y-4">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start">
                                            <Check className="h-5 w-5 text-green-500 mr-3 mt-1 shrink-0" />
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>Select Plan</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="text-center py-16 md:py-20 px-4 bg-card">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Our team is here to help you choose the best plan for your fitness goals.</p>
            <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
            </Button>
        </section>
    </div>
  );
}
