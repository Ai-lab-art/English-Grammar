import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const GerundInfinitive = () => {
  const [showAnswers, setShowAnswers] = useState(false);

  const practiceQuestions = [
    { question: "I enjoy _____ (read/reading/to read) books.", answer: "reading" },
    { question: "She decided _____ (go/going/to go) to the party.", answer: "to go" },
    { question: "_____ (Swim/Swimming/To swim) is good exercise.", answer: "Swimming" },
    { question: "He wants _____ (learn/learning/to learn) Spanish.", answer: "to learn" },
    { question: "I finished _____ (do/doing/to do) my homework.", answer: "doing" },
    { question: "They plan _____ (visit/visiting/to visit) Europe.", answer: "to visit" },
    { question: "I avoid _____ (eat/eating/to eat) fast food.", answer: "eating" },
    { question: "She hopes _____ (become/becoming/to become) a doctor.", answer: "to become" },
    { question: "_____ (Cook/Cooking/To cook) is her hobby.", answer: "Cooking" },
    { question: "He refused _____ (help/helping/to help) us.", answer: "to help" },
    { question: "I suggest _____ (take/taking/to take) a break.", answer: "taking" },
    { question: "They agreed _____ (meet/meeting/to meet) tomorrow.", answer: "to meet" },
    { question: "I miss _____ (see/seeing/to see) my family.", answer: "seeing" },
    { question: "She offered _____ (help/helping/to help) me.", answer: "to help" },
    { question: "_____ (Dance/Dancing/To dance) makes me happy.", answer: "Dancing" },
    { question: "He promised _____ (call/calling/to call) me.", answer: "to call" },
    { question: "I can't stand _____ (wait/waiting/to wait) in long lines.", answer: "waiting" },
    { question: "They chose _____ (stay/staying/to stay) home.", answer: "to stay" },
    { question: "I love _____ (travel/traveling/to travel) to new places.", answer: "traveling" },
    { question: "She managed _____ (finish/finishing/to finish) the project.", answer: "to finish" }
  ];

  return (
    <GrammarLayout
      title="Gerund & Infinitive"
      description="Learn when to use -ing forms and to + verb correctly"
    >
      <div className="space-y-8">
        {/* Definition */}
        <Card>
          <CardHeader>
            <CardTitle>What are Gerunds and Infinitives?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-lg mb-4">
                <strong>Gerund:</strong> A verb form ending in -ing that functions as a noun (swimming, reading, writing)
              </p>
              <p className="text-lg mb-4">
                <strong>Infinitive:</strong> The base form of a verb, usually preceded by "to" (to swim, to read, to write)
              </p>
              <p className="text-base">
                Both gerunds and infinitives can function as subjects, objects, and complements in sentences.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Verbs followed by Gerunds */}
        <Card>
          <CardHeader>
            <CardTitle>Verbs Followed by Gerunds (-ing)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p><strong>Common verbs:</strong> enjoy, finish, avoid, mind, suggest, practice, consider, admit, deny, risk</p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2">
                  <li>• I <strong>enjoy reading</strong> books.</li>
                  <li>• She <strong>finished doing</strong> her homework.</li>
                  <li>• We should <strong>avoid eating</strong> too much sugar.</li>
                  <li>• Do you <strong>mind opening</strong> the window?</li>
                  <li>• The doctor <strong>suggested exercising</strong> daily.</li>
                  <li>• I need to <strong>practice speaking</strong> English.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">More examples:</h4>
                <ul className="space-y-2">
                  <li>• He <strong>admitted stealing</strong> the money.</li>
                  <li>• She <strong>denied breaking</strong> the vase.</li>
                  <li>• Don't <strong>risk losing</strong> your job.</li>
                  <li>• I'm <strong>considering buying</strong> a new car.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verbs followed by Infinitives */}
        <Card>
          <CardHeader>
            <CardTitle>Verbs Followed by Infinitives (to + verb)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p><strong>Common verbs:</strong> want, need, plan, decide, hope, expect, agree, refuse, offer, promise</p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2">
                  <li>• I <strong>want to learn</strong> Spanish.</li>
                  <li>• She <strong>needs to study</strong> harder.</li>
                  <li>• We <strong>plan to visit</strong> Paris next year.</li>
                  <li>• He <strong>decided to quit</strong> his job.</li>
                  <li>• They <strong>hope to win</strong> the competition.</li>
                  <li>• I <strong>expect to graduate</strong> next month.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">More examples:</h4>
                <ul className="space-y-2">
                  <li>• She <strong>agreed to help</strong> us.</li>
                  <li>• He <strong>refused to answer</strong> the question.</li>
                  <li>• I <strong>offered to drive</strong> them home.</li>
                  <li>• They <strong>promised to call</strong> me.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verbs with Both */}
        <Card>
          <CardHeader>
            <CardTitle>Verbs That Take Both (with different meanings)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">REMEMBER:</h4>
                <ul className="space-y-2">
                  <li>• I <strong>remember meeting</strong> him. (I remember that I met him - past action)</li>
                  <li>• Please <strong>remember to meet</strong> him. (Don't forget to meet him - future action)</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">FORGET:</h4>
                <ul className="space-y-2">
                  <li>• I'll never <strong>forget visiting</strong> Paris. (I remember the visit)</li>
                  <li>• Don't <strong>forget to visit</strong> your grandmother. (Remember to visit her)</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">STOP:</h4>
                <ul className="space-y-2">
                  <li>• He <strong>stopped smoking</strong>. (He quit smoking)</li>
                  <li>• He <strong>stopped to smoke</strong>. (He paused in order to smoke)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">TRY:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Try calling</strong> him. (Attempt this method)</li>
                  <li>• <strong>Try to call</strong> him. (Make an effort to call)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prepositions + Gerunds */}
        <Card>
          <CardHeader>
            <CardTitle>Prepositions + Gerunds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>After prepositions, we always use gerunds, never infinitives.</p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2">
                  <li>• I'm interested <strong>in learning</strong> French.</li>
                  <li>• She's good <strong>at cooking</strong>.</li>
                  <li>• Thank you <strong>for helping</strong> me.</li>
                  <li>• I'm tired <strong>of waiting</strong>.</li>
                  <li>• He's afraid <strong>of flying</strong>.</li>
                  <li>• Before <strong>leaving</strong>, turn off the lights.</li>
                  <li>• After <strong>finishing</strong> work, I went home.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Common prepositional phrases:</h4>
                <ul className="space-y-2">
                  <li>• instead of, because of, in spite of, by means of</li>
                  <li>• Instead <strong>of watching</strong> TV, I read a book.</li>
                  <li>• In spite <strong>of feeling</strong> tired, I continued working.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gerunds as Subjects */}
        <Card>
          <CardHeader>
            <CardTitle>Gerunds as Subjects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Swimming</strong> is good exercise.</li>
                  <li>• <strong>Reading</strong> helps improve vocabulary.</li>
                  <li>• <strong>Smoking</strong> is harmful to health.</li>
                  <li>• <strong>Learning</strong> English takes time.</li>
                  <li>• <strong>Cooking</strong> is my hobby.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Note:</h4>
                <p>When a gerund is the subject, the verb that follows is always singular.</p>
                <ul className="space-y-2">
                  <li>• Reading books <strong>is</strong> fun. (not "are")</li>
                  <li>• Playing sports <strong>helps</strong> you stay fit. (not "help")</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Infinitive of Purpose */}
        <Card>
          <CardHeader>
            <CardTitle>Infinitive of Purpose</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>We use infinitives to express purpose (why we do something).</p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2">
                  <li>• I went to the store <strong>to buy</strong> milk.</li>
                  <li>• She studies hard <strong>to pass</strong> the exam.</li>
                  <li>• We saved money <strong>to travel</strong> to Europe.</li>
                  <li>• He exercises <strong>to stay</strong> healthy.</li>
                  <li>• I called you <strong>to invite</strong> you to the party.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Alternative with "in order to":</h4>
                <ul className="space-y-2">
                  <li>• I went to the store <strong>in order to buy</strong> milk.</li>
                  <li>• She studies hard <strong>in order to pass</strong> the exam.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Mistakes */}
        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes to Avoid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">❌ Wrong:</h4>
                <ul className="space-y-2">
                  <li>• I enjoy to read books.</li>
                  <li>• I want going home.</li>
                  <li>• I'm interested in to learn French.</li>
                  <li>• Swimming are good exercise.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">✅ Correct:</h4>
                <ul className="space-y-2">
                  <li>• I enjoy reading books.</li>
                  <li>• I want to go home.</li>
                  <li>• I'm interested in learning French.</li>
                  <li>• Swimming is good exercise.</li>
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
              <p className="text-lg font-medium mb-4">Choose the correct form (gerund or infinitive) to complete each sentence:</p>
              
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
                  className="bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 text-white px-8 py-3 text-lg"
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

export default GerundInfinitive;