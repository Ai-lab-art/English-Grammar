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
              <div className="p-4 rounded-lg space-y-3 border border-vibrant-cyan/30">
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
              <div className="p-4 rounded-lg space-y-3 border border-vibrant-green/30">
                <p className="text-vibrant-green">• An <strong>apple</strong> is red. <span className="text-vibrant-orange">(एउटा स्याउ रातो छ।)</span></p>
                <p className="text-vibrant-green">• An <strong>elephant</strong> is large. <span className="text-vibrant-orange">(एउटा हात्ती ठूलो छ।)</span></p>
                <p className="text-vibrant-green">• An <strong>hour</strong> (silent 'h', sounds like "our") <span className="text-vibrant-orange">(एक घण्टा - h चुप छ)</span></p>
                <p className="text-vibrant-green">• An <strong>honest</strong> person (silent 'h') <span className="text-vibrant-orange">(एक इमानदार व्यक्ति - h चुप छ)</span></p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-vibrant-red">Key Rules for A/An (A/An का मुख्य नियमहरू)</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-vibrant-blue pl-4 p-3 rounded">
                  <p className="text-vibrant-blue"><strong>Rule 1:</strong> Use with singular countable nouns when mentioning something for the first time</p>
                  <p className="text-vibrant-purple font-medium">नियम १: पहिलो पटक उल्लेख गर्दा एकवचन गन्न सकिने संज्ञाहरूसँग प्रयोग गर्नुहोस्</p>
                  <p className="text-sm text-vibrant-green">Example: I saw <em>a dog</em> in the park. <span className="text-vibrant-orange">(मैले पार्कमा एउटा कुकुर देखें।)</span></p>
                </div>
                <div className="border-l-4 border-vibrant-purple pl-4 p-3 rounded">
                  <p className="text-vibrant-purple"><strong>Rule 2:</strong> Use when talking about any one of a group</p>
                  <p className="text-vibrant-blue font-medium">नियम २: समूहको कुनै एकको बारेमा कुरा गर्दा प्रयोग गर्नुहोस्</p>
                  <p className="text-sm text-vibrant-green">Example: <em>A teacher</em> should be patient. <span className="text-vibrant-orange">(एक शिक्षक धैर्यवान हुनुपर्छ।)</span></p>
                </div>
                <div className="border-l-4 border-vibrant-green pl-4 p-3 rounded">
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
                <div className="border-l-4 border-vibrant-blue pl-4 p-4 rounded">
                  <p className="text-vibrant-blue font-semibold">1. Specific items (both speaker and listener know which one)</p>
                  <p className="text-vibrant-cyan font-medium mb-2">१. विशेष वस्तुहरू (बोल्ने र सुन्ने दुवैलाई थाहा भएको)</p>
                  <div className="p-3 rounded mt-2 space-y-2">
                    <p className="text-vibrant-green">• <strong>The</strong> cat you saw yesterday is back. <span className="text-vibrant-orange">(हिजो तपाईंले देखेको त्यो बिरालो फिर्ता आयो।)</span></p>
                    <p className="text-vibrant-green">• <strong>The</strong> book on my desk is interesting. <span className="text-vibrant-orange">(मेरो डेस्कमा भएको त्यो किताब रोचक छ।)</span></p>
                  </div>
                </div>

                <div className="border-l-4 border-vibrant-green pl-4 p-4 rounded">
                  <p className="text-vibrant-green font-semibold">2. Unique things</p>
                  <p className="text-vibrant-cyan font-medium mb-2">२. अनुपम/एकमात्र वस्तुहरू</p>
                  <div className="p-3 rounded mt-2 space-y-2">
                    <p className="text-vibrant-blue">• <strong>The</strong> sun is bright. <span className="text-vibrant-orange">(सूर्य उज्यालो छ।)</span></p>
                    <p className="text-vibrant-blue">• <strong>The</strong> president of our country. <span className="text-vibrant-orange">(हाम्रो देशका राष्ट्रपति।)</span></p>
                    <p className="text-vibrant-blue">• <strong>The</strong> first person to arrive. <span className="text-vibrant-orange">(आउने पहिलो व्यक्ति।)</span></p>
                  </div>
                </div>

                <div className="border-l-4 border-vibrant-red pl-4 p-4 rounded">
                  <p className="text-vibrant-red font-semibold">3. Superlatives</p>
                  <p className="text-vibrant-cyan font-medium mb-2">३. उत्कृष्टताबोधक (सबैभन्दा...)</p>
                  <div className="p-3 rounded mt-2 space-y-2">
                    <p className="text-vibrant-purple">• <strong>The</strong> best student in class. <span className="text-vibrant-orange">(कक्षाको सबैभन्दा राम्रो विद्यार्थी।)</span></p>
                    <p className="text-vibrant-purple">• <strong>The</strong> tallest building in the city. <span className="text-vibrant-orange">(शहरको सबैभन्दा अग्लो भवन।)</span></p>
                  </div>
                </div>

                <div className="border-l-4 border-vibrant-pink pl-4 p-4 rounded">
                  <p className="text-vibrant-pink font-semibold">4. Groups of people</p>
                  <p className="text-vibrant-cyan font-medium mb-2">४. मानिसहरूको समूह</p>
                  <div className="p-3 rounded mt-2 space-y-2">
                    <p className="text-vibrant-blue">• <strong>The</strong> rich should help <strong>the</strong> poor. <span className="text-vibrant-orange">(धनीहरूले गरिबहरूलाई सहायता गर्नुपर्छ।)</span></p>
                    <p className="text-vibrant-blue">• <strong>The</strong> elderly need care. <span className="text-vibrant-orange">(बुढापाकाहरूलाई हेरचाह चाहिन्छ।)</span></p>
                  </div>
                </div>

                <div className="border-l-4 border-vibrant-cyan pl-4 p-4 rounded">
                  <p className="text-vibrant-cyan font-semibold">5. Geographical features</p>
                  <p className="text-vibrant-purple font-medium mb-2">५. भौगोलिक विशेषताहरू</p>
                  <div className="p-3 rounded mt-2 space-y-2">
                    <p className="text-vibrant-green">• <strong>The</strong> Himalayas, <strong>the</strong> Pacific Ocean <span className="text-vibrant-orange">(हिमालय, प्रशान्त महासागर)</span></p>
                    <p className="text-vibrant-green">• <strong>The</strong> United States, <strong>the</strong> Netherlands <span className="text-vibrant-orange">(संयुक्त राज्य अमेरिका, नेदरल्यान्ड्स)</span></p>
                  </div>
                </div>
              </div>

              {/* Extended uses of "the" with numbered examples */}
              <div className="space-y-6 mt-8">
                <h4 className="text-lg font-semibold text-vibrant-orange">Extended uses of "the" ("the" का विस्तारित प्रयोगहरू)</h4>

                {/* 6. Rivers */}
                <div className="border-l-4 border-vibrant-blue pl-4 p-4 rounded">
                  <p className="text-vibrant-blue font-semibold">6. Before names of rivers (नदीहरूको नाम अघि)</p>
                  <ol className="pl-6 space-y-2 list-[lower-alpha]">
                    <li className="text-vibrant-blue"><strong>The</strong> Nile is the longest river in Africa. <span className="text-vibrant-orange">(नील अफ्रिकाको सबैभन्दा लामो नदी हो। — नदीको नाम अघि 'the' प्रयोग हुन्छ।)</span></li>
                    <li className="text-vibrant-blue"><strong>The</strong> Bagmati flows through Kathmandu. <span className="text-vibrant-orange">(बागमती काठमाडौं हुँदै बग्छ। — नदीको नाम अघि 'the' प्रयोग हुन्छ।)</span></li>
                    <li className="text-vibrant-blue"><strong>The</strong> Ganges is sacred to millions. <span className="text-vibrant-orange">(गंगा लाखौंका लागि पवित्र छ। — नदीको नाम अघि 'the' प्रयोग हुन्छ।)</span></li>
                    <li className="text-vibrant-blue"><strong>The</strong> Thames runs through London. <span className="text-vibrant-orange">(थेम्स लन्डन हुँदै बग्छ। — नदीको नाम अघि 'the' प्रयोग हुन्छ।)</span></li>
                    <li className="text-vibrant-blue"><strong>The</strong> Amazon carries immense water volume. <span className="text-vibrant-orange">(अमेजनले अति धेरै पानी बगाउँछ। — नदीको नाम अघि 'the' प्रयोग हुन्छ।)</span></li>
                  </ol>
                </div>

                {/* 7. Newspapers */}
                <div className="border-l-4 border-vibrant-purple pl-4 p-4 rounded">
                  <p className="text-vibrant-purple font-semibold">7. Before names of newspapers (अखबार/समाचारपत्रहरूको नाम अघि)</p>
                  <ol className="pl-6 space-y-2 list-[lower-alpha]">
                    <li className="text-vibrant-purple">I read <strong>The</strong> Kathmandu Post every morning. <span className="text-vibrant-orange">(म हरेक बिहान The Kathmandu Post पढ्छु। — पत्रिकाको नाम अघि 'the' प्रायः हुन्छ।)</span></li>
                    <li className="text-vibrant-purple">He works for <strong>The</strong> Himalayan Times. <span className="text-vibrant-orange">(उहाँ The Himalayan Times मा काम गर्नुहुन्छ। — पत्रिकाको नाम अघि 'the' प्रायः हुन्छ।)</span></li>
                    <li className="text-vibrant-purple">She subscribes to <strong>The</strong> New York Times. <span className="text-vibrant-orange">(उनी The New York Times को सदस्यता लिन्छिन्। — पत्रिकाको नाम अघि 'the' प्रायः हुन्छ।)</span></li>
                    <li className="text-vibrant-purple">We saw it in <strong>The</strong> Guardian. <span className="text-vibrant-orange">(हामीले यो The Guardian मा देख्यौं। — पत्रिकाको नाम अघि 'the' प्रायः हुन्छ।)</span></li>
                    <li className="text-vibrant-purple">The story appeared in <strong>The</strong> Washington Post. <span className="text-vibrant-orange">(कथा The Washington Post मा प्रकाशित भयो। — पत्रिकाको नाम अघि 'the' प्रायः हुन्छ।)</span></li>
                  </ol>
                </div>

                {/* 8. Ordinal numbers (specific order/rank) */}
                <div className="border-l-4 border-vibrant-green pl-4 p-4 rounded">
                  <p className="text-vibrant-green font-semibold">8. Before ordinal numbers (क्रमवाचक सङ्ख्या अघि)</p>
                  <ol className="pl-6 space-y-2 list-[lower-alpha]">
                    <li className="text-vibrant-green"><strong>The</strong> first chapter introduces the topic. <span className="text-vibrant-orange">(पहिलो अध्यायले विषय परिचय गराउँछ। — क्रम जनाउँदा 'the' प्रयोग हुन्छ।)</span></li>
                    <li className="text-vibrant-green"><strong>The</strong> second candidate performed well. <span className="text-vibrant-orange">(दोस्रो उम्मेदवारले राम्रो प्रदर्शन गरे। — क्रम जनाउँदा 'the'.)</span></li>
                    <li className="text-vibrant-green"><strong>The</strong> third floor is a library. <span className="text-vibrant-orange">(तेस्रो तल पुस्तकालय हो। — स्थान/क्रम जनाउँदा 'the'.)</span></li>
                    <li className="text-vibrant-green"><strong>The</strong> tenth question is tricky. <span className="text-vibrant-orange">(दशौं प्रश्न जटिल छ। — क्रम जनाउँदा 'the'.)</span></li>
                    <li className="text-vibrant-green"><strong>The</strong> fourth row is empty. <span className="text-vibrant-orange">(चौथो पंक्ति खाली छ। — क्रम/स्थान जनाउँदा 'the'.)</span></li>
                  </ol>
                </div>

                {/* 9. Second mention */}
                <div className="border-l-4 border-vibrant-pink pl-4 p-4 rounded">
                  <p className="text-vibrant-pink font-semibold">9. When mentioned the second time (दोस्रो पटक उल्लेख हुँदा)</p>
                  <ol className="pl-6 space-y-2 list-[lower-alpha]">
                    <li className="text-vibrant-pink">I saw a dog. <strong>The</strong> dog was barking loudly. <span className="text-vibrant-orange">(म एक कुकुर देखें। त्यो कुकुर जोरले भुकिरहेको थियो। — दोस्रो उल्लेखमा 'the'.)</span></li>
                    <li className="text-vibrant-pink">She bought a car. <strong>The</strong> car is very fast. <span className="text-vibrant-orange">(उनीले एक कार किनिन्। त्यो कार निकै छिटो छ। — दोस्रो उल्लेखमा 'the'.)</span></li>
                    <li className="text-vibrant-pink">We watched a movie. <strong>The</strong> movie was amazing. <span className="text-vibrant-orange">(हामीले एउटा फिल्म हेर्यौं। त्यो फिल्म अद्भुत थियो। — दोस्रो उल्लेखमा 'the'.)</span></li>
                    <li className="text-vibrant-pink">He met a teacher. <strong>The</strong> teacher helped him. <span className="text-vibrant-orange">(उनी एक शिक्षकसँग भेटे। त्यस शिक्षकले उनलाई मद्दत गरे। — दोस्रो उल्लेखमा 'the'.)</span></li>
                    <li className="text-vibrant-pink">I found a shop. <strong>The</strong> shop was closed. <span className="text-vibrant-orange">(म एक पसल भेट्टाएँ। त्यो पसल बन्द थियो। — दोस्रो उल्लेखमा 'the'.)</span></li>
                  </ol>
                </div>

                {/* 10. Deserts */}
                <div className="border-l-4 border-vibrant-yellow pl-4 p-4 rounded">
                  <p className="text-vibrant-yellow font-semibold">10. Before names of deserts (मरुभूमिको नाम अघि)</p>
                  <ol className="pl-6 space-y-2 list-[lower-alpha]">
                    <li className="text-vibrant-yellow"><strong>The</strong> Sahara is vast and hot. <span className="text-vibrant-orange">(सहारा विशाल र तातो छ। — मरुभूमिको नाम अघि 'the'.)</span></li>
                    <li className="text-vibrant-yellow"><strong>The</strong> Gobi is in Asia. <span className="text-vibrant-orange">(गोबी एशियामा पर्छ। — मरुभूमिको नाम अघि 'the'.)</span></li>
                    <li className="text-vibrant-yellow"><strong>The</strong> Thar lies in India and Pakistan. <span className="text-vibrant-orange">(थार भारत र पाकिस्तानमा पर्छ। — मरुभूमिको नाम अघि 'the'.)</span></li>
                    <li className="text-vibrant-yellow"><strong>The</strong> Kalahari covers parts of Southern Africa. <span className="text-vibrant-orange">(कालाहारी दक्षिणी अफ्रिकाको भागहरूमा फैलिएको छ। — 'the'.)</span></li>
                    <li className="text-vibrant-yellow"><strong>The</strong> Arabian Desert is dry. <span className="text-vibrant-orange">(अरबी मरुभूमि सुख्खा छ। — मरुभूमिको नाम अघि 'the'.)</span></li>
                  </ol>
                </div>

                {/* 11. Poles of the Earth */}
                <div className="border-l-4 border-vibrant-cyan pl-4 p-4 rounded">
                  <p className="text-vibrant-cyan font-semibold">11. Before the poles of the Earth (धरतीका ध्रुवहरूको नाम अघि)</p>
                  <ol className="pl-6 space-y-2 list-[lower-alpha]">
                    <li className="text-vibrant-cyan"><strong>The</strong> North Pole is extremely cold. <span className="text-vibrant-orange">(उत्तरी ध्रुव अत्यन्त चिसो छ। — ध्रुव नाम अघि 'the'.)</span></li>
                    <li className="text-vibrant-cyan"><strong>The</strong> South Pole has harsh weather. <span className="text-vibrant-orange">(दक्षिणी ध्रुवमा कडा मौसम हुन्छ। — 'the'.)</span></li>
                    <li className="text-vibrant-cyan">Explorers reached <strong>the</strong> North Pole in 1909. <span className="text-vibrant-orange">(अन्वेषकहरू 1909 मा उत्तरी ध्रुव पुगे। — 'the'.)</span></li>
                    <li className="text-vibrant-cyan">Scientists study <strong>the</strong> South Pole year-round. <span className="text-vibrant-orange">(विज्ञहरूले वर्षभरि दक्षिणी ध्रुवको अध्ययन गर्छन्। — 'the'.)</span></li>
                    <li className="text-vibrant-cyan">Few people have visited <strong>the</strong> North Pole. <span className="text-vibrant-orange">(धेरै कम मानिस उत्तरी ध्रुव पुगेका छन्। — 'the'.)</span></li>
                  </ol>
                </div>

                {/* 12. Seas and Oceans */}
                <div className="border-l-4 border-vibrant-blue pl-4 p-4 rounded">
                  <p className="text-vibrant-blue font-semibold">12. Before names of seas and oceans (सागर र महासागरको नाम अघि)</p>
                  <ol className="pl-6 space-y-2 list-[lower-alpha]">
                    <li className="text-vibrant-blue"><strong>The</strong> Pacific Ocean is very deep. <span className="text-vibrant-orange">(प्रशान्त महासागर धेरै गहिरो छ। — महासागरको नाम अघि 'the'.)</span></li>
                    <li className="text-vibrant-blue"><strong>The</strong> Atlantic Ocean separates continents. <span className="text-vibrant-orange">(एटलान्टिक महासागरले महादेशहरू छुट्याउँछ। — 'the'.)</span></li>
                    <li className="text-vibrant-blue"><strong>The</strong> Indian Ocean borders South Asia. <span className="text-vibrant-orange">(भारतीय महासागर दक्षिण एशियासँग जोडिन्छ। — 'the'.)</span></li>
                    <li className="text-vibrant-blue"><strong>The</strong> Mediterranean Sea is beautiful. <span className="text-vibrant-orange">(भूमध्य सागर सुन्दर छ। — सागर/समुद्र अगाडि 'the'.)</span></li>
                    <li className="text-vibrant-blue"><strong>The</strong> Arabian Sea touches Nepal’s neighbors. <span className="text-vibrant-orange">(अरबी सागर नेपालका छिमेकी देशहरूलाई छोन्छ। — 'the'.)</span></li>
                  </ol>
                </div>

                {/* 13. Mountain ranges */}
                <div className="border-l-4 border-vibrant-green pl-4 p-4 rounded">
                  <p className="text-vibrant-green font-semibold">13. Before names of mountain ranges (पहाड/हिमाल शृङ्खलाको नाम अघि)</p>
                  <ol className="pl-6 space-y-2 list-[lower-alpha]">
                    <li className="text-vibrant-green"><strong>The</strong> Himalayas are the highest mountains. <span className="text-vibrant-orange">(हिमालय विश्वकै अग्लो पर्वतशृङ्खला हो। — शृङ्खला नाम अघि 'the'.)</span></li>
                    <li className="text-vibrant-green"><strong>The</strong> Andes run along South America. <span className="text-vibrant-orange">(एन्डिज दक्षिण अमेरिकासँग समांतर चल्छ। — 'the'.)</span></li>
                    <li className="text-vibrant-green"><strong>The</strong> Alps are in Europe. <span className="text-vibrant-orange">(एल्प्स युरोपमा छन्। — 'the'.)</span></li>
                    <li className="text-vibrant-green"><strong>The</strong> Rockies stretch through North America. <span className="text-vibrant-orange">(रकीज उत्तर अमेरिकाभरि फैलिएका छन्। — 'the'.)</span></li>
                    <li className="text-vibrant-green"><strong>The</strong> Pyrenees divide Spain and France. <span className="text-vibrant-orange">(पिरिनिज स्पेन र फ्रान्स छुट्याउँछ। — 'the'.)</span></li>
                  </ol>
                </div>

                {/* 14. Groups of islands */}
                <div className="border-l-4 border-vibrant-pink pl-4 p-4 rounded">
                  <p className="text-vibrant-pink font-semibold">14. Before names of groups of islands (टापु समूहहरूको नाम अघि)</p>
                  <ol className="pl-6 space-y-2 list-[lower-alpha]">
                    <li className="text-vibrant-pink"><strong>The</strong> Maldives are in the Indian Ocean. <span className="text-vibrant-orange">(माल्दिभ्स भारतीय महासागरमा छन्। — समूह नाम अघि 'the'.)</span></li>
                    <li className="text-vibrant-pink"><strong>The</strong> Philippines have thousands of islands. <span className="text-vibrant-orange">(फिलिपिन्समा हजारौं टापु छन्। — 'the'.)</span></li>
                    <li className="text-vibrant-pink"><strong>The</strong> Bahamas attract tourists. <span className="text-vibrant-orange">(बहामास पर्यटकहरूलाई आकर्षित गर्छ। — 'the'.)</span></li>
                    <li className="text-vibrant-pink"><strong>The</strong> Andaman and Nicobar Islands are scenic. <span className="text-vibrant-orange">(एन्डामान र निकोबार टापुहरू सुन्दर छन्। — 'the'.)</span></li>
                    <li className="text-vibrant-pink"><strong>The</strong> Canary Islands belong to Spain. <span className="text-vibrant-orange">(क्यानरी टापुहरू स्पेनका हुन्। — 'the'.)</span></li>
                  </ol>
                </div>

                {/* 15. Geographical areas */}
                <div className="border-l-4 border-vibrant-yellow pl-4 p-4 rounded">
                  <p className="text-vibrant-yellow font-semibold">15. Before names of geographical areas (भौगोलिक क्षेत्रहरूको नाम अघि)</p>
                  <ol className="pl-6 space-y-2 list-[lower-alpha]">
                    <li className="text-vibrant-yellow"><strong>The</strong> Middle East is rich in history. <span className="text-vibrant-orange">(मध्यपूर्व इतिहासमा समृद्ध छ। — क्षेत्रको नाम अघि 'the'.)</span></li>
                    <li className="text-vibrant-yellow"><strong>The</strong> Far East includes many countries. <span className="text-vibrant-orange">(दुरपूर्वमा धेरै देशहरू पर्छन्। — 'the'.)</span></li>
                    <li className="text-vibrant-yellow"><strong>The</strong> West influences global culture. <span className="text-vibrant-orange">(पश्चिमले विश्व संस्कृतिमाथि प्रभाव पार्छ। — 'the'.)</span></li>
                    <li className="text-vibrant-yellow"><strong>The</strong> Arctic is melting rapidly. <span className="text-vibrant-orange">(आर्क्टिक छिट्टै पग्लिँदैछ। — 'the'.)</span></li>
                    <li className="text-vibrant-yellow"><strong>The</strong> Balkans have diverse traditions. <span className="text-vibrant-orange">(बाल्कनमा विविध परम्पराहरू छन्। — 'the'.)</span></li>
                  </ol>
                </div>

                {/* 16. Musical instruments */}
                <div className="border-l-4 border-vibrant-cyan pl-4 p-4 rounded">
                  <p className="text-vibrant-cyan font-semibold">16. Before names of musical instruments (वाद्यवादनाको नाम अघि)</p>
                  <ol className="pl-6 space-y-2 list-[lower-alpha]">
                    <li className="text-vibrant-cyan">She plays <strong>the</strong> guitar. <span className="text-vibrant-orange">(उनी गिटार बजाउँछिन्। — सामान्य रूपमा बजाउने वादनमा 'the'.)</span></li>
                    <li className="text-vibrant-cyan">He plays <strong>the</strong> piano. <span className="text-vibrant-orange">(उनी पियानो बजाउँछन्। — 'the'.)</span></li>
                    <li className="text-vibrant-cyan">They play <strong>the</strong> violin together. <span className="text-vibrant-orange">(उनीहरू सँगै भायोलिन बजाउँछन्। — 'the'.)</span></li>
                    <li className="text-vibrant-cyan">She is learning <strong>the</strong> flute. <span className="text-vibrant-orange">(उनी बाँसुरी सिक्दैछिन्। — 'the'.)</span></li>
                    <li className="text-vibrant-cyan">He mastered <strong>the</strong> drums. <span className="text-vibrant-orange">(उनी ड्रम्समा निपूर्ण भएका छन्। — 'the'.)</span></li>
                  </ol>
                </div>

                {/* 17. Scientific inventions */}
                <div className="border-l-4 border-vibrant-blue pl-4 p-4 rounded">
                  <p className="text-vibrant-blue font-semibold">17. Before names of scientific inventions (वैज्ञानिक आविष्कारहरूको नाम अघि)</p>
                  <ol className="pl-6 space-y-2 list-[lower-alpha]">
                    <li className="text-vibrant-blue"><strong>The</strong> telephone changed communication. <span className="text-vibrant-orange">(टेलिफोनले सञ्चार परिवर्तन गर्‍यो। — आविष्कार जनाउँदा 'the'.)</span></li>
                    <li className="text-vibrant-blue"><strong>The</strong> steam engine powered industry. <span className="text-vibrant-orange">(स्टीम इन्जिनले उद्योगलाई शक्ति दियो। — 'the'.)</span></li>
                    <li className="text-vibrant-blue"><strong>The</strong> computer revolutionized work. <span className="text-vibrant-orange">(कम्प्युटरले काममा क्रान्ति ल्यायो। — 'the'.)</span></li>
                    <li className="text-vibrant-blue"><strong>The</strong> printing press spread knowledge. <span className="text-vibrant-orange">(मुद्रणयन्त्रले ज्ञान विस्तार गर्‍यो। — 'the'.)</span></li>
                    <li className="text-vibrant-blue"><strong>The</strong> microscope opened a new world. <span className="text-vibrant-orange">(सूक्ष्मदर्शीले नयाँ संसार देखायो। — 'the'.)</span></li>
                  </ol>
                </div>

                {/* 18. Famous buildings */}
                <div className="border-l-4 border-vibrant-green pl-4 p-4 rounded">
                  <p className="text-vibrant-green font-semibold">18. Before names of famous buildings/monuments (प्रसिद्ध भवन/स्मारकहरूको नाम अघि)</p>
                  <ol className="pl-6 space-y-2 list-[lower-alpha]">
                    <li className="text-vibrant-green">We visited <strong>the</strong> Eiffel Tower. <span className="text-vibrant-orange">(हामी एफिल टावर गयौं। — प्रसिद्ध भवन अघि 'the'.)</span></li>
                    <li className="text-vibrant-green">He saw <strong>the</strong> Taj Mahal at sunrise. <span className="text-vibrant-orange">(उनीले बिहानीमा ताजमहल देखे। — 'the'.)</span></li>
                    <li className="text-vibrant-green">They walked along <strong>the</strong> Great Wall of China. <span className="text-vibrant-orange">(उनीहरू चिनियाँ महान् पर्खालसँगै हिँडे। — 'the'.)</span></li>
                    <li className="text-vibrant-green">We toured <strong>the</strong> Colosseum in Rome. <span className="text-vibrant-orange">(हामी रोमन कोलोशियम भ्रमण गर्यौं। — 'the'.)</span></li>
                    <li className="text-vibrant-green">She visited <strong>the</strong> Statue of Liberty. <span className="text-vibrant-orange">(उनीले स्वतन्त्रताको मूर्ति अवलोकन गरिन्। — 'the'.)</span></li>
                  </ol>
                </div>

                {/* 19. Historical events */}
                <div className="border-l-4 border-vibrant-pink pl-4 p-4 rounded">
                  <p className="text-vibrant-pink font-semibold">19. Before names of historical events (ऐतिहासिक घटनाहरूको नाम अघि)</p>
                  <ol className="pl-6 space-y-2 list-[lower-alpha]">
                    <li className="text-vibrant-pink"><strong>The</strong> Industrial Revolution transformed society. <span className="text-vibrant-orange">(औद्योगिक क्रान्तिले समाज परिवर्तन गर्‍यो। — ऐतिहासिक घटना अघि 'the'.)</span></li>
                    <li className="text-vibrant-pink"><strong>The</strong> French Revolution began in 1789. <span className="text-vibrant-orange">(फ्रान्सेली क्रान्ति १७८९ मा सुरु भयो। — 'the'.)</span></li>
                    <li className="text-vibrant-pink"><strong>The</strong> Renaissance reshaped art and science. <span className="text-vibrant-orange">(पुनर्जागरणले कला र विज्ञानलाई रूपान्तरण गर्‍यो। — 'the'.)</span></li>
                    <li className="text-vibrant-pink"><strong>The</strong> Cold War lasted decades. <span className="text-vibrant-orange">(शीतयुद्ध दशकौंसम्म चल्यो। — 'the'.)</span></li>
                    <li className="text-vibrant-pink"><strong>The</strong> First World War ended in 1918. <span className="text-vibrant-orange">(पहिलो विश्वयुद्ध १९१८ मा अन्त्य भयो। — 'the'.)</span></li>
                  </ol>
                </div>

                {/* 20. Ships and trains */}
                <div className="border-l-4 border-vibrant-yellow pl-4 p-4 rounded">
                  <p className="text-vibrant-yellow font-semibold">20. Before names of ships and trains (जहाज र रेलका नाम अघि)</p>
                  <ol className="pl-6 space-y-2 list-[lower-alpha]">
                    <li className="text-vibrant-yellow"><strong>The</strong> Titanic sank in 1912. <span className="text-vibrant-orange">(टाइटानिक १९१२ मा डुब्यो। — जहाजको नाम अघि 'the'.)</span></li>
                    <li className="text-vibrant-yellow"><strong>The</strong> Mayflower carried settlers to America. <span className="text-vibrant-orange">(मेफ्लावरले बसोबासकर्तालाई अमेरिका पुर्‍यायो। — 'the'.)</span></li>
                    <li className="text-vibrant-yellow">We boarded <strong>the</strong> Orient Express. <span className="text-vibrant-orange">(हामी ओरिएन्ट एक्सप्रेसमा चढ़्यौं। — रेल/सेवाको नाम अघि 'the'.)</span></li>
                    <li className="text-vibrant-yellow">He admired <strong>the</strong> Queen Mary 2. <span className="text-vibrant-orange">(उनी क्विन म्यारी 2 लाई प्रशंसा गर्थे। — जहाजको नाम अघि 'the'.)</span></li>
                    <li className="text-vibrant-yellow">They took <strong>the</strong> Trans-Siberian Express. <span className="text-vibrant-orange">(उनीहरूले ट्रान्स-साइबेरियन एक्सप्रेस लिए। — 'the'.)</span></li>
                  </ol>
                </div>

                {/* 21. Families */}
                <div className="border-l-4 border-vibrant-cyan pl-4 p-4 rounded">
                  <p className="text-vibrant-cyan font-semibold">21. Before names of families (परिवारको थर/समूहको नाम अघि)</p>
                  <ol className="pl-6 space-y-2 list-[lower-alpha]">
                    <li className="text-vibrant-cyan"><strong>The</strong> Smiths moved next door. <span className="text-vibrant-orange">(स्मिथ परिवार छेउमा सरे। — परिवार/थर बहुवचनमा 'the'.)</span></li>
                    <li className="text-vibrant-cyan"><strong>The</strong> Thapas are visiting today. <span className="text-vibrant-orange">(थापा परिवार आज आउँदैछन्। — 'the'.)</span></li>
                    <li className="text-vibrant-cyan"><strong>The</strong> Koiralas hosted the event. <span className="text-vibrant-orange">(कोइराला परिवारले कार्यक्रम आयोजना गर्‍यो। — 'the'.)</span></li>
                    <li className="text-vibrant-cyan"><strong>The</strong> Johnsons live nearby. <span className="text-vibrant-orange">(जोन्सन परिवार नजिकै बस्छ। — 'the'.)</span></li>
                    <li className="text-vibrant-cyan"><strong>The</strong> Sharmas invited us to dinner. <span className="text-vibrant-orange">(शर्मा परिवारले हामीलाई दिउँसोको भोजनमा बोलाए। — 'the'.)</span></li>
                  </ol>
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
                <div className="border-l-4 border-vibrant-blue pl-4 p-4 rounded">
                  <p className="text-vibrant-blue font-semibold">1. Plural countable nouns (general)</p>
                  <p className="text-vibrant-cyan font-medium">१. बहुवचन गन्न सकिने संज्ञाहरू (सामान्य अर्थमा)</p>
                  <p className="text-vibrant-green">Dogs are friendly animals. <span className="text-vibrant-orange">(कुकुरहरू मित्रवत् जनावरहरू हुन्।)</span></p>
                </div>
                <div className="border-l-4 border-vibrant-green pl-4 p-4 rounded">
                  <p className="text-vibrant-green font-semibold">2. Uncountable nouns (general)</p>
                  <p className="text-vibrant-cyan font-medium">२. गन्न नसकिने संज्ञाहरू (सामान्य अर्थमा)</p>
                  <p className="text-vibrant-blue">Water is essential for life. <span className="text-vibrant-orange">(पानी जीवनका लागि आवश्यक छ।)</span></p>
                </div>
                <div className="border-l-4 border-vibrant-purple pl-4 p-4 rounded">
                  <p className="text-vibrant-purple font-semibold">3. Proper nouns</p>
                  <p className="text-vibrant-cyan font-medium">३. व्यक्तिवाचक संज्ञाहरू</p>
                  <p className="text-vibrant-red">John lives in Paris. <span className="text-vibrant-orange">(जोन पेरिसमा बस्छ।)</span></p>
                </div>
                <div className="border-l-4 border-vibrant-pink pl-4 p-4 rounded">
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
                  <div key={index} className="p-4 rounded-lg border border-vibrant-blue/30">
                    <p className="font-medium text-vibrant-blue">{index + 1}. {item.question}</p>
                    {showAnswers && (
                      <p className="text-vibrant-red font-semibold mt-2 p-2 rounded">Answer: {item.answer}</p>
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