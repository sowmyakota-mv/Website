import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function AIMachineLearning() {
  return (
    <section id="our-services/ai-ml" className="w-full bg-white text-gray-900">
      {/* Hero */}
      <div className="bg-gradient-to-r from-sky-50 via-white to-slate-50 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">
          AI & Machine Learning
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
          Deep dive into machine learning algorithms, model building, MLOps and
          production AI. Learn to design, train, evaluate, and deploy real-world
          models and pipelines.
        </p>
      </div>

      {/* About */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">About the Program</h2>
          <p className="text-slate-700 text-lg leading-relaxed">
            The <strong>Data Artisans AI & ML Bootcamp</strong> gives you end-to-end
            expertise: from exploratory data analysis to advanced neural networks and
            production deployment. The course balances theory (math & algorithms)
            with hands-on labs using industry tools and cloud-managed ML services.
          </p>

          <p className="text-slate-700 text-lg mt-6 leading-relaxed">
            You’ll learn how to preprocess messy data, engineer features, train models
            (classical & deep learning), evaluate results, and deploy models reliably
            using MLOps practices (pipelines, versioning, monitoring).
          </p>
        </div>
      </ScrollAnimation>

      {/* What You'll Learn */}
      <ScrollAnimation animation="fadeInUp">
        <div className="bg-slate-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What you’ll learn</h2>
            <ul className="space-y-3 text-lg text-slate-700">
              <li>• Probability, linear algebra and statistics fundamentals for ML</li>
              <li>• Data cleaning, feature engineering and pipeline design</li>
              <li>• Supervised learning: regression, classification, ensembles</li>
              <li>• Unsupervised learning: clustering, dimensionality reduction</li>
              <li>• Deep learning: CNNs, RNNs, Transformers basics</li>
              <li>• Natural Language Processing: tokenization, embeddings, simple transformers</li>
              <li>• Model evaluation, cross-validation and bias/variance tradeoffs</li>
              <li>• MLOps: pipelines, reproducibility, model serving, monitoring</li>
              <li>• Ethical AI, fairness, privacy, and model governance</li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>

      {/* Modules / Weekly breakdown */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Course modules (sample)</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 1 — Foundations</h3>
              <p className="text-slate-700 mb-2">
                Python for data science, statistics, probability, linear algebra basics.
              </p>
              <ul className="list-disc list-inside text-slate-700">
                <li>NumPy, Pandas, EDA</li>
                <li>Data visualization and reporting</li>
                <li>Experiment design & metrics</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 2 — Classical ML</h3>
              <p className="text-slate-700 mb-2">
                Supervised & unsupervised algorithms, feature engineering and tuning.
              </p>
              <ul className="list-disc list-inside text-slate-700">
                <li>Linear/Logistic Regression, Trees, Random Forests, XGBoost</li>
                <li>Clustering & dimensionality reduction (PCA, t-SNE)</li>
                <li>Hyperparameter search & pipelines</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 3 — Deep Learning</h3>
              <p className="text-slate-700 mb-2">
                Neural network fundamentals and modern architectures.
              </p>
              <ul className="list-disc list-inside text-slate-700">
                <li>CNNs for images, RNNs & Transformers for sequences</li>
                <li>Transfer learning, fine-tuning, and data augmentation</li>
                <li>Using PyTorch / TensorFlow</li>
              </ul>
            </article>

            <article className="rounded-2xl border p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Module 4 — MLOps & Production</h3>
              <p className="text-slate-700 mb-2">
                From models-in-notebook to models-in-production with observability.
              </p>
              <ul className="list-disc list-inside text-slate-700">
                <li>Model versioning, CI for ML, pipelines (Airflow / Prefect)</li>
                <li>Containerization, serving models (FastAPI / TorchServe)</li>
                <li>Monitoring, drift detection, retraining strategies</li>
              </ul>
            </article>
          </div>
        </div>
      </ScrollAnimation>

      {/* Projects */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16 bg-slate-50 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Hands-on Projects</h2>
          <ul className="grid gap-4 md:grid-cols-2 text-slate-700">
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Project: Sales forecasting</strong> — time-series modeling, feature engineering,
              model selection and deployment.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Project: Image classification</strong> — CNNs, transfer learning, augmentation and performance tuning.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Project: NLP sentiment pipeline</strong> — tokenization, embeddings, transformer fine-tuning and serving.
            </li>
            <li className="rounded-lg p-4 border bg-white shadow-sm">
              <strong>Capstone:</strong> production-ready ML pipeline with model monitoring and retraining logic.
            </li>
          </ul>
        </div>
      </ScrollAnimation>

      {/* Tools & stack */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Tools & Libraries</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Python",
              "Pandas & NumPy",
              "scikit-learn",
              "PyTorch / TensorFlow",
              "Hugging Face",
              "Jupyter / Colab",
              "Docker",
              "Airflow / Prefect",
              "MLflow",
              "AWS SageMaker / GCP AI Platform",
            ].map((t, i) => (
              <div key={i} className="rounded-lg border p-3 text-center bg-white shadow-sm">
                {t}
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Career Opportunities */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6">Career paths</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Data Scientist",
              "Machine Learning Engineer",
              "NLP Engineer",
              "Computer Vision Engineer",
              "MLOps Engineer",
              "Research Engineer",
            ].map((role, i) => (
              <div key={i} className="rounded-2xl border p-6 bg-white shadow-sm text-center font-semibold">
                {role}
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* FAQ */}
      <ScrollAnimation animation="fadeInUp">
        <div className="max-w-6xl mx-auto px-6 py-16 bg-slate-50 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">FAQ</h2>
          <div className="space-y-4">
            <details className="p-4 bg-white rounded border">
              <summary className="font-semibold">Who is this course for?</summary>
              <p className="mt-2 text-slate-700">Beginners with Python, analysts, and engineers wanting production ML skills.</p>
            </details>
            <details className="p-4 bg-white rounded border">
              <summary className="font-semibold">Prerequisites?</summary>
              <p className="mt-2 text-slate-700">Basic Python and familiarity with algebra/statistics recommended. We provide bridging modules.</p>
            </details>
            <details className="p-4 bg-white rounded border">
              <summary className="font-semibold">Certification & projects?</summary>
              <p className="mt-2 text-slate-700">Certificate on completion and a capstone project to showcase on your portfolio/GitHub.</p>
            </details>
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA */}
      <div className="bg-emerald-200 text-white text-center py-20">
        <h3 className="text-3xl font-bold mb-4">Master AI & Machine Learning</h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join a hands-on bootcamp with mentorship, live labs, and production projects to accelerate your career.
        </p>
        <Link to="/register" className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition">
          Enroll Now
        </Link>
      </div>
    </section>
  );
}
