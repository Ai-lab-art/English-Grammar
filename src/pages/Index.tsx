import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
      <div className="text-center space-y-8 px-4">
        {/* Title Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="h-20 w-20 text-primary animate-pulse" />
          </div>
          <h1 className="text-7xl font-bold text-primary mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            English Grammar
          </h1>
          <p className="text-3xl text-muted-foreground mb-4 font-light">
            A comprehensive guide for secondary level students
          </p>
          <p className="text-xl text-muted-foreground font-medium bg-white/50 backdrop-blur-sm rounded-lg py-3 px-6 inline-block">
            Developed by: Hom Bahadur Thapa
          </p>
        </div>

        {/* Start Button */}
        <div className="pt-12">
          <Button asChild size="lg" className="text-2xl px-16 py-8 h-auto rounded-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <Link to="/topics">
              Start Learning
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
