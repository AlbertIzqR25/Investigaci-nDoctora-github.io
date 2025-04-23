import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LiteratureReview() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Literature Review Framework</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Theoretical Foundations</CardTitle>
            <CardDescription>Core theories and concepts in AI research</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Computational Intelligence</h3>
              <p>Theories of machine intelligence, cognitive computing, and computational learning.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Statistical Learning Theory</h3>
              <p>Frameworks for understanding machine learning algorithms and their generalization capabilities.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Information Theory</h3>
              <p>Principles of information processing, encoding, and transmission in intelligent systems.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Cognitive Science</h3>
              <p>Interdisciplinary approaches to understanding mind and intelligence.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technical Approaches</CardTitle>
            <CardDescription>Methods and techniques in AI implementation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Machine Learning Paradigms</h3>
              <p>Supervised, unsupervised, semi-supervised, and reinforcement learning approaches.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Neural Network Architectures</h3>
              <p>Convolutional, recurrent, transformer, and graph neural networks.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Optimization Methods</h3>
              <p>Gradient-based optimization, evolutionary algorithms, and Bayesian optimization.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Representation Learning</h3>
              <p>Feature extraction, embedding techniques, and dimensionality reduction.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Application Domains</CardTitle>
            <CardDescription>Areas where AI is applied and studied</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Natural Language Processing</h3>
              <p>Language understanding, generation, translation, and dialogue systems.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Computer Vision</h3>
              <p>Image recognition, object detection, segmentation, and visual reasoning.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Robotics and Autonomous Systems</h3>
              <p>Perception, planning, control, and human-robot interaction.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Healthcare and Biomedicine</h3>
              <p>Diagnosis, prognosis, treatment planning, and drug discovery.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ethical and Societal Dimensions</CardTitle>
            <CardDescription>Broader implications of AI development</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Fairness and Bias</h3>
              <p>Algorithmic fairness, bias detection, and mitigation strategies.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Transparency and Explainability</h3>
              <p>Methods for interpreting and explaining AI decisions and behaviors.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Privacy and Security</h3>
              <p>Data protection, adversarial robustness, and secure AI systems.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Governance and Regulation</h3>
              <p>Policy frameworks, standards, and regulatory approaches for AI.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
