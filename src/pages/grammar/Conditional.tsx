import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Conditional = () => {
  return (
    <GrammarLayout 
      title="Conditional Sentences" 
      description="If clauses and conditional statements"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-4">What are Conditional Sentences?</h2>
          <p className="text-lg mb-4">
            Conditional sentences express situations that depend on a condition. They show what happens, 
            will happen, or would happen if a certain condition is met or not met.
          </p>
          <div className="bg-primary/10 p-4 rounded-lg">
            <p className="text-lg"><strong>Structure:</strong> If + condition, result</p>
            <p className="text-lg"><strong>Example:</strong> <Badge variant="secondary">If it rains</Badge>, <Badge variant="outline">I will stay home</Badge></p>
          </div>
        </section>

        {/* Zero Conditional */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Zero Conditional (General Truths)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Structure</h3>
              <div className="bg-secondary/20 p-4 rounded-lg mb-4">
                <p className="text-lg font-semibold">If + Present Simple, Present Simple</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Use: General truths, facts, scientific laws</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>If</strong> you heat water to 100°C, <strong>it boils</strong>.</p>
                    <p className="text-sm text-muted-foreground">Scientific fact</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>If</strong> you don't eat, <strong>you get hungry</strong>.</p>
                    <p className="text-sm text-muted-foreground">General truth</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>If</strong> you press this button, <strong>the machine starts</strong>.</p>
                    <p className="text-sm text-muted-foreground">Instructions/procedures</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border border-yellow-200 dark:border-yellow-800">
                <p><strong>Note:</strong> You can replace "if" with "when" in zero conditionals:</p>
                <p className="mt-2">• <strong>When</strong> you heat water to 100°C, it boils.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* First Conditional */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">First Conditional (Real Future Possibility)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Structure</h3>
              <div className="bg-secondary/20 p-4 rounded-lg mb-4">
                <p className="text-lg font-semibold">If + Present Simple, will + base verb</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Use: Real possibilities in the future</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>If</strong> it rains tomorrow, <strong>I will stay</strong> home.</p>
                    <p className="text-sm text-muted-foreground">Possible future situation</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>If</strong> you study hard, <strong>you will pass</strong> the exam.</p>
                    <p className="text-sm text-muted-foreground">Prediction based on condition</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>If</strong> she doesn't hurry, <strong>she will miss</strong> the bus.</p>
                    <p className="text-sm text-muted-foreground">Warning/consequence</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Other Modal Verbs</h4>
                <p className="mb-2">Instead of "will," you can use other modal verbs:</p>
                <div className="bg-secondary/10 p-4 rounded">
                  <p>• If you need help, you <strong>can</strong> call me.</p>
                  <p>• If it's urgent, you <strong>should</strong> contact the manager.</p>
                  <p>• If you finish early, you <strong>may</strong> leave.</p>
                  <p>• If you want to succeed, you <strong>must</strong> work hard.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Second Conditional */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Second Conditional (Unreal Present/Future)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Structure</h3>
              <div className="bg-secondary/20 p-4 rounded-lg mb-4">
                <p className="text-lg font-semibold">If + Past Simple, would + base verb</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Use: Unreal/imaginary situations in present or future</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-secondary pl-4">
                    <p><strong>If</strong> I won the lottery, <strong>I would travel</strong> around the world.</p>
                    <p className="text-sm text-muted-foreground">Imaginary situation (unlikely to happen)</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p><strong>If</strong> I were you, <strong>I would apologize</strong>.</p>
                    <p className="text-sm text-muted-foreground">Advice (impossible situation - I cannot be you)</p>
                  </div>
                  <div className="border-l-4 border-secondary pl-4">
                    <p><strong>If</strong> he studied more, <strong>he would get</strong> better grades.</p>
                    <p className="text-sm text-muted-foreground">Contrary to present reality (he doesn't study much)</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border border-yellow-200 dark:border-yellow-800">
                <h4 className="font-semibold mb-2">⚠️ Special Case with "be":</h4>
                <p>In formal English, use "were" for all persons in second conditional:</p>
                <p className="mt-2">• If I <strong>were</strong> rich... (not "was")</p>
                <p>• If he <strong>were</strong> here... (not "was")</p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Other Modal Verbs</h4>
                <div className="bg-secondary/10 p-4 rounded">
                  <p>• If I had time, I <strong>could</strong> help you.</p>
                  <p>• If she knew the answer, she <strong>might</strong> tell us.</p>
                  <p>• If you asked nicely, he <strong>would</strong> probably agree.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Third Conditional */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Third Conditional (Unreal Past)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Structure</h3>
              <div className="bg-secondary/20 p-4 rounded-lg mb-4">
                <p className="text-lg font-semibold">If + Past Perfect, would have + past participle</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Use: Unreal situations in the past (regrets, criticism)</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-accent pl-4">
                    <p><strong>If</strong> I had studied harder, <strong>I would have passed</strong> the exam.</p>
                    <p className="text-sm text-muted-foreground">Regret about past (I didn't study hard, so I failed)</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p><strong>If</strong> you had told me earlier, <strong>I could have helped</strong>.</p>
                    <p className="text-sm text-muted-foreground">Missed opportunity (you didn't tell me, so I couldn't help)</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p><strong>If</strong> she hadn't been late, <strong>she wouldn't have missed</strong> the meeting.</p>
                    <p className="text-sm text-muted-foreground">Criticism (she was late, so she missed it)</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Other Modal Verbs</h4>
                <div className="bg-secondary/10 p-4 rounded">
                  <p>• If he had left earlier, he <strong>might have arrived</strong> on time.</p>
                  <p>• If we had known about the traffic, we <strong>could have taken</strong> another route.</p>
                  <p>• If she had asked for help, someone <strong>would have assisted</strong> her.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mixed Conditionals */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Mixed Conditionals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Past Condition → Present Result</h3>
              <div className="bg-secondary/20 p-4 rounded-lg mb-4">
                <p className="text-lg font-semibold">If + Past Perfect, would + base verb</p>
              </div>
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>If</strong> I had studied medicine, <strong>I would be</strong> a doctor now.</p>
                  <p className="text-sm text-muted-foreground">Past decision affects present situation</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>If</strong> she hadn't moved to Japan, <strong>she wouldn't speak</strong> Japanese so well.</p>
                  <p className="text-sm text-muted-foreground">Past action affects present ability</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Present Condition → Past Result</h3>
              <div className="bg-secondary/20 p-4 rounded-lg mb-4">
                <p className="text-lg font-semibold">If + Past Simple, would have + past participle</p>
              </div>
              <div className="space-y-3">
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>If</strong> I were more careful, <strong>I wouldn't have broken</strong> the vase.</p>
                  <p className="text-sm text-muted-foreground">Present characteristic affects past event</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>If</strong> he wasn't so stubborn, <strong>he would have apologized</strong> yesterday.</p>
                  <p className="text-sm text-muted-foreground">Present personality trait affects past behavior</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Alternative Structures */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Alternative Conditional Structures</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Unless (= if not)</h3>
              <div className="space-y-3">
                <div className="bg-secondary/10 p-4 rounded">
                  <p className="font-semibold mb-2">Unless = If not</p>
                  <p>• <strong>Unless</strong> you hurry, you'll be late.</p>
                  <p>• <strong>If you don't</strong> hurry, you'll be late.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Provided/Providing that, As long as</h3>
              <div className="space-y-3">
                <div className="bg-secondary/10 p-4 rounded">
                  <p>• <strong>Provided that</strong> you finish on time, you can leave early.</p>
                  <p>• <strong>As long as</strong> you're careful, you'll be fine.</p>
                  <p>• <strong>Providing</strong> the weather is good, we'll go to the beach.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Without If (Inverted Conditionals)</h3>
              <div className="space-y-3">
                <div className="bg-secondary/10 p-4 rounded">
                  <p className="font-semibold mb-2">Formal/Literary style:</p>
                  <p>• <strong>Were</strong> I you, I would accept the offer. (= If I were you...)</p>
                  <p>• <strong>Had</strong> she known, she would have come. (= If she had known...)</p>
                  <p>• <strong>Should</strong> you need help, call me. (= If you should need help...)</p>
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
                <h3 className="text-lg font-semibold mb-3">Complete with the correct conditional form:</h3>
                <div className="space-y-2 bg-secondary/10 p-4 rounded-lg">
                  <p>1. If it _____ (rain) tomorrow, we _____ (stay) at home.</p>
                  <p>2. If I _____ (be) rich, I _____ (buy) a big house.</p>
                  <p>3. If she _____ (study) harder last year, she _____ (pass) the exam.</p>
                  <p>4. If you heat ice, it _____ (melt).</p>
                  <p>5. If he _____ (not/leave) so early yesterday, he _____ (not/miss) the party.</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Answers:</h3>
                <div className="space-y-2 bg-primary/10 p-4 rounded-lg">
                  <p>1. If it <strong>rains</strong> tomorrow, we <strong>will stay</strong> at home. (First conditional)</p>
                  <p>2. If I <strong>were</strong> rich, I <strong>would buy</strong> a big house. (Second conditional)</p>
                  <p>3. If she <strong>had studied</strong> harder last year, she <strong>would have passed</strong> the exam. (Third conditional)</p>
                  <p>4. If you heat ice, it <strong>melts</strong>. (Zero conditional)</p>
                  <p>5. If he <strong>hadn't left</strong> so early yesterday, he <strong>wouldn't have missed</strong> the party. (Third conditional)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GrammarLayout>
  );
};

export default Conditional;