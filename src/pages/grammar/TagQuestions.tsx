import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TagQuestions = () => {
  return (
    <GrammarLayout 
      title="Tag Questions" 
      description="Form and use question tags correctly"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <section className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-l-4 border-purple-500">
          <h2 className="text-3xl font-bold mb-4 text-purple-800">What are Tag Questions? / पुच्छर प्रश्न के हुन्?</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-700">English</h3>
              <p className="text-lg text-gray-700">
                Tag questions are short questions added to the end of statements. They are used to confirm information, 
                ask for agreement, or encourage a response from the listener.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-purple-700">नेपाली</h3>
              <p className="text-lg text-gray-700">
                पुच्छर प्रश्न भनेको वाक्यको अन्त्यमा थपिने छोटो प्रश्नहरू हुन्। यिनीहरू जानकारी पुष्टि गर्न, 
                सहमति माग्न, वा सुन्नेबाट जवाफ प्रोत्साहन गर्न प्रयोग गरिन्छ।
              </p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-purple-200">
            <p className="text-lg"><strong>Structure / संरचना:</strong> Statement + Tag Question</p>
            <p className="text-lg"><strong>Example / उदाहरण:</strong> You are coming, <Badge variant="secondary" className="bg-purple-200 text-purple-800">aren't you?</Badge></p>
            <p className="text-sm text-gray-600 mt-2">Simple: You make a statement, then ask a short question to check if it's correct.</p>
          </div>
        </section>

        {/* Basic Rules */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800">Basic Rules / मुख्य नियमहरू</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold mb-3 text-green-700">Rule 1: Positive → Negative Tag</h3>
                <p className="mb-3 text-gray-700"><strong>English:</strong> If the main sentence is positive, the tag is negative.</p>
                <p className="mb-3 text-gray-700"><strong>नेपाली:</strong> यदि मुख्य वाक्य सकारात्मक छ भने, पुच्छर प्रश्न नकारात्मक हुन्छ।</p>
                <div className="bg-green-50 p-3 rounded border-l-4 border-green-400 space-y-3">
                  <div>
                    <p>• <span className="text-green-600 font-bold">You are happy</span>, <span className="text-red-600 font-bold">aren't you?</span></p>
                    <p className="text-sm text-gray-600">तपाईं खुसी हुनुहुन्छ, होइन र?</p>
                    <p className="text-xs italic bg-yellow-100 p-1 rounded">Simple: You say someone IS happy, then ask to make sure.</p>
                  </div>
                  <div>
                    <p>• <span className="text-green-600 font-bold">She can swim</span>, <span className="text-red-600 font-bold">can't she?</span></p>
                    <p className="text-sm text-gray-600">उनी पौडी खेल्न सक्छिन्, सक्दिनिन्?</p>
                    <p className="text-xs italic bg-yellow-100 p-1 rounded">Simple: You say she CAN swim, then check if that's true.</p>
                  </div>
                  <div>
                    <p>• <span className="text-green-600 font-bold">They will come</span>, <span className="text-red-600 font-bold">won't they?</span></p>
                    <p className="text-sm text-gray-600">तिनीहरू आउनेछन्, आउदैनन्?</p>
                    <p className="text-xs italic bg-yellow-100 p-1 rounded">Simple: You believe they WILL come, asking for agreement.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-3 text-red-700">Rule 2: Negative → Positive Tag</h3>
                <p className="mb-3 text-gray-700"><strong>English:</strong> If the main sentence is negative, the tag is positive.</p>
                <p className="mb-3 text-gray-700"><strong>नेपाली:</strong> यदि मुख्य वाक्य नकारात्मक छ भने, पुच्छर प्रश्न सकारात्मक हुन्छ।</p>
                <div className="bg-red-50 p-3 rounded border-l-4 border-red-400 space-y-3">
                  <div>
                    <p>• <span className="text-red-600 font-bold">You aren't tired</span>, <span className="text-green-600 font-bold">are you?</span></p>
                    <p className="text-sm text-gray-600">तपाईं थकित हुनुहुन्न, हुनुहुन्छ?</p>
                    <p className="text-xs italic bg-yellow-100 p-1 rounded">Simple: You say someone is NOT tired, checking if they're okay.</p>
                  </div>
                  <div>
                    <p>• <span className="text-red-600 font-bold">She can't drive</span>, <span className="text-green-600 font-bold">can she?</span></p>
                    <p className="text-sm text-gray-600">उनी गाडी चलाउन सक्दिनिन्, सक्छिन्?</p>
                    <p className="text-xs italic bg-yellow-100 p-1 rounded">Simple: You believe she CANNOT drive, asking for confirmation.</p>
                  </div>
                  <div>
                    <p>• <span className="text-red-600 font-bold">They won't leave</span>, <span className="text-green-600 font-bold">will they?</span></p>
                    <p className="text-sm text-gray-600">तिनीहरू जादैनन्, जानेछन्?</p>
                    <p className="text-xs italic bg-yellow-100 p-1 rounded">Simple: You think they will NOT leave, seeking agreement.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* With Different Tenses */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800">Tag Questions with Different Tenses / विभिन्न कालसँग</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Present Simple / वर्तमान काल</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold text-blue-700 mb-2">With 'be' verb / 'be' क्रियासँग:</p>
                  <div className="space-y-2">
                    <div>
                      <p>• You <span className="bg-yellow-200 px-1 rounded">are</span> happy, <strong>aren't you?</strong></p>
                      <p className="text-sm text-gray-600">तपाईं खुसी हुनुहुन्छ, होइन र?</p>
                      <p className="text-xs italic">Simple: ARE becomes AREN'T in the tag.</p>
                    </div>
                    <div>
                      <p>• She <span className="bg-yellow-200 px-1 rounded">isn't</span> ready, <strong>is she?</strong></p>
                      <p className="text-sm text-gray-600">उनी तयार छैनिन्, छिन्?</p>
                      <p className="text-xs italic">Simple: ISN'T becomes IS in the tag.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="font-semibold text-green-700 mb-2">With other verbs (use do/does) / अन्य क्रियाहरूसँग:</p>
                  <div className="space-y-2">
                    <div>
                      <p>• You <span className="bg-yellow-200 px-1 rounded">like</span> coffee, <strong>don't you?</strong></p>
                      <p className="text-sm text-gray-600">तपाईंलाई कफी मनपर्छ, पर्दैन?</p>
                      <p className="text-xs italic">Simple: LIKE needs DON'T YOU as the tag.</p>
                    </div>
                    <div>
                      <p>• She <span className="bg-yellow-200 px-1 rounded">works</span> here, <strong>doesn't she?</strong></p>
                      <p className="text-sm text-gray-600">उनी यहाँ काम गर्छिन्, गर्दिनिन्?</p>
                      <p className="text-xs italic">Simple: WORKS needs DOESN'T SHE as the tag.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Past Simple / भूतकाल</h3>
              <div className="space-y-4">
                <div className="bg-purple-50 p-3 rounded space-y-2">
                  <div>
                    <p>• You <span className="bg-yellow-200 px-1 rounded">were</span> there, <strong>weren't you?</strong></p>
                    <p className="text-sm text-gray-600">तपाईं त्यहाँ हुनुहुन्थ्यो, हुनुहुन्नथ्यो?</p>
                    <p className="text-xs italic">Simple: WERE becomes WEREN'T in the tag.</p>
                  </div>
                  <div>
                    <p>• You <span className="bg-yellow-200 px-1 rounded">went</span> there, <strong>didn't you?</strong></p>
                    <p className="text-sm text-gray-600">तपाईं त्यहाँ गएको थियो, गएको थिएन?</p>
                    <p className="text-xs italic">Simple: WENT needs DIDN'T YOU as the tag.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold mb-3 text-orange-700">Future Simple / भविष्यकाल</h3>
              <div className="bg-orange-50 p-3 rounded space-y-2">
                <div>
                  <p>• You <span className="bg-yellow-200 px-1 rounded">will</span> help me, <strong>won't you?</strong></p>
                  <p className="text-sm text-gray-600">तपाईंले मलाई मद्दत गर्नुहुनेछ, गर्नुहुन्न?</p>
                  <p className="text-xs italic">Simple: WILL becomes WON'T in the tag.</p>
                </div>
                <div>
                  <p>• She <span className="bg-yellow-200 px-1 rounded">won't</span> be late, <strong>will she?</strong></p>
                  <p className="text-sm text-gray-600">उनी ढिला हुनेछैनिन्, हुनेछिन्?</p>
                  <p className="text-xs italic">Simple: WON'T becomes WILL in the tag.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Special Cases */}
        <Card className="bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-300">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-800">Special Cases / विशेष अवस्थाहरू</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-semibold mb-3 text-red-700">Commands (Imperatives) / आदेश</h3>
              <div className="space-y-4">
                <div className="bg-red-50 p-3 rounded">
                  <p className="font-semibold text-red-700 mb-2">Positive commands → will you? / won't you?</p>
                  <div className="space-y-2">
                    <div>
                      <p>• <span className="bg-yellow-200 px-1 rounded">Close</span> the door, <strong>will you?</strong></p>
                      <p className="text-sm text-gray-600">ढोका बन्द गर्नुहोस्, गर्नुहुन्छ?</p>
                      <p className="text-xs italic">Simple: When asking someone to do something, add WILL YOU?</p>
                    </div>
                    <div>
                      <p>• <span className="bg-yellow-200 px-1 rounded">Help</span> me, <strong>won't you?</strong></p>
                      <p className="text-sm text-gray-600">मलाई सहयोग गर्नुहोस्, गर्नुहुन्न?</p>
                      <p className="text-xs italic">Simple: WON'T YOU sounds more polite than WILL YOU.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-500">
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">Let's Statements</h3>
              <div className="bg-indigo-50 p-3 rounded space-y-2">
                <div>
                  <p>• <span className="bg-yellow-200 px-1 rounded">Let's go</span>, <strong>shall we?</strong></p>
                  <p className="text-sm text-gray-600">जाऔं, जाने?</p>
                  <p className="text-xs italic">Simple: LET'S always uses SHALL WE? in the tag.</p>
                </div>
                <div>
                  <p>• <span className="bg-yellow-200 px-1 rounded">Let's have dinner</span>, <strong>shall we?</strong></p>
                  <p className="text-sm text-gray-600">खाना खाऔं, खाने?</p>
                  <p className="text-xs italic">Simple: When suggesting together, always use SHALL WE?</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-pink-500">
              <h3 className="text-xl font-semibold mb-3 text-pink-700">With "I am" / "म हुँ" सँग</h3>
              <div className="bg-pink-50 p-3 rounded space-y-2">
                <div>
                  <p>• <span className="bg-yellow-200 px-1 rounded">I am right</span>, <strong>aren't I?</strong></p>
                  <p className="text-sm text-gray-600">म सही छु, छैन?</p>
                  <p className="text-xs italic">Special: I AM always becomes AREN'T I? (not amn't I)</p>
                </div>
                <div>
                  <p>• <span className="bg-yellow-200 px-1 rounded">I am late</span>, <strong>aren't I?</strong></p>
                  <p className="text-sm text-gray-600">म ढिला छु, छैन?</p>
                  <p className="text-xs italic">Remember: Always use AREN'T I? with I AM statements.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practice Section */}
        <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-300">
          <CardHeader>
            <CardTitle className="text-2xl text-teal-800">Practice Exercises / अभ्यास</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                <h3 className="text-lg font-semibold mb-3 text-teal-700">Add the correct tag question / सही पुच्छर प्रश्न थप्नुहोस्:</h3>
                <div className="space-y-3 bg-teal-50 p-4 rounded-lg">
                  <div className="bg-white p-2 rounded border-l-2 border-teal-300">
                    <p>1. You are a teacher, <span className="bg-yellow-200 px-2 py-1 rounded">_______?</span></p>
                    <p className="text-sm text-gray-600">तपाईं शिक्षक हुनुहुन्छ, _______?</p>
                  </div>
                  <div className="bg-white p-2 rounded border-l-2 border-teal-300">
                    <p>2. She can't speak Chinese, <span className="bg-yellow-200 px-2 py-1 rounded">_______?</span></p>
                    <p className="text-sm text-gray-600">उनी चिनियाँ बोल्न सक्दिनिन्, _______?</p>
                  </div>
                  <div className="bg-white p-2 rounded border-l-2 border-teal-300">
                    <p>3. They went to the cinema, <span className="bg-yellow-200 px-2 py-1 rounded">_______?</span></p>
                    <p className="text-sm text-gray-600">तिनीहरू सिनेमा गए, _______?</p>
                  </div>
                  <div className="bg-white p-2 rounded border-l-2 border-teal-300">
                    <p>4. Let's have lunch, <span className="bg-yellow-200 px-2 py-1 rounded">_______?</span></p>
                    <p className="text-sm text-gray-600">खाना खाऔं, _______?</p>
                  </div>
                  <div className="bg-white p-2 rounded border-l-2 border-teal-300">
                    <p>5. Close the window, <span className="bg-yellow-200 px-2 py-1 rounded">_______?</span></p>
                    <p className="text-sm text-gray-600">झ्याल बन्द गर्नुहोस्, _______?</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="text-lg font-semibold mb-3 text-green-700">Answers / उत्तरहरू:</h3>
                <div className="space-y-3 bg-green-50 p-4 rounded-lg">
                  <div className="bg-white p-2 rounded border-l-2 border-green-400">
                    <p>1. You are a teacher, <strong className="text-green-600">aren't you?</strong></p>
                    <p className="text-xs italic">Positive → Negative tag</p>
                  </div>
                  <div className="bg-white p-2 rounded border-l-2 border-green-400">
                    <p>2. She can't speak Chinese, <strong className="text-green-600">can she?</strong></p>
                    <p className="text-xs italic">Negative → Positive tag</p>
                  </div>
                  <div className="bg-white p-2 rounded border-l-2 border-green-400">
                    <p>3. They went to the cinema, <strong className="text-green-600">didn't they?</strong></p>
                    <p className="text-xs italic">Past simple → use did</p>
                  </div>
                  <div className="bg-white p-2 rounded border-l-2 border-green-400">
                    <p>4. Let's have lunch, <strong className="text-green-600">shall we?</strong></p>
                    <p className="text-xs italic">Let's → always shall we</p>
                  </div>
                  <div className="bg-white p-2 rounded border-l-2 border-green-400">
                    <p>5. Close the window, <strong className="text-green-600">will you?</strong></p>
                    <p className="text-xs italic">Command → will you</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GrammarLayout>
  );
};

export default TagQuestions;