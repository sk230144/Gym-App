import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

const contactDetails = [
    {
        icon: MapPin,
        label: "Address",
        value: "123 Fitness Ave, Sweat City, 45678",
        href: "https://www.google.com/maps/search/?api=1&query=123+Fitness+Ave,Sweat+City",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "(123) 456-7890",
        href: "tel:1234567890",
    },
    {
        icon: Mail,
        label: "Email",
        value: "contact@flexfitgym.com",
        href: "mailto:contact@flexfitgym.com",
    },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl py-16 md:py-24 px-4">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Get In Touch</h1>
            <p className="mt-4 text-lg text-muted-foreground">We'd love to hear from you!</p>
        </div>

        <Card className="shadow-xl">
            <div className="grid md:grid-cols-2">
                <CardContent className="p-8 md:p-10 space-y-6">
                    <h2 className="text-2xl font-headline font-semibold">Contact Information</h2>
                    {contactDetails.map((detail) => (
                        <div key={detail.label} className="flex items-start">
                            <detail.icon className="h-6 w-6 text-primary mr-4 mt-1" />
                            <div>
                                <h3 className="font-semibold">{detail.label}</h3>
                                <a href={detail.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                    {detail.value}
                                </a>
                            </div>
                        </div>
                    ))}
                     <Button asChild className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white">
                        <a href="https://wa.me/11234567890?text=Hello%20FlexFit%20Gym!%20I'm%20interested%20in%20a%20membership." target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-2 h-5 w-5" />
                            WhatsApp Me
                        </a>
                    </Button>
                </CardContent>
                <div className="hidden md:block">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.225828135899!2d-122.4194154846813!3d37.77492957975875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f2e30f5b%3A0x446752f0b7c4a16f!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1620317650390!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy"
                        className="rounded-r-lg"
                    ></iframe>
                </div>
            </div>
        </Card>
    </div>
  );
}
