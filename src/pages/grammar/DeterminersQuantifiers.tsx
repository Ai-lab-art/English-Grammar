import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DeterminersQuantifiers = () => {
  return (
    <GrammarLayout
      title="Determiners & Quantifiers"
      description="Learn to use some, any, many, much, few, little and other determiners"
    >
      <div className="space-y-8">
        {/* Definition */}
        <Card>
          <CardHeader>
            <CardTitle>What are Determiners and Quantifiers?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-lg mb-4">
                <strong>Determiners</strong> are words that come before nouns to specify which things we're talking about. 
                <strong>Quantifiers</strong> are determiners that tell us how much or how many of something there is.
              </p>
              <p className="text-base">
                Examples: some, any, many, much, few, little, several, both, all, most, each, every
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Some vs Any */}
        <Card>
          <CardHeader>
            <CardTitle>SOME vs ANY</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">SOME (positive statements, offers, requests):</h4>
                <ul className="space-y-2">
                  <li>• I have <strong>some</strong> money.</li>
                  <li>• There are <strong>some</strong> books on the table.</li>
                  <li>• Would you like <strong>some</strong> tea? (offer)</li>
                  <li>• Can I have <strong>some</strong> water? (request)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">ANY (negative statements, questions, conditionals):</h4>
                <ul className="space-y-2">
                  <li>• I don't have <strong>any</strong> money.</li>
                  <li>• Are there <strong>any</strong> books on the table?</li>
                  <li>• If you have <strong>any</strong> questions, ask me.</li>
                  <li>• There isn't <strong>any</strong> milk left.</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Special Uses:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Any</strong> person can do this. (meaning "every")</li>
                  <li>• You can choose <strong>any</strong> color you like. (meaning "whichever")</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Many vs Much */}
        <Card>
          <CardHeader>
            <CardTitle>MANY vs MUCH</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">MANY (countable nouns):</h4>
                <ul className="space-y-2">
                  <li>• How <strong>many</strong> students are there?</li>
                  <li>• There are <strong>many</strong> books in the library.</li>
                  <li>• I don't have <strong>many</strong> friends.</li>
                  <li>• <strong>Many</strong> people believe in peace.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">MUCH (uncountable nouns):</h4>
                <ul className="space-y-2">
                  <li>• How <strong>much</strong> money do you have?</li>
                  <li>• There isn't <strong>much</strong> time left.</li>
                  <li>• I don't drink <strong>much</strong> coffee.</li>
                  <li>• Thank you very <strong>much</strong>.</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Note:</h4>
                <p>In positive statements, we usually use "a lot of" instead of "many" or "much":</p>
                <ul className="space-y-2">
                  <li>• I have <strong>a lot of</strong> books. (not "many books")</li>
                  <li>• She has <strong>a lot of</strong> money. (not "much money")</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Few vs Little */}
        <Card>
          <CardHeader>
            <CardTitle>FEW vs LITTLE</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">FEW (countable nouns - small number):</h4>
                <ul className="space-y-2">
                  <li>• There are <strong>few</strong> people here. (not many)</li>
                  <li>• I have <strong>few</strong> friends in this city.</li>
                  <li>• <strong>Few</strong> students passed the exam. (not many passed)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">LITTLE (uncountable nouns - small amount):</h4>
                <ul className="space-y-2">
                  <li>• There is <strong>little</strong> time left. (not much)</li>
                  <li>• I have <strong>little</strong> money. (not much money)</li>
                  <li>• There's <strong>little</strong> hope of success.</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">A FEW vs A LITTLE (positive meaning):</h4>
                <ul className="space-y-2">
                  <li>• I have <strong>a few</strong> friends. (some friends - positive)</li>
                  <li>• There's <strong>a little</strong> milk left. (some milk - positive)</li>
                  <li>• Wait <strong>a few</strong> minutes. (some minutes)</li>
                  <li>• Add <strong>a little</strong> salt. (some salt)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* All, Most, Some, No */}
        <Card>
          <CardHeader>
            <CardTitle>ALL, MOST, SOME, NO</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">ALL (100%):</h4>
                <ul className="space-y-2">
                  <li>• <strong>All</strong> students must attend the meeting.</li>
                  <li>• <strong>All</strong> the books are on the shelf.</li>
                  <li>• I like <strong>all</strong> kinds of music.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">MOST (more than 50%):</h4>
                <ul className="space-y-2">
                  <li>• <strong>Most</strong> people like chocolate.</li>
                  <li>• <strong>Most</strong> of the students passed.</li>
                  <li>• I spend <strong>most</strong> of my time studying.</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">SOME (unknown quantity):</h4>
                <ul className="space-y-2">
                  <li>• <strong>Some</strong> people disagree.</li>
                  <li>• <strong>Some</strong> of the answers were wrong.</li>
                  <li>• I need <strong>some</strong> help with this.</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">NO/NONE (0%):</h4>
                <ul className="space-y-2">
                  <li>• <strong>No</strong> students failed the test.</li>
                  <li>• There's <strong>no</strong> milk in the fridge.</li>
                  <li>• <strong>None</strong> of the answers were correct.</li>
                  <li>• I have <strong>no</strong> money left.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Each, Every, Both, Either, Neither */}
        <Card>
          <CardHeader>
            <CardTitle>EACH, EVERY, BOTH, EITHER, NEITHER</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">EACH (every individual one):</h4>
                <ul className="space-y-2">
                  <li>• <strong>Each</strong> student has a book.</li>
                  <li>• <strong>Each</strong> of them received a prize.</li>
                  <li>• The tickets cost $10 <strong>each</strong>.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">EVERY (all members of a group):</h4>
                <ul className="space-y-2">
                  <li>• <strong>Every</strong> student must bring a pen.</li>
                  <li>• I go to the gym <strong>every</strong> day.</li>
                  <li>• <strong>Every</strong> house on this street is beautiful.</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">BOTH (two things together):</h4>
                <ul className="space-y-2">
                  <li>• <strong>Both</strong> students passed the exam.</li>
                  <li>• I like <strong>both</strong> tea and coffee.</li>
                  <li>• <strong>Both</strong> of my parents are teachers.</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">EITHER (one of two) / NEITHER (not one of two):</h4>
                <ul className="space-y-2">
                  <li>• You can choose <strong>either</strong> option.</li>
                  <li>• <strong>Either</strong> John or Mary will come.</li>
                  <li>• <strong>Neither</strong> answer is correct.</li>
                  <li>• <strong>Neither</strong> of them knows the truth.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Mistakes */}
        <Card>
          <CardHeader>
            <CardTitle>Common Mistakes to Avoid</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">❌ Wrong:</h4>
                <ul className="space-y-2">
                  <li>• I have much books.</li>
                  <li>• How many money do you have?</li>
                  <li>• I don't have some friends.</li>
                  <li>• Little students came to class.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">✅ Correct:</h4>
                <ul className="space-y-2">
                  <li>• I have many books. / I have a lot of books.</li>
                  <li>• How much money do you have?</li>
                  <li>• I don't have any friends.</li>
                  <li>• Few students came to class.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GrammarLayout>
  );
};

export default DeterminersQuantifiers;