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
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group aspect-[16/9] [perspective:1000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]",
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        )}
      >
        {/* Front of Card */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-neutral-900 rounded-xl overflow-hidden shadow-lg">
          <img
            src={image}
            alt={`${title} project screenshot`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-vision-dark/90 to-transparent" />
          <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
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
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-vision-dark via-vision-black to-neutral-900 rounded-xl overflow-hidden shadow-lg">
          <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
              <p className="text-white text-sm leading-relaxed mb-4">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-vision-gold/20 text-vision-gold-light text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <Button asChild className="gold-gradient hover:gold-glow text-vision-black w-full">
                <Link to={url} title={`View ${title} project details and case study`}>View Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
