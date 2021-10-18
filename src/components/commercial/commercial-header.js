import React from "react";

export default function CommercialHeader() {
  return (
    <section className="max-w-8xl mx-auto container pt-16 bg-gray-100">
      <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-gray-700 tracking-tight sm:text-4xl pb-5">
          Commercial Real Estate
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-center w-full md:w-1/2 px-4 md:pr-12">
          <p className="uppercase text-lg text-gray-600 leading-normal">Commercial Real Estate</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-800 pt-4">
            Experienced<br />
            Commercial Real Estate Lawyer
          </h2>
          <p className="text-lg text-gray-600 leading-normal pt-4">
            Are you looking for a lawyer to help with your commercial real estate transaction?
          </p>
          <p className="text-lg text-gray-600 leading-normal pt-4">
            At Beganyi Professional Corporation Law Firm, we have extensive knowledge of all
            aspects of commercial real estate transactions and can assist with your commercial
            real estate needs, including leasing, financing, acquisition and disposition.
            With our extensive business and real estate law experience, our firm offers
            comprehensive guidance and practical legal advice to commercial real estate clients.
          </p>
          <p className="text-lg text-gray-600 leading-normal pt-4">
            We are also experienced in representing landlords on issues such as lease
            negotiations, defaults under leases or other agreements between landlord and
            tenant. We also represent property managers in leasing matters involving
            residential units as well as office space.
          </p>
          <p className="text-lg text-gray-600 leading-normal pt-4">
            When you hire us, you will receive professional service.
            We are committed to providing creative solutions tailored
            specifically for your project’s unique challenges. Our goal is not
            only to achieve success but also ensure that our clients feel confident
            during their at every step so they know they have someone by their side
            who understands their goals and objectives at every turn. We pride ourselves
            on being responsive – we understand how important it is for our clients to be
            able communicate quickly without having any obstacles in between them and us!
          </p>
          <p className="text-lg text-gray-600 leading-normal pt-4">
            Contact us today if you need assistance with your next commercial real
            estate transaction.
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
              <h4 className="text-lg font-bold leading-tight text-white">Commercial Real Estate Transactions (Buying & Selling)</h4>
              <p className="text-base text-white leading-normal pt-2">
                When you’re buying or selling a commercial property, you need a real estate lawyer
                to protect your interests. At Beganyi Professional Corporation Law Firm we
                have extensive experience handling these kinds of transactions, so we know what
                needs to be done. We can help you with every step of the process from start to
                finish – from drafting the purchase agreement, reviewing leases,
                to negotiating the transaction and closing the sale or purchase.
              </p>
              <p className="text-base text-white leading-normal pt-2">
                If you want to buy or sell a commercial building, contact Beganyi Professional
                Corporation Law Firm right away for expert advice on how best to handle your
                situation. We’ll make sure everything goes smoothly from start to finish!
              </p>
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
              <h4 className="text-lg font-bold leading-tight text-white">Commercial Leases & Negotiation</h4>
              <p className="text-base text-white leading-normal pt-2">
                You want to open a new store or expand your business, but you don't know the
                legal implications of leasing commercial property.
              </p>
              <p className="text-base text-white leading-normal pt-2">
                It's important that you have a lawyer review your lease agreement before you sign
                it.
              </p>
              <p className="text-base text-white leading-normal pt-2">
                Beganyi Professional Corporation Law Firm is an experienced and professional law firm with over 14 years’ experience in commercial real estate transactions and contract drafting. We can help you negotiate favorable terms in a lease agreement so that your business interests are protected. Our services include reviewing leases, negotiating better terms for tenants, and resolving landlord-tenant disputes.
                If you want to learn more about how we can help you please contact us today!
              </p>
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
              <h4 className="text-lg font-bold leading-tight text-white">Mortgage Financing & Secured Lending</h4>
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
          {/*<div className="flex">
            <div className="mr-5 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={12} cy={12} r={9} />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </div>
            <div className="mt-1">
              <h4 className="text-lg font-bold leading-tight text-white">Tax Planning</h4>
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
          </div>*/}
        </div>
      </div>
    </section>
  )
}

