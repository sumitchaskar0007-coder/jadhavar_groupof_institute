import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Music,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

const galleryImages = [
  "/assets/life/1.jpeg",
  "/assets/life/2.jpeg",
  "/assets/life/3.jpeg",
  "/assets/life/4.jpeg",
  "/assets/life/5.jpeg",
  "/assets/life/6.jpeg",
  "/assets/life/7.jpeg",
  "/assets/life/8.jpeg",
  "/assets/life/9.jpeg",
  "/assets/life/10.jpeg",
];

const institutes = [
  "Schools & Junior Colleges",
  "Arts, Commerce & Science",
  "Management & Technology",
  "Nursing & Paramedical",
  "Education & Professional Studies",
  "Law Colleges",
];

const engagementCards = [
  {
    title: "Academic Support",
    icon: BookOpen,
    tone: "blue",
    points: [
      "Smart classrooms and guided learning",
      "Seminars, workshops, and expert sessions",
      "Library and digital study resources",
      "Mentoring for academic progress",
    ],
  },
  {
    title: "Skills & Career Growth",
    icon: Briefcase,
    tone: "indigo",
    points: [
      "Career guidance and counselling",
      "Interview preparation and communication skills",
      "Industry visits and practical exposure",
      "Placement and internship support",
    ],
  },
  {
    title: "Clubs & Activities",
    icon: Users,
    tone: "purple",
    points: [
      "Cultural, sports, and creative clubs",
      "Student committees and leadership roles",
      "Competitions, exhibitions, and festivals",
      "Inter-college participation and teamwork",
    ],
  },
];

const campusHighlights = [
  {
    title: "Celebrations & Events",
    icon: Music,
    points: [
      "Annual gatherings and cultural programs",
      "Traditional days and festival celebrations",
      "Prize distribution and achievement ceremonies",
      "Freshers, farewells, and student showcases",
    ],
  },
  {
    title: "Sports & Wellness",
    icon: Trophy,
    points: [
      "Indoor and outdoor sports activities",
      "Sports day and athletics participation",
      "Health, yoga, and wellness awareness",
      "Healthy competition and team spirit",
    ],
  },
  {
    title: "Community Values",
    icon: HeartHandshake,
    points: [
      "NSS and community service initiatives",
      "Health camps and awareness drives",
      "Environmental and cleanliness activities",
      "Discipline, punctuality, and social responsibility",
    ],
  },
];

const colorClasses = {
  blue: "bg-blue-50 border-blue-600 text-blue-700",
  indigo: "bg-indigo-50 border-indigo-600 text-indigo-700",
  purple: "bg-purple-50 border-purple-600 text-purple-700",
};

export default function LifeCampus() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Life @ Campus | Jadhavar Group of Institutions</title>
        <meta
          name="description"
          content="Explore campus life across Jadhavar Group of Institutions, including academics, sports, cultural events, clubs, career support, community activities, and student development."
        />
      </Helmet>

      <main className="bg-gray-50">
        <section className="relative overflow-hidden bg-[#0F2F5F] text-white">
          <div className="absolute inset-0 opacity-10">
            <Sparkles className="h-full w-full" />
          </div>

          <div className="container-responsive relative z-10 py-20 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-yellow-300">Life @ Campus</p>
              <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                A vibrant student experience across all Jadhavar institutes
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
                Campus life at Jadhavar Group of Institutions brings together academics, discipline, creativity,
                sports, leadership, community values, and career growth for students across all colleges and schools.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {institutes.map((item) => (
                  <span key={item} className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="container-responsive py-16">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-yellow-600">Student Development</p>
            <h2 className="mt-2 text-3xl font-bold text-[#0a1e3c] sm:text-4xl">
              Learning that continues beyond the classroom
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-700">
              Every institute in the Jadhavar Group encourages students to grow through participation, practical
              learning, faculty guidance, and a campus culture built on confidence and responsibility.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {engagementCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`rounded-lg border-l-4 bg-white p-6 shadow-sm ${colorClasses[card.tone]}`}
                >
                  <Icon className="mb-4 h-11 w-11" />
                  <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
                    {card.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="font-bold text-yellow-600">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container-responsive">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-yellow-600">Campus Gallery</p>
              <h2 className="mt-2 text-3xl font-bold text-[#0a1e3c] sm:text-4xl">Campus Life in Action</h2>
              <p className="mt-4 text-base leading-7 text-gray-700">
                A glimpse of student activities, celebrations, academic programs, and everyday moments across the
                Jadhavar campus environment.
              </p>
            </div>

            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg shadow-2xl">
              <img
                src={galleryImages[currentImage]}
                alt={`Jadhavar campus life ${currentImage + 1}`}
                className="h-[320px] w-full object-cover transition-opacity duration-700 sm:h-[500px]"
              />

              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      currentImage === index ? "w-7 bg-yellow-400" : "w-3 bg-white/75 hover:bg-white"
                    }`}
                    aria-label={`Go to campus image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-responsive py-16">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-yellow-600">The Jadhavar Advantage</p>
            <h2 className="mt-2 text-3xl font-bold text-[#0a1e3c] sm:text-4xl">
              A shared culture for every student
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-700">
              Whether a student belongs to school education, junior college, degree college, professional programs,
              healthcare education, management, technology, or law, the campus experience is built around growth,
              discipline, opportunity, and belonging.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {campusHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <Icon className="mb-4 h-11 w-11 text-[#0a1e3c]" />
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="text-yellow-600">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <Building2 className="mb-4 h-11 w-11 text-blue-700" />
              <h3 className="text-xl font-bold text-gray-900">Campus Facilities</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                Students benefit from classrooms, labs, libraries, seminar spaces, activity areas, and support
                facilities suited to their institute and course.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <Lightbulb className="mb-4 h-11 w-11 text-yellow-600" />
              <h3 className="text-xl font-bold text-gray-900">Creativity & Innovation</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                Projects, exhibitions, presentations, competitions, and student-led initiatives help learners express
                ideas and build practical confidence.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <Award className="mb-4 h-11 w-11 text-green-700" />
              <h3 className="text-xl font-bold text-gray-900">Recognition</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700">
                Academic achievements, sports performance, cultural talent, leadership, and service are encouraged and
                celebrated across the group.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#0F2F5F] px-6 py-16 text-center text-white">
          <div className="mx-auto max-w-4xl">
            <GraduationCap className="mx-auto mb-5 h-12 w-12 text-yellow-300" />
            <h2 className="text-3xl font-bold sm:text-4xl">Experience Life at Jadhavar Group of Institutions</h2>
            <p className="mt-4 text-base leading-7 text-blue-100">
              A disciplined, active, and student-focused environment where every learner gets space to study, perform,
              participate, and grow.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
