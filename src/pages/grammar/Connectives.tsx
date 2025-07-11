import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Connectives = () => {
  return (
    <GrammarLayout
      title="Connectives"
      description="Learn how to link words, phrases, and sentences effectively"
    >
      <div className="space-y-8">
        {/* Definition */}
        <Card>
          <CardHeader>
            <CardTitle>What are Connectives?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              Connectives are words or phrases that link words, phrases, clauses, or sentences together. 
              They help show relationships between ideas and make writing flow smoothly.
            </p>
          </CardContent>
        </Card>

        {/* Addition */}
        <Card>
          <CardHeader>
            <CardTitle>Addition Connectives</CardTitle>
            <CardDescription>Used to add information or ideas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p><strong>Common words:</strong> and, also, furthermore, moreover, in addition, besides, as well as</p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2">
                  <li>• I like tea <strong>and</strong> coffee.</li>
                  <li>• She is smart. <strong>Moreover</strong>, she is hardworking.</li>
                  <li>• <strong>In addition to</strong> English, he speaks French.</li>
                  <li>• The book is interesting <strong>as well as</strong> educational.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Usage Tips:</h4>
                <p>Use these when you want to add more information that supports or extends your main point.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contrast */}
        <Card>
          <CardHeader>
            <CardTitle>Contrast Connectives</CardTitle>
            <CardDescription>Used to show differences or opposing ideas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p><strong>Common words:</strong> but, however, although, though, despite, in spite of, on the other hand, whereas</p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2">
                  <li>• I wanted to go, <strong>but</strong> it was raining.</li>
                  <li>• The test was difficult. <strong>However</strong>, I passed.</li>
                  <li>• <strong>Although</strong> it was late, we continued working.</li>
                  <li>• <strong>Despite</strong> the rain, the match continued.</li>
                  <li>• I like coffee, <strong>whereas</strong> my sister prefers tea.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Usage Tips:</h4>
                <p>Use these to show unexpected results, differences, or to present opposing viewpoints.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cause and Effect */}
        <Card>
          <CardHeader>
            <CardTitle>Cause and Effect Connectives</CardTitle>
            <CardDescription>Used to show reasons and results</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p><strong>Common words:</strong> because, since, as, so, therefore, thus, consequently, as a result</p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2">
                  <li>• I was late <strong>because</strong> of traffic.</li>
                  <li>• <strong>Since</strong> it's raining, we'll stay inside.</li>
                  <li>• The road was blocked, <strong>so</strong> we took another route.</li>
                  <li>• He studied hard. <strong>Therefore</strong>, he passed the exam.</li>
                  <li>• The store was closed. <strong>As a result</strong>, we couldn't buy anything.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Usage Tips:</h4>
                <p>Use these to explain why something happened (cause) or what happened as a result (effect).</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Time */}
        <Card>
          <CardHeader>
            <CardTitle>Time Connectives</CardTitle>
            <CardDescription>Used to show when things happen</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p><strong>Common words:</strong> when, while, before, after, until, since, first, then, next, finally</p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2">
                  <li>• <strong>When</strong> I arrived, the meeting had started.</li>
                  <li>• <strong>While</strong> I was studying, my phone rang.</li>
                  <li>• <strong>Before</strong> leaving, check your homework.</li>
                  <li>• <strong>After</strong> dinner, we watched a movie.</li>
                  <li>• <strong>First</strong>, mix the ingredients. <strong>Then</strong>, bake for 30 minutes.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Usage Tips:</h4>
                <p>Use these to organize events in time order and show the sequence of actions.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Purpose */}
        <Card>
          <CardHeader>
            <CardTitle>Purpose Connectives</CardTitle>
            <CardDescription>Used to explain why something is done</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p><strong>Common words:</strong> to, in order to, so that, so as to, for the purpose of</p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2">
                  <li>• I study hard <strong>to</strong> pass the exam.</li>
                  <li>• She saved money <strong>in order to</strong> buy a car.</li>
                  <li>• Speak clearly <strong>so that</strong> everyone can understand.</li>
                  <li>• He left early <strong>so as to</strong> avoid traffic.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Usage Tips:</h4>
                <p>Use these to explain the intention or goal behind an action.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Condition */}
        <Card>
          <CardHeader>
            <CardTitle>Condition Connectives</CardTitle>
            <CardDescription>Used to express conditions or possibilities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p><strong>Common words:</strong> if, unless, provided that, as long as, in case</p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Examples:</h4>
                <ul className="space-y-2">
                  <li>• <strong>If</strong> it rains, we'll stay home.</li>
                  <li>• You can't enter <strong>unless</strong> you have a ticket.</li>
                  <li>• I'll help you <strong>provided that</strong> you ask nicely.</li>
                  <li>• You can stay <strong>as long as</strong> you're quiet.</li>
                  <li>• Take an umbrella <strong>in case</strong> it rains.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Usage Tips:</h4>
                <p>Use these to show what must happen for something else to occur.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GrammarLayout>
  );
};

export default Connectives;