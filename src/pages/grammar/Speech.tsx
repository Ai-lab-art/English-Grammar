import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Speech = () => {
  return (
    <GrammarLayout 
      title="Speech" 
      description="Direct and indirect speech conversion"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Direct and Indirect Speech</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary/10 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Direct Speech</h3>
              <p>The exact words someone said, using quotation marks.</p>
              <p className="mt-2 font-medium">Example: <Badge variant="secondary">She said, "I am happy."</Badge></p>
            </div>
            <div className="bg-secondary/10 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Indirect Speech</h3>
              <p>Reporting what someone said without using their exact words.</p>
              <p className="mt-2 font-medium">Example: <Badge variant="secondary">She said that she was happy.</Badge></p>
            </div>
          </div>
        </section>

        {/* Basic Rules */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Basic Conversion Rules</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Structure Changes</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Remove quotation marks</strong></p>
                  <p className="text-sm text-muted-foreground">Direct: He said, "I will come."</p>
                  <p className="text-sm text-muted-foreground">Indirect: He said that he would come.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Add "that" (optional but recommended)</strong></p>
                  <p className="text-sm text-muted-foreground">She told me that she was tired.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Change reporting verb if necessary</strong></p>
                  <p className="text-sm text-muted-foreground">said → told (when mentioning the listener)</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Pronoun Changes</h3>
              <div className="bg-secondary/20 p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Direct Speech</p>
                    <p>I → he/she</p>
                    <p>me → him/her</p>
                    <p>my → his/her</p>
                    <p>we → they</p>
                    <p>us → them</p>
                    <p>our → their</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Examples</p>
                    <p>"I like you" → He said he liked me</p>
                    <p>"This is my book" → She said it was her book</p>
                    <p>"We are ready" → They said they were ready</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tense Changes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Tense Changes (Backshift)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">When the Reporting Verb is in Past Tense</h3>
              <p className="mb-4">If the reporting verb (said, told, asked) is in past tense, we usually change the tenses in the reported speech:</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Present → Past</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-3 rounded">
                      <p className="font-semibold">Direct</p>
                      <p>"I <strong>am</strong> tired."</p>
                      <p>"She <strong>works</strong> here."</p>
                      <p>"They <strong>are playing</strong>."</p>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded">
                      <p className="font-semibold">Indirect</p>
                      <p>He said he <strong>was</strong> tired.</p>
                      <p>He said she <strong>worked</strong> there.</p>
                      <p>He said they <strong>were playing</strong>.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Past → Past Perfect</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-3 rounded">
                      <p className="font-semibold">Direct</p>
                      <p>"I <strong>went</strong> there."</p>
                      <p>"She <strong>was cooking</strong>."</p>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded">
                      <p className="font-semibold">Indirect</p>
                      <p>He said he <strong>had gone</strong> there.</p>
                      <p>He said she <strong>had been cooking</strong>.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Future → Conditional</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-3 rounded">
                      <p className="font-semibold">Direct</p>
                      <p>"I <strong>will</strong> help you."</p>
                      <p>"She <strong>is going to</strong> leave."</p>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded">
                      <p className="font-semibold">Indirect</p>
                      <p>He said he <strong>would</strong> help me.</p>
                      <p>He said she <strong>was going to</strong> leave.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Modal Verbs Changes</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Change</h4>
                  <div className="bg-secondary/10 p-3 rounded space-y-1">
                    <p>can → could</p>
                    <p>will → would</p>
                    <p>may → might</p>
                    <p>shall → should</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">No Change</h4>
                  <div className="bg-primary/10 p-3 rounded space-y-1">
                    <p>could → could</p>
                    <p>would → would</p>
                    <p>should → should</p>
                    <p>might → might</p>
                    <p>must → must/had to</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Time and Place Changes */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Time and Place Expression Changes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Time Expressions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Direct Speech</h4>
                  <div className="space-y-2 bg-primary/10 p-3 rounded">
                    <p>• now → then</p>
                    <p>• today → that day</p>
                    <p>• yesterday → the day before</p>
                    <p>• tomorrow → the next day</p>
                    <p>• this week → that week</p>
                    <p>• last week → the week before</p>
                    <p>• next week → the following week</p>
                    <p>• ago → before</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-secondary">Examples</h4>
                  <div className="space-y-2 bg-secondary/10 p-3 rounded">
                    <p>"I am busy now." → He said he was busy then.</p>
                    <p>"I'll see you tomorrow." → She said she would see me the next day.</p>
                    <p>"I went there yesterday." → He said he had gone there the day before.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Place Expressions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Direct Speech</h4>
                  <div className="space-y-2 bg-primary/10 p-3 rounded">
                    <p>• here → there</p>
                    <p>• this → that</p>
                    <p>• these → those</p>
                    <p>• come → go</p>
                    <p>• bring → take</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-secondary">Examples</h4>
                  <div className="space-y-2 bg-secondary/10 p-3 rounded">
                    <p>"I live here." → He said he lived there.</p>
                    <p>"Take this book." → She told me to take that book.</p>
                    <p>"Come here!" → He told me to go there.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Questions in Indirect Speech */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Reporting Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Yes/No Questions</h3>
              <p className="mb-3">Use "if" or "whether" instead of "that":</p>
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Direct:</strong> "Are you coming?"</p>
                  <p><strong>Indirect:</strong> He asked if/whether I was coming.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Direct:</strong> "Did you finish your homework?"</p>
                  <p><strong>Indirect:</strong> She asked if I had finished my homework.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">WH-Questions</h3>
              <p className="mb-3">Keep the question word and use normal word order:</p>
              <div className="space-y-3">
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>Direct:</strong> "Where do you live?"</p>
                  <p><strong>Indirect:</strong> He asked where I lived.</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>Direct:</strong> "What time is it?"</p>
                  <p><strong>Indirect:</strong> She asked what time it was.</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>Direct:</strong> "Who called you?"</p>
                  <p><strong>Indirect:</strong> He asked who had called me.</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border border-yellow-200 dark:border-yellow-800">
              <h4 className="font-semibold mb-2">⚠️ Important:</h4>
              <p>In indirect questions, use normal word order (subject + verb), not question order:</p>
              <p className="mt-2">✅ He asked where <strong>I lived</strong>.</p>
              <p>❌ He asked where <strong>did I live</strong>.</p>
            </div>
          </CardContent>
        </Card>

        {/* Commands and Requests */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Reporting Commands and Requests</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Imperatives (Commands)</h3>
              <p className="mb-3">Use "to + infinitive" for positive commands:</p>
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Direct:</strong> "Close the door."</p>
                  <p><strong>Indirect:</strong> He told me to close the door.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Direct:</strong> "Please help me."</p>
                  <p><strong>Indirect:</strong> She asked me to help her.</p>
                </div>
              </div>
              
              <p className="mt-4 mb-3">Use "not to + infinitive" for negative commands:</p>
              <div className="space-y-3">
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>Direct:</strong> "Don't be late."</p>
                  <p><strong>Indirect:</strong> He told me not to be late.</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>Direct:</strong> "Please don't worry."</p>
                  <p><strong>Indirect:</strong> She asked me not to worry.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Reporting Verbs for Commands</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Strong Commands</h4>
                  <div className="bg-secondary/10 p-3 rounded">
                    <p>• tell, order, command</p>
                    <p>• demand, insist</p>
                    <p>• warn, forbid</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Polite Requests</h4>
                  <div className="bg-primary/10 p-3 rounded">
                    <p>• ask, request</p>
                    <p>• beg, plead</p>
                    <p>• advise, suggest</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* No Backshift Cases */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">When NOT to Change Tenses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">No Backshift Required</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>1. Reporting verb in present tense:</strong></p>
                  <p className="text-sm text-muted-foreground">He says, "I am busy." → He says that he is busy.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>2. Universal truths:</strong></p>
                  <p className="text-sm text-muted-foreground">She said, "Water boils at 100°C." → She said that water boils at 100°C.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>3. Still true at time of reporting:</strong></p>
                  <p className="text-sm text-muted-foreground">He said, "I live in London." → He said that he lives/lived in London.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>4. Past perfect (already past):</strong></p>
                  <p className="text-sm text-muted-foreground">She said, "I had finished." → She said that she had finished.</p>
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
                <h3 className="text-lg font-semibold mb-3">Convert to indirect speech:</h3>
                <div className="space-y-2 bg-secondary/10 p-4 rounded-lg">
                  <p>1. "I am studying English," she said.</p>
                  <p>2. "We will come tomorrow," they told us.</p>
                  <p>3. "Did you finish your work?" he asked me.</p>
                  <p>4. "Close the window," the teacher said.</p>
                  <p>5. "I have never been to Paris," she said.</p>
                  <p>6. "Don't touch that!" he warned.</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Answers:</h3>
                <div className="space-y-2 bg-primary/10 p-4 rounded-lg">
                  <p>1. She said <strong>(that) she was studying English</strong>.</p>
                  <p>2. They told us <strong>(that) they would come the next day</strong>.</p>
                  <p>3. He asked me <strong>if/whether I had finished my work</strong>.</p>
                  <p>4. The teacher told us <strong>to close the window</strong>.</p>
                  <p>5. She said <strong>(that) she had never been to Paris</strong>.</p>
                  <p>6. He warned us <strong>not to touch that</strong>.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GrammarLayout>
  );
};

export default Speech;