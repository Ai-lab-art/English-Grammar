import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowLeft, CheckCircle, Globe, BookOpenCheck, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const grammarTopics = [
  { id: "articles", title: "Articles", description: "Learn about definite and indefinite articles (a, an, the)" },
  { id: "prepositions", title: "Prepositions", description: "Master prepositions of time, place, and direction" },
  { id: "tag-questions", title: "Tag Questions", description: "Form and use question tags correctly" },
  { id: "negative-affirmative", title: "Negative & Affirmative", description: "Convert between positive and negative sentences" },
  { id: "interrogative", title: "Interrogative", description: "Form different types of questions" },
  { id: "conditional", title: "Conditional Sentences", description: "If clauses and conditional statements" },
  { id: "voice", title: "Voice", description: "Active and passive voice transformations" },
  { id: "speech", title: "Speech", description: "Direct and indirect speech conversion" },
  { id: "auxiliaries", title: "Auxiliary Verbs", description: "Helping verbs and their usage" },
  { id: "word-classes", title: "Word Classes", description: "Parts of speech and their functions" },
  { id: "tenses", title: "Tenses", description: "Present, past, and future tenses" },
  { id: "modals", title: "Modal Verbs", description: "Can, could, should, must, and other modals" }
];

const TableOfContents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Button asChild variant="ghost" size="sm" className="animate-blink-bright text-white font-bold border-2 border-white hover:scale-105 transition-transform">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <BookOpen className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-primary">English Grammar</h1>
            </div>
            <p className="text-lg text-muted-foreground mb-2">
              A comprehensive guide for secondary level students
            </p>
            <p className="text-sm text-muted-foreground font-medium">
              Developed by: Hom Bahadur Thapa
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Salient Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-primary">Salient Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-blue-800">Clear Examples</CardTitle>
                <CardDescription>Real-world examples with detailed explanations</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gradient-to-br from-green-50 to-emerald-100 border-green-200">
              <CardHeader className="text-center">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-green-800">Simple Explanations</CardTitle>
                <CardDescription>Easy-to-understand examples with detailed explanations</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-violet-100 border-purple-200">
              <CardHeader className="text-center">
                <BookOpenCheck className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-purple-800">Comprehensive Coverage</CardTitle>
                <CardDescription>12+ essential grammar topics for complete learning</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gradient-to-br from-orange-50 to-amber-100 border-orange-200">
              <CardHeader className="text-center">
                <Lightbulb className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                <CardTitle className="text-orange-800">Interactive Design</CardTitle>
                <CardDescription>Colorful, engaging interface with practice exercises</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Table of Contents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Table of Contents</CardTitle>
            <CardDescription className="text-center">
              Select a topic to start learning
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {grammarTopics.map((topic, index) => (
                <Card key={topic.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{topic.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {topic.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button asChild className="w-full">
                      <Link to={`/grammar/${topic.id}`}>
                        Start Learning
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center text-muted-foreground">
          <p className="text-sm">
            Master English grammar with clear explanations and practical examples
          </p>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;