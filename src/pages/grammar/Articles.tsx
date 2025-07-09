import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Articles = () => {
  return (
    <GrammarLayout 
      title="Articles" 
      description="Learn about definite and indefinite articles (a, an, the)"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-4">What are Articles?</h2>
          <p className="text-lg mb-4">
            Articles are special words that come before nouns. In English, there are only three articles: 
            <Badge variant="secondary" className="mx-2">a</Badge>, 
            <Badge variant="secondary" className="mx-2">an</Badge>, and 
            <Badge variant="secondary" className="mx-2">the</Badge>.
          </p>
        </section>

        {/* Indefinite Articles */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Indefinite Articles: A and An</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">When to use "A"</h3>
              <p className="mb-3">Use "a" before words that start with consonant sounds:</p>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• A <strong>cat</strong> is sleeping.</p>
                <p>• A <strong>book</strong> is on the table.</p>
                <p>• A <strong>university</strong> (sounds like "you-niversity")</p>
                <p>• A <strong>European</strong> country (sounds like "yoo-ropean")</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">When to use "An"</h3>
              <p className="mb-3">Use "an" before words that start with vowel sounds:</p>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p>• An <strong>apple</strong> is red.</p>
                <p>• An <strong>elephant</strong> is large.</p>
                <p>• An <strong>hour</strong> (silent 'h', sounds like "our")</p>
                <p>• An <strong>honest</strong> person (silent 'h')</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Key Rules for A/An</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Rule 1:</strong> Use with singular countable nouns when mentioning something for the first time</p>
                  <p className="text-sm text-muted-foreground">Example: I saw <em>a dog</em> in the park.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Rule 2:</strong> Use when talking about any one of a group</p>
                  <p className="text-sm text-muted-foreground">Example: <em>A teacher</em> should be patient.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <p><strong>Rule 3:</strong> Use with professions</p>
                  <p className="text-sm text-muted-foreground">Example: She is <em>a doctor</em>.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Definite Article */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Definite Article: The</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">When to use "The"</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>1. Specific items (both speaker and listener know which one)</strong></p>
                  <div className="bg-secondary/20 p-3 rounded mt-2">
                    <p>• <strong>The</strong> cat you saw yesterday is back.</p>
                    <p>• <strong>The</strong> book on my desk is interesting.</p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>2. Unique things</strong></p>
                  <div className="bg-secondary/20 p-3 rounded mt-2">
                    <p>• <strong>The</strong> sun is bright.</p>
                    <p>• <strong>The</strong> president of our country.</p>
                    <p>• <strong>The</strong> first person to arrive.</p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>3. Superlatives</strong></p>
                  <div className="bg-secondary/20 p-3 rounded mt-2">
                    <p>• <strong>The</strong> best student in class.</p>
                    <p>• <strong>The</strong> tallest building in the city.</p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>4. Groups of people</strong></p>
                  <div className="bg-secondary/20 p-3 rounded mt-2">
                    <p>• <strong>The</strong> rich should help <strong>the</strong> poor.</p>
                    <p>• <strong>The</strong> elderly need care.</p>
                  </div>
                </div>

                <div className="border-l-4 border-secondary pl-4">
                  <p><strong>5. Geographical features</strong></p>
                  <div className="bg-secondary/20 p-3 rounded mt-2">
                    <p>• <strong>The</strong> Himalayas, <strong>the</strong> Pacific Ocean</p>
                    <p>• <strong>The</strong> United States, <strong>the</strong> Netherlands</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Zero Article */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Zero Article (No Article)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-3">When NOT to use articles</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-accent pl-4">
                  <p><strong>1. Plural countable nouns (general)</strong></p>
                  <p className="text-sm text-muted-foreground">Dogs are friendly animals.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p><strong>2. Uncountable nouns (general)</strong></p>
                  <p className="text-sm text-muted-foreground">Water is essential for life.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p><strong>3. Proper nouns</strong></p>
                  <p className="text-sm text-muted-foreground">John lives in Paris.</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p><strong>4. Abstract nouns (general)</strong></p>
                  <p className="text-sm text-muted-foreground">Love is beautiful.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practice Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Practice Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">Complete these sentences:</h3>
                <div className="space-y-2 bg-secondary/10 p-4 rounded-lg">
                  <p>1. I need _____ pen to write.</p>
                  <p>2. _____ book you lent me was excellent.</p>
                  <p>3. She is _____ engineer.</p>
                  <p>4. _____ Mount Everest is _____ highest mountain.</p>
                  <p>5. I drink _____ coffee every morning.</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Answers:</h3>
                <div className="space-y-2 bg-primary/10 p-4 rounded-lg">
                  <p>1. I need <strong>a</strong> pen to write.</p>
                  <p>2. <strong>The</strong> book you lent me was excellent.</p>
                  <p>3. She is <strong>an</strong> engineer.</p>
                  <p>4. <strong>(no article)</strong> Mount Everest is <strong>the</strong> highest mountain.</p>
                  <p>5. I drink <strong>(no article)</strong> coffee every morning.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GrammarLayout>
  );
};

export default Articles;