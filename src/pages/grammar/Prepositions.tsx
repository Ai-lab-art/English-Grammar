import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Prepositions = () => {
  const [showAnswers, setShowAnswers] = useState(false);
  return (
    <GrammarLayout 
      title="Prepositions" 
      description="Master prepositions of time, place, and direction"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-4">What are Prepositions? (पूर्वसर्ग के हुन्?)</h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-200 dark:border-blue-800 mb-6">
            <h3 className="font-semibold mb-2">🌍 English Definition:</h3>
            <p className="mb-4">
              Prepositions are words that show the relationship between a noun (or pronoun) and other words in a sentence. 
              They typically indicate location, direction, time, manner, or cause. They are small but very important words that help us understand the connections between different parts of a sentence.
            </p>
            
            <h3 className="font-semibold mb-2">🇳🇵 नेपाली परिभाषा:</h3>
            <p>
              पूर्वसर्गहरू त्यस्ता शब्दहरू हुन् जसले वाक्यमा संज्ञा (वा सर्वनाम) र अन्य शब्दहरूबीचको सम्बन्ध देखाउँछन्। 
              यिनले सामान्यतया स्थान, दिशा, समय, तरिका, वा कारण जनाउँछन्। यी साना तर अत्यन्त महत्वपूर्ण शब्दहरू हुन् जसले हामीलाई वाक्यका विभिन्न भागहरूबीचको जडान बुझ्न मद्दत गर्छन्।
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-primary/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Position (स्थिति)</h3>
              <p className="text-sm">on, in, at, under, above</p>
            </div>
            <div className="bg-secondary/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Direction (दिशा)</h3>
              <p className="text-sm">to, from, into, through, across</p>
            </div>
            <div className="bg-accent/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Time (समय)</h3>
              <p className="text-sm">at, in, on, before, after</p>
            </div>
          </div>
        </section>

        {/* Prepositions of Time */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Prepositions of Time (समयका पूर्वसर्गहरू)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border border-yellow-200 dark:border-yellow-800 mb-6">
              <h4 className="font-semibold mb-2">🌍 English Rule:</h4>
              <p className="mb-3">Time prepositions follow a specific pattern: AT for specific points in time, IN for longer periods, and ON for specific days and dates.</p>
              
              <h4 className="font-semibold mb-2">🇳🇵 नेपाली नियम:</h4>
              <p>समयका पूर्वसर्गहरूको निश्चित ढाँचा छ: AT निश्चित समयका लागि, IN लामो अवधिका लागि, र ON निश्चित दिन र मितिका लागि प्रयोग गरिन्छ।</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">AT (मा/का बेला)</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="mb-3 font-medium">🌍 English: Use "at" with specific times and certain expressions</p>
                  <p className="mb-3 font-medium">🇳🇵 नेपाली: निश्चित समय र केही अभिव्यक्तिहरूका साथ "at" प्रयोग गर्छौं</p>
                </div>
              </div>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-3">
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>At</strong> 3 o'clock (तीन बजे)</p>
                  <p className="text-sm text-muted-foreground">I will call you at 3 o'clock. (म तिमीलाई तीन बजे फोन गर्नेछु।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>At</strong> midnight/noon (मध्यरातमा/दिउँसो)</p>
                  <p className="text-sm text-muted-foreground">The party starts at midnight. (पार्टी मध्यरातमा सुरु हुन्छ।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>At</strong> sunrise/sunset (सूर्योदयमा/सूर्यास्तमा)</p>
                  <p className="text-sm text-muted-foreground">Birds sing at sunrise. (चराहरू सूर्योदयमा गाउँछन्।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>At</strong> Christmas/Easter (क्रिसमसमा/इस्टरमा)</p>
                  <p className="text-sm text-muted-foreground">We exchange gifts at Christmas. (हामी क्रिसमसमा उपहार साटासाट गर्छौं।)</p>
                </div>
                <div>
                  <p>• <strong>At</strong> the weekend (सप्ताहन्तमा - British English)</p>
                  <p className="text-sm text-muted-foreground">I relax at the weekend. (म सप्ताहन्तमा आराम गर्छु।)</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">IN (मा/भित्र)</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="mb-3 font-medium">🌍 English: Use "in" with longer periods of time</p>
                  <p className="mb-3 font-medium">🇳🇵 नेपाली: लामो समयावधिका साथ "in" प्रयोग गर्छौं</p>
                </div>
              </div>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-3">
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>In</strong> January/February (जनवरी/फेब्रुअरीमा)</p>
                  <p className="text-sm text-muted-foreground">Schools open in January. (स्कूलहरू जनवरीमा खुल्छन्।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>In</strong> 2024 (२०२४ मा)</p>
                  <p className="text-sm text-muted-foreground">I will graduate in 2024. (म २०२४ मा स्नातक गर्नेछु।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>In</strong> the morning/afternoon/evening (बिहान/दिउँसो/साँझमा)</p>
                  <p className="text-sm text-muted-foreground">I exercise in the morning. (म बिहान व्यायाम गर्छु।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>In</strong> summer/winter (गर्मी/जाडोमा)</p>
                  <p className="text-sm text-muted-foreground">It's hot in summer. (गर्मीमा तातो हुन्छ।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>In</strong> the future (भविष्यमा)</p>
                  <p className="text-sm text-muted-foreground">Technology will advance in the future. (भविष्यमा प्रविधि विकास हुनेछ।)</p>
                </div>
                <div>
                  <p>• <strong>In</strong> a few minutes (केही मिनेटमा)</p>
                  <p className="text-sm text-muted-foreground">The train arrives in a few minutes. (रेल केही मिनेटमा आइपुग्छ।)</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">ON (मा)</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="mb-3 font-medium">🌍 English: Use "on" with specific days and dates</p>
                  <p className="mb-3 font-medium">🇳🇵 नेपाली: निश्चित दिन र मितिहरूका साथ "on" प्रयोग गर्छौं</p>
                </div>
              </div>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-3">
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>On</strong> Monday/Tuesday (सोमबार/मंगलबार)</p>
                  <p className="text-sm text-muted-foreground">The meeting is on Monday. (बैठक सोमबार छ।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>On</strong> January 15th (जनवरी १५ मा)</p>
                  <p className="text-sm text-muted-foreground">My birthday is on January 15th. (मेरो जन्मदिन जनवरी १५ मा पर्छ।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>On</strong> my birthday (मेरो जन्मदिनमा)</p>
                  <p className="text-sm text-muted-foreground">I celebrate on my birthday. (म मेरो जन्मदिनमा मनाउँछु।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>On</strong> weekdays (हप्ताका दिनहरूमा)</p>
                  <p className="text-sm text-muted-foreground">I work on weekdays. (म हप्ताका दिनहरूमा काम गर्छु।)</p>
                </div>
                <div>
                  <p>• <strong>On</strong> the weekend (सप्ताहन्तमा - American English)</p>
                  <p className="text-sm text-muted-foreground">We have fun on the weekend. (हामी सप्ताहन्तमा रमाइलो गर्छौं।)</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Other Time Prepositions (अन्य समयका पूर्वसर्गहरू)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Before:</strong> अगाडि/पहिले</p>
                    <p className="text-sm text-muted-foreground">Come before 5 PM. (५ बजे अगाडि आऊ।)</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>After:</strong> पछि</p>
                    <p className="text-sm text-muted-foreground">Call me after dinner. (खाना खाएपछि मलाई फोन गर।)</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>During:</strong> को दौरानमा</p>
                    <p className="text-sm text-muted-foreground">It rained during the night. (रातको दौरानमा पानी पर्यो।)</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Since:</strong> देखि</p>
                    <p className="text-sm text-muted-foreground">I've known him since 2020. (म उसलाई २०२० देखि चिन्छु।)</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Until/Till:</strong> सम्म</p>
                    <p className="text-sm text-muted-foreground">Wait until tomorrow. (भोलि सम्म पर्खनुहोस्।)</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>For:</strong> को लागि (अवधि)</p>
                    <p className="text-sm text-muted-foreground">I studied for 3 hours. (मैले ३ घण्टाको लागि पढें।)</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prepositions of Place */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Prepositions of Place (स्थानका पूर्वसर्गहरू)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded border border-green-200 dark:border-green-800 mb-6">
              <h4 className="font-semibold mb-2">🌍 English Rule:</h4>
              <p className="mb-3">Place prepositions show WHERE something is located. AT for specific points, IN for enclosed spaces, and ON for surfaces.</p>
              
              <h4 className="font-semibold mb-2">🇳🇵 नेपाली नियम:</h4>
              <p>स्थानका पूर्वसर्गहरूले कुनै चीज कहाँ अवस्थित छ भनेर देखाउँछन्। AT निश्चित बिन्दुका लागि, IN घेरिएका ठाउँका लागि, र ON सतहका लागि प्रयोग गरिन्छ।</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">AT (मा)</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="mb-3 font-medium">🌍 English: Use "at" for specific points or locations</p>
                  <p className="mb-3 font-medium">🇳🇵 नेपाली: निश्चित बिन्दु वा स्थानहरूका लागि "at" प्रयोग गर्छौं</p>
                </div>
              </div>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-3">
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>At</strong> the bus stop (बस स्टपमा)</p>
                  <p className="text-sm text-muted-foreground">Wait at the bus stop. (बस स्टपमा पर्खनुहोस्।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>At</strong> home (घरमा)</p>
                  <p className="text-sm text-muted-foreground">I'm staying at home. (म घरमा बसिरहेको छु।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>At</strong> school/university (स्कूल/विश्वविद्यालयमा)</p>
                  <p className="text-sm text-muted-foreground">She teaches at school. (उनी स्कूलमा पढाउँछिन्।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>At</strong> the top/bottom (माथि/तल)</p>
                  <p className="text-sm text-muted-foreground">The flag is at the top. (झण्डा माथि छ।)</p>
                </div>
                <div>
                  <p>• <strong>At</strong> the door (ढोकामा)</p>
                  <p className="text-sm text-muted-foreground">Someone is at the door. (कोही ढोकामा छ।)</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">IN (भित्र/मा)</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="mb-3 font-medium">🌍 English: Use "in" for enclosed spaces or larger areas</p>
                  <p className="mb-3 font-medium">🇳🇵 नेपाली: घेरिएका ठाउँ वा ठूला क्षेत्रहरूका लागि "in" प्रयोग गर्छौं</p>
                </div>
              </div>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-3">
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>In</strong> the room (कोठामा)</p>
                  <p className="text-sm text-muted-foreground">The books are in the room. (किताबहरू कोठामा छन्।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>In</strong> the car (कारभित्र)</p>
                  <p className="text-sm text-muted-foreground">We're sitting in the car. (हामी कारभित्र बसिरहेका छौं।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>In</strong> London (लन्डनमा)</p>
                  <p className="text-sm text-muted-foreground">She lives in London. (उनी लन्डनमा बस्छिन्।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>In</strong> the garden (बगैंचामा)</p>
                  <p className="text-sm text-muted-foreground">Children play in the garden. (बच्चाहरू बगैंचामा खेल्छन्।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>In</strong> bed (ओछ्यानमा)</p>
                  <p className="text-sm text-muted-foreground">He's still in bed. (उनी अझै ओछ्यानमा छन्।)</p>
                </div>
                <div>
                  <p>• <strong>In</strong> the middle (बीचमा)</p>
                  <p className="text-sm text-muted-foreground">The table is in the middle. (टेबल बीचमा छ।)</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">ON (माथि/मा)</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="mb-3 font-medium">🌍 English: Use "on" for surfaces and certain locations</p>
                  <p className="mb-3 font-medium">🇳🇵 नेपाली: सतह र केही स्थानहरूका लागि "on" प्रयोग गर्छौं</p>
                </div>
              </div>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-3">
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>On</strong> the table (टेबलमाथि)</p>
                  <p className="text-sm text-muted-foreground">The cup is on the table. (कप टेबलमाथि छ।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>On</strong> the wall (भित्तामा)</p>
                  <p className="text-sm text-muted-foreground">The picture hangs on the wall. (तस्बिर भित्तामा झुण्डिएको छ।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>On</strong> the bus/train (बस/रेलमा)</p>
                  <p className="text-sm text-muted-foreground">I met her on the bus. (मैले उनलाई बसमा भेटें।)</p>
                </div>
                <div className="border-b border-secondary/30 pb-2">
                  <p>• <strong>On</strong> the first floor (पहिलो तल्लामा)</p>
                  <p className="text-sm text-muted-foreground">My office is on the first floor. (मेरो कार्यालय पहिलो तल्लामा छ।)</p>
                </div>
                <div>
                  <p>• <strong>On</strong> the right/left (दाया/बाया)</p>
                  <p className="text-sm text-muted-foreground">The shop is on the right. (पसल दायामा छ।)</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Other Important Place Prepositions (अन्य महत्वपूर्ण स्थानका पूर्वसर्गहरू)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Between:</strong> बीचमा (दुई चीजका बीच)</p>
                    <p className="text-sm text-muted-foreground">The book is between the pen and pencil. (किताब कलम र पेन्सिलका बीचमा छ।)</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Among:</strong> बीचमा (तीन वा बढी चीजका बीच)</p>
                    <p className="text-sm text-muted-foreground">She was among her friends. (उनी आफ्ना साथीहरूका बीचमा थिइन्।)</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Under:</strong> मुनि</p>
                    <p className="text-sm text-muted-foreground">The cat is under the table. (बिरालो टेबलमुनि छ।)</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Below:</strong> तल</p>
                    <p className="text-sm text-muted-foreground">The valley is below the mountain. (उपत्यका पहाडको तल छ।)</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Above:</strong> माथि</p>
                    <p className="text-sm text-muted-foreground">The picture is above the sofa. (तस्बिर सोफाको माथि छ।)</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Behind:</strong> पछाडि</p>
                    <p className="text-sm text-muted-foreground">The car is behind the house. (कार घरको पछाडि छ।)</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Beside/Next to:</strong> छेउमा</p>
                    <p className="text-sm text-muted-foreground">Sit beside me. (मेरो छेउमा बस्नुहोस्।)</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>In front of:</strong> सामुन्ने</p>
                    <p className="text-sm text-muted-foreground">The garden is in front of the house. (बगैंचा घरको सामुन्ने छ।)</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prepositions of Movement */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Prepositions of Movement/Direction (गतिविधि/दिशाका पूर्वसर्गहरू)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded border border-purple-200 dark:border-purple-800 mb-6">
              <h4 className="font-semibold mb-2">🌍 English Rule:</h4>
              <p className="mb-3">Movement prepositions show the direction or path of movement from one place to another.</p>
              
              <h4 className="font-semibold mb-2">🇳🇵 नेपाली नियम:</h4>
              <p>गतिविधिका पूर्वसर्गहरूले एक ठाउँबाट अर्को ठाउँमा जाने दिशा वा बाटो देखाउँछन्।</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>TO:</strong> तर्फ (गन्तव्यतर्फ गति)</p>
                  <p className="text-sm text-muted-foreground">I'm going <strong>to</strong> school. (म स्कूल जाँदै छु।)</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>FROM:</strong> बाट (गतिको सुरुवाती बिन्दु)</p>
                  <p className="text-sm text-muted-foreground">I came <strong>from</strong> home. (म घरबाट आएको छु।)</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>THROUGH:</strong> मार्फत (एक छेउबाट अर्को छेउसम्म)</p>
                  <p className="text-sm text-muted-foreground">Walk <strong>through</strong> the park. (पार्कमार्फत हिंड्नुहोस्।)</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>ALONG:</strong> साथसाथै (रेखा अनुसरण गर्दै)</p>
                  <p className="text-sm text-muted-foreground">Drive <strong>along</strong> the river. (नदीको साथसाथै गाडी चलाउनुहोस्।)</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>UP:</strong> माथि (उकालो तर्फ)</p>
                  <p className="text-sm text-muted-foreground">Climb <strong>up</strong> the mountain. (पहाड चढ्नुहोस्।)</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>INTO:</strong> भित्र (बाहिरबाट भित्रतर्फ)</p>
                  <p className="text-sm text-muted-foreground">Jump <strong>into</strong> the water. (पानीमा हाम फाल्नुहोस्।)</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>OUT OF:</strong> बाहिर (भित्रबाट बाहिरतर्फ)</p>
                  <p className="text-sm text-muted-foreground">Get <strong>out of</strong> the car. (कारबाट बाहिर निस्कनुहोस्।)</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>ACROSS:</strong> पार (एक छेउबाट अर्को छेउसम्म)</p>
                  <p className="text-sm text-muted-foreground">Swim <strong>across</strong> the lake. (तालको पार पौडनुहोस्।)</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>AROUND:</strong> वरिपरि (गोलो घुम्दै)</p>
                  <p className="text-sm text-muted-foreground">Walk <strong>around</strong> the block. (ब्लकको वरिपरि हिंड्नुहोस्।)</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>DOWN:</strong> तल (ओरालो तर्फ)</p>
                  <p className="text-sm text-muted-foreground">Roll <strong>down</strong> the hill. (पहाडबाट तल झर्नुहोस्।)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prepositions of Manner and Instrument */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Prepositions of Manner and Instrument (तरिका र साधनका पूर्वसर्गहरू)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded border border-orange-200 dark:border-orange-800 mb-6">
              <h4 className="font-semibold mb-2">🌍 English Rule:</h4>
              <p className="mb-3">These prepositions show HOW something is done or WITH WHAT something is done.</p>
              
              <h4 className="font-semibold mb-2">🇳🇵 नेपाली नियम:</h4>
              <p>यी पूर्वसर्गहरूले कुनै काम कसरी गरिन्छ वा के प्रयोग गरेर गरिन्छ भनेर देखाउँछन्।</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Manner (तरिका)</h3>
                <div className="space-y-3 bg-secondary/10 p-4 rounded-lg">
                  <div className="border-b border-secondary/30 pb-2">
                    <p><strong>BY:</strong> द्वारा/बाट (साधन)</p>
                    <p className="text-sm text-muted-foreground">Travel by car/bus/train (कार/बस/रेलबाट यात्रा गर्नुहोस्)</p>
                  </div>
                  <div className="border-b border-secondary/30 pb-2">
                    <p><strong>WITH:</strong> संग/द्वारा (साधन/साथी)</p>
                    <p className="text-sm text-muted-foreground">Write with a pen (कलमद्वारा लेख्नुहोस्)</p>
                  </div>
                  <div className="border-b border-secondary/30 pb-2">
                    <p><strong>WITHOUT:</strong> बिना</p>
                    <p className="text-sm text-muted-foreground">Coffee without sugar (चिनी बिनाको कफी)</p>
                  </div>
                  <div>
                    <p><strong>LIKE:</strong> जस्तै</p>
                    <p className="text-sm text-muted-foreground">Sing like a bird (चराजस्तै गाउनुहोस्)</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Common Phrases (सामान्य वाक्यांशहरू)</h3>
                <div className="space-y-3 bg-secondary/10 p-4 rounded-lg">
                  <div className="border-b border-secondary/30 pb-2">
                    <p><strong>By hand:</strong> हातले</p>
                    <p className="text-sm text-muted-foreground">Made by hand (हातले बनाइएको)</p>
                  </div>
                  <div className="border-b border-secondary/30 pb-2">
                    <p><strong>By mistake:</strong> गल्तीले</p>
                    <p className="text-sm text-muted-foreground">Done by mistake (गल्तीले गरिएको)</p>
                  </div>
                  <div className="border-b border-secondary/30 pb-2">
                    <p><strong>With care:</strong> सावधानीपूर्वक</p>
                    <p className="text-sm text-muted-foreground">Handle with care (सावधानीपूर्वक राख्नुहोस्)</p>
                  </div>
                  <div>
                    <p><strong>In detail:</strong> विस्तृत रूपमा</p>
                    <p className="text-sm text-muted-foreground">Explain in detail (विस्तृत रूपमा व्याख्या गर्नुहोस्)</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Prepositional Phrases */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Common Prepositional Phrases (सामान्य पूर्वसर्गीय वाक्यांशहरू)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">With "BY" (BY संग)</h3>
                <div className="space-y-2 bg-secondary/10 p-4 rounded-lg">
                  <p>• By car/bus/train (कार/बस/रेलबाट)</p>
                  <p>• By myself (एक्लै)</p>
                  <p>• By accident (दुर्घटनावश)</p>
                  <p>• By heart (कण्ठस्थ)</p>
                  <p>• By the way (वैसे)</p>
                  <p>• By chance (संयोगवश)</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">With "FOR" (FOR संग)</h3>
                <div className="space-y-2 bg-secondary/10 p-4 rounded-lg">
                  <p>• For example (उदाहरणका लागि)</p>
                  <p>• For a long time (लामो समयका लागि)</p>
                  <p>• For breakfast/lunch/dinner (खाजा/खाना/राति खानाका लागि)</p>
                  <p>• For sale (बिक्रीका लागि)</p>
                  <p>• For fun (रमाइलोका लागि)</p>
                  <p>• For sure (निश्चित रूपमा)</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">With "WITH" (WITH संग)</h3>
                <div className="space-y-2 bg-secondary/10 p-4 rounded-lg">
                  <p>• With pleasure (खुशीले)</p>
                  <p>• With care (सावधानीपूर्वक)</p>
                  <p>• With difficulty (कठिनाइसंग)</p>
                  <p>• With respect (सम्मानसंग)</p>
                  <p>• With love (मायाले)</p>
                  <p>• With confidence (आत्मविश्वाससंग)</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Advanced Prepositional Phrases (उन्नत पूर्वसर्गीय वाक्यांशहरू)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Expressions with "IN" (IN संगका अभिव्यक्तिहरू)</h4>
                  <div className="space-y-2 bg-primary/10 p-4 rounded-lg">
                    <p>• In general (सामान्यतया)</p>
                    <p>• In particular (विशेष गरेर)</p>
                    <p>• In public (सार्वजनिक रूपमा)</p>
                    <p>• In private (निजी रूपमा)</p>
                    <p>• In common (समान)</p>
                    <p>• In advance (पहिले नै)</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Expressions with "ON" (ON संगका अभिव्यक्तिहरू)</h4>
                  <div className="space-y-2 bg-primary/10 p-4 rounded-lg">
                    <p>• On purpose (जानाजानी)</p>
                    <p>• On time (समयमा)</p>
                    <p>• On foot (पैदल)</p>
                    <p>• On vacation (छुट्टीमा)</p>
                    <p>• On fire (आगोमा)</p>
                    <p>• On sale (छुटमा)</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practice Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Practice Exercises (अभ्यास प्रश्नहरू)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Fill in the correct preposition (सही पूर्वसर्ग भर्नुहोस्):</h3>
                <div className="space-y-3 bg-secondary/10 p-4 rounded-lg">
                  <p>1. I'll meet you _____ 3 o'clock _____ the library.</p>
                  <p>2. The cat is sleeping _____ the sofa.</p>
                  <p>3. She traveled _____ London _____ Paris _____ train.</p>
                  <p>4. The meeting is _____ Monday morning.</p>
                  <p>5. Walk _____ the street and turn right.</p>
                  <p>6. The book is _____ the table _____ the kitchen.</p>
                  <p>7. We're going _____ vacation _____ July.</p>
                  <p>8. The children are playing _____ the garden.</p>
                  <p>9. She lives _____ New York _____ her parents.</p>
                  <p>10. The plane flies _____ the clouds.</p>
                  <p>11. I was born _____ 1995 _____ a small village.</p>
                  <p>12. The mouse ran _____ the hole _____ the wall.</p>
                  <p>13. We studied _____ three hours _____ the exam.</p>
                  <p>14. The picture hangs _____ the fireplace _____ the living room.</p>
                  <p>15. She walked _____ the park _____ her dog.</p>
                  <p>16. The meeting starts _____ 9 AM _____ ends _____ noon.</p>
                  <p>17. He jumped _____ the river and swam _____ the other side.</p>
                  <p>18. The keys are _____ my bag _____ the desk.</p>
                  <p>19. We traveled _____ car _____ the mountains _____ the weekend.</p>
                  <p>20. The bird flew _____ the trees and landed _____ the roof.</p>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <Button 
                  onClick={() => setShowAnswers(!showAnswers)}
                  variant="outline"
                  size="lg"
                >
                  {showAnswers ? "Hide Answers" : "Check the Answers"}
                </Button>
              </div>
              
              {showAnswers && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Answers (उत्तरहरू):</h3>
                  <div className="space-y-3 bg-primary/10 p-4 rounded-lg">
                    <p>1. I'll meet you <strong>at</strong> 3 o'clock <strong>at</strong> the library.</p>
                    <p>2. The cat is sleeping <strong>on</strong> the sofa.</p>
                    <p>3. She traveled <strong>from</strong> London <strong>to</strong> Paris <strong>by</strong> train.</p>
                    <p>4. The meeting is <strong>on</strong> Monday morning.</p>
                    <p>5. Walk <strong>along/down</strong> the street and turn right.</p>
                    <p>6. The book is <strong>on</strong> the table <strong>in</strong> the kitchen.</p>
                    <p>7. We're going <strong>on</strong> vacation <strong>in</strong> July.</p>
                    <p>8. The children are playing <strong>in</strong> the garden.</p>
                    <p>9. She lives <strong>in</strong> New York <strong>with</strong> her parents.</p>
                    <p>10. The plane flies <strong>above</strong> the clouds.</p>
                    <p>11. I was born <strong>in</strong> 1995 <strong>in</strong> a small village.</p>
                    <p>12. The mouse ran <strong>into</strong> the hole <strong>in</strong> the wall.</p>
                    <p>13. We studied <strong>for</strong> three hours <strong>for</strong> the exam.</p>
                    <p>14. The picture hangs <strong>above</strong> the fireplace <strong>in</strong> the living room.</p>
                    <p>15. She walked <strong>through</strong> the park <strong>with</strong> her dog.</p>
                    <p>16. The meeting starts <strong>at</strong> 9 AM <strong>and</strong> ends <strong>at</strong> noon.</p>
                    <p>17. He jumped <strong>into</strong> the river and swam <strong>to</strong> the other side.</p>
                    <p>18. The keys are <strong>in</strong> my bag <strong>on</strong> the desk.</p>
                    <p>19. We traveled <strong>by</strong> car <strong>to</strong> the mountains <strong>on</strong> the weekend.</p>
                    <p>20. The bird flew <strong>through</strong> the trees and landed <strong>on</strong> the roof.</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </GrammarLayout>
  );
};

export default Prepositions;