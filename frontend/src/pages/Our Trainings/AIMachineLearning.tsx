import React from "react";
import ScrollAnimation from "@/animation/ScrollAnimation";
import { Link } from "react-router-dom";

export default function AIMachineLearning() {
  return (
    <section id="our-services/ai-ml" className="w-full bg-slate-50 text-gray-900 -mb-12">

      {/* Hero */}
      <ScrollAnimation animation="fadeInDown">
        <div className="bg-gradient-to-r from-sky-50 via-white to-slate-50 py-20 text-center">
          <h1 className="text-5xl font-extrabold text-sky-900 mb-4">
            AI & Machine Learning
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-sky-700 leading-relaxed">
            Deep dive into machine learning algorithms, model building, MLOps and
            production AI. Learn to design, train, evaluate, and deploy real-world
            models and pipelines.
          </p>
        </div>
      </ScrollAnimation>

      {/* About */}
      <ScrollAnimation animation="fadeInUp" duration={0.8}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-sky-900">About the Program</h2>
          <p className="text-sky-700 text-lg leading-relaxed">
            The <strong>Data Artisans AI & ML Bootcamp</strong> gives you end-to-end
            expertise: from exploratory data analysis to advanced neural networks and
            production deployment. The course balances theory (math & algorithms)
            with hands-on labs using industry tools and cloud-managed ML services.
          </p>
          <p className="text-sky-700 text-lg mt-6 leading-relaxed">
            You’ll learn how to preprocess messy data, engineer features, train models
            (classical & deep learning), evaluate results, and deploy models reliably
            using MLOps practices (pipelines, versioning, monitoring).
          </p>
        </div>
      </ScrollAnimation>

      {/* What You'll Learn */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.2}>
        <div className="bg-gradient-to-tr from-sky-50 via-white to-slate-50 py-16 px-6 rounded-2xl shadow-lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-sky-900">What You’ll Learn</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-lg text-sky-700">
              {[
                "Probability, linear algebra and statistics fundamentals for ML",
                "Data cleaning, feature engineering and pipeline design",
                "Supervised learning: regression, classification, ensembles",
                "Unsupervised learning: clustering, dimensionality reduction",
                "Deep learning: CNNs, RNNs, Transformers basics",
                "Natural Language Processing: tokenization, embeddings, simple transformers",
                "Model evaluation, cross-validation and bias/variance tradeoffs",
                "MLOps: pipelines, reproducibility, model serving, monitoring",
                "Ethical AI, fairness, privacy, and model governance"
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-2 hover:text-sky-900 transition-colors">
            <span className="text-sky-900 font-bold">•</span>
            <span>{item}</span>
          </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Modules */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={0.4}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-6 text-sky-900">Course Modules (Sample)</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Module 1 — Foundations",
                desc: "Python for data science, statistics, probability, linear algebra basics.",
                points: ["NumPy, Pandas, EDA","Data visualization and reporting","Experiment design & metrics"]
              },
              {
                title: "Module 2 — Classical ML",
                desc: "Supervised & unsupervised algorithms, feature engineering and tuning.",
                points: ["Linear/Logistic Regression, Trees, Random Forests, XGBoost","Clustering & PCA/t-SNE","Hyperparameter search & pipelines"]
              },
              {
                title: "Module 3 — Deep Learning",
                desc: "Neural network fundamentals and modern architectures.",
                points: ["CNNs for images, RNNs & Transformers for sequences","Transfer learning, fine-tuning, augmentation","Using PyTorch / TensorFlow"]
              },
              {
                title: "Module 4 — MLOps & Production",
                desc: "From models-in-notebook to models-in-production with observability.",
                points: ["Model versioning, CI for ML, pipelines (Airflow / Prefect)","Containerization, serving models (FastAPI / TorchServe)","Monitoring, drift detection, retraining strategies"]
              }
            ].map((mod, i) => (
              <article key={i} className="rounded-2xl border p-6 bg-white shadow-md hover:shadow-xl hover:scale-105 transition transform">
                <h3 className="text-xl font-semibold mb-2 text-sky-900">{mod.title}</h3>
                <p className="text-sky-700 mb-2">{mod.desc}</p>
                <ul className="list-disc list-inside text-sky-700">
                  {mod.points.map((p, idx) => <li key={idx}>{p}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA */}
      <ScrollAnimation animation="fadeInUp" duration={0.8} delay={1}>
        <div className="bg-gradient-to-r from-sky-100 via-cyan-200 to-sky-100 text text-center py-20 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Master AI & Machine Learning</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join a hands-on bootcamp with mentorship, live labs, and production projects to accelerate your career.
          </p>
          <Link to="/register" className="px-8 py-3 bg-white text-sky-700 font-semibold rounded-full hover:bg-cyan-50 transition transform hover:scale-105">
            Enroll Now
          </Link>
        </div>
      </ScrollAnimation>

    </section>
  );
}
