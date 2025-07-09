import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Auxiliaries = () => {
  return (
    <GrammarLayout 
      title="Auxiliary Verbs" 
      description="Helping verbs and their usage"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-4">What are Auxiliary Verbs?</h2>
          <p className="text-lg mb-4">
            Auxiliary verbs (also called helping verbs) are verbs that are used together with main verbs 
            to form tenses, questions, negatives, and passive voice. They help express the full meaning of the main verb.
          </p>
          <div className="bg-primary/10 p-4 rounded-lg">
            <p className="text-lg"><strong>Structure:</strong> Auxiliary Verb + Main Verb</p>
            <p className="text-lg"><strong>Example:</strong> <Badge variant="secondary">She is</Badge> <Badge variant="outline">working</Badge></p>
          </div>
        </section>

        {/* Primary Auxiliaries */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Primary Auxiliary Verbs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">BE (am, is, are, was, were, being, been)</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">1. Continuous Tenses</h4>
                  <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                    <p>• I <strong>am working</strong> now. (Present Continuous)</p>
                    <p>• She <strong>was studying</strong> yesterday. (Past Continuous)</p>
                    <p>• They <strong>will be playing</strong> tomorrow. (Future Continuous)</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">2. Passive Voice</h4>
                  <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                    <p>• The book <strong>is written</strong> by the author. (Present Passive)</p>
                    <p>• The car <strong>was repaired</strong> yesterday. (Past Passive)</p>
                    <p>• The project <strong>will be completed</strong> soon. (Future Passive)</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">3. As Main Verb (existence, identity, description)</h4>
                  <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                    <p>• I <strong>am</strong> a teacher. (identity)</p>
                    <p>• She <strong>is</strong> happy. (description)</p>
                    <p>• They <strong>are</strong> at home. (location)</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">HAVE (have, has, had, having)</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">1. Perfect Tenses</h4>
                  <div className="bg-primary/20 p-4 rounded-lg space-y-2">
                    <p>• I <strong>have finished</strong> my work. (Present Perfect)</p>
                    <p>• She <strong>had left</strong> before I arrived. (Past Perfect)</p>
                    <p>• They <strong>will have graduated</strong> by June. (Future Perfect)</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">2. As Main Verb (possession, experience)</h4>
                  <div className="bg-primary/20 p-4 rounded-lg space-y-2">
                    <p>• I <strong>have</strong> a car. (possession)</p>
                    <p>• She <strong>has</strong> breakfast at 7 AM. (habitual action)</p>
                    <p>• We <strong>had</strong> a great time. (experience)</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">DO (do, does, did)</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">1. Questions in Simple Tenses</h4>
                  <div className="bg-accent/20 p-4 rounded-lg space-y-2">
                    <p>• <strong>Do</strong> you like coffee? (Present Simple)</p>
                    <p>• <strong>Does</strong> she work here? (Present Simple)</p>
                    <p>• <strong>Did</strong> they come yesterday? (Past Simple)</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">2. Negatives in Simple Tenses</h4>
                  <div className="bg-accent/20 p-4 rounded-lg space-y-2">
                    <p>• I <strong>do not (don't)</strong> like tea.</p>
                    <p>• She <strong>does not (doesn't)</strong> work here.</p>
                    <p>• They <strong>did not (didn't)</strong> come yesterday.</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">3. Emphasis</h4>
                  <div className="bg-accent/20 p-4 rounded-lg space-y-2">
                    <p>• I <strong>do</strong> understand your problem! (Present)</p>
                    <p>• She <strong>did</strong> call you yesterday! (Past)</p>
                    <p>• <strong>Do</strong> come and visit us! (Imperative)</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">4. As Main Verb (action, activity)</h4>
                  <div className="bg-accent/20 p-4 rounded-lg space-y-2">
                    <p>• What <strong>do</strong> you <strong>do</strong>? (What's your job?)</p>
                    <p>• I'm <strong>doing</strong> my homework.</p>
                    <p>• She <strong>did</strong> her best.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modal Auxiliaries */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Modal Auxiliary Verbs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Can/Could</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Ability:</strong> I can swim. / I could swim when I was young.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Permission:</strong> Can I go out? / Could I use your phone?</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Possibility:</strong> It can be dangerous. / It could rain.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Request:</strong> Can you help me? / Could you please wait?</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Will/Would</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>Future:</strong> I will come tomorrow. / He said he would come.</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>Willingness:</strong> Will you help me? / Would you like some tea?</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>Habit (past):</strong> She would always arrive early. (past habit)</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>Polite request:</strong> Would you mind closing the door?</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">May/Might</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-accent pl-4">
                  <p><strong>Permission (formal):</strong> May I come in? / You may leave now.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p><strong>Possibility:</strong> It may rain. / He might be late.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p><strong>Wish:</strong> May you live long! / May God bless you!</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Must/Have to</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Obligation:</strong> You must study hard. / I have to work tomorrow.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Logical conclusion:</strong> She must be tired. (I'm sure she is tired)</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Prohibition:</strong> You must not smoke here. / You mustn't be late.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Should/Ought to</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>Advice:</strong> You should see a doctor. / You ought to be careful.</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>Expected behavior:</strong> Students should be punctual.</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>Probability:</strong> He should arrive soon. (I expect him to arrive)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Semi-Modals */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Semi-Modal Auxiliary Verbs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Used to</h3>
              <div className="space-y-3">
                <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                  <p><strong>Past habit:</strong> I used to play football when I was young.</p>
                  <p><strong>Past state:</strong> There used to be a cinema here.</p>
                  <p><strong>Negative:</strong> She didn't use to like vegetables.</p>
                  <p><strong>Question:</strong> Did you use to live here?</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Be going to</h3>
              <div className="space-y-3">
                <div className="bg-primary/20 p-4 rounded-lg space-y-2">
                  <p><strong>Planned future:</strong> I'm going to visit my parents next week.</p>
                  <p><strong>Prediction (evidence):</strong> Look at the clouds! It's going to rain.</p>
                  <p><strong>Intention:</strong> What are you going to do after graduation?</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Had better</h3>
              <div className="space-y-3">
                <div className="bg-accent/20 p-4 rounded-lg space-y-2">
                  <p><strong>Strong advice/warning:</strong> You'd better study hard or you'll fail.</p>
                  <p><strong>Negative:</strong> You'd better not be late.</p>
                  <p><strong>Question:</strong> Hadn't we better leave now?</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Need to/Dare to</h3>
              <div className="space-y-3">
                <div className="bg-secondary/10 p-4 rounded-lg space-y-2">
                  <p><strong>Need (necessity):</strong> You need to work harder.</p>
                  <p><strong>Need (question):</strong> Need I explain again? (formal)</p>
                  <p><strong>Dare (courage):</strong> He doesn't dare to speak to her.</p>
                  <p><strong>Dare (question):</strong> How dare you say that!</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Question Formation */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Question Formation with Auxiliaries</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Yes/No Questions</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">With BE</h4>
                    <div className="bg-primary/10 p-3 rounded">
                      <p>Statement: She is happy.</p>
                      <p>Question: <strong>Is</strong> she happy?</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">With HAVE</h4>
                    <div className="bg-secondary/10 p-3 rounded">
                      <p>Statement: They have arrived.</p>
                      <p>Question: <strong>Have</strong> they arrived?</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">With DO</h4>
                    <div className="bg-accent/10 p-3 rounded">
                      <p>Statement: You like coffee.</p>
                      <p>Question: <strong>Do</strong> you like coffee?</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">With Modals</h4>
                    <div className="bg-primary/10 p-3 rounded">
                      <p>Statement: She can swim.</p>
                      <p>Question: <strong>Can</strong> she swim?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">WH-Questions</h3>
              <div className="bg-secondary/20 p-4 rounded-lg">
                <p className="font-semibold mb-3">Structure: WH-word + Auxiliary + Subject + Main Verb + ?</p>
                <div className="space-y-2">
                  <p>• <strong>What are</strong> you doing?</p>
                  <p>• <strong>Where have</strong> they gone?</p>
                  <p>• <strong>When did</strong> you arrive?</p>
                  <p>• <strong>How can</strong> I help you?</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Negative Formation */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Negative Formation with Auxiliaries</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Adding "not" to Auxiliaries</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Full Forms</h4>
                  <div className="space-y-2 bg-primary/10 p-4 rounded">
                    <p>• am not, is not, are not</p>
                    <p>• was not, were not</p>
                    <p>• have not, has not, had not</p>
                    <p>• do not, does not, did not</p>
                    <p>• will not, would not</p>
                    <p>• can not, could not</p>
                    <p>• must not, should not</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Contractions</h4>
                  <div className="space-y-2 bg-secondary/10 p-4 rounded">
                    <p>• I'm not, isn't, aren't</p>
                    <p>• wasn't, weren't</p>
                    <p>• haven't, hasn't, hadn't</p>
                    <p>• don't, doesn't, didn't</p>
                    <p>• won't, wouldn't</p>
                    <p>• can't, couldn't</p>
                    <p>• mustn't, shouldn't</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Examples in Context</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <p>• She <strong>isn't</strong> coming to the party.</p>
                  <p>• They <strong>haven't</strong> finished their work.</p>
                  <p>• I <strong>don't</strong> like spicy food.</p>
                  <p>• You <strong>shouldn't</strong> smoke here.</p>
                  <p>• We <strong>won't</strong> be late.</p>
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
                <h3 className="text-lg font-semibold mb-3">Choose the correct auxiliary verb:</h3>
                <div className="space-y-2 bg-secondary/10 p-4 rounded-lg">
                  <p>1. _____ you like coffee? (do/are/have)</p>
                  <p>2. She _____ working in the garden. (has/is/does)</p>
                  <p>3. _____ they finished their homework? (Do/Are/Have)</p>
                  <p>4. I _____ not understand this problem. (am/do/have)</p>
                  <p>5. _____ you help me, please? (Will/Are/Do)</p>
                  <p>6. She _____ been to Paris twice. (is/has/does)</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Answers:</h3>
                <div className="space-y-2 bg-primary/10 p-4 rounded-lg">
                  <p>1. <strong>Do</strong> you like coffee?</p>
                  <p>2. She <strong>is</strong> working in the garden.</p>
                  <p>3. <strong>Have</strong> they finished their homework?</p>
                  <p>4. I <strong>do</strong> not understand this problem.</p>
                  <p>5. <strong>Will</strong> you help me, please?</p>
                  <p>6. She <strong>has</strong> been to Paris twice.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GrammarLayout>
  );
};

export default Auxiliaries;