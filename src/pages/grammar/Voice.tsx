import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Voice = () => {
  return (
    <GrammarLayout 
      title="Voice" 
      description="Active and passive voice transformations"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Active and Passive Voice</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary/10 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Active Voice</h3>
              <p>The subject performs the action.</p>
              <p className="mt-2 font-medium">Example: <Badge variant="secondary">The cat ate the fish.</Badge></p>
              <p className="text-sm text-muted-foreground">Subject (cat) → Action (ate) → Object (fish)</p>
            </div>
            <div className="bg-secondary/10 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Passive Voice</h3>
              <p>The subject receives the action.</p>
              <p className="mt-2 font-medium">Example: <Badge variant="secondary">The fish was eaten by the cat.</Badge></p>
              <p className="text-sm text-muted-foreground">Subject (fish) ← Action (was eaten) ← Agent (by cat)</p>
            </div>
          </div>
        </section>

        {/* Formation Rules */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">How to Form the Passive Voice</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Basic Structure</h3>
              <div className="bg-secondary/20 p-4 rounded-lg mb-4">
                <p className="text-lg font-semibold">Object + be + Past Participle + (by + Subject)</p>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Step 1:</strong> Move the object to the beginning</p>
                  <p className="text-sm text-muted-foreground">Active: John writes letters → Object: letters</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Step 2:</strong> Add the correct form of "be"</p>
                  <p className="text-sm text-muted-foreground">Present: are written, Past: were written</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Step 3:</strong> Use past participle of main verb</p>
                  <p className="text-sm text-muted-foreground">write → written, make → made</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Step 4:</strong> Add "by + original subject" (optional)</p>
                  <p className="text-sm text-muted-foreground">by John (can be omitted if not important)</p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border border-yellow-200 dark:border-yellow-800">
                <p className="font-semibold mb-2">Result:</p>
                <p>Active: <strong>John writes letters.</strong></p>
                <p>Passive: <strong>Letters are written by John.</strong></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Passive in Different Tenses */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Passive Voice in Different Tenses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Present Tenses</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Present Simple</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-3 rounded">
                      <p className="font-semibold">Active</p>
                      <p>They make cars here.</p>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded">
                      <p className="font-semibold">Passive</p>
                      <p>Cars <strong>are made</strong> here.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Present Continuous</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-3 rounded">
                      <p className="font-semibold">Active</p>
                      <p>They are building a house.</p>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded">
                      <p className="font-semibold">Passive</p>
                      <p>A house <strong>is being built</strong>.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Present Perfect</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-3 rounded">
                      <p className="font-semibold">Active</p>
                      <p>Someone has stolen my bike.</p>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded">
                      <p className="font-semibold">Passive</p>
                      <p>My bike <strong>has been stolen</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Past Tenses</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Past Simple</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-3 rounded">
                      <p className="font-semibold">Active</p>
                      <p>Shakespeare wrote Hamlet.</p>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded">
                      <p className="font-semibold">Passive</p>
                      <p>Hamlet <strong>was written</strong> by Shakespeare.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Past Continuous</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-3 rounded">
                      <p className="font-semibold">Active</p>
                      <p>They were repairing the road.</p>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded">
                      <p className="font-semibold">Passive</p>
                      <p>The road <strong>was being repaired</strong>.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Past Perfect</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-3 rounded">
                      <p className="font-semibold">Active</p>
                      <p>They had finished the work.</p>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded">
                      <p className="font-semibold">Passive</p>
                      <p>The work <strong>had been finished</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Future Tenses</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Future Simple</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-3 rounded">
                      <p className="font-semibold">Active</p>
                      <p>They will complete the project.</p>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded">
                      <p className="font-semibold">Passive</p>
                      <p>The project <strong>will be completed</strong>.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Future Perfect</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-3 rounded">
                      <p className="font-semibold">Active</p>
                      <p>They will have finished by 5 PM.</p>
                    </div>
                    <div className="bg-secondary/10 p-3 rounded">
                      <p className="font-semibold">Passive</p>
                      <p>It <strong>will have been finished</strong> by 5 PM.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modal Verbs in Passive */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Passive Voice with Modal Verbs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Structure: Modal + be + Past Participle</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Active</h4>
                    <div className="space-y-2 bg-primary/10 p-3 rounded">
                      <p>• You <strong>must</strong> finish the report.</p>
                      <p>• They <strong>can</strong> solve the problem.</p>
                      <p>• We <strong>should</strong> clean the house.</p>
                      <p>• You <strong>may</strong> use this computer.</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">Passive</h4>
                    <div className="space-y-2 bg-secondary/10 p-3 rounded">
                      <p>• The report <strong>must be finished</strong>.</p>
                      <p>• The problem <strong>can be solved</strong>.</p>
                      <p>• The house <strong>should be cleaned</strong>.</p>
                      <p>• This computer <strong>may be used</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Perfect Modal Passive</h3>
              <div className="space-y-4">
                <div className="bg-secondary/20 p-4 rounded-lg mb-4">
                  <p className="text-lg font-semibold">Modal + have been + Past Participle</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Active</h4>
                    <div className="space-y-2 bg-primary/10 p-3 rounded">
                      <p>• They <strong>should have finished</strong> it.</p>
                      <p>• You <strong>could have prevented</strong> this.</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-secondary">Passive</h4>
                    <div className="space-y-2 bg-secondary/10 p-3 rounded">
                      <p>• It <strong>should have been finished</strong>.</p>
                      <p>• This <strong>could have been prevented</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Special Cases */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Special Cases and Important Rules</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Verbs with Two Objects</h3>
              <p className="mb-3">Some verbs (give, send, tell, show, etc.) can have two passive forms:</p>
              <div className="space-y-3">
                <div className="bg-secondary/10 p-4 rounded">
                  <p className="font-semibold mb-2">Active:</p>
                  <p>John gave Mary a book.</p>
                </div>
                <div className="bg-primary/10 p-4 rounded">
                  <p className="font-semibold mb-2">Passive (Option 1):</p>
                  <p><strong>Mary was given a book</strong> by John. (focus on Mary)</p>
                </div>
                <div className="bg-primary/10 p-4 rounded">
                  <p className="font-semibold mb-2">Passive (Option 2):</p>
                  <p><strong>A book was given to Mary</strong> by John. (focus on book)</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Phrasal Verbs in Passive</h3>
              <p className="mb-3">Keep phrasal verbs together in passive voice:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-primary/10 p-3 rounded">
                  <p className="font-semibold">Active</p>
                  <p>• They called off the meeting.</p>
                  <p>• Someone broke into the house.</p>
                  <p>• We must look after the children.</p>
                </div>
                <div className="bg-secondary/10 p-3 rounded">
                  <p className="font-semibold">Passive</p>
                  <p>• The meeting was <strong>called off</strong>.</p>
                  <p>• The house was <strong>broken into</strong>.</p>
                  <p>• The children must be <strong>looked after</strong>.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">When NOT to Use Passive</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-red-500 pl-4">
                  <p><strong>Intransitive verbs (no object):</strong></p>
                  <p className="text-sm text-muted-foreground">❌ The accident was happened. ✅ The accident happened.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p><strong>State verbs:</strong></p>
                  <p className="text-sm text-muted-foreground">❌ English is known by him. ✅ He knows English.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p><strong>When the subject is more important:</strong></p>
                  <p className="text-sm text-muted-foreground">❌ The ball was kicked by Messi. ✅ Messi kicked the ball.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* When to Use Passive */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">When to Use Passive Voice</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>1. Unknown agent:</strong></p>
                  <p className="text-sm text-muted-foreground">My car was stolen. (Don't know who)</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>2. Obvious agent:</strong></p>
                  <p className="text-sm text-muted-foreground">The suspect was arrested. (Obviously by police)</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>3. Unimportant agent:</strong></p>
                  <p className="text-sm text-muted-foreground">This bridge was built in 1995.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>4. Focus on action/object:</strong></p>
                  <p className="text-sm text-muted-foreground">The Mona Lisa was painted by Da Vinci.</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>5. Formal writing:</strong></p>
                  <p className="text-sm text-muted-foreground">The experiments were conducted carefully.</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>6. Avoid responsibility:</strong></p>
                  <p className="text-sm text-muted-foreground">Mistakes were made. (diplomatic language)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verbs of Perception and Feeling in Passive */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Verbs of Perception and Feeling: Active vs Passive</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Verbs of Perception and Feeling: Active vs Passive</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border border-blue-200 dark:border-blue-800 mb-4">
                <h4 className="font-semibold mb-2">🌍 English Explanation:</h4>
                <p>Verbs of perception and feeling can be transformed from active to passive voice. In the active voice, we mention who is doing the action. In the passive voice, we focus on the person experiencing the perception or feeling and use "being + past participle" to show what is happening to them.</p>
                
                <h4 className="font-semibold mb-2 mt-4">🇳🇵 नेपाली व्याख्या:</h4>
                <p>धारणा र भावनाका क्रियाहरूलाई सक्रिय वाच्यबाट निष्क्रिय वाच्यमा परिवर्तन गर्न सकिन्छ। सक्रिय वाच्यमा हामी कसले काम गरिरहेको छ भनेर उल्लेख गर्छौं। निष्क्रिय वाच्यमा हामी धारणा वा भावना अनुभव गरिरहेको व्यक्तिमा केन्द्रित हुन्छौं र "being + past participle" प्रयोग गरेर उनीहरूमा के भइरहेको छ भनेर देखाउँछौं।</p>
              </div>
              
              <p className="mb-4">Verbs of perception and feeling can be transformed from active to passive voice. The passive form often uses gerunds (being + past participle):</p>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Active Voice (सक्रिय वाच्य)</h4>
                    <div className="space-y-3 bg-primary/10 p-4 rounded">
                      <div className="border-b border-primary/20 pb-2">
                        <p className="font-medium">• I hate people interrupting me.</p>
                        <p className="text-sm text-muted-foreground italic">म मलाई बाधा पुर्‍याउने मानिसहरूलाई घृणा गर्छु।</p>
                      </div>
                      <div className="border-b border-primary/20 pb-2">
                        <p className="font-medium">• She enjoys someone massaging her back.</p>
                        <p className="text-sm text-muted-foreground italic">उनलाई कसैले ढाड मिच्दा मन पर्छ।</p>
                      </div>
                      <div className="border-b border-primary/20 pb-2">
                        <p className="font-medium">• He remembers people praising his efforts.</p>
                        <p className="text-sm text-muted-foreground italic">उसलाई मानिसहरूले आफ्नो प्रयासको प्रशंसा गरेको याद छ।</p>
                      </div>
                      <div className="border-b border-primary/20 pb-2">
                        <p className="font-medium">• They mentioned the teacher scolding them.</p>
                        <p className="text-sm text-muted-foreground italic">उनीहरूले शिक्षकले उनीहरूलाई हप्काएको कुरा भने।</p>
                      </div>
                      <div className="border-b border-primary/20 pb-2">
                        <p className="font-medium">• We appreciate others recognizing our work.</p>
                        <p className="text-sm text-muted-foreground italic">हामी अरूले हाम्रो कामको पहिचान गर्नुको कदर गर्छौं।</p>
                      </div>
                      <div className="border-b border-primary/20 pb-2">
                        <p className="font-medium">• She disliked the manager blaming her.</p>
                        <p className="text-sm text-muted-foreground italic">म्यानेजरले उनलाई दोष दिएको उनलाई मन परेन।</p>
                      </div>
                      <div className="border-b border-primary/20 pb-2">
                        <p className="font-medium">• I can't stand people lying to me.</p>
                        <p className="text-sm text-muted-foreground italic">म मलाई झूट बोल्ने मानिसहरूलाई सहन सक्दिन।</p>
                      </div>
                      <div className="border-b border-primary/20 pb-2">
                        <p className="font-medium">• He was proud of people admiring his painting.</p>
                        <p className="text-sm text-muted-foreground italic">मानिसहरूले उसको चित्रकलाको प्रशंसा गरेकोमा उसलाई गर्व थियो।</p>
                      </div>
                      <div className="border-b border-primary/20 pb-2">
                        <p className="font-medium">• I remember people giving me awards.</p>
                        <p className="text-sm text-muted-foreground italic">मलाई मानिसहरूले पुरस्कार दिएको याद छ।</p>
                      </div>
                      <div>
                        <p className="font-medium">• She regrets people having ignored her warnings.</p>
                        <p className="text-sm text-muted-foreground italic">मानिसहरूले उनका चेतावनीहरूलाई बेवास्ता गरेकोमा उनलाई पछुतो छ।</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-secondary">Passive Voice (निष्क्रिय वाच्य)</h4>
                    <div className="space-y-3 bg-secondary/10 p-4 rounded">
                      <div className="border-b border-secondary/20 pb-2">
                        <p className="font-medium">• I hate <strong>being interrupted</strong>.</p>
                        <p className="text-sm text-muted-foreground italic">म बाधा पुर्‍याइनुलाई घृणा गर्छु।</p>
                      </div>
                      <div className="border-b border-secondary/20 pb-2">
                        <p className="font-medium">• She enjoys <strong>being massaged</strong>.</p>
                        <p className="text-sm text-muted-foreground italic">उनलाई मालिश गरिनु मन पर्छ।</p>
                      </div>
                      <div className="border-b border-secondary/20 pb-2">
                        <p className="font-medium">• He remembers <strong>being praised</strong>.</p>
                        <p className="text-sm text-muted-foreground italic">उसलाई प्रशंसा गरिएको याद छ।</p>
                      </div>
                      <div className="border-b border-secondary/20 pb-2">
                        <p className="font-medium">• They mentioned <strong>being scolded</strong>.</p>
                        <p className="text-sm text-muted-foreground italic">उनीहरूले हप्काइएको कुरा भने।</p>
                      </div>
                      <div className="border-b border-secondary/20 pb-2">
                        <p className="font-medium">• We appreciate <strong>being recognized</strong>.</p>
                        <p className="text-sm text-muted-foreground italic">हामी पहिचान पाउनुको कदर गर्छौं।</p>
                      </div>
                      <div className="border-b border-secondary/20 pb-2">
                        <p className="font-medium">• She disliked <strong>being blamed</strong>.</p>
                        <p className="text-sm text-muted-foreground italic">उनलाई दोष लगाइनु मन परेन।</p>
                      </div>
                      <div className="border-b border-secondary/20 pb-2">
                        <p className="font-medium">• I can't stand <strong>being lied to</strong>.</p>
                        <p className="text-sm text-muted-foreground italic">म झूट भनिनुलाई सहन सक्दिन।</p>
                      </div>
                      <div className="border-b border-secondary/20 pb-2">
                        <p className="font-medium">• He was proud of <strong>being admired</strong>.</p>
                        <p className="text-sm text-muted-foreground italic">उसलाई प्रशंसा पाउनुमा गर्व थियो।</p>
                      </div>
                      <div className="border-b border-secondary/20 pb-2">
                        <p className="font-medium">• I remember <strong>being given awards</strong>.</p>
                        <p className="text-sm text-muted-foreground italic">मलाई पुरस्कार दिइएको याद छ।</p>
                      </div>
                      <div>
                        <p className="font-medium">• She regrets <strong>having been ignored</strong>.</p>
                        <p className="text-sm text-muted-foreground italic">उनलाई बेवास्ता गरिएकोमा पछुतो छ।</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded border border-yellow-200 dark:border-yellow-800">
                <h4 className="font-semibold mb-2">💡 Pattern (ढाँचा):</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p><strong>Active:</strong> Verb + (someone/people) + gerund/infinitive</p>
                    <p className="text-sm text-muted-foreground italic">सक्रिय: क्रिया + (कोही/मानिसहरू) + gerund/infinitive</p>
                  </div>
                  <div>
                    <p><strong>Passive:</strong> Verb + being + past participle</p>
                    <p className="text-sm text-muted-foreground italic">निष्क्रिय: क्रिया + being + past participle</p>
                  </div>
                </div>
                <p className="mt-2 text-sm">For perfect forms: having been + past participle</p>
                <p className="text-sm text-muted-foreground italic">पूर्ण रूपका लागि: having been + past participle</p>
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
                <h3 className="text-lg font-semibold mb-3">Convert to passive voice:</h3>
                <div className="space-y-2 bg-secondary/10 p-4 rounded-lg">
                  <p>1. The teacher explains the lesson.</p>
                  <p>2. Someone has stolen my bicycle.</p>
                  <p>3. They will build a new hospital.</p>
                  <p>4. Shakespeare wrote Romeo and Juliet.</p>
                  <p>5. You must complete this form.</p>
                  <p>6. They are repairing the road.</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Answers:</h3>
                <div className="space-y-2 bg-primary/10 p-4 rounded-lg">
                  <p>1. The lesson <strong>is explained</strong> by the teacher.</p>
                  <p>2. My bicycle <strong>has been stolen</strong>.</p>
                  <p>3. A new hospital <strong>will be built</strong>.</p>
                  <p>4. Romeo and Juliet <strong>was written</strong> by Shakespeare.</p>
                  <p>5. This form <strong>must be completed</strong>.</p>
                  <p>6. The road <strong>is being repaired</strong>.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GrammarLayout>
  );
};

export default Voice;