import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WordClasses = () => {
  return (
    <GrammarLayout 
      title="Word Classes" 
      description="Parts of speech and their functions"
    >
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Parts of Speech (Word Classes)</h2>
          <p className="text-lg mb-4">
            English words are classified into different categories called parts of speech or word classes. 
            Each class has specific functions and characteristics in sentences.
          </p>
          <div className="bg-primary/10 p-4 rounded-lg">
            <p className="text-lg"><strong>There are 8 main parts of speech:</strong></p>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary">Noun</Badge>
              <Badge variant="secondary">Pronoun</Badge>
              <Badge variant="secondary">Verb</Badge>
              <Badge variant="secondary">Adjective</Badge>
              <Badge variant="secondary">Adverb</Badge>
              <Badge variant="secondary">Preposition</Badge>
              <Badge variant="secondary">Conjunction</Badge>
              <Badge variant="secondary">Interjection</Badge>
            </div>
          </div>
        </section>

        {/* Nouns */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">1. Nouns</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Definition</h3>
              <p className="mb-4">Nouns are words that name people, places, things, animals, ideas, or concepts.</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Types of Nouns</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-primary">Common Nouns</h5>
                      <div className="bg-primary/10 p-3 rounded">
                        <p>General names for people, places, things</p>
                        <p className="text-sm mt-2">Examples: <em>dog, city, book, teacher</em></p>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-secondary">Proper Nouns</h5>
                      <div className="bg-secondary/10 p-3 rounded">
                        <p>Specific names (always capitalized)</p>
                        <p className="text-sm mt-2">Examples: <em>London, Shakespeare, Monday</em></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Countable vs Uncountable</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-primary">Countable Nouns</h5>
                      <div className="bg-primary/10 p-3 rounded">
                        <p>Can be counted (have plural forms)</p>
                        <p className="text-sm mt-2">Examples: <em>one book, two books, three cats</em></p>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-secondary">Uncountable Nouns</h5>
                      <div className="bg-secondary/10 p-3 rounded">
                        <p>Cannot be counted (no plural forms)</p>
                        <p className="text-sm mt-2">Examples: <em>water, music, advice, information</em></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Abstract vs Concrete</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-accent">Concrete Nouns</h5>
                      <div className="bg-accent/10 p-3 rounded">
                        <p>Things you can see, touch, hear, smell, taste</p>
                        <p className="text-sm mt-2">Examples: <em>table, music, flower, coffee</em></p>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-primary">Abstract Nouns</h5>
                      <div className="bg-primary/10 p-3 rounded">
                        <p>Ideas, emotions, qualities, concepts</p>
                        <p className="text-sm mt-2">Examples: <em>love, happiness, freedom, wisdom</em></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pronouns */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">2. Pronouns</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Definition</h3>
              <p className="mb-4">Pronouns are words that replace nouns to avoid repetition.</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Types of Pronouns</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Personal Pronouns:</strong> I, you, he, she, it, we, they</p>
                      <p className="text-sm text-muted-foreground">Replace specific people or things</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <p><strong>Possessive Pronouns:</strong> mine, yours, his, hers, ours, theirs</p>
                      <p className="text-sm text-muted-foreground">Show ownership</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <p><strong>Demonstrative Pronouns:</strong> this, that, these, those</p>
                      <p className="text-sm text-muted-foreground">Point to specific things</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Interrogative Pronouns:</strong> who, what, which, whose, whom</p>
                      <p className="text-sm text-muted-foreground">Used in questions</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <p><strong>Relative Pronouns:</strong> who, which, that, whose, whom</p>
                      <p className="text-sm text-muted-foreground">Connect clauses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verbs */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">3. Verbs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Definition</h3>
              <p className="mb-4">Verbs are action words or state words that tell us what someone or something does, is, or has.</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Types of Verbs</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-primary">Action Verbs</h5>
                      <div className="bg-primary/10 p-3 rounded">
                        <p>Express physical or mental actions</p>
                        <p className="text-sm mt-2">Examples: <em>run, jump, think, believe, write</em></p>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-secondary">State Verbs</h5>
                      <div className="bg-secondary/10 p-3 rounded">
                        <p>Express states, emotions, senses</p>
                        <p className="text-sm mt-2">Examples: <em>be, seem, love, know, see, hear</em></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Auxiliary Verbs</h4>
                  <div className="bg-accent/10 p-4 rounded">
                    <p>Help main verbs form tenses, questions, negatives</p>
                    <p className="text-sm mt-2">Examples: <em>be, have, do, will, can, must, should</em></p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Transitive vs Intransitive</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-primary">Transitive Verbs</h5>
                      <div className="bg-primary/10 p-3 rounded">
                        <p>Need an object to complete meaning</p>
                        <p className="text-sm mt-2">Example: <em>She reads a book.</em> (book = object)</p>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-secondary">Intransitive Verbs</h5>
                      <div className="bg-secondary/10 p-3 rounded">
                        <p>Complete meaning without an object</p>
                        <p className="text-sm mt-2">Example: <em>He sleeps.</em> (no object needed)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Adjectives */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">4. Adjectives</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Definition</h3>
              <p className="mb-4">Adjectives describe or modify nouns and pronouns, giving more information about their qualities, characteristics, or properties.</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Types of Adjectives</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Descriptive:</strong> big, small, beautiful, intelligent, red</p>
                      <p className="text-sm text-muted-foreground">Describe qualities or characteristics</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <p><strong>Demonstrative:</strong> this, that, these, those</p>
                      <p className="text-sm text-muted-foreground">Point to specific nouns</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <p><strong>Possessive:</strong> my, your, his, her, its, our, their</p>
                      <p className="text-sm text-muted-foreground">Show ownership</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Quantitative:</strong> some, many, few, several, all</p>
                      <p className="text-sm text-muted-foreground">Show quantity or amount</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Position of Adjectives</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-primary">Before Noun (Attributive)</h5>
                      <div className="bg-primary/10 p-3 rounded">
                        <p>Most common position</p>
                        <p className="text-sm mt-2">Example: <em>a <strong>beautiful</strong> flower</em></p>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-secondary">After Verb (Predicative)</h5>
                      <div className="bg-secondary/10 p-3 rounded">
                        <p>After linking verbs (be, seem, become)</p>
                        <p className="text-sm mt-2">Example: <em>The flower is <strong>beautiful</strong>.</em></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Comparison of Adjectives</h4>
                  <div className="bg-secondary/20 p-4 rounded">
                    <p><strong>Positive:</strong> tall, beautiful, good</p>
                    <p><strong>Comparative:</strong> taller, more beautiful, better</p>
                    <p><strong>Superlative:</strong> tallest, most beautiful, best</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Adverbs */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">5. Adverbs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Definition</h3>
              <p className="mb-4">Adverbs modify verbs, adjectives, other adverbs, or entire sentences. They answer questions like how, when, where, why, how much, or how often.</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Types of Adverbs</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Manner (How?):</strong> quickly, slowly, carefully, beautifully</p>
                      <p className="text-sm text-muted-foreground">She sings <em>beautifully</em>.</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <p><strong>Time (When?):</strong> now, yesterday, soon, already, never</p>
                      <p className="text-sm text-muted-foreground">I will call you <em>tomorrow</em>.</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <p><strong>Place (Where?):</strong> here, there, everywhere, outside, upstairs</p>
                      <p className="text-sm text-muted-foreground">The children are playing <em>outside</em>.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p><strong>Frequency (How often?):</strong> always, sometimes, rarely, often</p>
                      <p className="text-sm text-muted-foreground">She <em>always</em> arrives early.</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-4">
                      <p><strong>Degree (How much?):</strong> very, quite, extremely, rather, too</p>
                      <p className="text-sm text-muted-foreground">The movie was <em>very</em> interesting.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Formation of Adverbs</h4>
                  <div className="bg-secondary/20 p-4 rounded">
                    <p><strong>Most adverbs:</strong> adjective + -ly</p>
                    <p>quick → quickly, careful → carefully, slow → slowly</p>
                    <br />
                    <p><strong>Irregular forms:</strong> good → well, fast → fast, hard → hard</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Remaining Parts of Speech */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">6-8. Prepositions, Conjunctions, and Interjections</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">6. Prepositions</h3>
              <div className="bg-primary/10 p-4 rounded mb-4">
                <p><strong>Definition:</strong> Words that show relationships between nouns/pronouns and other words.</p>
                <p><strong>Examples:</strong> in, on, at, under, between, through, with, for, by</p>
                <p><strong>Usage:</strong> The book is <em>on</em> the table. She went <em>to</em> school <em>by</em> bus.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">7. Conjunctions</h3>
              <div className="bg-secondary/10 p-4 rounded mb-4">
                <p><strong>Definition:</strong> Words that connect words, phrases, or clauses.</p>
                <div className="mt-3 space-y-2">
                  <p><strong>Coordinating:</strong> and, but, or, so, yet, for, nor</p>
                  <p><strong>Subordinating:</strong> because, although, when, if, since, while</p>
                  <p><strong>Usage:</strong> I like tea <em>and</em> coffee. She was tired <em>because</em> she worked late.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">8. Interjections</h3>
              <div className="bg-accent/10 p-4 rounded">
                <p><strong>Definition:</strong> Words or phrases that express strong emotions or reactions.</p>
                <p><strong>Examples:</strong> Oh! Wow! Alas! Hurray! Ouch! Hello! Goodbye!</p>
                <p><strong>Usage:</strong> <em>Wow!</em> That's amazing! <em>Ouch!</em> That hurts!</p>
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
                <h3 className="text-lg font-semibold mb-3">Identify the parts of speech for the underlined words:</h3>
                <div className="space-y-2 bg-secondary/10 p-4 rounded-lg">
                  <p>1. The <u>beautiful</u> girl <u>quickly</u> <u>ran</u> to <u>her</u> house.</p>
                  <p>2. <u>Oh!</u> I <u>completely</u> forgot <u>about</u> the meeting.</p>
                  <p>3. <u>This</u> book is very <u>interesting</u> <u>and</u> educational.</p>
                  <p>4. <u>She</u> <u>always</u> speaks <u>politely</u> to everyone.</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Answers:</h3>
                <div className="space-y-2 bg-primary/10 p-4 rounded-lg">
                  <p>1. beautiful (adjective), quickly (adverb), ran (verb), her (pronoun)</p>
                  <p>2. Oh (interjection), completely (adverb), about (preposition)</p>
                  <p>3. This (demonstrative adjective), interesting (adjective), and (conjunction)</p>
                  <p>4. She (pronoun), always (adverb), politely (adverb)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GrammarLayout>
  );
};

export default WordClasses;