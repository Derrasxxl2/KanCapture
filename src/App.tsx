
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import StudioPage from "./pages/StudioPage";
import PeoplePage from "./pages/PeoplePage";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:slug" element={<ProjectPage />} />
            <Route path="/studio" element={<StudioPage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
