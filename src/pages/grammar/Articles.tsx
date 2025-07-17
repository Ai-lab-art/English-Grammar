import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Articles = () => {
  const [showAnswers, setShowAnswers] = useState(false);

  const practiceQuestions = [
    { question: "I need _____ pen to write.", answer: "a" },
    { question: "_____ book you lent me was excellent.", answer: "The" },
    { question: "She is _____ engineer.", answer: "an" },
    { question: "_____ Mount Everest is _____ highest mountain.", answer: "(no article), the" },
    { question: "I drink _____ coffee every morning.", answer: "(no article)" },
    { question: "Can you pass me _____ salt, please?", answer: "the" },
    { question: "He is _____ honest man.", answer: "an" },
    { question: "_____ dogs are loyal animals.", answer: "(no article)" },
    { question: "I saw _____ amazing movie last night.", answer: "an" },
    { question: "_____ Pacific Ocean is very deep.", answer: "The" },
    { question: "She wants to be _____ doctor.", answer: "a" },
    { question: "_____ water in this bottle is cold.", answer: "The" },
    { question: "I need _____ hour to finish this work.", answer: "an" },
    { question: "_____ children are playing in the park.", answer: "The" },
    { question: "He bought _____ new car yesterday.", answer: "a" },
    { question: "_____ music helps me relax.", answer: "(no article)" },
    { question: "She is _____ best student in our class.", answer: "the" },
    { question: "I have _____ uncle who lives in Canada.", answer: "an" },
    { question: "_____ rich should help _____ poor.", answer: "The, the" },
    { question: "He is reading _____ interesting book about history.", answer: "an" }
  ];

  return (
    <GrammarLayout 
      title="Articles" 
      description="Learn about definite and indefinite articles (a, an, the)"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-4">What are Articles?</h2>
          <p className="text-lg mb-4">
            Articles are special words that come before nouns. In English, there are only three articles: 
            <Badge variant="secondary" className="mx-2">a</Badge>, 
            <Badge variant="secondary" className="mx-2">an</Badge>, and 
            <Badge variant="secondary" className="mx-2">the</Badge>.
          </p>
        </section>

        {/* Indefinite Articles */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Indefinite Articles: A and An</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">When to use "A"</h3>
              <p className="mb-3">Use "a" before words that start with consonant sounds:</p>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• A <strong>cat</strong> is sleeping.</p>
                <p>• A <strong>book</strong> is on the table.</p>
                <p>• A <strong>university</strong> (sounds like "you-niversity")</p>
                <p>• A <strong>European</strong> country (sounds like "yoo-ropean")</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">When to use "An"</h3>
              <p className="mb-3">Use "an" before words that start with vowel sounds:</p>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• An <strong>apple</strong> is red.</p>
                <p>• An <strong>elephant</strong> is large.</p>
                <p>• An <strong>hour</strong> (silent 'h', sounds like "our")</p>
                <p>• An <strong>honest</strong> person (silent 'h')</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Key Rules for A/An</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Rule 1:</strong> Use with singular countable nouns when mentioning something for the first time</p>
                  <p className="text-sm text-muted-foreground">Example: I saw <em>a dog</em> in the park.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Rule 2:</strong> Use when talking about any one of a group</p>
                  <p className="text-sm text-muted-foreground">Example: <em>A teacher</em> should be patient.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Rule 3:</strong> Use with professions</p>
                  <p className="text-sm text-muted-foreground">Example: She is <em>a doctor</em>.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Definite Article */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Definite Article: The</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">When to use "The"</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>1. Specific items (both speaker and listener know which one)</strong></p>
                  <div className="bg-secondary/20 p-3 rounded mt-2">
                    <p>• <strong>The</strong> cat you saw yesterday is back.</p>
                    <p>• <strong>The</strong> book on my desk is interesting.</p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>2. Unique things</strong></p>
                  <div className="bg-secondary/20 p-3 rounded mt-2">
                    <p>• <strong>The</strong> sun is bright.</p>
                    <p>• <strong>The</strong> president of our country.</p>
                    <p>• <strong>The</strong> first person to arrive.</p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>3. Superlatives</strong></p>
                  <div className="bg-secondary/20 p-3 rounded mt-2">
                    <p>• <strong>The</strong> best student in class.</p>
                    <p>• <strong>The</strong> tallest building in the city.</p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>4. Groups of people</strong></p>
                  <div className="bg-secondary/20 p-3 rounded mt-2">
                    <p>• <strong>The</strong> rich should help <strong>the</strong> poor.</p>
                    <p>• <strong>The</strong> elderly need care.</p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>5. Geographical features</strong></p>
                  <div className="bg-secondary/20 p-3 rounded mt-2">
                    <p>• <strong>The</strong> Himalayas, <strong>the</strong> Pacific Ocean</p>
                    <p>• <strong>The</strong> United States, <strong>the</strong> Netherlands</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Zero Article */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Zero Article (No Article)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-3">When NOT to use articles</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-accent pl-4">
                  <p><strong>1. Plural countable nouns (general)</strong></p>
                  <p className="text-sm text-muted-foreground">Dogs are friendly animals.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p><strong>2. Uncountable nouns (general)</strong></p>
                  <p className="text-sm text-muted-foreground">Water is essential for life.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p><strong>3. Proper nouns</strong></p>
                  <p className="text-sm text-muted-foreground">John lives in Paris.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p><strong>4. Abstract nouns (general)</strong></p>
                  <p className="text-sm text-muted-foreground">Love is beautiful.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practice Questions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Practice Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-lg font-medium mb-4">Complete these sentences with the correct article (a, an, the) or write "no article" if none is needed:</p>
              
              <div className="space-y-3">
                {practiceQuestions.map((item, index) => (
                  <div key={index} className="bg-secondary/10 p-4 rounded-lg">
                    <p className="font-medium">{index + 1}. {item.question}</p>
                    {showAnswers && (
                      <p className="text-primary font-semibold mt-2">Answer: {item.answer}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center mt-6">
                <Button 
                  onClick={() => setShowAnswers(!showAnswers)}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 text-lg"
                >
                  {showAnswers ? "Hide Answers" : "Check the Answers"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GrammarLayout>
  );
};

export default Articles;