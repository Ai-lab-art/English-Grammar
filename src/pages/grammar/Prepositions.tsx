import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Prepositions = () => {
  return (
    <GrammarLayout 
      title="Prepositions" 
      description="Master prepositions of time, place, and direction"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-4">What are Prepositions?</h2>
          <p className="text-lg mb-4">
            Prepositions are words that show the relationship between a noun (or pronoun) and other words in a sentence. 
            They typically indicate location, direction, time, or manner.
          </p>
        </section>

        {/* Prepositions of Time */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Prepositions of Time</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">AT</h3>
              <p className="mb-3">Use "at" with specific times and certain expressions:</p>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• <strong>At</strong> 3 o'clock</p>
                <p>• <strong>At</strong> midnight</p>
                <p>• <strong>At</strong> noon</p>
                <p>• <strong>At</strong> sunrise/sunset</p>
                <p>• <strong>At</strong> Christmas/Easter</p>
                <p>• <strong>At</strong> the weekend (British English)</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">IN</h3>
              <p className="mb-3">Use "in" with longer periods of time:</p>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• <strong>In</strong> January/February</p>
                <p>• <strong>In</strong> 2024</p>
                <p>• <strong>In</strong> the morning/afternoon/evening</p>
                <p>• <strong>In</strong> summer/winter</p>
                <p>• <strong>In</strong> the future</p>
                <p>• <strong>In</strong> a few minutes</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">ON</h3>
              <p className="mb-3">Use "on" with specific days and dates:</p>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• <strong>On</strong> Monday/Tuesday</p>
                <p>• <strong>On</strong> January 15th</p>
                <p>• <strong>On</strong> my birthday</p>
                <p>• <strong>On</strong> weekdays</p>
                <p>• <strong>On</strong> the weekend (American English)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prepositions of Place */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Prepositions of Place</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">AT</h3>
              <p className="mb-3">Use "at" for specific points or locations:</p>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• <strong>At</strong> the bus stop</p>
                <p>• <strong>At</strong> home</p>
                <p>• <strong>At</strong> school/university</p>
                <p>• <strong>At</strong> the top/bottom</p>
                <p>• <strong>At</strong> the door</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">IN</h3>
              <p className="mb-3">Use "in" for enclosed spaces or larger areas:</p>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• <strong>In</strong> the room</p>
                <p>• <strong>In</strong> the car</p>
                <p>• <strong>In</strong> London</p>
                <p>• <strong>In</strong> the garden</p>
                <p>• <strong>In</strong> bed</p>
                <p>• <strong>In</strong> the middle</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">ON</h3>
              <p className="mb-3">Use "on" for surfaces and certain locations:</p>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• <strong>On</strong> the table</p>
                <p>• <strong>On</strong> the wall</p>
                <p>• <strong>On</strong> the bus/train</p>
                <p>• <strong>On</strong> the first floor</p>
                <p>• <strong>On</strong> the right/left</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Other Important Place Prepositions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Between:</strong> Between two things</p>
                    <p className="text-sm text-muted-foreground">The book is between the pen and pencil.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Among:</strong> Among three or more</p>
                    <p className="text-sm text-muted-foreground">She was among her friends.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Under:</strong> Below something</p>
                    <p className="text-sm text-muted-foreground">The cat is under the table.</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Above:</strong> Higher than</p>
                    <p className="text-sm text-muted-foreground">The picture is above the sofa.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Behind:</strong> At the back of</p>
                    <p className="text-sm text-muted-foreground">The car is behind the house.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p><strong>Beside:</strong> Next to</p>
                    <p className="text-sm text-muted-foreground">Sit beside me.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prepositions of Movement */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Prepositions of Movement/Direction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>TO:</strong> Movement toward a destination</p>
                  <p className="text-sm text-muted-foreground">I'm going <strong>to</strong> school.</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>FROM:</strong> Starting point of movement</p>
                  <p className="text-sm text-muted-foreground">I came <strong>from</strong> home.</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>THROUGH:</strong> Movement from one side to another</p>
                  <p className="text-sm text-muted-foreground">Walk <strong>through</strong> the park.</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>ALONG:</strong> Movement following a line</p>
                  <p className="text-sm text-muted-foreground">Drive <strong>along</strong> the river.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>INTO:</strong> Movement to the inside</p>
                  <p className="text-sm text-muted-foreground">Jump <strong>into</strong> the water.</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>OUT OF:</strong> Movement from inside to outside</p>
                  <p className="text-sm text-muted-foreground">Get <strong>out of</strong> the car.</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>ACROSS:</strong> Movement from one side to another</p>
                  <p className="text-sm text-muted-foreground">Swim <strong>across</strong> the lake.</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>AROUND:</strong> Movement in a circle</p>
                  <p className="text-sm text-muted-foreground">Walk <strong>around</strong> the block.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Common Prepositional Phrases */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Common Prepositional Phrases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">With "BY"</h3>
                <div className="space-y-2 bg-secondary/10 p-4 rounded-lg">
                  <p>• By car/bus/train</p>
                  <p>• By myself (alone)</p>
                  <p>• By accident</p>
                  <p>• By heart (memorize)</p>
                  <p>• By the way</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">With "FOR"</h3>
                <div className="space-y-2 bg-secondary/10 p-4 rounded-lg">
                  <p>• For example</p>
                  <p>• For a long time</p>
                  <p>• For breakfast/lunch/dinner</p>
                  <p>• For sale</p>
                  <p>• For fun</p>
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
                <h3 className="text-lg font-semibold mb-3">Fill in the correct preposition:</h3>
                <div className="space-y-2 bg-secondary/10 p-4 rounded-lg">
                  <p>1. I'll meet you _____ 3 o'clock _____ the library.</p>
                  <p>2. The cat is sleeping _____ the sofa.</p>
                  <p>3. She traveled _____ London _____ Paris _____ train.</p>
                  <p>4. The meeting is _____ Monday morning.</p>
                  <p>5. Walk _____ the street and turn right.</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Answers:</h3>
                <div className="space-y-2 bg-primary/10 p-4 rounded-lg">
                  <p>1. I'll meet you <strong>at</strong> 3 o'clock <strong>at</strong> the library.</p>
                  <p>2. The cat is sleeping <strong>on</strong> the sofa.</p>
                  <p>3. She traveled <strong>from</strong> London <strong>to</strong> Paris <strong>by</strong> train.</p>
                  <p>4. The meeting is <strong>on</strong> Monday morning.</p>
                  <p>5. Walk <strong>along/down</strong> the street and turn right.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GrammarLayout>
  );
};

export default Prepositions;