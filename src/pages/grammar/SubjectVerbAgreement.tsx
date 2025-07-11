import GrammarLayout from "@/components/GrammarLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SubjectVerbAgreement = () => {
  return (
    <GrammarLayout
      title="Subject-Verb Agreement"
      description="Learn the rules for matching subjects and verbs correctly"
    >
      <div className="space-y-8">
        {/* Definition */}
        <Card>
          <CardHeader>
            <CardTitle>What is Subject-Verb Agreement?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              Subject-verb agreement means that the subject and verb in a sentence must agree in number. 
              A singular subject takes a singular verb, and a plural subject takes a plural verb.
            </p>
          </CardContent>
        </Card>

        {/* Basic Rules */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Rules</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Singular Subject + Singular Verb:</h4>
                <ul className="space-y-2">
                  <li>• The cat <strong>runs</strong> fast.</li>
                  <li>• She <strong>writes</strong> beautifully.</li>
                  <li>• John <strong>is</strong> a teacher.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Plural Subject + Plural Verb:</h4>
                <ul className="space-y-2">
                  <li>• The cats <strong>run</strong> fast.</li>
                  <li>• They <strong>write</strong> beautifully.</li>
                  <li>• John and Mary <strong>are</strong> teachers.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compound Subjects */}
        <Card>
          <CardHeader>
            <CardTitle>Compound Subjects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Subjects joined by "and" (use plural verb):</h4>
                <ul className="space-y-2">
                  <li>• Tom and Jerry <strong>are</strong> friends.</li>
                  <li>• Coffee and tea <strong>are</strong> popular drinks.</li>
                  <li>• Reading and writing <strong>help</strong> improve vocabulary.</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Subjects joined by "or/nor" (verb agrees with nearest subject):</h4>
                <ul className="space-y-2">
                  <li>• Either the teacher or the students <strong>are</strong> wrong.</li>
                  <li>• Neither the students nor the teacher <strong>is</strong> right.</li>
                  <li>• Tom or his friends <strong>are</strong> coming.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Indefinite Pronouns */}
        <Card>
          <CardHeader>
            <CardTitle>Indefinite Pronouns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Always Singular:</h4>
                <p className="mb-2">everyone, everyone, somebody, nobody, anybody, each, either, neither</p>
                <ul className="space-y-2">
                  <li>• Everyone <strong>is</strong> here.</li>
                  <li>• Nobody <strong>knows</strong> the answer.</li>
                  <li>• Each student <strong>has</strong> a book.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Always Plural:</h4>
                <p className="mb-2">both, few, many, several</p>
                <ul className="space-y-2">
                  <li>• Both <strong>are</strong> correct.</li>
                  <li>• Few <strong>know</strong> the truth.</li>
                  <li>• Many <strong>believe</strong> in peace.</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Depends on Context:</h4>
                <p className="mb-2">some, most, all, none</p>
                <ul className="space-y-2">
                  <li>• Some of the cake <strong>is</strong> left. (cake = singular)</li>
                  <li>• Some of the students <strong>are</strong> absent. (students = plural)</li>
                  <li>• All of the water <strong>is</strong> clean.</li>
                  <li>• All of the books <strong>are</strong> new.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Collective Nouns */}
        <Card>
          <CardHeader>
            <CardTitle>Collective Nouns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>Collective nouns can be singular or plural depending on whether the group acts as one unit or as individuals.</p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">As One Unit (Singular):</h4>
                <ul className="space-y-2">
                  <li>• The team <strong>is</strong> winning.</li>
                  <li>• The family <strong>lives</strong> in a big house.</li>
                  <li>• The class <strong>starts</strong> at 9 AM.</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">As Individuals (Plural):</h4>
                <ul className="space-y-2">
                  <li>• The team <strong>are</strong> arguing among themselves.</li>
                  <li>• The family <strong>are</strong> going to different colleges.</li>
                  <li>• The class <strong>have</strong> different opinions.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Special Cases */}
        <Card>
          <CardHeader>
            <CardTitle>Special Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Distances, Money, Time (Usually Singular):</h4>
                <ul className="space-y-2">
                  <li>• Five kilometers <strong>is</strong> a long distance.</li>
                  <li>• Twenty dollars <strong>is</strong> enough.</li>
                  <li>• Three hours <strong>is</strong> too long.</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Nouns that look plural but are singular:</h4>
                <ul className="space-y-2">
                  <li>• Mathematics <strong>is</strong> difficult.</li>
                  <li>• The news <strong>is</strong> shocking.</li>
                  <li>• Physics <strong>requires</strong> concentration.</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">There is/are:</h4>
                <ul className="space-y-2">
                  <li>• There <strong>is</strong> a book on the table.</li>
                  <li>• There <strong>are</strong> books on the table.</li>
                  <li>• There <strong>is</strong> coffee and tea in the kitchen.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </GrammarLayout>
  );
};

export default SubjectVerbAgreement;