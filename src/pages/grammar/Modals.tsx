import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Modals = () => {
  return (
    <GrammarLayout 
      title="Modal Verbs" 
      description="Can, could, should, must, and other modals"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-4">What are Modal Verbs?</h2>
          <p className="text-lg mb-4">
            Modal verbs are special auxiliary verbs that express possibility, necessity, permission, 
            ability, or advice. They are used with the base form of main verbs (without "to").
          </p>
          <div className="bg-primary/10 p-4 rounded-lg">
            <p className="text-lg"><strong>Main Modal Verbs:</strong></p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary">can</Badge>
              <Badge variant="secondary">could</Badge>
              <Badge variant="secondary">may</Badge>
              <Badge variant="secondary">might</Badge>
              <Badge variant="secondary">will</Badge>
              <Badge variant="secondary">would</Badge>
              <Badge variant="secondary">shall</Badge>
              <Badge variant="secondary">should</Badge>
              <Badge variant="secondary">must</Badge>
              <Badge variant="secondary">ought to</Badge>
            </div>
          </div>
        </section>

        {/* Basic Rules */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Basic Rules for Modal Verbs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Important Characteristics</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>1. No "s" in third person singular</strong></p>
                  <p className="text-sm text-muted-foreground">✅ She can swim. ❌ She cans swim.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>2. Followed by base form (infinitive without "to")</strong></p>
                  <p className="text-sm text-muted-foreground">✅ I must go. ❌ I must to go.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>3. No auxiliary "do" in questions/negatives</strong></p>
                  <p className="text-sm text-muted-foreground">✅ Can you help? ❌ Do you can help?</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>4. Cannot be used together</strong></p>
                  <p className="text-sm text-muted-foreground">❌ I will can help. ✅ I will be able to help.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Question and Negative Formation</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Questions</h4>
                  <div className="bg-primary/10 p-3 rounded">
                    <p>Modal + Subject + Base Verb + ?</p>
                    <p className="text-sm mt-2">• <strong>Can</strong> you swim?</p>
                    <p className="text-sm">• <strong>Should</strong> I call him?</p>
                    <p className="text-sm">• <strong>Will</strong> they come?</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-secondary">Negatives</h4>
                  <div className="bg-secondary/10 p-3 rounded">
                    <p>Subject + Modal + not + Base Verb</p>
                    <p className="text-sm mt-2">• I <strong>cannot/can't</strong> swim.</p>
                    <p className="text-sm">• You <strong>should not/shouldn't</strong> smoke.</p>
                    <p className="text-sm">• They <strong>will not/won't</strong> come.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Can/Could */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">CAN / COULD</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">CAN</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>1. Present Ability</strong></p>
                  <div className="bg-primary/10 p-3 rounded mt-2">
                    <p>• I <strong>can</strong> speak three languages.</p>
                    <p>• She <strong>can</strong> play the piano.</p>
                    <p>• <strong>Can</strong> you drive a car?</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>2. Permission (informal)</strong></p>
                  <div className="bg-primary/10 p-3 rounded mt-2">
                    <p>• <strong>Can</strong> I use your phone?</p>
                    <p>• You <strong>can</strong> leave early today.</p>
                    <p>• <strong>Can</strong> we sit here?</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p><strong>3. Possibility</strong></p>
                  <div className="bg-primary/10 p-3 rounded mt-2">
                    <p>• It <strong>can</strong> be very cold in winter.</p>
                    <p>• Accidents <strong>can</strong> happen anywhere.</p>
                    <p>• This <strong>can't</strong> be true! (impossible)</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p><strong>4. Requests (informal)</strong></p>
                  <div className="bg-primary/10 p-3 rounded mt-2">
                    <p>• <strong>Can</strong> you help me?</p>
                    <p>• <strong>Can</strong> you open the window?</p>
                    <p>• <strong>Can</strong> you speak louder?</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">COULD</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>1. Past Ability</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• When I was young, I <strong>could</strong> run very fast.</p>
                    <p>• She <strong>could</strong> speak French when she was a child.</p>
                    <p>• I <strong>couldn't</strong> sleep last night.</p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>2. Polite Requests</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• <strong>Could</strong> you help me, please?</p>
                    <p>• <strong>Could</strong> I borrow your pen?</p>
                    <p>• <strong>Could</strong> you speak more slowly?</p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>3. Possibility (less certain than can)</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• It <strong>could</strong> rain tomorrow.</p>
                    <p>• She <strong>could</strong> be at home now.</p>
                    <p>• This <strong>could</strong> be the answer.</p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>4. Suggestions</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• You <strong>could</strong> try calling him.</p>
                    <p>• We <strong>could</strong> go to the cinema.</p>
                    <p>• You <strong>could</strong> ask for help.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* May/Might */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">MAY / MIGHT</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">MAY</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>1. Formal Permission</strong></p>
                  <div className="bg-primary/10 p-3 rounded mt-2">
                    <p>• <strong>May</strong> I come in?</p>
                    <p>• You <strong>may</strong> leave now.</p>
                    <p>• Students <strong>may</strong> use the library.</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p><strong>2. Possibility (50% chance)</strong></p>
                  <div className="bg-primary/10 p-3 rounded mt-2">
                    <p>• It <strong>may</strong> rain today.</p>
                    <p>• She <strong>may</strong> be late.</p>
                    <p>• He <strong>may not</strong> come to the party.</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p><strong>3. Wishes (formal)</strong></p>
                  <div className="bg-primary/10 p-3 rounded mt-2">
                    <p>• <strong>May</strong> you live long!</p>
                    <p>• <strong>May</strong> God bless you!</p>
                    <p>• <strong>May</strong> all your dreams come true!</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">MIGHT</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>1. Possibility (less than 50% chance)</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• I <strong>might</strong> go to the party. (not sure)</p>
                    <p>• She <strong>might</strong> be sleeping.</p>
                    <p>• It <strong>might not</strong> work.</p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>2. Past of "may" in reported speech</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• He said, "I may be late." → He said he <strong>might</strong> be late.</p>
                    <p>• She said, "It may rain." → She said it <strong>might</strong> rain.</p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>3. Polite Suggestions</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• You <strong>might</strong> want to check your email.</p>
                    <p>• You <strong>might</strong> consider taking a break.</p>
                    <p>• It <strong>might</strong> be better to wait.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Will/Would */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">WILL / WOULD</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">WILL</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>1. Future Plans/Predictions</strong></p>
                  <div className="bg-primary/10 p-3 rounded mt-2">
                    <p>• I <strong>will</strong> call you tomorrow.</p>
                    <p>• It <strong>will</strong> be sunny today.</p>
                    <p>• She <strong>won't</strong> be late.</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p><strong>2. Spontaneous Decisions</strong></p>
                  <div className="bg-primary/10 p-3 rounded mt-2">
                    <p>• I <strong>will</strong> help you. (deciding now)</p>
                    <p>• OK, I <strong>will</strong> do it.</p>
                    <p>• I <strong>will</strong> have the chicken, please.</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p><strong>3. Promises/Offers</strong></p>
                  <div className="bg-primary/10 p-3 rounded mt-2">
                    <p>• I <strong>will</strong> never lie to you.</p>
                    <p>• <strong>Will</strong> you marry me?</p>
                    <p>• I <strong>will</strong> pick you up at 8.</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p><strong>4. Requests</strong></p>
                  <div className="bg-primary/10 p-3 rounded mt-2">
                    <p>• <strong>Will</strong> you help me?</p>
                    <p>• <strong>Will</strong> you close the door?</p>
                    <p>• <strong>Will</strong> you be quiet?</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">WOULD</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>1. Polite Requests</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• <strong>Would</strong> you help me, please?</p>
                    <p>• <strong>Would</strong> you mind closing the window?</p>
                    <p>• <strong>Would</strong> you like some coffee?</p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>2. Hypothetical Situations (2nd Conditional)</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• If I won the lottery, I <strong>would</strong> travel the world.</p>
                    <p>• What <strong>would</strong> you do?</p>
                    <p>• I <strong>wouldn't</strong> do that if I were you.</p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>3. Past Habits</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• When I was young, I <strong>would</strong> play in the park every day.</p>
                    <p>• She <strong>would</strong> always arrive early.</p>
                    <p>• We <strong>would</strong> visit our grandparents every summer.</p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>4. Preferences</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• I <strong>would</strong> rather stay home.</p>
                    <p>• I <strong>would</strong> prefer tea to coffee.</p>
                    <p>• I <strong>would</strong> like to go now.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Must/Should */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">MUST / SHOULD / OUGHT TO</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">MUST</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>1. Strong Obligation/Necessity</strong></p>
                  <div className="bg-primary/10 p-3 rounded mt-2">
                    <p>• You <strong>must</strong> wear a seatbelt.</p>
                    <p>• Students <strong>must</strong> attend all classes.</p>
                    <p>• I <strong>must</strong> finish this today.</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p><strong>2. Logical Conclusion (certainty)</strong></p>
                  <div className="bg-primary/10 p-3 rounded mt-2">
                    <p>• She <strong>must</strong> be tired. (I'm sure she is)</p>
                    <p>• It <strong>must</strong> be expensive. (I'm certain)</p>
                    <p>• He <strong>must</strong> have left already.</p>
                  </div>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <p><strong>3. Prohibition (must not/mustn't)</strong></p>
                  <div className="bg-primary/10 p-3 rounded mt-2">
                    <p>• You <strong>must not</strong> smoke here.</p>
                    <p>• Students <strong>mustn't</strong> cheat in exams.</p>
                    <p>• You <strong>mustn't</strong> tell anyone!</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">SHOULD</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>1. Advice/Recommendation</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• You <strong>should</strong> see a doctor.</p>
                    <p>• You <strong>shouldn't</strong> smoke.</p>
                    <p>• Students <strong>should</strong> study regularly.</p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>2. Expected Behavior</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• Teachers <strong>should</strong> be patient.</p>
                    <p>• Children <strong>should</strong> respect their parents.</p>
                    <p>• People <strong>should</strong> be kind to each other.</p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>3. Probability/Expectation</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• He <strong>should</strong> arrive soon. (I expect him to)</p>
                    <p>• The weather <strong>should</strong> be nice tomorrow.</p>
                    <p>• This <strong>should</strong> work.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">OUGHT TO</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <p><strong>Similar to "should" but more formal</strong></p>
                  <div className="bg-accent/10 p-3 rounded mt-2">
                    <p>• You <strong>ought to</strong> be more careful.</p>
                    <p>• We <strong>ought to</strong> help the poor.</p>
                    <p>• She <strong>ought to</strong> study harder.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Semi-Modals */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Semi-Modal Expressions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">BE ABLE TO (ability)</h3>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• I <strong>am able to</strong> speak English. (= I can speak English)</p>
                <p>• She <strong>will be able to</strong> help you tomorrow. (future ability)</p>
                <p>• Were you <strong>able to</strong> fix the computer? (past specific achievement)</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">HAVE TO (obligation)</h3>
              <div className="bg-primary/20 p-4 rounded-lg space-y-2">
                <p>• I <strong>have to</strong> work tomorrow. (= I must work tomorrow)</p>
                <p>• Do you <strong>have to</strong> leave now?</p>
                <p>• She <strong>had to</strong> stay late yesterday. (past obligation)</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">BE GOING TO (future plans)</h3>
              <div className="bg-accent/20 p-4 rounded-lg space-y-2">
                <p>• I <strong>am going to</strong> visit my parents next week.</p>
                <p>• Look at the clouds! It <strong>is going to</strong> rain.</p>
                <p>• What <strong>are you going to</strong> do this weekend?</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">USED TO (past habits)</h3>
              <div className="bg-secondary/10 p-4 rounded-lg space-y-2">
                <p>• I <strong>used to</strong> live in Paris. (I lived there before, but not now)</p>
                <p>• Did you <strong>use to</strong> play football?</p>
                <p>• She <strong>didn't use to</strong> like vegetables, but now she does.</p>
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
                <h3 className="text-lg font-semibold mb-3">Choose the correct modal verb:</h3>
                <div className="space-y-2 bg-secondary/10 p-4 rounded-lg">
                  <p>1. _____ you swim? (Can/Must/Should)</p>
                  <p>2. You _____ study harder. (can/should/will)</p>
                  <p>3. _____ I borrow your pen? (Should/May/Must)</p>
                  <p>4. She _____ be at home now. (must/can/will)</p>
                  <p>5. I _____ help you tomorrow. (must/might/should)</p>
                  <p>6. Students _____ not cheat in exams. (can/may/must)</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Answers and Explanations:</h3>
                <div className="space-y-2 bg-primary/10 p-4 rounded-lg">
                  <p>1. <strong>Can</strong> you swim? (asking about ability)</p>
                  <p>2. You <strong>should</strong> study harder. (giving advice)</p>
                  <p>3. <strong>May</strong> I borrow your pen? (asking formal permission)</p>
                  <p>4. She <strong>must</strong> be at home now. (logical conclusion)</p>
                  <p>5. I <strong>might</strong> help you tomorrow. (possibility)</p>
                  <p>6. Students <strong>must</strong> not cheat in exams. (prohibition)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GrammarLayout>
  );
};

export default Modals;