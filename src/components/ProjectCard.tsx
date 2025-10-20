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
  
  // Check if URL is external (starts with http/https) or internal
  const isExternalUrl = url.startsWith('http://') || url.startsWith('https://');
  
  // Don't render button if URL is "none", empty or just "#"
  const hasValidUrl = url && url !== '#' && url !== 'none';
  
  // Show "Coming Soon" only if URL is empty but not "none"
  const showComingSoon = (!url || url === '#') && url !== 'none';

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
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-neutral-900 rounded-xl overflow-hidden shadow-lg pointer-events-none">
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
          <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white pointer-events-auto">
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
            <div className="flex justify-center relative z-50">
              {hasValidUrl && (
                isExternalUrl ? (
                  <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="gold-gradient hover:gold-glow text-vision-black w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 cursor-pointer"
                    title={`View ${title} project details and case study`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                  </a>
                ) : (
                  <Link 
                    to={url} 
                    className="gold-gradient hover:gold-glow text-vision-black w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 cursor-pointer"
                    title={`View ${title} project details and case study`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                  </Link>
                )
              )}
              {showComingSoon && (
                <button disabled className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 opacity-50 cursor-not-allowed bg-muted text-muted-foreground">
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
