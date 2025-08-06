import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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
          duration: 1,
          delay: delay * 0.15,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        whileHover={{
          y: -10,
          transition: { duration: 0.3 },
          boxShadow: "0 20px 40px rgba(245, 158, 11, 0.15)",
        }}
        className={cn(
          "group relative p-8 rounded-xl metallic-card",
          "transition-all duration-500",
          "hover:gold-glow",
          "overflow-hidden"
        )}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-vision-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />

        <motion.div
          className="h-16 w-16 rounded-xl gold-gradient flex items-center justify-center mb-8 text-vision-black relative z-10"
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3 },
          }}
        >
          <motion.div className="text-3xl">{icon}</motion.div>
        </motion.div>

        <h3 className="text-2xl font-bold mb-4 group-hover:text-vision-gold transition-colors duration-300 relative z-10">
          {title}
        </h3>

        <p className="text-muted-foreground relative z-10">{description}</p>

        <motion.div
          className="absolute bottom-0 left-0 h-1 gold-gradient"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </Link>
  );
};
