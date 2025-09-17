import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  index: number;
}

export const ProjectCard = ({
  title,
  description,
  image,
  tags,
  url,
  index,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group bg-neutral-900 rounded-xl overflow-hidden shadow-lg aspect-[16/9] flex flex-col justify-end relative transition-all duration-500"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image}
        alt={`${title} project screenshot - ${description.substring(0, 100)}...`}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-transform duration-700",
          isHovered ? "scale-105" : "scale-100"
        )}
      />
      <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-vision-dark/90 to-transparent p-6 flex flex-col justify-end",
            "transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-90"
          )}
        ></div>
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-vision-gold/20 text-vision-gold-light text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p
            className={cn(
              "text-gray-300 mb-4 transition-all duration-500 max-h-0 overflow-hidden",
              isHovered ? "max-h-20 opacity-100" : "opacity-0"
            )}
          >
            {description}
          </p>
          <div
            className={cn(
              "transition-all duration-500 transform",
              isHovered ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <Button asChild className="gold-gradient hover:gold-glow text-vision-black">
              <Link to={url} title={`View ${title} project details and case study`}>View Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
