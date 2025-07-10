import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
      <div className="text-center space-y-8 px-4">
        {/* Title Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-6xl font-bold text-primary mb-4">
            English Grammar
          </h1>
          <p className="text-2xl text-muted-foreground mb-4">
            A comprehensive guide for secondary level students
          </p>
          <p className="text-lg text-muted-foreground font-medium">
            Developed by: Hom Bahadur Thapa
          </p>
        </div>

        {/* Start Button */}
        <div className="pt-8">
          <Button asChild size="lg" className="text-lg px-12 py-6 h-auto">
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
