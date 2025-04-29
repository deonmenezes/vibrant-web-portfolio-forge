
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const letterVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67]
      }
    })
  };

  const errorText = "404";
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-black/90 backdrop-blur-3xl overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:60px_60px] opacity-20" />
      </div>
      
      <div className="relative z-10 text-center max-w-md px-6 py-20">
        <div className="mb-8 flex justify-center">
          {errorText.split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="text-[120px] md:text-[180px] font-extrabold text-primary inline-block"
              style={{ textShadow: '0 0 40px rgba(139, 92, 246, 0.8)' }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-vision-blue">
            Page Not Found
          </h2>
          
          <p className="text-muted-foreground text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild 
              className="bg-transparent border border-primary text-primary backdrop-blur-sm hover:bg-primary/20 hover:text-white mt-6 px-8 py-6 text-lg group relative overflow-hidden"
            >
              <Link to="/">
                <span className="relative z-10">Return to Home</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary to-vision-blue opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
