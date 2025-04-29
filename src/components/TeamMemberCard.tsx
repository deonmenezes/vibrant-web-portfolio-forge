
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
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full rounded-xl overflow-hidden bg-card shadow-lg">
            <div className="h-3/5 overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-primary font-medium">{role}</p>
              <div className="flex space-x-3 mt-4">
                {socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{social.platform}</span>
                    <div className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full rounded-xl bg-primary p-6 flex flex-col justify-center text-white">
            <h3 className="text-xl font-bold mb-3">{name}</h3>
            <p className="text-white/80 font-medium mb-4">{role}</p>
            <p className="text-white/90">{bio}</p>
            <div className="flex space-x-3 mt-6">
              {socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="text-white/80 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.platform}</span>
                  <div className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
