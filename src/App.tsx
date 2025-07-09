import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Articles from "./pages/grammar/Articles";
import Prepositions from "./pages/grammar/Prepositions";
import TagQuestions from "./pages/grammar/TagQuestions";
import NegativeAffirmative from "./pages/grammar/NegativeAffirmative";
import Interrogative from "./pages/grammar/Interrogative";
import Conditional from "./pages/grammar/Conditional";
import Voice from "./pages/grammar/Voice";
import Speech from "./pages/grammar/Speech";
import Auxiliaries from "./pages/grammar/Auxiliaries";
import WordClasses from "./pages/grammar/WordClasses";
import Tenses from "./pages/grammar/Tenses";
import Modals from "./pages/grammar/Modals";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/grammar/articles" element={<Articles />} />
          <Route path="/grammar/prepositions" element={<Prepositions />} />
          <Route path="/grammar/tag-questions" element={<TagQuestions />} />
          <Route path="/grammar/negative-affirmative" element={<NegativeAffirmative />} />
          <Route path="/grammar/interrogative" element={<Interrogative />} />
          <Route path="/grammar/conditional" element={<Conditional />} />
          <Route path="/grammar/voice" element={<Voice />} />
          <Route path="/grammar/speech" element={<Speech />} />
          <Route path="/grammar/auxiliaries" element={<Auxiliaries />} />
          <Route path="/grammar/word-classes" element={<WordClasses />} />
          <Route path="/grammar/tenses" element={<Tenses />} />
          <Route path="/grammar/modals" element={<Modals />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
