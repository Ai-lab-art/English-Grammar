import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Tenses = () => {
  return (
    <GrammarLayout 
      title="Tenses" 
      description="Present, past, and future tenses"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-4">English Tenses</h2>
          <p className="text-lg mb-4">
            Tenses show when an action happens - in the past, present, or future. 
            English has 12 main tenses, formed by combining 3 times (past, present, future) 
            with 4 aspects (simple, continuous, perfect, perfect continuous).
          </p>
          <div className="bg-primary/10 p-4 rounded-lg">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <Badge variant="secondary" className="mb-2">Present</Badge>
                <p className="text-sm">Now, current time</p>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="mb-2">Past</Badge>
                <p className="text-sm">Before now, completed</p>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="mb-2">Future</Badge>
                <p className="text-sm">After now, planned</p>
              </div>
            </div>
          </div>
        </section>

        {/* Present Tenses */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Present Tenses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">1. Present Simple</h3>
              <div className="space-y-4">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Structure: Subject + base verb (+s for 3rd person)</p>
                  <p>Positive: I work, She works</p>
                  <p>Negative: I don't work, She doesn't work</p>
                  <p>Question: Do you work? Does she work?</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Uses:</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Habits and routines:</strong> I drink coffee every morning.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Permanent situations:</strong> She lives in London.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>General truths:</strong> Water boils at 100°C.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Scheduled events:</strong> The train leaves at 8 AM.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">2. Present Continuous</h3>
              <div className="space-y-4">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Structure: Subject + am/is/are + verb-ing</p>
                  <p>Positive: I am working, She is working</p>
                  <p>Negative: I am not working, She isn't working</p>
                  <p>Question: Are you working? Is she working?</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Uses:</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-secondary pl-4">
                      <p><strong>Actions happening now:</strong> I am reading a book.</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <p><strong>Temporary situations:</strong> She is staying with friends.</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <p><strong>Future arrangements:</strong> We are meeting tomorrow.</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <p><strong>Changing situations:</strong> The weather is getting warmer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">3. Present Perfect</h3>
              <div className="space-y-4">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Structure: Subject + have/has + past participle</p>
                  <p>Positive: I have worked, She has worked</p>
                  <p>Negative: I haven't worked, She hasn't worked</p>
                  <p>Question: Have you worked? Has she worked?</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Uses:</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-accent pl-4">
                      <p><strong>Past actions with present relevance:</strong> I have lost my keys.</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <p><strong>Life experiences:</strong> She has visited Paris three times.</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <p><strong>Unfinished time periods:</strong> I have worked here for 5 years.</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <p><strong>Recent past:</strong> He has just arrived.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">4. Present Perfect Continuous</h3>
              <div className="space-y-4">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Structure: Subject + have/has + been + verb-ing</p>
                  <p>Positive: I have been working, She has been working</p>
                  <p>Negative: I haven't been working, She hasn't been working</p>
                  <p>Question: Have you been working? Has she been working?</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Uses:</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Actions continuing from past to present:</strong> I've been studying for 3 hours.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Recent activities with visible results:</strong> You've been running! (you look tired)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Past Tenses */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Past Tenses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">5. Past Simple</h3>
              <div className="space-y-4">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Structure: Subject + past form of verb</p>
                  <p>Positive: I worked, She went</p>
                  <p>Negative: I didn't work, She didn't go</p>
                  <p>Question: Did you work? Did she go?</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Uses:</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Completed past actions:</strong> I visited London last year.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Past habits:</strong> When I was young, I played football every day.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Sequence of past events:</strong> I woke up, had breakfast, and went to work.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">6. Past Continuous</h3>
              <div className="space-y-4">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Structure: Subject + was/were + verb-ing</p>
                  <p>Positive: I was working, They were working</p>
                  <p>Negative: I wasn't working, They weren't working</p>
                  <p>Question: Were you working? Were they working?</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Uses:</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-secondary pl-4">
                      <p><strong>Actions in progress at a past time:</strong> I was reading at 8 PM yesterday.</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <p><strong>Interrupted actions:</strong> I was cooking when the phone rang.</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <p><strong>Parallel past actions:</strong> While I was studying, she was watching TV.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">7. Past Perfect</h3>
              <div className="space-y-4">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Structure: Subject + had + past participle</p>
                  <p>Positive: I had worked, She had gone</p>
                  <p>Negative: I hadn't worked, She hadn't gone</p>
                  <p>Question: Had you worked? Had she gone?</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Uses:</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-accent pl-4">
                      <p><strong>Actions completed before another past action:</strong> I had finished dinner when she arrived.</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <p><strong>Past experiences up to a past point:</strong> By 2020, I had lived in 5 different cities.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">8. Past Perfect Continuous</h3>
              <div className="space-y-4">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Structure: Subject + had + been + verb-ing</p>
                  <p>Positive: I had been working, She had been studying</p>
                  <p>Negative: I hadn't been working, She hadn't been studying</p>
                  <p>Question: Had you been working? Had she been studying?</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Uses:</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Duration of actions before past events:</strong> I had been waiting for 2 hours when the bus arrived.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Cause of past situations:</strong> She was tired because she had been working all night.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Future Tenses */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Future Tenses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">9. Future Simple</h3>
              <div className="space-y-4">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Structure: Subject + will + base verb</p>
                  <p>Positive: I will work, She will go</p>
                  <p>Negative: I won't work, She won't go</p>
                  <p>Question: Will you work? Will she go?</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Uses:</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Predictions:</strong> It will rain tomorrow.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Spontaneous decisions:</strong> I'll help you with that.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Promises:</strong> I will call you later.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Offers:</strong> Will you have some tea?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">10. Future Continuous</h3>
              <div className="space-y-4">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Structure: Subject + will + be + verb-ing</p>
                  <p>Positive: I will be working, She will be studying</p>
                  <p>Negative: I won't be working, She won't be studying</p>
                  <p>Question: Will you be working? Will she be studying?</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Uses:</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-secondary pl-4">
                      <p><strong>Actions in progress at future time:</strong> I'll be sleeping at midnight.</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <p><strong>Polite inquiries:</strong> Will you be using the car tonight?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">11. Future Perfect</h3>
              <div className="space-y-4">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Structure: Subject + will + have + past participle</p>
                  <p>Positive: I will have finished, She will have arrived</p>
                  <p>Negative: I won't have finished, She won't have arrived</p>
                  <p>Question: Will you have finished? Will she have arrived?</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Uses:</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-accent pl-4">
                      <p><strong>Actions completed before future time:</strong> I will have finished by 5 PM.</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <p><strong>Future experiences:</strong> By next year, I will have graduated.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">12. Future Perfect Continuous</h3>
              <div className="space-y-4">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Structure: Subject + will + have + been + verb-ing</p>
                  <p>Positive: I will have been working, She will have been studying</p>
                  <p>Negative: I won't have been working, She won't have been studying</p>
                  <p>Question: Will you have been working? Will she have been studying?</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Uses:</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Duration up to future point:</strong> By June, I will have been working here for 10 years.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Cause of future situations:</strong> She'll be tired because she will have been traveling all day.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Time Expressions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Time Expressions with Tenses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Present Tenses</h3>
                <div className="bg-primary/10 p-4 rounded">
                  <p className="font-semibold mb-2">Simple:</p>
                  <p className="text-sm">every day, usually, always, never, sometimes</p>
                  <p className="font-semibold mb-2 mt-3">Continuous:</p>
                  <p className="text-sm">now, at the moment, currently, this week</p>
                  <p className="font-semibold mb-2 mt-3">Perfect:</p>
                  <p className="text-sm">just, already, yet, ever, never, since, for</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-secondary">Past Tenses</h3>
                <div className="bg-secondary/10 p-4 rounded">
                  <p className="font-semibold mb-2">Simple:</p>
                  <p className="text-sm">yesterday, last week, ago, in 2020</p>
                  <p className="font-semibold mb-2 mt-3">Continuous:</p>
                  <p className="text-sm">while, when, at 8 PM yesterday</p>
                  <p className="font-semibold mb-2 mt-3">Perfect:</p>
                  <p className="text-sm">before, after, by the time, already</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-accent">Future Tenses</h3>
                <div className="bg-accent/10 p-4 rounded">
                  <p className="font-semibold mb-2">Simple:</p>
                  <p className="text-sm">tomorrow, next week, soon, later</p>
                  <p className="font-semibold mb-2 mt-3">Continuous:</p>
                  <p className="text-sm">at this time tomorrow, all day</p>
                  <p className="font-semibold mb-2 mt-3">Perfect:</p>
                  <p className="text-sm">by tomorrow, by next year, before</p>
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
                <h3 className="text-lg font-semibold mb-3">Choose the correct tense:</h3>
                <div className="space-y-2 bg-secondary/10 p-4 rounded-lg">
                  <p>1. I _______ (work) here for five years. (Present Perfect/Past Simple)</p>
                  <p>2. She _______ (study) when I called her. (Past Continuous/Past Simple)</p>
                  <p>3. By next month, we _______ (finish) the project. (Future Simple/Future Perfect)</p>
                  <p>4. They _______ (play) football every Sunday. (Present Simple/Present Continuous)</p>
                  <p>5. I _______ (not/see) him since last week. (Present Perfect/Past Simple)</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Answers:</h3>
                <div className="space-y-2 bg-primary/10 p-4 rounded-lg">
                  <p>1. I <strong>have worked</strong> here for five years. (Present Perfect - duration continuing to present)</p>
                  <p>2. She <strong>was studying</strong> when I called her. (Past Continuous - action in progress when interrupted)</p>
                  <p>3. By next month, we <strong>will have finished</strong> the project. (Future Perfect - completion before future time)</p>
                  <p>4. They <strong>play</strong> football every Sunday. (Present Simple - routine/habit)</p>
                  <p>5. I <strong>haven't seen</strong> him since last week. (Present Perfect - past action with present relevance)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GrammarLayout>
  );
};

export default Tenses;