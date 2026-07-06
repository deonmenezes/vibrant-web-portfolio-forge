import { cn } from "@/lib/utils";
import { m as motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Make sure you're using React Router

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  slug: string; // ✅ NEW PROP to create dynamic route
}

export const ServiceCard = ({
  title,
  description,
  icon,
  delay = 0,
  slug,
}: ServiceCardProps) => {
  return (
    <Link to={`/services/${slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: delay * 0.1,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        whileHover={{
          x: -4,
          y: -4,
          transition: { duration: 0.2 },
        }}
        className={cn(
          "group relative p-8 bg-card border-[3px] border-black dark:border-yellow-400",
          "shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#facc15]",
          "hover:shadow-[10px_10px_0px_0px_#000] dark:hover:shadow-[10px_10px_0px_0px_#facc15]",
          "transition-all duration-200",
          "overflow-hidden"
        )}
      >
        {/* Neobrutalist accent bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400" />

        <motion.div
          className="h-16 w-16 bg-yellow-400 border-[3px] border-black flex items-center justify-center mb-8 text-black relative z-10 shadow-[4px_4px_0px_0px_#000]"
          whileHover={{
            scale: 1.1,
            rotate: [-2, 2, 0],
            transition: { duration: 0.3 },
          }}
        >
          <motion.div className="text-3xl">{icon}</motion.div>
        </motion.div>

        <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-yellow-400 transition-colors duration-200 relative z-10">
          {title}
        </h3>

        <p className="text-muted-foreground font-medium relative z-10">{description}</p>

        {/* Bottom accent */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-yellow-400"
          initial={{ width: "0%" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  );
};
