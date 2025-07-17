import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowLeft, CheckCircle, Globe, BookOpenCheck, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import tocCover from "@/assets/toc-cover.jpg";

const grammarTopics = [
  { id: "articles", title: "Articles", description: "Learn about definite and indefinite articles (a, an, the)", color: "bg-gradient-to-r from-red-500 to-pink-500" },
  { id: "prepositions", title: "Prepositions", description: "Master prepositions of time, place, and direction", color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  { id: "tag-questions", title: "Tag Questions", description: "Form and use question tags correctly", color: "bg-gradient-to-r from-green-500 to-emerald-500" },
  { id: "negative-affirmative", title: "Negative & Affirmative", description: "Convert between positive and negative sentences", color: "bg-gradient-to-r from-purple-500 to-violet-500" },
  { id: "interrogative", title: "Interrogative", description: "Form different types of questions", color: "bg-gradient-to-r from-orange-500 to-yellow-500" },
  { id: "conditional", title: "Conditional Sentences", description: "If clauses and conditional statements", color: "bg-gradient-to-r from-teal-500 to-green-500" },
  { id: "voice", title: "Voice", description: "Active and passive voice transformations", color: "bg-gradient-to-r from-indigo-500 to-blue-500" },
  { id: "speech", title: "Speech", description: "Direct and indirect speech conversion", color: "bg-gradient-to-r from-pink-500 to-rose-500" },
  { id: "auxiliaries", title: "Auxiliary Verbs", description: "Helping verbs and their usage", color: "bg-gradient-to-r from-cyan-500 to-blue-500" },
  { id: "word-classes", title: "Word Classes", description: "Parts of speech and their functions", color: "bg-gradient-to-r from-lime-500 to-green-500" },
  { id: "tenses", title: "Tenses", description: "Present, past, and future tenses", color: "bg-gradient-to-r from-amber-500 to-orange-500" },
  { id: "modals", title: "Modal Verbs", description: "Can, could, should, must, and other modals", color: "bg-gradient-to-r from-violet-500 to-purple-500" },
  { id: "causative-verbs", title: "Causative Verbs", description: "Have, get, make, let and their usage", color: "bg-gradient-to-r from-emerald-500 to-teal-500" },
  { id: "subject-verb-agreement", title: "Subject-Verb Agreement", description: "Rules for matching subjects and verbs", color: "bg-gradient-to-r from-rose-500 to-pink-500" },
  { id: "connectives", title: "Connectives", description: "Linking words and phrases in sentences", color: "bg-gradient-to-r from-sky-500 to-cyan-500" },
  { id: "relative-clauses", title: "Relative Clauses", description: "Who, which, that, where clauses", color: "bg-gradient-to-r from-yellow-500 to-amber-500" },
  { id: "determiners-quantifiers", title: "Determiners & Quantifiers", description: "Some, any, many, much, few, little", color: "bg-gradient-to-r from-fuchsia-500 to-purple-500" },
  { id: "gerund-infinitive", title: "Gerund & Infinitive", description: "When to use -ing forms and to + verb", color: "bg-gradient-to-r from-green-500 to-lime-500" }
];

const TableOfContents = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Cover Photo Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${tocCover})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-white/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-4 mb-4">
              <Button asChild size="sm" className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-transform shadow-lg">
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">English Grammar</h1>
              </div>
              <p className="text-lg text-gray-700 mb-2 font-medium">
                A comprehensive guide for secondary level students
              </p>
              <p className="text-sm text-gray-600 font-medium bg-white/70 rounded-lg py-2 px-4 inline-block">
                Developed by: Hom Bahadur Thapa
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Table of Contents */}
          <Card className="mb-8 bg-white/95 backdrop-blur-sm shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-3xl text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Table of Contents</CardTitle>
              <CardDescription className="text-center text-lg text-gray-600">
                Select a topic to start learning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {grammarTopics.map((topic, index) => (
                  <Card key={topic.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden">
                    <CardHeader className={`${topic.color} text-white relative`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 text-lg font-bold shadow-lg">
                            {index + 1}
                          </div>
                          <CardTitle className="text-xl text-white drop-shadow-lg">{topic.title}</CardTitle>
                        </div>
                        <CardDescription className="text-white/90 text-sm drop-shadow">
                          {topic.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6 bg-gradient-to-b from-white to-gray-50">
                      <Button asChild className={`w-full ${topic.color} text-white font-semibold hover:scale-105 transition-transform shadow-lg border-0`}>
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
          <div className="text-center">
            <p className="text-lg font-medium text-white drop-shadow-lg bg-black/20 backdrop-blur-sm rounded-lg py-3 px-6 inline-block">
              Master English grammar with clear explanations and practical examples
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;