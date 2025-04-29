
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export const ServiceCard = ({
  title,
  description,
  icon,
  delay = 0,
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "group p-8 rounded-xl border border-border bg-card hover:border-primary/30",
        "transition-all duration-300 animate-fade-in opacity-0",
        "hover:shadow-lg hover:shadow-primary/5"
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards"
      }}
    >
      <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};
