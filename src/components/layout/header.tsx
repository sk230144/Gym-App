"use client";

import Link from "next/link";
import { Menu, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Logo from "../logo";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { Alert, AlertDescription } from "../ui/alert";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/classes", label: "Classes" },
  { href: "/memberships", label: "Memberships" },
  { href: "/#trainers", label: "Trainers" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const PasswordProtectionDialog = ({ onCorrectPassword }: { onCorrectPassword: () => void }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === '1234') {
            setError('');
            onCorrectPassword();
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle className="font-headline text-2xl text-center">Admin Access</DialogTitle>
                <DialogDescription className="text-center">
                    Please enter the password to access the members area.
                </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center">
                <Image 
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGlic3JxYjZpN3Y2eHI5NWJpcjFscDE3dzFkN3VwMmVvdWpydzYxZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LdOyjZ7i0wAJa/giphy.gif"
                    alt="Password Entry GIF"
                    width={150}
                    height={150}
                    unoptimized
                />
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                        setError('');
                    }}
                />
                {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
                 <DialogClose asChild>
                    <Button type="submit" className="w-full">
                        Enter
                    </Button>
                </DialogClose>
            </form>
        </DialogContent>
    );
};


const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isPasswordDialogOpen, setPasswordDialogOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const handleAdminNavigation = () => {
    setIsNavigating(true);
    router.push('/admin');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <Dialog open={isPasswordDialogOpen} onOpenChange={setPasswordDialogOpen}>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
                <Link
                key={link.href}
                href={link.href}
                className={cn(
                    "transition-colors hover:text-primary",
                    (pathname === link.href || (link.href.includes("#") && pathname === "/") || (link.href !== "/" && !link.href.includes("#") && pathname.startsWith(link.href)))
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                >
                {link.label}
                </Link>
            ))}
             <DialogTrigger asChild>
                <span className="transition-colors hover:text-primary text-muted-foreground cursor-pointer">
                    {isNavigating ? <Loader2 className="animate-spin" /> : 'Members'}
                </span>
            </DialogTrigger>
            </nav>
            <PasswordProtectionDialog onCorrectPassword={handleAdminNavigation} />
        </Dialog>


        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col p-6">
                <Link href="/" className="mb-8">
                  <Logo />
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                   <Dialog open={isPasswordDialogOpen} onOpenChange={setPasswordDialogOpen}>
                        <DialogTrigger asChild>
                            <span className="text-lg font-medium transition-colors hover:text-primary cursor-pointer text-left">
                                {isNavigating ? <Loader2 className="animate-spin" /> : 'Members'}
                            </span>
                        </DialogTrigger>
                        <PasswordProtectionDialog onCorrectPassword={handleAdminNavigation} />
                    </Dialog>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
