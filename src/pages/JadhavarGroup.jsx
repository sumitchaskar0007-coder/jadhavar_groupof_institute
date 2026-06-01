import React from 'react';

export default function JadhavarGroup() {
  const colleges = [
    {
      name: "Late Uddhavrao Tulshiram Jadhavar Foundation's Institute of Nursing Pune (old)",
      url: 'https://www.jadhavarfoundations.org/',
      status: 'Done',
    },
    {
      name: "Late Uddhavrao Tulshiram Jadhavar Foundation's College of Paramedical Pune",
      url: 'https://www.jadhavarparamedicalcollege.com',
      status: 'Done',
    },
    {
      name: 'Jadhavar College of Law Pune',
      url: 'https://www.jadhavarcollegeoflaw.com/',
      status: 'Done',
    },
    {
      name: "Adv Shardulrao Sudhakarrao Jadhavar College of Law Pune",
      url: 'https://www.shardulraojadhavarcollegeoflaw5.com',
      status: 'Done',
    },
    {
      name: 'Dr. Sudhakarrao Jadhavar Arts, Commerce and Science College Pune',
      url: 'https://www.jadhavarjrcollege.com/',
      status: 'Done',
    },
    {
      name: 'Dr. Sudhakarrao Jadhavar Institute of Management and Technology Pune (old)',
      url: 'https://www.sjimt.in',
      status: 'Done',
    },
    { name: 'Aditya Institute of Management Pune', url: 'https://www.adityainstitutemanagement.com', status: 'Done' },
    { name: 'Aditya Management Institute - PGDM', url: 'https://www.adityainstitutepgdm.com', status: 'Done' },
    {
      name: 'Paradise English Medium School and Junior College Pune (old)',
      url: 'https://www.jadhavarjrcollege.com',
      status: 'Old / see note',
    },
    { name: 'Jadhavar English Medium School and Junior College Pune', url: 'https://www.jadhavarenglishschool.com', status: 'Done' },
    { name: 'Jadhavar International School and Junior College Pune', url: 'https://jadhavarinternationalschool.com/', status: 'Done' },
    {
      name: 'Dr. Sudhakarrao Jadhavar Primary and Secondary School Pune (old)',
      url: 'https://www.jadhavarsemienglish.in',
      status: 'Old / see note',
    },
    { name: 'Jai Ganesh B.Ed College Pune (old)', url: 'https://www.jgefs.org', status: 'Done' },
    { name: 'Jadhavar Group of Institutes (old)', url: 'https://www.jadhavargroupofinstitute.in', status: 'Old / see note' },
    { name: 'Sanskruti Techno School', url: 'https://www.sanskrutitechnoschool.com', status: 'Done' },
    { name: 'Jadhavar Yuva Sansad', url: 'https://www.jadhavaryuvasansad.com', status: '80% (needs verification)' },
    {
      name: 'Paradise English Medium school Pune (old)',
      url: 'https://www.paradiseems.co.in',
      status: 'Only status — not added. Please review and update content',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-semibold mb-4">Jadhavar Group of Institutes</h1>
      <p className="mb-6">List of institutes and their official websites. Links open in a new tab.</p>

      <ol className="list-decimal pl-5 space-y-4">
        {colleges.map((c, idx) => (
          <li key={idx} className="">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="break-words">
                <span className="font-medium">{c.name}</span>
                {c.url ? (
                  <span className="ml-2 text-sm text-blue-600">-
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="underline ml-1">{c.url.replace(/^https?:\/\//, '')}</a>
                  </span>
                ) : null}
              </div>
              <div className="mt-2 sm:mt-0 text-sm text-gray-600">{c.status}</div>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-8 text-sm text-gray-700">Note: Entries marked "Old / see note" or similar may need verification before publishing.</p>
    </div>
  );
}
