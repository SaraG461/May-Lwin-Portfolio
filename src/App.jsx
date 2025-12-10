import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { NotFound } from "@/pages/NotFound";

function App() {
  return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;

// const App = () => {
//   const hasAnimated = useIntersectionObserver();
//   const showScrollTop = useScrollToTop();

//   return (
//     <div className= "min-h-screen bg-white text-black">
//       <Navigation />
      
//     </div>
//   )
// };
