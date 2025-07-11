import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CausativeVerbs = () => {
  return (
    <GrammarLayout
      title="Causative Verbs"
      description="Learn how to use have, get, make, and let to express causation"
    >
      <div className="space-y-8">
        {/* Definition */}
        <Card>
          <CardHeader>
            <CardTitle>What are Causative Verbs?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              Causative verbs are used when one person or thing causes another person or thing to do something. 
              The main causative verbs are: <strong>have</strong>, <strong>get</strong>, <strong>make</strong>, and <strong>let</strong>.
            </p>
          </CardContent>
        </Card>

        {/* Have */}
        <Card>
          <CardHeader>
            <CardTitle>1. HAVE (someone do something)</CardTitle>
            <CardDescription>To arrange for someone to do something for you</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p><strong>Structure:</strong> Subject + have + person + base verb + object</p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2">
                  <li>• I <strong>had</strong> the mechanic <strong>fix</strong> my car.</li>
                  <li>• She <strong>has</strong> her assistant <strong>answer</strong> the phone.</li>
                  <li>• We <strong>will have</strong> the painter <strong>paint</strong> the house.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Explanation:</h4>
                <p>In these examples, the subject arranges for someone else to perform an action. The mechanic fixes the car, the assistant answers the phone, etc.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Get */}
        <Card>
          <CardHeader>
            <CardTitle>2. GET (someone to do something)</CardTitle>
            <CardDescription>To persuade or convince someone to do something</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p><strong>Structure:</strong> Subject + get + person + to + base verb + object</p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2">
                  <li>• I <strong>got</strong> my brother <strong>to help</strong> me with homework.</li>
                  <li>• She <strong>gets</strong> her children <strong>to clean</strong> their rooms.</li>
                  <li>• We <strong>got</strong> him <strong>to change</strong> his mind.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Explanation:</h4>
                <p>"Get" implies persuasion or effort. You convince or encourage someone to do something.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Make */}
        <Card>
          <CardHeader>
            <CardTitle>3. MAKE (someone do something)</CardTitle>
            <CardDescription>To force or require someone to do something</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p><strong>Structure:</strong> Subject + make + person + base verb + object</p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2">
                  <li>• The teacher <strong>made</strong> the students <strong>study</strong> harder.</li>
                  <li>• My parents <strong>make</strong> me <strong>do</strong> chores.</li>
                  <li>• The rain <strong>made</strong> us <strong>cancel</strong> the picnic.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Explanation:</h4>
                <p>"Make" implies force or no choice. The person has to do the action whether they want to or not.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Let */}
        <Card>
          <CardHeader>
            <CardTitle>4. LET (someone do something)</CardTitle>
            <CardDescription>To allow or permit someone to do something</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p><strong>Structure:</strong> Subject + let + person + base verb + object</p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2">
                  <li>• My parents <strong>let</strong> me <strong>go</strong> to the party.</li>
                  <li>• The teacher <strong>lets</strong> us <strong>use</strong> dictionaries.</li>
                  <li>• Please <strong>let</strong> me <strong>help</strong> you.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Explanation:</h4>
                <p>"Let" means to give permission or allow. The person can choose to do the action or not.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Passive Forms */}
        <Card>
          <CardHeader>
            <CardTitle>Passive Forms of Causative Verbs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Have/Get + Object + Past Participle:</h4>
                <ul className="space-y-2">
                  <li>• I <strong>had</strong> my hair <strong>cut</strong>. (Someone cut my hair)</li>
                  <li>• She <strong>got</strong> her car <strong>repaired</strong>. (Someone repaired her car)</li>
                  <li>• We <strong>had</strong> the house <strong>painted</strong>. (Someone painted the house)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Explanation:</h4>
                <p>In passive causative forms, we focus on what happens to the object rather than who does the action.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GrammarLayout>
  );
};

export default CausativeVerbs;