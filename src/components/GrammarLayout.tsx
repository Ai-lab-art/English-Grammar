import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Watermark from "./Watermark";

interface GrammarLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const GrammarLayout = ({ title, description, children }: GrammarLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <Button asChild variant="ghost" size="sm" className="animate-blink-bright text-white font-bold border-2 border-white hover:scale-105 transition-transform">
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="bg-orange-500 text-white border-orange-600 hover:bg-orange-600 hover:scale-105 transition-all">
                <Link to="/topics">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Topics
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-primary">{title}</h1>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8">
            {children}
          </CardContent>
        </Card>
      </div>
      <Watermark />
    </div>
  );
};

export default GrammarLayout;