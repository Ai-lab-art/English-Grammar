import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NegativeAffirmative = () => {
  return (
    <GrammarLayout 
      title="Negative & Affirmative" 
      description="Convert between positive and negative sentences"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Affirmative and Negative Sentences</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary/10 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Affirmative (Positive)</h3>
              <p>Statements that express a positive meaning or confirm something is true.</p>
              <p className="mt-2 font-medium">Example: <Badge variant="secondary">I like coffee.</Badge></p>
            </div>
            <div className="bg-secondary/10 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Negative</h3>
              <p>Statements that express a negative meaning or deny something.</p>
              <p className="mt-2 font-medium">Example: <Badge variant="secondary">I don't like coffee.</Badge></p>
            </div>
          </div>
        </section>

        {/* Present Simple */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Present Simple: Affirmative ↔ Negative</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">With 'Be' Verb (am/is/are)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Affirmative</h4>
                  <div className="bg-primary/10 p-3 rounded">
                    <p>• I <strong>am</strong> a student.</p>
                    <p>• She <strong>is</strong> happy.</p>
                    <p>• They <strong>are</strong> teachers.</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-secondary">Negative</h4>
                  <div className="bg-secondary/10 p-3 rounded">
                    <p>• I <strong>am not</strong> a student.</p>
                    <p>• She <strong>is not/isn't</strong> happy.</p>
                    <p>• They <strong>are not/aren't</strong> teachers.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">With Other Verbs (do/does)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Affirmative</h4>
                  <div className="bg-primary/10 p-3 rounded">
                    <p>• I <strong>work</strong> here.</p>
                    <p>• She <strong>likes</strong> music.</p>
                    <p>• They <strong>play</strong> football.</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-secondary">Negative</h4>
                  <div className="bg-secondary/10 p-3 rounded">
                    <p>• I <strong>do not/don't work</strong> here.</p>
                    <p>• She <strong>does not/doesn't like</strong> music.</p>
                    <p>• They <strong>do not/don't play</strong> football.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h4 className="font-semibold mb-2">⚠️ Important Rule:</h4>
              <p>In negative sentences with do/does, the main verb returns to its base form (no -s for third person).</p>
              <p className="mt-2">✅ She doesn't <strong>like</strong> (not "likes")</p>
            </div>
          </CardContent>
        </Card>

        {/* Past Simple */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Past Simple: Affirmative ↔ Negative</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">With 'Be' Verb (was/were)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Affirmative</h4>
                  <div className="bg-primary/10 p-3 rounded">
                    <p>• I <strong>was</strong> tired.</p>
                    <p>• She <strong>was</strong> at home.</p>
                    <p>• They <strong>were</strong> happy.</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-secondary">Negative</h4>
                  <div className="bg-secondary/10 p-3 rounded">
                    <p>• I <strong>was not/wasn't</strong> tired.</p>
                    <p>• She <strong>was not/wasn't</strong> at home.</p>
                    <p>• They <strong>were not/weren't</strong> happy.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">With Other Verbs (did)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Affirmative</h4>
                  <div className="bg-primary/10 p-3 rounded">
                    <p>• I <strong>worked</strong> yesterday.</p>
                    <p>• She <strong>went</strong> to school.</p>
                    <p>• They <strong>played</strong> games.</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-secondary">Negative</h4>
                  <div className="bg-secondary/10 p-3 rounded">
                    <p>• I <strong>did not/didn't work</strong> yesterday.</p>
                    <p>• She <strong>did not/didn't go</strong> to school.</p>
                    <p>• They <strong>did not/didn't play</strong> games.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h4 className="font-semibold mb-2">⚠️ Important Rule:</h4>
              <p>In negative past sentences with did, the main verb returns to its base form.</p>
              <p className="mt-2">✅ She didn't <strong>go</strong> (not "went")</p>
            </div>
          </CardContent>
        </Card>

        {/* Future Simple */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Future Simple: Affirmative ↔ Negative</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Affirmative</h4>
                <div className="bg-primary/10 p-3 rounded">
                  <p>• I <strong>will</strong> help you.</p>
                  <p>• She <strong>will</strong> come tomorrow.</p>
                  <p>• They <strong>will</strong> finish soon.</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">Negative</h4>
                <div className="bg-secondary/10 p-3 rounded">
                  <p>• I <strong>will not/won't</strong> help you.</p>
                  <p>• She <strong>will not/won't</strong> come tomorrow.</p>
                  <p>• They <strong>will not/won't</strong> finish soon.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Present Perfect */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Present Perfect: Affirmative ↔ Negative</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Affirmative</h4>
                <div className="bg-primary/10 p-3 rounded">
                  <p>• I <strong>have</strong> finished.</p>
                  <p>• She <strong>has</strong> arrived.</p>
                  <p>• They <strong>have</strong> left.</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-secondary">Negative</h4>
                <div className="bg-secondary/10 p-3 rounded">
                  <p>• I <strong>have not/haven't</strong> finished.</p>
                  <p>• She <strong>has not/hasn't</strong> arrived.</p>
                  <p>• They <strong>have not/haven't</strong> left.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modal Verbs */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Modal Verbs: Affirmative ↔ Negative</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Affirmative</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Can:</strong> I can swim.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Could:</strong> She could help.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Should:</strong> You should go.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Must:</strong> We must leave.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>May:</strong> It may rain.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-secondary">Negative</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-secondary pl-4">
                    <p><strong>Cannot/Can't:</strong> I cannot/can't swim.</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p><strong>Could not/Couldn't:</strong> She couldn't help.</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p><strong>Should not/Shouldn't:</strong> You shouldn't go.</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p><strong>Must not/Mustn't:</strong> We mustn't leave.</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p><strong>May not:</strong> It may not rain.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Special Cases */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Special Cases and Common Mistakes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Double Negatives (Avoid These!)</h3>
              <div className="space-y-3">
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded border border-red-200 dark:border-red-800">
                  <p className="font-semibold text-red-600 dark:text-red-400">❌ Incorrect:</p>
                  <p>• I don't have <strong>no</strong> money.</p>
                  <p>• She doesn't know <strong>nothing</strong>.</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-200 dark:border-green-800">
                  <p className="font-semibold text-green-600 dark:text-green-400">✅ Correct:</p>
                  <p>• I don't have <strong>any</strong> money.</p>
                  <p>• She doesn't know <strong>anything</strong>.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Negative Words</h3>
              <p className="mb-3">These words make sentences negative without "not":</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-secondary/10 p-4 rounded">
                  <p className="font-semibold mb-2">Negative Words:</p>
                  <ul className="space-y-1">
                    <li>• <strong>Never:</strong> I never smoke.</li>
                    <li>• <strong>Nothing:</strong> I see nothing.</li>
                    <li>• <strong>Nobody/No one:</strong> Nobody came.</li>
                    <li>• <strong>Nowhere:</strong> I go nowhere.</li>
                    <li>• <strong>Neither:</strong> Neither option works.</li>
                  </ul>
                </div>
                <div className="bg-primary/10 p-4 rounded">
                  <p className="font-semibold mb-2">Positive Equivalents:</p>
                  <ul className="space-y-1">
                    <li>• <strong>Always:</strong> I always smile.</li>
                    <li>• <strong>Something:</strong> I see something.</li>
                    <li>• <strong>Somebody/Someone:</strong> Someone came.</li>
                    <li>• <strong>Somewhere:</strong> I go somewhere.</li>
                    <li>• <strong>Both:</strong> Both options work.</li>
                  </ul>
                </div>
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
                <h3 className="text-lg font-semibold mb-3">Convert to negative:</h3>
                <div className="space-y-2 bg-secondary/10 p-4 rounded-lg">
                  <p>1. She is a doctor.</p>
                  <p>2. They play tennis every Sunday.</p>
                  <p>3. I went to the cinema yesterday.</p>
                  <p>4. He will call you tomorrow.</p>
                  <p>5. We have finished our homework.</p>
                  <p>6. You can speak French.</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Answers:</h3>
                <div className="space-y-2 bg-primary/10 p-4 rounded-lg">
                  <p>1. She <strong>is not/isn't</strong> a doctor.</p>
                  <p>2. They <strong>don't play</strong> tennis every Sunday.</p>
                  <p>3. I <strong>didn't go</strong> to the cinema yesterday.</p>
                  <p>4. He <strong>will not/won't call</strong> you tomorrow.</p>
                  <p>5. We <strong>haven't finished</strong> our homework.</p>
                  <p>6. You <strong>cannot/can't speak</strong> French.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GrammarLayout>
  );
};

export default NegativeAffirmative;