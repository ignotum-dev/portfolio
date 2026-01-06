// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import { motion } from "framer-motion";
// import { Home } from "lucide-react";

import FuzzyText from "@/components/ui/FuzzyText";

// const NotFound = () => {
//   const location = useLocation();

//   useEffect(() => {
//     console.error("404 Error: User attempted to access non-existent route:", location.pathname);
//   }, [location.pathname]);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-background">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-center"
//       >
//         <h1 className="mb-4 text-8xl font-display font-bold gradient-text">404</h1>
//         <p className="mb-8 text-xl text-muted-foreground">Oops! This page doesn't exist</p>
//         <motion.a
//           href="/"
//           className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-primary-foreground"
//           style={{
//             background: 'linear-gradient(135deg, hsl(175 70% 40%), hsl(200 80% 50%))',
//           }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <Home className="w-4 h-4" />
//           Back to Home
//         </motion.a>
//       </motion.div>
//     </div>
//   );
// };

// export default NotFound;
const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.5}
          enableHover={true}
        >
          404
        </FuzzyText>
        <p className="mb-8 text-xl text-muted-foreground">
          Oops! This page doesn't exist
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-primary-foreground"
          style={{
            background:
              "linear-gradient(135deg, hsl(175 70% 40%), hsl(200 80% 50%))",
          }}
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
