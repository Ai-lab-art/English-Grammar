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
        <section>
          <h2 className="text-3xl font-bold mb-4">What are Tag Questions?</h2>
          <p className="text-lg mb-4">
            Tag questions are short questions added to the end of statements. They are used to confirm information, 
            ask for agreement, or encourage a response from the listener.
          </p>
          <div className="bg-primary/10 p-4 rounded-lg">
            <p className="text-lg"><strong>Structure:</strong> Statement + Tag Question</p>
            <p className="text-lg"><strong>Example:</strong> You are coming, <Badge variant="secondary">aren't you?</Badge></p>
          </div>
        </section>

        {/* Basic Rules */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Basic Rules for Tag Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Rule 1: Positive Statement → Negative Tag</h3>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• You <strong>are</strong> a student, <strong>aren't you?</strong></p>
                <p>• She <strong>can</strong> swim, <strong>can't she?</strong></p>
                <p>• They <strong>will</strong> come, <strong>won't they?</strong></p>
                <p>• He <strong>has</strong> finished, <strong>hasn't he?</strong></p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Rule 2: Negative Statement → Positive Tag</h3>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• You <strong>aren't</strong> busy, <strong>are you?</strong></p>
                <p>• She <strong>can't</strong> drive, <strong>can she?</strong></p>
                <p>• They <strong>won't</strong> leave, <strong>will they?</strong></p>
                <p>• He <strong>hasn't</strong> called, <strong>has he?</strong></p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Rule 3: Same Auxiliary Verb</h3>
              <p className="mb-3">The auxiliary verb in the tag must match the auxiliary verb in the statement:</p>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• <strong>Is</strong> → isn't/is</p>
                <p>• <strong>Can</strong> → can't/can</p>
                <p>• <strong>Will</strong> → won't/will</p>
                <p>• <strong>Have</strong> → haven't/have</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* With Different Tenses */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Tag Questions with Different Tenses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Present Simple</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>With 'be' verb:</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• You are happy, <strong>aren't you?</strong></p>
                    <p>• She isn't ready, <strong>is she?</strong></p>
                  </div>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>With other verbs (use do/does):</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• You like coffee, <strong>don't you?</strong></p>
                    <p>• She works here, <strong>doesn't she?</strong></p>
                    <p>• They don't live here, <strong>do they?</strong></p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Past Simple</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>With 'was/were':</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• You were there, <strong>weren't you?</strong></p>
                    <p>• It wasn't expensive, <strong>was it?</strong></p>
                  </div>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>With other verbs (use did):</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• You went there, <strong>didn't you?</strong></p>
                    <p>• She didn't call, <strong>did she?</strong></p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Present Perfect</h3>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• You have finished, <strong>haven't you?</strong></p>
                <p>• She has arrived, <strong>hasn't she?</strong></p>
                <p>• They haven't left, <strong>have they?</strong></p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Future Simple</h3>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• You will help me, <strong>won't you?</strong></p>
                <p>• She won't be late, <strong>will she?</strong></p>
                <p>• They will come, <strong>won't they?</strong></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Special Cases */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Special Cases and Exceptions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Imperatives (Commands)</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>Positive commands → will you? / won't you? / can you?</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• Close the door, <strong>will you?</strong></p>
                    <p>• Help me, <strong>won't you?</strong></p>
                    <p>• Pass the salt, <strong>can you?</strong></p>
                  </div>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>Negative commands → will you?</strong></p>
                  <div className="bg-secondary/10 p-3 rounded mt-2">
                    <p>• Don't be late, <strong>will you?</strong></p>
                    <p>• Don't forget, <strong>will you?</strong></p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Let's Statements</h3>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• Let's go, <strong>shall we?</strong></p>
                <p>• Let's not wait, <strong>shall we?</strong></p>
                <p>• Let's have dinner, <strong>shall we?</strong></p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">With Modal Verbs</h3>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• You can swim, <strong>can't you?</strong></p>
                <p>• She could help, <strong>couldn't she?</strong></p>
                <p>• They should leave, <strong>shouldn't they?</strong></p>
                <p>• He must go, <strong>mustn't he?</strong></p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">With "I am"</h3>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• I am right, <strong>aren't I?</strong> (NOT "amn't I")</p>
                <p>• I am late, <strong>aren't I?</strong></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Intonation and Meaning */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Intonation and Meaning</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-3">Rising Intonation ↗</h3>
              <p className="mb-3">Used when you're not sure and really want to know:</p>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• You're coming to the party, <strong>aren't you?</strong> ↗ (genuine question)</p>
                <p>• She speaks French, <strong>doesn't she?</strong> ↗ (asking for confirmation)</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Falling Intonation ↘</h3>
              <p className="mb-3">Used when you expect agreement or are quite sure:</p>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• It's a beautiful day, <strong>isn't it?</strong> ↘ (expecting agreement)</p>
                <p>• That was difficult, <strong>wasn't it?</strong> ↘ (confident about the statement)</p>
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
                <h3 className="text-lg font-semibold mb-3">Add the correct tag question:</h3>
                <div className="space-y-2 bg-secondary/10 p-4 rounded-lg">
                  <p>1. You are a teacher, _______?</p>
                  <p>2. She can't speak Chinese, _______?</p>
                  <p>3. They went to the cinema, _______?</p>
                  <p>4. He hasn't finished his homework, _______?</p>
                  <p>5. Let's have lunch, _______?</p>
                  <p>6. Close the window, _______?</p>
                  <p>7. I am correct, _______?</p>
                  <p>8. You won't be late, _______?</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Answers:</h3>
                <div className="space-y-2 bg-primary/10 p-4 rounded-lg">
                  <p>1. You are a teacher, <strong>aren't you?</strong></p>
                  <p>2. She can't speak Chinese, <strong>can she?</strong></p>
                  <p>3. They went to the cinema, <strong>didn't they?</strong></p>
                  <p>4. He hasn't finished his homework, <strong>has he?</strong></p>
                  <p>5. Let's have lunch, <strong>shall we?</strong></p>
                  <p>6. Close the window, <strong>will you?</strong></p>
                  <p>7. I am correct, <strong>aren't I?</strong></p>
                  <p>8. You won't be late, <strong>will you?</strong></p>
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