import React from "react";

export default function MergerHeader() {
  return (
    <section className="max-w-8xl mx-auto container pt-16 bg-gray-100">
      <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-gray-700 tracking-tight sm:text-4xl pb-5">
          Mergers & Acquisitions
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-center w-full md:w-1/2 px-4 md:pr-12">
          <p className="uppercase text-lg text-gray-600 leading-normal">Mergers & Acquisitions</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-800 pt-4">
            Fixed Rate Fees<br />
            For Residential Transactions
          </h2>
          <p className="text-lg text-gray-600 leading-normal pt-4">
            Whether you are a first time home buyer or an experienced residential real estate investor, we can assist you with closing your residential purchase, sale and refinance transactions. We represent individuals, families and businesses in all kinds of
            residential real estate matters.
          </p>

        </div>
        <div className="bg-gray-900 w-full md:w-1/2 px-4 md:px-12 py-10 mt-8 md:mt-0 rounded mr-4">
          <div className="flex pb-10">
            <div className="mr-5 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={12} cy={12} r={9} />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </div>
            <div className="mt-1">
              <h4 className="text-lg font-bold leading-tight text-white">Asset Acquisitions</h4>
              <p className="text-base text-white leading-normal pt-2">If you’re buying a home or condo,
                you’ll need a real estate lawyer to represent you.
                A law firm with extensive experience in residential real estate purchases
                is invaluable to minimize your risk and stress levels with one of life’s biggest
                financial commitments. Let Beganyi Professional Corporation Law Firm help you
                with your next home purchase.</p>
            </div>
          </div>
          <div className="flex pb-10">
            <div className="mr-5 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={12} cy={12} r={9} />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </div>
            <div className="mt-1">
              <h4 className="text-lg font-bold leading-tight text-white">Share Acquisitions</h4>
              <p className="text-base text-white leading-normal pt-2">In a hot market like Toronto,
                or Mississauga selling a home can be quite exciting.
                If you’ve owned your home for a number of years, you’ve likely generated quite a
                bit of profit. However, before you can watch your bank balance grow, you
                need to make sure that your home sells successfully. Listing a home and
                selling it through the agent is just the first step. You will need a
                real estate lawyer to close the transaction and to help you deal with any
                issues or concerns that are brought up by the purchaser’s lawyer.
                Our firm can help you navigate this process. Let Beganyi Professional
                Corporation Law Firm help you with your next home sale.</p>
            </div>
          </div>
          <div className="flex pb-10">
            <div className="mr-5 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={12} cy={12} r={9} />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </div>
            <div className="mt-1">
              <h4 className="text-lg font-bold leading-tight text-white">Corporate Reorganizations</h4>
              <p className="text-base text-white leading-normal pt-2">At Beganyi P.C., we understand that real estate
                can be a complicated process with many different aspects to consider
                for both individuals and businesses looking to mortgage or refinance a property.
                Ladislav is skilled at guiding clients through each step, so they have the best
                opportunity possible while protecting their interests throughout this journey.</p>
                <p className="text-base text-white leading-normal pt-2">
                The law firm provides individualized attention no matter what your reason
                  for refinancing your existing residential mortgage. Whether you're securing
                  funds for improvements on your home, paying off debts, or just taking advantage of
                  more beneficial interest rates offered by banks these days, we are here to help.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-5 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={12} cy={12} r={9} />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </div>
            <div className="mt-1">
              <h4 className="text-lg font-bold leading-tight text-white">Joint Ventures</h4>
              <p className="text-base text-white leading-normal pt-2">
                There are only two certainties in life: death and taxes.
                We can’t help you avoid death, but our firm can help minimize the taxes
                you have to pay. Whether you wish to gift property to your children
                before you die or set up trusts or other structures to minimize the tax
                you pay while you live and after you die, we can assist you.
                Ladislav Beganyi has extensive experience in helping individuals
                and business with the tax driven real estate transactions.
                If you’d like to have a consultation to see how our firm can assist you,
                please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

