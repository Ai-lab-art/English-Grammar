import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Interrogative = () => {
  return (
    <GrammarLayout 
      title="Interrogative" 
      description="Form different types of questions"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-4">What are Interrogative Sentences?</h2>
          <p className="text-lg mb-4">
            Interrogative sentences are questions used to gather information, confirm facts, or seek responses. 
            There are several types of questions in English, each with specific structures and purposes.
          </p>
        </section>

        {/* Yes/No Questions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Yes/No Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">With 'Be' Verb</h3>
              <p className="mb-3">Structure: <Badge variant="secondary">Be + Subject + ?</Badge></p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/10 p-4 rounded">
                  <h4 className="font-semibold mb-2">Statement</h4>
                  <p>• You are happy.</p>
                  <p>• She is a teacher.</p>
                  <p>• They were late.</p>
                </div>
                <div className="bg-secondary/10 p-4 rounded">
                  <h4 className="font-semibold mb-2">Question</h4>
                  <p>• <strong>Are</strong> you happy?</p>
                  <p>• <strong>Is</strong> she a teacher?</p>
                  <p>• <strong>Were</strong> they late?</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">With Auxiliary Verbs</h3>
              <p className="mb-3">Structure: <Badge variant="secondary">Auxiliary + Subject + Main Verb + ?</Badge></p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Present Simple (do/does)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-3 rounded">
                      <p>Statement: You like coffee.</p>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded">
                      <p>Question: <strong>Do</strong> you like coffee?</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Past Simple (did)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-3 rounded">
                      <p>Statement: She went home.</p>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded">
                      <p>Question: <strong>Did</strong> she go home?</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Future Simple (will)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-3 rounded">
                      <p>Statement: They will come.</p>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded">
                      <p>Question: <strong>Will</strong> they come?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* WH Questions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">WH-Questions (Information Questions)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Question Words</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>What:</strong> asks for information about things</p>
                    <p className="text-sm text-muted-foreground">What is your name?</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Who:</strong> asks for information about people</p>
                    <p className="text-sm text-muted-foreground">Who is that man?</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Where:</strong> asks for information about places</p>
                    <p className="text-sm text-muted-foreground">Where do you live?</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>When:</strong> asks for information about time</p>
                    <p className="text-sm text-muted-foreground">When did you arrive?</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="border-l-4 border-secondary pl-4">
                    <p><strong>Why:</strong> asks for reasons</p>
                    <p className="text-sm text-muted-foreground">Why are you late?</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p><strong>How:</strong> asks about manner/method</p>
                    <p className="text-sm text-muted-foreground">How do you cook this?</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p><strong>Which:</strong> asks for specific choice</p>
                    <p className="text-sm text-muted-foreground">Which book do you want?</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p><strong>Whose:</strong> asks about possession</p>
                    <p className="text-sm text-muted-foreground">Whose car is this?</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">WH-Question Structure</h3>
              <p className="mb-3">Structure: <Badge variant="secondary">WH-word + Auxiliary + Subject + Main Verb + ?</Badge></p>
              <div className="space-y-3">
                <div className="bg-secondary/20 p-4 rounded">
                  <p><strong>What</strong> do you <strong>want</strong>?</p>
                  <p><strong>Where</strong> does she <strong>work</strong>?</p>
                  <p><strong>When</strong> did they <strong>arrive</strong>?</p>
                  <p><strong>Why</strong> will you <strong>leave</strong>?</p>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Special Case: Questions about the Subject</h4>
                <p className="mb-2">When asking about the subject, no auxiliary verb is needed:</p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded border border-yellow-200 dark:border-yellow-800">
                  <p>• <strong>Who</strong> called you? (not "Who did call you?")</p>
                  <p>• <strong>What</strong> happened? (not "What did happen?")</p>
                  <p>• <strong>Which</strong> car belongs to you?</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How Questions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">HOW Questions (Different Types)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">How + Adjective/Adverb</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>How old:</strong> How old are you?</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>How tall:</strong> How tall is he?</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>How long:</strong> How long did it take?</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>How far:</strong> How far is the station?</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>How often:</strong> How often do you exercise?</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">How + Much/Many</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-secondary pl-4">
                    <p><strong>How much:</strong> (uncountable nouns)</p>
                    <p className="text-sm text-muted-foreground">How much water do you need?</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p><strong>How many:</strong> (countable nouns)</p>
                    <p className="text-sm text-muted-foreground">How many books do you have?</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p><strong>How much:</strong> (price)</p>
                    <p className="text-sm text-muted-foreground">How much does it cost?</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Choice Questions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Choice Questions (Or Questions)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-3">Alternative Questions</h3>
              <p className="mb-3">These questions offer two or more choices using "or":</p>
              <div className="bg-secondary/20 p-4 rounded space-y-2">
                <p>• Do you want tea <strong>or</strong> coffee?</p>
                <p>• Is she a doctor <strong>or</strong> a nurse?</p>
                <p>• Would you like to walk <strong>or</strong> take the bus?</p>
                <p>• Are you going by car, <strong>by train, or</strong> by plane?</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Indirect Questions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Indirect Questions (Polite Questions)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Making Questions More Polite</h3>
              <p className="mb-3">Use these phrases to make questions sound more polite:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">Direct (Less Polite)</h4>
                  <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded border border-red-200 dark:border-red-800">
                    <p>• Where is the bank?</p>
                    <p>• What time is it?</p>
                    <p>• How much does it cost?</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">Indirect (More Polite)</h4>
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-200 dark:border-green-800">
                    <p>• Could you tell me where the bank is?</p>
                    <p>• Do you know what time it is?</p>
                    <p>• Could you tell me how much it costs?</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">Common Indirect Question Starters:</h4>
                <div className="bg-secondary/10 p-4 rounded">
                  <p>• Could you tell me...?</p>
                  <p>• Do you know...?</p>
                  <p>• Can you tell me...?</p>
                  <p>• Would you mind telling me...?</p>
                  <p>• I'd like to know...</p>
                  <p>• I wonder if you could tell me...</p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border border-yellow-200 dark:border-yellow-800">
                <h4 className="font-semibold mb-2">⚠️ Important Rule:</h4>
                <p>In indirect questions, use normal word order (subject + verb), not question order:</p>
                <p className="mt-2">✅ Could you tell me where <strong>she lives</strong>?</p>
                <p>❌ Could you tell me where <strong>does she live</strong>?</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practice Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Practice Exercises</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Convert to questions:</h3>
                <div className="space-y-2 bg-secondary/10 p-4 rounded-lg">
                  <p>1. She is a teacher. (Yes/No question)</p>
                  <p>2. They went to Paris. (Where question)</p>
                  <p>3. The meeting starts at 9 AM. (What time question)</p>
                  <p>4. He bought three books. (How many question)</p>
                  <p>5. You prefer tea or coffee? (Choice question)</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Answers:</h3>
                <div className="space-y-2 bg-primary/10 p-4 rounded-lg">
                  <p>1. <strong>Is she</strong> a teacher?</p>
                  <p>2. <strong>Where did they go?</strong></p>
                  <p>3. <strong>What time does</strong> the meeting <strong>start?</strong></p>
                  <p>4. <strong>How many books did he buy?</strong></p>
                  <p>5. <strong>Do you prefer tea or coffee?</strong></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GrammarLayout>
  );
};

export default Interrogative;