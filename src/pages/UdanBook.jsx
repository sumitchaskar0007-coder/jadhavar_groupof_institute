import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { udanBooks } from "../data/udanBooks";

export default function UdanBook() {
  const { id } = useParams();
  const book = udanBooks[id];

  if (!book) {
    return (
      <div className="container-responsive flex min-h-[60vh] items-center justify-center py-16 text-center">
        <div>
          <h1 className="text-2xl font-bold text-[#0a1e3c]">Book not found</h1>
          <Link to="/udan" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:underline">
            <ArrowLeft size={16} />
            Back to Udan Program
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{book.title} | Udan Program</title>
        <meta name="description" content="Download the Udan PDF." />
      </Helmet>

      <main className="bg-gray-50">
        <section className="container-responsive py-12">
          <Link to="/udan" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:underline">
            <ArrowLeft size={16} />
            Back to Udan Program
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto mt-8 grid max-w-5xl gap-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-[280px_1fr] md:p-10"
          >
            <img
              src={book.cover}
              alt={book.title}
              className="mx-auto w-full max-w-[240px] rounded-md object-contain"
            />

            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-yellow-600">Udan Book Series</p>
              <h1 className="mt-3 text-4xl font-bold text-[#0a1e3c]">{book.title}</h1>
              <p className="mt-4 text-gray-700">
                {book.pdf ? "Use the buttons below to download or open the PDF." : "This Udan book page has been created. The PDF will be added later."}
              </p>

              {book.pdf ? (
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={book.pdf}
                    download={`${book.title}.pdf`}
                    className="inline-flex items-center gap-2 rounded-md bg-[#0a1e3c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12345f]"
                  >
                    <Download size={18} />
                    Download PDF
                  </a>
                  <a
                    href={book.pdf}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-md border border-[#0a1e3c] px-5 py-3 text-sm font-semibold text-[#0a1e3c] transition hover:bg-blue-50"
                  >
                    <FileText size={18} />
                    Open PDF
                  </a>
                </div>
              ) : (
                <div className="mt-7 inline-flex w-fit items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-semibold text-gray-600">
                  <FileText size={18} />
                  PDF not available
                </div>
              )}
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
