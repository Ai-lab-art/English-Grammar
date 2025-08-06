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
          <h2 className="text-3xl font-bold mb-4 text-vibrant-blue">What are Articles? (आर्टिकल भनेको के हो?)</h2>
          <p className="text-lg mb-4 text-vibrant-purple">
            Articles are special words that come before nouns. In English, there are only three articles: 
            <Badge variant="secondary" className="mx-2 bg-vibrant-green text-white">a</Badge>, 
            <Badge variant="secondary" className="mx-2 bg-vibrant-orange text-white">an</Badge>, and 
            <Badge variant="secondary" className="mx-2 bg-vibrant-pink text-white">the</Badge>.
          </p>
          <p className="text-lg mb-4 text-vibrant-cyan font-medium">
            आर्टिकल भनेको संज्ञा (nouns) भन्दा अगाडि प्रयोग हुने विशेष शब्दहरू हुन्। अंग्रेजीमा केवल तीनवटा आर्टिकल छन्: a, an, र the।
          </p>
        </section>

        {/* Indefinite Articles */}
        <Card className="border-l-4 border-vibrant-blue">
          <CardHeader>
            <CardTitle className="text-2xl text-vibrant-blue">Indefinite Articles: A and An (अनिश्चित आर्टिकल: A र An)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-vibrant-green">When to use "A" ("A" कहिले प्रयोग गर्ने)</h3>
              <p className="mb-3 text-vibrant-purple font-medium">Use "a" before words that start with consonant sounds:</p>
              <p className="mb-3 text-vibrant-cyan">व्यञ्जन ध्वनिबाट सुरु हुने शब्दहरूको अगाडि "a" प्रयोग गर्नुहोस्:</p>
              <div className="bg-gradient-ocean bg-opacity-10 p-4 rounded-lg space-y-3 border border-vibrant-cyan">
                <p className="text-vibrant-blue">• A <strong>cat</strong> is sleeping. <span className="text-vibrant-orange">(एउटा बिरालो सुतिरहेको छ।)</span></p>
                <p className="text-vibrant-blue">• A <strong>book</strong> is on the table. <span className="text-vibrant-orange">(एउटा किताब टेबलमा छ।)</span></p>
                <p className="text-vibrant-blue">• A <strong>university</strong> (sounds like "you-niversity") <span className="text-vibrant-orange">(एउटा विश्वविद्यालय)</span></p>
                <p className="text-vibrant-blue">• A <strong>European</strong> country (sounds like "yoo-ropean") <span className="text-vibrant-orange">(एउटा युरोपेली देश)</span></p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-vibrant-green">When to use "An" ("An" कहिले प्रयोग गर्ने)</h3>
              <p className="mb-3 text-vibrant-purple font-medium">Use "an" before words that start with vowel sounds:</p>
              <p className="mb-3 text-vibrant-cyan">स्वर ध्वनिबाट सुरु हुने शब्दहरूको अगाडि "an" प्रयोग गर्नुहोस्:</p>
              <div className="bg-gradient-forest bg-opacity-10 p-4 rounded-lg space-y-3 border border-vibrant-green">
                <p className="text-vibrant-green">• An <strong>apple</strong> is red. <span className="text-vibrant-orange">(एउटा स्याउ रातो छ।)</span></p>
                <p className="text-vibrant-green">• An <strong>elephant</strong> is large. <span className="text-vibrant-orange">(एउटा हात्ती ठूलो छ।)</span></p>
                <p className="text-vibrant-green">• An <strong>hour</strong> (silent 'h', sounds like "our") <span className="text-vibrant-orange">(एक घण्टा - h चुप छ)</span></p>
                <p className="text-vibrant-green">• An <strong>honest</strong> person (silent 'h') <span className="text-vibrant-orange">(एक इमानदार व्यक्ति - h चुप छ)</span></p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-vibrant-red">Key Rules for A/An (A/An का मुख्य नियमहरू)</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-vibrant-blue pl-4 bg-gradient-ocean bg-opacity-5 p-3 rounded">
                  <p className="text-vibrant-blue"><strong>Rule 1:</strong> Use with singular countable nouns when mentioning something for the first time</p>
                  <p className="text-vibrant-purple font-medium">नियम १: पहिलो पटक उल्लेख गर्दा एकवचन गन्न सकिने संज्ञाहरूसँग प्रयोग गर्नुहोस्</p>
                  <p className="text-sm text-vibrant-green">Example: I saw <em>a dog</em> in the park. <span className="text-vibrant-orange">(मैले पार्कमा एउटा कुकुर देखें।)</span></p>
                </div>
                <div className="border-l-4 border-vibrant-purple pl-4 bg-gradient-sunset bg-opacity-5 p-3 rounded">
                  <p className="text-vibrant-purple"><strong>Rule 2:</strong> Use when talking about any one of a group</p>
                  <p className="text-vibrant-blue font-medium">नियम २: समूहको कुनै एकको बारेमा कुरा गर्दा प्रयोग गर्नुहोस्</p>
                  <p className="text-sm text-vibrant-green">Example: <em>A teacher</em> should be patient. <span className="text-vibrant-orange">(एक शिक्षक धैर्यवान हुनुपर्छ।)</span></p>
                </div>
                <div className="border-l-4 border-vibrant-green pl-4 bg-gradient-forest bg-opacity-5 p-3 rounded">
                  <p className="text-vibrant-green"><strong>Rule 3:</strong> Use with professions</p>
                  <p className="text-vibrant-cyan font-medium">नियम ३: पेशाहरूसँग प्रयोग गर्नुहोस्</p>
                  <p className="text-sm text-vibrant-blue">Example: She is <em>a doctor</em>. <span className="text-vibrant-orange">(उनी एक डाक्टर हुन्।)</span></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Definite Article */}
        <Card className="border-l-4 border-vibrant-purple">
          <CardHeader>
            <CardTitle className="text-2xl text-vibrant-purple">Definite Article: The (निश्चित आर्टिकल: The)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-vibrant-orange">When to use "The" ("The" कहिले प्रयोग गर्ने)</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-vibrant-blue pl-4 bg-gradient-ocean bg-opacity-5 p-4 rounded">
                  <p className="text-vibrant-blue font-semibold">1. Specific items (both speaker and listener know which one)</p>
                  <p className="text-vibrant-cyan font-medium mb-2">१. विशेष वस्तुहरू (बोल्ने र सुन्ने दुवैलाई थाहा भएको)</p>
                  <div className="bg-white/50 p-3 rounded mt-2 space-y-2">
                    <p className="text-vibrant-green">• <strong>The</strong> cat you saw yesterday is back. <span className="text-vibrant-orange">(हिजो तपाईंले देखेको त्यो बिरालो फिर्ता आयो।)</span></p>
                    <p className="text-vibrant-green">• <strong>The</strong> book on my desk is interesting. <span className="text-vibrant-orange">(मेरो डेस्कमा भएको त्यो किताब रोचक छ।)</span></p>
                  </div>
                </div>

                <div className="border-l-4 border-vibrant-green pl-4 bg-gradient-forest bg-opacity-5 p-4 rounded">
                  <p className="text-vibrant-green font-semibold">2. Unique things</p>
                  <p className="text-vibrant-cyan font-medium mb-2">२. अनुपम/एकमात्र वस्तुहरू</p>
                  <div className="bg-white/50 p-3 rounded mt-2 space-y-2">
                    <p className="text-vibrant-blue">• <strong>The</strong> sun is bright. <span className="text-vibrant-orange">(सूर्य उज्यालो छ।)</span></p>
                    <p className="text-vibrant-blue">• <strong>The</strong> president of our country. <span className="text-vibrant-orange">(हाम्रो देशका राष्ट्रपति।)</span></p>
                    <p className="text-vibrant-blue">• <strong>The</strong> first person to arrive. <span className="text-vibrant-orange">(आउने पहिलो व्यक्ति।)</span></p>
                  </div>
                </div>

                <div className="border-l-4 border-vibrant-red pl-4 bg-gradient-sunset bg-opacity-5 p-4 rounded">
                  <p className="text-vibrant-red font-semibold">3. Superlatives</p>
                  <p className="text-vibrant-cyan font-medium mb-2">३. उत्कृष्टताबोधक (सबैभन्दा...)</p>
                  <div className="bg-white/50 p-3 rounded mt-2 space-y-2">
                    <p className="text-vibrant-purple">• <strong>The</strong> best student in class. <span className="text-vibrant-orange">(कक्षाको सबैभन्दा राम्रो विद्यार्थी।)</span></p>
                    <p className="text-vibrant-purple">• <strong>The</strong> tallest building in the city. <span className="text-vibrant-orange">(शहरको सबैभन्दा अग्लो भवन।)</span></p>
                  </div>
                </div>

                <div className="border-l-4 border-vibrant-pink pl-4 bg-gradient-rainbow bg-opacity-5 p-4 rounded">
                  <p className="text-vibrant-pink font-semibold">4. Groups of people</p>
                  <p className="text-vibrant-cyan font-medium mb-2">४. मानिसहरूको समूह</p>
                  <div className="bg-white/50 p-3 rounded mt-2 space-y-2">
                    <p className="text-vibrant-blue">• <strong>The</strong> rich should help <strong>the</strong> poor. <span className="text-vibrant-orange">(धनीहरूले गरिबहरूलाई सहायता गर्नुपर्छ।)</span></p>
                    <p className="text-vibrant-blue">• <strong>The</strong> elderly need care. <span className="text-vibrant-orange">(बुढापाकाहरूलाई हेरचाह चाहिन्छ।)</span></p>
                  </div>
                </div>

                <div className="border-l-4 border-vibrant-cyan pl-4 bg-gradient-ocean bg-opacity-10 p-4 rounded">
                  <p className="text-vibrant-cyan font-semibold">5. Geographical features</p>
                  <p className="text-vibrant-purple font-medium mb-2">५. भौगोलिक विशेषताहरू</p>
                  <div className="bg-white/50 p-3 rounded mt-2 space-y-2">
                    <p className="text-vibrant-green">• <strong>The</strong> Himalayas, <strong>the</strong> Pacific Ocean <span className="text-vibrant-orange">(हिमालय, प्रशान्त महासागर)</span></p>
                    <p className="text-vibrant-green">• <strong>The</strong> United States, <strong>the</strong> Netherlands <span className="text-vibrant-orange">(संयुक्त राज्य अमेरिका, नेदरल्यान्ड्स)</span></p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Zero Article */}
        <Card className="border-l-4 border-vibrant-yellow">
          <CardHeader>
            <CardTitle className="text-2xl text-vibrant-yellow">Zero Article (No Article) (कुनै आर्टिकल प्रयोग नगर्ने)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-vibrant-red">When NOT to use articles (आर्टिकल कहिले प्रयोग नगर्ने)</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-vibrant-blue pl-4 bg-gradient-ocean bg-opacity-5 p-4 rounded">
                  <p className="text-vibrant-blue font-semibold">1. Plural countable nouns (general)</p>
                  <p className="text-vibrant-cyan font-medium">१. बहुवचन गन्न सकिने संज्ञाहरू (सामान्य अर्थमा)</p>
                  <p className="text-vibrant-green">Dogs are friendly animals. <span className="text-vibrant-orange">(कुकुरहरू मित्रवत् जनावरहरू हुन्।)</span></p>
                </div>
                <div className="border-l-4 border-vibrant-green pl-4 bg-gradient-forest bg-opacity-5 p-4 rounded">
                  <p className="text-vibrant-green font-semibold">2. Uncountable nouns (general)</p>
                  <p className="text-vibrant-cyan font-medium">२. गन्न नसकिने संज्ञाहरू (सामान्य अर्थमा)</p>
                  <p className="text-vibrant-blue">Water is essential for life. <span className="text-vibrant-orange">(पानी जीवनका लागि आवश्यक छ।)</span></p>
                </div>
                <div className="border-l-4 border-vibrant-purple pl-4 bg-gradient-sunset bg-opacity-5 p-4 rounded">
                  <p className="text-vibrant-purple font-semibold">3. Proper nouns</p>
                  <p className="text-vibrant-cyan font-medium">३. व्यक्तिवाचक संज्ञाहरू</p>
                  <p className="text-vibrant-red">John lives in Paris. <span className="text-vibrant-orange">(जोन पेरिसमा बस्छ।)</span></p>
                </div>
                <div className="border-l-4 border-vibrant-pink pl-4 bg-gradient-rainbow bg-opacity-5 p-4 rounded">
                  <p className="text-vibrant-pink font-semibold">4. Abstract nouns (general)</p>
                  <p className="text-vibrant-cyan font-medium">४. भावबोधक संज्ञाहरू (सामान्य अर्थमा)</p>
                  <p className="text-vibrant-blue">Love is beautiful. <span className="text-vibrant-orange">(प्रेम सुन्दर छ।)</span></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practice Questions */}
        <Card className="border-l-4 border-vibrant-red">
          <CardHeader>
            <CardTitle className="text-2xl text-vibrant-red">Practice Questions (अभ्यास प्रश्नहरू)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-lg font-medium mb-4 text-vibrant-purple">Complete these sentences with the correct article (a, an, the) or write "no article" if none is needed:</p>
              <p className="text-lg font-medium mb-4 text-vibrant-cyan">यी वाक्यहरूलाई सही आर्टिकल (a, an, the) दिएर पूरा गर्नुहोस् वा आवश्यक नभएमा "कुनै आर्टिकल छैन" लेख्नुहोस्:</p>
              
              <div className="space-y-3">
                {practiceQuestions.map((item, index) => (
                  <div key={index} className="bg-gradient-rainbow bg-opacity-5 p-4 rounded-lg border border-vibrant-blue/30">
                    <p className="font-medium text-vibrant-blue">{index + 1}. {item.question}</p>
                    {showAnswers && (
                      <p className="text-vibrant-red font-semibold mt-2 bg-vibrant-yellow/10 p-2 rounded">Answer: {item.answer}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center mt-6">
                <Button 
                  onClick={() => setShowAnswers(!showAnswers)}
                  className="bg-gradient-rainbow hover:scale-105 transform transition-all duration-300 text-white px-8 py-3 text-lg font-bold shadow-lg"
                >
                  {showAnswers ? "Hide Answers (उत्तरहरू लुकाउनुहोस्)" : "Check the Answers (उत्तरहरू हेर्नुहोस्)"}
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