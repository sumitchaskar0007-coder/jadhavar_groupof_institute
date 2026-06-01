import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, FileClock } from "lucide-react";
import { udanBooks } from "../data/udanBooks";

const books = Object.entries(udanBooks).map(([id, book]) => ({
  id,
  ...book
}));

export default function Udan() {
  return (
    <>
      <Helmet>
        <title>Udan Program | Jadhavar Group of Institutions</title>
        <meta
          name="description"
          content="Download Udan PDF books from Jadhavar Group of Institutions."
        />
      </Helmet>

      <main className="bg-gray-50">
        <section className="border-b border-gray-200 bg-white">
          <div className="container-responsive py-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-yellow-600">Udan Book Series</p>
            <h1 className="mt-3 text-4xl font-bold text-[#0a1e3c] sm:text-5xl">Udan Program</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-700">
              View or download the Udan PDF.
            </p>
          </div>
        </section>

        <section className="container-responsive py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {books.map((book, index) => (
              <motion.article
                key={book.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="mx-auto h-52 w-auto rounded-md object-contain"
                />

                <h2 className="mt-5 text-center text-xl font-bold text-[#0a1e3c]">{book.title}</h2>

                <div className="mt-5 flex items-center gap-3">
                  <Link
                    to={`/udan/${book.id}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-[#0a1e3c] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#12345f]"
                  >
                    View
                    <ArrowRight size={16} />
                  </Link>
                  {book.pdf ? (
                    <a
                      href={book.pdf}
                      download={`${book.title}.pdf`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 text-[#0a1e3c] transition hover:border-yellow-500 hover:bg-yellow-50"
                      aria-label={`Download ${book.title}`}
                    >
                      <Download size={18} />
                    </a>
                  ) : (
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-400"
                      aria-label={`${book.title} PDF not available`}
                      title="PDF not available"
                    >
                      <FileClock size={18} />
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
