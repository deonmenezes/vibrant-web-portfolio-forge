
import { useState } from "react";
import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    platform: string;
    url: string;
  }[];
}

export const TeamMemberCard = ({
  name,
  role,
  image,
  bio,
  socials,
}: TeamMemberCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-[400px] w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative w-full h-full transition-all duration-500 preserve-3d cursor-pointer",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front Side - Neobrutalist */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full overflow-hidden bg-card border-[3px] border-black dark:border-yellow-400 shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#facc15]">
            <div className="h-3/5 overflow-hidden border-b-[3px] border-black dark:border-yellow-400">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black uppercase">{name}</h3>
              <p className="text-yellow-500 dark:text-yellow-400 font-bold uppercase text-sm tracking-wide">{role}</p>
              <div className="flex space-x-3 mt-4">
                {socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    className="w-8 h-8 bg-black dark:bg-yellow-400 border-2 border-black dark:border-yellow-400 flex items-center justify-center text-white dark:text-black hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_#facc15] dark:hover:shadow-[4px_4px_0px_0px_#000] transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.platform}</span>
                    <div className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back Side - Neobrutalist */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-yellow-400 border-[3px] border-black shadow-[6px_6px_0px_0px_#000] p-6 flex flex-col justify-center text-black">
            <h3 className="text-xl font-black uppercase mb-3">{name}</h3>
            <p className="text-black/70 font-bold uppercase text-sm mb-4">{role}</p>
            <p className="text-black/80 font-medium">{bio}</p>
            <div className="flex space-x-3 mt-6">
              {socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="w-8 h-8 bg-black border-2 border-black flex items-center justify-center text-yellow-400 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_#000] transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.platform}</span>
                  <div className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
