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
        {/* Front of Card - Neobrutalist */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-black border-[3px] border-yellow-400 shadow-[6px_6px_0px_0px_#facc15] overflow-hidden pointer-events-none">
          <img
            src={image}
            alt={`${title} project screenshot`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
          <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold uppercase tracking-wide border-2 border-black shadow-[2px_2px_0px_0px_#000]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-black uppercase tracking-wide text-white">{title}</h3>
          </div>
        </div>

        {/* Back of Card - Neobrutalist */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-black border-[3px] border-yellow-400 shadow-[6px_6px_0px_0px_#facc15] overflow-hidden">
          <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white pointer-events-auto">
            <div>
              <h3 className="text-2xl font-black uppercase text-yellow-400 mb-4">{title}</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4 font-medium">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-yellow-400 text-black text-xs font-bold uppercase tracking-wide border-2 border-black shadow-[2px_2px_0px_0px_#000]"
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
                    className="bg-yellow-400 text-black w-full inline-flex items-center justify-center text-sm font-black uppercase tracking-wide transition-all h-12 px-4 py-2 cursor-pointer border-[3px] border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                    title={`View ${title} project details and case study`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                  </a>
                ) : (
                  <Link
                    to={url}
                    className="bg-yellow-400 text-black w-full inline-flex items-center justify-center text-sm font-black uppercase tracking-wide transition-all h-12 px-4 py-2 cursor-pointer border-[3px] border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                    title={`View ${title} project details and case study`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                  </Link>
                )
              )}
              {showComingSoon && (
                <button disabled className="w-full inline-flex items-center justify-center text-sm font-bold uppercase h-12 px-4 py-2 opacity-50 cursor-not-allowed bg-gray-700 text-gray-400 border-[3px] border-gray-600">
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
