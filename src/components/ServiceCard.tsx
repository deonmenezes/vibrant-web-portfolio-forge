
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: delay * 0.15,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ 
        y: -10, 
        transition: { duration: 0.3 },
        boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)"
      }}
      className={cn(
        "group relative p-8 rounded-xl bg-black/20 backdrop-blur-sm border-t border-white/10",
        "transition-all duration-500",
        "hover:bg-primary/10",
        "overflow-hidden"
      )}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      
      <motion.div 
        className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mb-8 text-primary relative z-10"
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
      >
        <motion.div className="text-3xl">{icon}</motion.div>
      </motion.div>
      
      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 relative z-10">
        {title}
      </h3>
      
      <p className="text-muted-foreground relative z-10">{description}</p>
      
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-primary/70"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};
