import { Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Dumbbell className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold font-headline text-primary">
        FlexFit Gym
      </span>
    </div>
  );
};

export default Logo;
