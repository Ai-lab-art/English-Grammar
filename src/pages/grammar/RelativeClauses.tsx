import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const RelativeClauses = () => {
  const [showAnswers, setShowAnswers] = useState(false);

  const practiceQuestions = [
    { question: "The man _____ is wearing a red shirt is my teacher. (who/which)", answer: "who" },
    { question: "The book _____ I bought yesterday is very interesting. (that/who)", answer: "that" },
    { question: "The house _____ we live in is very old. (where/which)", answer: "which" },
    { question: "This is the place _____ I was born. (where/when)", answer: "where" },
    { question: "The woman _____ car was stolen called the police. (whose/who)", answer: "whose" },
    { question: "I remember the day _____ we first met. (when/where)", answer: "when" },
    { question: "The students _____ study hard will pass the exam. (who/which)", answer: "who" },
    { question: "The movie _____ we watched last night was boring. (that/who)", answer: "that" },
    { question: "The restaurant _____ we had dinner was expensive. (where/which)", answer: "where" },
    { question: "The reason _____ he left early is unknown. (why/when)", answer: "why" },
    { question: "The girl _____ is sitting next to me is my sister. (who/which)", answer: "who" },
    { question: "The computer _____ I use for work is very fast. (that/who)", answer: "that" },
    { question: "The school _____ I studied is now closed. (where/when)", answer: "where" },
    { question: "The time _____ the store opens is 9 AM. (when/where)", answer: "when" },
    { question: "The person _____ bag this is should claim it. (whose/who)", answer: "whose" },
    { question: "The year _____ I graduated was 2020. (when/where)", answer: "when" },
    { question: "The people _____ live next door are very friendly. (who/which)", answer: "who" },
    { question: "The phone _____ is ringing belongs to John. (that/who)", answer: "that" },
    { question: "The city _____ I want to visit is Paris. (where/which)", answer: "which" },
    { question: "The moment _____ I saw her, I knew she was special. (when/where)", answer: "when" }
  ];

  return (
    <GrammarLayout
      title="Relative Clauses"
      description="Learn to use who, which, that, where, and when to connect ideas"
    >
      <div className="space-y-8">
        {/* Definition */}
        <Card>
          <CardHeader>
            <CardTitle>What are Relative Clauses?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              Relative clauses are dependent clauses that provide additional information about a noun in the main clause. 
              They begin with relative pronouns (who, which, that, where, when, whose) and help combine sentences smoothly.
            </p>
          </CardContent>
        </Card>

        {/* WHO */}
        <Card>
          <CardHeader>
            <CardTitle>WHO (for people)</CardTitle>
            <CardDescription>Used as subject or object for people</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">WHO as Subject:</h4>
                <ul className="space-y-2">
                  <li>• The man <strong>who lives</strong> next door is a doctor.</li>
                  <li>• Students <strong>who study</strong> hard get good grades.</li>
                  <li>• The woman <strong>who called</strong> you is my sister.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">WHOM as Object (formal):</h4>
                <ul className="space-y-2">
                  <li>• The person <strong>whom I met</strong> was very kind.</li>
                  <li>• The teacher <strong>whom we respect</strong> retired.</li>
                  <li>• The friend <strong>whom you mentioned</strong> called me.</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Note:</h4>
                <p>In informal English, "who" can replace "whom" or be omitted when it's the object.</p>
                <p>• The person I met was very kind. (whom omitted)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* WHICH */}
        <Card>
          <CardHeader>
            <CardTitle>WHICH (for things and animals)</CardTitle>
            <CardDescription>Used as subject or object for things and animals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">WHICH as Subject:</h4>
                <ul className="space-y-2">
                  <li>• The book <strong>which is</strong> on the table is mine.</li>
                  <li>• The car <strong>which broke down</strong> is being repaired.</li>
                  <li>• The movie <strong>which won</strong> the award was excellent.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">WHICH as Object:</h4>
                <ul className="space-y-2">
                  <li>• The house <strong>which we bought</strong> is beautiful.</li>
                  <li>• The food <strong>which I ordered</strong> was delicious.</li>
                  <li>• The song <strong>which you recommended</strong> is great.</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Non-defining clauses (with commas):</h4>
                <ul className="space-y-2">
                  <li>• My car, <strong>which is red</strong>, needs washing.</li>
                  <li>• The book, <strong>which I finished yesterday</strong>, was boring.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* THAT */}
        <Card>
          <CardHeader>
            <CardTitle>THAT (for people and things)</CardTitle>
            <CardDescription>Used as subject or object in defining clauses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">THAT for People:</h4>
                <ul className="space-y-2">
                  <li>• The girl <strong>that sits</strong> behind me is smart.</li>
                  <li>• The man <strong>that I saw</strong> was wearing a hat.</li>
                  <li>• People <strong>that work</strong> hard succeed.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">THAT for Things:</h4>
                <ul className="space-y-2">
                  <li>• The computer <strong>that I use</strong> is fast.</li>
                  <li>• The book <strong>that you lent me</strong> was interesting.</li>
                  <li>• The cake <strong>that she made</strong> was delicious.</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Important Notes:</h4>
                <ul className="space-y-1">
                  <li>• "That" cannot be used in non-defining clauses</li>
                  <li>• "That" can often be omitted when it's the object</li>
                  <li>• The book I read was good. (that omitted)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* WHERE */}
        <Card>
          <CardHeader>
            <CardTitle>WHERE (for places)</CardTitle>
            <CardDescription>Used to refer to places</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2">
                  <li>• The school <strong>where I study</strong> is near my house.</li>
                  <li>• This is the place <strong>where we met</strong>.</li>
                  <li>• The country <strong>where she was born</strong> is beautiful.</li>
                  <li>• The restaurant <strong>where we ate</strong> was expensive.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Alternative with preposition:</h4>
                <ul className="space-y-2">
                  <li>• The school <strong>in which I study</strong> = The school <strong>where I study</strong></li>
                  <li>• The place <strong>at which we met</strong> = The place <strong>where we met</strong></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* WHEN */}
        <Card>
          <CardHeader>
            <CardTitle>WHEN (for time)</CardTitle>
            <CardDescription>Used to refer to time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2">
                  <li>• Summer is the time <strong>when I feel</strong> happiest.</li>
                  <li>• 2020 was the year <strong>when everything changed</strong>.</li>
                  <li>• Morning is the time <strong>when I study</strong> best.</li>
                  <li>• Friday is the day <strong>when we have</strong> our test.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Alternative with preposition:</h4>
                <ul className="space-y-2">
                  <li>• The time <strong>at which we met</strong> = The time <strong>when we met</strong></li>
                  <li>• The day <strong>on which it happened</strong> = The day <strong>when it happened</strong></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* WHOSE */}
        <Card>
          <CardHeader>
            <CardTitle>WHOSE (for possession)</CardTitle>
            <CardDescription>Used to show possession or relationship</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">For People:</h4>
                <ul className="space-y-2">
                  <li>• The student <strong>whose book</strong> I borrowed is absent.</li>
                  <li>• The woman <strong>whose car</strong> was stolen called the police.</li>
                  <li>• The teacher <strong>whose class</strong> I attend is very kind.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">For Things:</h4>
                <ul className="space-y-2">
                  <li>• The company <strong>whose profits</strong> increased hired more staff.</li>
                  <li>• The building <strong>whose roof</strong> collapsed was old.</li>
                  <li>• The tree <strong>whose branches</strong> broke in the storm was huge.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Types of Relative Clauses */}
        <Card>
          <CardHeader>
            <CardTitle>Types of Relative Clauses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Defining (Restrictive) Clauses:</h4>
                <p className="mb-2">Essential information - no commas</p>
                <ul className="space-y-2">
                  <li>• The book <strong>that I bought</strong> is on the table.</li>
                  <li>• Students <strong>who work hard</strong> succeed.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Non-defining (Non-restrictive) Clauses:</h4>
                <p className="mb-2">Extra information - use commas</p>
                <ul className="space-y-2">
                  <li>• My brother, <strong>who lives in London</strong>, is a doctor.</li>
                  <li>• Shakespeare, <strong>who wrote Hamlet</strong>, was English.</li>
                </ul>
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
              <p className="text-lg font-medium mb-4">Choose the correct relative pronoun to complete each sentence:</p>
              
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
                  className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-8 py-3 text-lg"
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

export default RelativeClauses;