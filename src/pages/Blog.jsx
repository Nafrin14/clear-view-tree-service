import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

import blogHero from "../assets/images/storm-cleanup.webp";
import treeRemoval from "../assets/images/tree-removal.webp";
import treeTrimming from "../assets/images/tree-trimming.webp";
import stormCleanup from "../assets/images/storm-cleanup.webp";

const blogPosts = [
  {
    id: 1,
    title: "5 Signs a Tree Needs to Be Removed",
    image: treeRemoval,
    description:
      "Learn how to identify dangerous trees before they become a risk to your property and family.",
    date: "July 2026",
    fullContent:
      "A tree may need to be removed when it has large dead branches, visible trunk damage, severe leaning, root problems, or signs of disease. Damaged trees can become dangerous during strong winds and storms. A professional tree inspection can help determine whether trimming or complete removal is the safest option.",
  },
  {
    id: 2,
    title: "Benefits of Regular Tree Trimming",
    image: treeTrimming,
    description:
      "Discover how routine trimming improves tree health, safety, and the appearance of your landscape.",
    date: "June 2026",
    fullContent:
      "Regular tree trimming removes weak, dead, and overgrown branches. It improves sunlight and airflow, supports healthy growth, and reduces the risk of falling branches. Proper trimming also helps trees maintain an attractive shape while protecting nearby roofs, vehicles, and power lines.",
  },
  {
    id: 3,
    title: "What to Do After a Storm Damages Trees",
    image: stormCleanup,
    description:
      "Follow these important safety tips after storms and know when to call a professional tree service.",
    date: "May 2026",
    fullContent:
      "After a storm, stay away from fallen trees, hanging branches, and damaged power lines. Do not attempt to remove large limbs without proper equipment. Take photos of the damage, keep people away from the area, and contact a professional emergency tree service for safe removal and cleanup.",
  },
];

function Blog() {
  const [openPostId, setOpenPostId] = useState(null);

  const togglePost = (postId) => {
    setOpenPostId((currentId) => (currentId === postId ? null : postId));
  };

  return (
    <MainLayout>
      {/* Blog Hero Section */}
      <section className="relative flex h-[45vh] min-h-[430px] items-center overflow-hidden md:h-[50vh]">
        <img
          src={blogHero}
          alt="Tree care tips and professional advice"
          width="1536"
          height="1024"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 text-white">
          <span className="inline-block rounded-full bg-green-600 px-5 py-2 text-sm font-semibold uppercase tracking-wide">
            Tree Care Blog
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            Helpful Tree Care Tips & Advice
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
            Explore practical tips, seasonal advice, and expert guidance to
            keep your trees healthy, safe, and beautiful.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-semibold uppercase tracking-wide text-green-700">
              Latest Articles
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-gray-900 md:text-4xl">
              Tree Care Tips & Insights
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
              Stay informed with expert advice, seasonal maintenance tips, and
              professional guidance to keep your trees healthy and your
              property safe.
            </p>
          </div>

          <div className="mt-14 grid items-start gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => {
              const isOpen = openPostId === post.id;

              return (
                <article
                  key={post.id}
                  className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      width="1536"
                      height="1024"
                      loading="lazy"
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-sm font-semibold uppercase tracking-wide text-green-600">
                      {post.date}
                    </span>

                    <h3 className="mt-3 text-2xl font-bold leading-snug text-gray-900">
                      {post.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-600">
                      {post.description}
                    </p>

                    {isOpen && (
                      <div className="mt-5 border-t border-gray-200 pt-5">
                        <p className="leading-7 text-gray-600">
                          {post.fullContent}
                        </p>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => togglePost(post.id)}
                      aria-expanded={isOpen}
                      className="mt-6 self-start rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-green-700"
                    >
                      {isOpen ? "Show Less" : "Read More"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Blog;