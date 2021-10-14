import React from "react";
const faqs = [
  {
    question: 'Understanding the standard OREA Purchase and Sale Agreement',
    answer:
      'This guide will help you understand that key clauses found in the standard form OREA residential purchase agreement.',
    url: "/guides/understanding-orea-agreemeent/"
  },
  // More questions...
]

export default function ResourcesResidentialRealEstate() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Helpful resources</h2>
            <p className="mt-4 text-lg text-gray-500">
              Got some more questions? Reach out to us{' '}
              <a href="/contact/" className="font-medium text-indigo-600 hover:text-indigo-500">
                for a free 15 minute consultation.
              </a>{' '}
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-lg leading-6 font-medium text-indigo-600 hover:text-indigo-500"><a href={faq.url}> {faq.question}</a></dt>
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
