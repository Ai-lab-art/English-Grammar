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
                <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: यो -ing ले अन्त्य हुने क्रिया हो जसले संज्ञाको काम गर्छ (जस्तै: swimming = पौडी खेल्नु, reading = पढ्नु)</span>
              </p>
              <p className="text-lg mb-4">
                <strong>Infinitive:</strong> The base form of a verb, usually preceded by "to" (to swim, to read, to write)
                <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: यो क्रियाको मूल रूप हो जसको अगाडि "to" लगाइन्छ (जस्तै: to swim = पौडी खेल्न, to read = पढ्न)</span>
              </p>
              <p className="text-base">
                Both gerunds and infinitives can function as subjects, objects, and complements in sentences.
                <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: दुवै gerunds र infinitives ले वाक्यमा subject, object र complement को काम गर्न सक्छन्।</span>
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
                <ul className="space-y-3">
                  <li>• I <strong>enjoy reading</strong> books.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: म किताब पढ्न रुचाउछु।</span></li>
                  <li>• She <strong>finished doing</strong> her homework.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: उसले आफ्नो गृहकार्य गरेर सकाइ।</span></li>
                  <li>• We should <strong>avoid eating</strong> too much sugar.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: हामीले धेरै चिनी खानु बेवास्ता गर्नुपर्छ।</span></li>
                  <li>• Do you <strong>mind opening</strong> the window?
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: तपाईंलाई झ्याल खोल्न कुनै आपत्ति छ?</span></li>
                  <li>• The doctor <strong>suggested exercising</strong> daily.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: डाक्टरले दैनिक व्यायाम गर्न सुझाव दिए।</span></li>
                  <li>• I need to <strong>practice speaking</strong> English.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: मलाई अंग्रेजी बोल्ने अभ्यास गर्न आवश्यक छ।</span></li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">More examples:</h4>
                <ul className="space-y-3">
                  <li>• He <strong>admitted stealing</strong> the money.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: उसले पैसा चोरेको स्वीकार गर्यो।</span></li>
                  <li>• She <strong>denied breaking</strong> the vase.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: उसले फूलदान भाँचेको अस्वीकार गरिन्।</span></li>
                  <li>• Don't <strong>risk losing</strong> your job.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: आफ्नो जागिर गुमाउने जोखिम नलिनुहोस्।</span></li>
                  <li>• I'm <strong>considering buying</strong> a new car.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: म नयाँ कार किन्ने विचार गरिरहेको छु।</span></li>
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
                <ul className="space-y-3">
                  <li>• I <strong>want to learn</strong> Spanish.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: म स्पेनिश भाषा सिक्न चाहन्छु।</span></li>
                  <li>• She <strong>needs to study</strong> harder.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: उसलाई थप कडा अध्ययन गर्न आवश्यक छ।</span></li>
                  <li>• We <strong>plan to visit</strong> Paris next year.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: हामी अर्को वर्ष पेरिस जाने योजना गरिरहेका छौं।</span></li>
                  <li>• He <strong>decided to quit</strong> his job.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: उसले आफ्नो जागिर छोड्ने निर्णय गर्यो।</span></li>
                  <li>• They <strong>hope to win</strong> the competition.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: उनीहरूले प्रतियोगिता जित्ने आशा गर्छन्।</span></li>
                  <li>• I <strong>expect to graduate</strong> next month.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: म अर्को महिना स्नातक हुने अपेक्षा गर्छु।</span></li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">More examples:</h4>
                <ul className="space-y-3">
                  <li>• She <strong>agreed to help</strong> us.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: उसले हामीलाई मद्दत गर्न सहमति जनाइ।</span></li>
                  <li>• He <strong>refused to answer</strong> the question.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: उसले प्रश्नको जवाफ दिन इन्कार गर्यो।</span></li>
                  <li>• I <strong>offered to drive</strong> them home.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: मैले उनीहरूलाई घर पुर्याउन प्रस्ताव गरें।</span></li>
                  <li>• They <strong>promised to call</strong> me.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: उनीहरूले मलाई फोन गर्ने वाचा गरे।</span></li>
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
                <ul className="space-y-3">
                  <li>• I <strong>remember meeting</strong> him. (I remember that I met him - past action)
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: मलाई उससँग भेटेको याद छ। (भूतकालको कार्य)</span></li>
                  <li>• Please <strong>remember to meet</strong> him. (Don't forget to meet him - future action)
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: कृपया उससँग भेट्न नबिर्सनुहोस्। (भविष्यको कार्य)</span></li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">FORGET:</h4>
                <ul className="space-y-3">
                  <li>• I'll never <strong>forget visiting</strong> Paris. (I remember the visit)
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: मैले पेरिस जानु कहिल्यै बिर्सने छैन। (यात्राको सम्झना छ)</span></li>
                  <li>• Don't <strong>forget to visit</strong> your grandmother. (Remember to visit her)
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: आफ्नी हजुरआमालाई भेट्न नबिर्सनुहोस्। (उहाँलाई भेट्न याद राख्नुहोस्)</span></li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">STOP:</h4>
                <ul className="space-y-3">
                  <li>• He <strong>stopped smoking</strong>. (He quit smoking)
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: उसले धुम्रपान गर्न छोड्यो। (धुम्रपान छोडेको)</span></li>
                  <li>• He <strong>stopped to smoke</strong>. (He paused in order to smoke)
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: उसले धुम्रपान गर्न रोकियो। (धुम्रपान गर्न अस्थायी रूपमा रोकियो)</span></li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">TRY:</h4>
                <ul className="space-y-3">
                  <li>• <strong>Try calling</strong> him. (Attempt this method)
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: उसलाई फोन गरेर हेर्नुहोस्। (यो तरिका प्रयोग गर्नुहोस्)</span></li>
                  <li>• <strong>Try to call</strong> him. (Make an effort to call)
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: उसलाई फोन गर्ने कोशिश गर्नुहोस्। (फोन गर्ने प्रयास गर्नुहोस्)</span></li>
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
              <p>After prepositions, we always use gerunds, never infinitives.
                <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: Preposition को पछि सधैं gerund मात्र प्रयोग गरिन्छ, infinitive होइन।</span>
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-3">
                  <li>• I'm interested <strong>in learning</strong> French.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: मलाई फ्रान्सेली भाषा सिक्न रुचि छ।</span></li>
                  <li>• She's good <strong>at cooking</strong>.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: उनी खाना पकाउनमा राम्री छिन्।</span></li>
                  <li>• Thank you <strong>for helping</strong> me.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: मलाई मद्दत गरेकोमा धन्यवाद।</span></li>
                  <li>• I'm tired <strong>of waiting</strong>.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: म पर्खिरहँदा थाकेको छु।</span></li>
                  <li>• He's afraid <strong>of flying</strong>.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: उसलाई उडान गर्न डर लाग्छ।</span></li>
                  <li>• Before <strong>leaving</strong>, turn off the lights.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: जानु अघि बत्ती निभाउनुहोस्।</span></li>
                  <li>• After <strong>finishing</strong> work, I went home.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: काम सकेपछि म घर गएँ।</span></li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Common prepositional phrases:</h4>
                <ul className="space-y-3">
                  <li>• instead of, because of, in spite of, by means of</li>
                  <li>• Instead <strong>of watching</strong> TV, I read a book.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: टिभी हेर्नुको सट्टा मैले किताब पढें।</span></li>
                  <li>• In spite <strong>of feeling</strong> tired, I continued working.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: थकान लागे पनि मैले काम जारी राखें।</span></li>
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
                <ul className="space-y-3">
                  <li>• <strong>Swimming</strong> is good exercise.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: पौडी खेल्नु राम्रो व्यायाम हो।</span></li>
                  <li>• <strong>Reading</strong> helps improve vocabulary.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: पढ्नुले शब्दकोश सुधार गर्न मद्दत गर्छ।</span></li>
                  <li>• <strong>Smoking</strong> is harmful to health.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: धुम्रपान स्वास्थ्यको लागि हानिकारक हो।</span></li>
                  <li>• <strong>Learning</strong> English takes time.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: अंग्रेजी सिक्न समय लाग्छ।</span></li>
                  <li>• <strong>Cooking</strong> is my hobby.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: खाना पकाउनु मेरो शौक हो।</span></li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Note:</h4>
                <p>When a gerund is the subject, the verb that follows is always singular.
                  <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: जब gerund subject हुन्छ, त्यसपछिको verb सधैं singular हुन्छ।</span>
                </p>
                <ul className="space-y-3">
                  <li>• Reading books <strong>is</strong> fun. (not "are")
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: किताब पढ्नु रमाइलो छ।</span></li>
                  <li>• Playing sports <strong>helps</strong> you stay fit. (not "help")
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: खेल खेल्नुले तपाईंलाई फिट रहन मद्दत गर्छ।</span></li>
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
              <p>We use infinitives to express purpose (why we do something).
                <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: हामी उद्देश्य बताउन infinitive प्रयोग गर्छौं (हामी किन केही गर्छौं)।</span>
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-3">
                  <li>• I went to the store <strong>to buy</strong> milk.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: म दूध किन्न पसलमा गएँ।</span></li>
                  <li>• She studies hard <strong>to pass</strong> the exam.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: उसले परीक्षा पास गर्न कडा अध्ययन गर्छिन्।</span></li>
                  <li>• We saved money <strong>to travel</strong> to Europe.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: हामीले युरोप जान पैसा जम्मा गर्यौं।</span></li>
                  <li>• He exercises <strong>to stay</strong> healthy.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: उसले स्वस्थ रहन व्यायाम गर्छ।</span></li>
                  <li>• I called you <strong>to invite</strong> you to the party.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: मैले तपाईंलाई पार्टीमा निम्तो दिन फोन गरें।</span></li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Alternative with "in order to":</h4>
                <ul className="space-y-3">
                  <li>• I went to the store <strong>in order to buy</strong> milk.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: म दूध किन्नको लागि पसलमा गएँ।</span></li>
                  <li>• She studies hard <strong>in order to pass</strong> the exam.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: उसले परीक्षा पास गर्नको लागि कडा अध्ययन गर्छिन्।</span></li>
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
                <ul className="space-y-3">
                  <li>• I enjoy to read books.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: गलत - "enjoy" पछि gerund आउनुपर्छ</span></li>
                  <li>• I want going home.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: गलत - "want" पछि infinitive आउनुपर्छ</span></li>
                  <li>• I'm interested in to learn French.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: गलत - preposition "in" पछि gerund आउनुपर्छ</span></li>
                  <li>• Swimming are good exercise.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: गलत - gerund subject सधैं singular हुन्छ</span></li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">✅ Correct:</h4>
                <ul className="space-y-3">
                  <li>• I enjoy reading books.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: म किताब पढ्न रुचाउछु। (सही)</span></li>
                  <li>• I want to go home.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: म घर जान चाहन्छु। (सही)</span></li>
                  <li>• I'm interested in learning French.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: मलाई फ्रान्सेली सिक्न रुचि छ। (सही)</span></li>
                  <li>• Swimming is good exercise.
                    <br /><span className="text-sm text-muted-foreground italic">नेपालीमा: पौडी खेल्नु राम्रो व्यायाम हो। (सही)</span></li>
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