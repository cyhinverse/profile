import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Posts from "./pages/Posts";
import WorkDetail from "./pages/WorkDetail";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { LanguageProvider } from "./context/LanguageContext";

// AnimatedRoutes wrapper to use useLocation hook properly
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
      <AnimatePresence mode="wait" initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:id" element={<WorkDetail />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans text-ink dark:text-stone-200 transition-colors duration-500">
          {/* Background Texture (Optional) */}
          <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[-1] bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')]"></div>

          <ScrollToTop />
          <Navbar />

          <main className="flex-grow">
            <AnimatedRoutes />
          </main>

          <Footer />
          <MusicPlayer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
