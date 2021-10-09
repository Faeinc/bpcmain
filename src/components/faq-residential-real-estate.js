import React, { useState } from 'react'
import { Popover } from '@headlessui/react'
import ChevronDownIcon from '@heroicons/react/outline/ChevronDownIcon'
const faqs = [
  {
    id: 1,
    category: {
                  "name": "General",
                  "categoryId": 1
              },
    question: "What safety measures have you adopted for residential real estate closings in light of COVID-19?",
    answer:
     "The safety of our staff and clients is our number one priority. We are an entirely virtual firm. The Law Society of Ontario has permitted lawyers to meet with their clients virtually via videoconference, including verifying a client’s identity. All closing documents are signed and reviewed with our clients in their homes’ comfort and safety. If possible, closing funds are wired to the other firm or directly deposited. If you’re purchasing, we work with the seller’s lawyer to ensure that the property’s keys are left in a secured lock-box at the property. The lock-box combination will be made available to you after closing. Our reporting to you after closing is prepared digitally and emailed to you."
  },

  {
    id: 2,
    category: {
      "name": "General",
      "categoryId": 1
    },
    question: "Do I need a lawyer when buying a property?",
    answer:
      "Yes. In Ontario, only a lawyer can register title transfer documents. Moreover, a lawyer is there to protect you throughout the transaction. A lawyer will ensure that you understand your rights and obligations and ensure that you receive a good title to the property you are purchasing.",
  },
  {
    id: 3,
    category: {
      "name": "General",
      "categoryId": 1
    },
    question: "When should you hire a real estate lawyer?",
    answer:
      "Residential real estate lawyers are a vital part of buying or selling a home. You should hire a real estate lawyer involved as early as when you make up your mind to purchase a new home or put your residential property up for sale. This way, they can protect your interests from inception and help you take on a real estate transaction’s challenges."
  },

  {
    id: 4,
    category: {
      "name": "General",
      "categoryId": 1
    },
    question: "Should I have a lawyer review the Agreement of Purchase and Sale before I sign it?",
    answer:
      "Absolutely. An offer to purchase is a legal contract that becomes binding on both the buyer and the seller once signed. You need to understand what you are signing. A lawyer can assist you with explaining your rights and obligations to you. A lawyer can also suggest changes to the contract that will protect you, help you avoid difficulties, and ensure that your interest is protected.",
  },
  {
    id: 5,
    category: {
      "name": "Purchase",
      "categoryId": 2
    },
    question: "What is the minimum down payment I need to have to buy my first residential property?",
    answer:
      "To obtain a mortgage, you need to have at least a 5% down payment available to purchase your property. A “down payment” is the amount of your own money you put towards buying a property. However, if you have less than 20% saved, the mortgage is considered a high ratio mortgage. It will need to be insured by the Canada Mortgage and Housing Corporation (CMHC) for a bank to lend you money for the purchase. If you do not have at least 5% of the down-payment available, you cannot obtain a mortgage from a regular lender as the mortgage will not be insured by CMHC."
  },
  {
    id: 6,
    category: {
      "name": "General",
      "categoryId": 1
    },
    question: "Is it a good idea to sell and buy on the same day?",
    answer:
      "While it is possible to sell a property and buy a new one on the same day, our firm does not recommend it. Typically a home sale will not close before 2 p.m. and sometimes not until nearly 5:00 p.m. If you need funds from the sale to finance the purchase, any delays in the sale could delay the closing of your purchase. In the worst-case scenario, you may default on the purchase and lose your deposit. We recommended that your property purchase occur a day or two before the sale. To finance the new property’s purchase before the old one’s sale, you can arrange for a bridge loan.  A bridge loan allows you to purchase the new property by obtaining a short-term bank loan against your existing property’s equity. When you sell your existing property, you repay the bridge loan. While there is some small cost in interest and bank fees in using a bridge loan, the peace of mind and the additional security it delivers are often well worth the price."
  },
  {
    id: 7,
    category: {
      "name": "Purchase",
      "categoryId": 2
    },
    question: "What does it mean when two or more people hold title to a property as joint tenants?",
    answer:
      "It is quite common for two or more people to hold title to a property as joint tenants. In law, a joint tenancy is a form of ownership where two or more people owning a property together have an equal and undivided right to keep or dispose of the property. When joint tenants own a property, the interest of a deceased owner gets transferred to the remaining surviving owners by the right of survivorship. For example, if three joint tenants own a property and one of them dies, the two remaining tenants will obtain and hold a one-half share of the property."
  },
  {
    id: 8,
    category: {
      "name": "Purchase",
      "categoryId": 2
    },
    question: "What does it mean when two or more people hold title to a property as tenants-in-common?",
    answer:
      "Two or more people may own property as tenants-in-common.  In such an instance, each owner has a divided percentage interest in the property ownership. The ownership interest held by each owner does not have to be equal. When parties hold the title as tenants-in-common, a right of survivorship does not exist. On the owner’s death, the deceased ownership share forms part of the deceased’s estate."
  },
  {
    id: 9,
    category: {
      "name": "Purchase",
      "categoryId": 2
    },
    question: "What is title insurance?",
    answer:
      "Title insurance is a product that protects your (or a lender’s) ownership interest in a property against losses incurred as a result of undetected or unknown defects. For example, a title insurance may protect you if you discover, after closing, that a part of your garden shed encroaches onto your neighbours property and your neighbour is now demanding that the shed be removed. A policy may also provide coverage for certain other off-title risks, such as real property tax arrears. However, it is important to know that the risks must exist as of the policy date and be unknown to you. If the risks arises after the policy date or the insurer determines you were aware of the risk prior to the policy date, the insurer will likely deny coverage."
  },
  // More questions...
]

function FAQResidentialRealEstate() {
  const categories = [...new Set(faqs.map(x=>x.category.categoryId))].sort()

  const distinctCategories = categories
    .map(x=>{
      console.log(faqs.find(s=>s.category.id ===x))
      return {
        categoryId: x,
        name: faqs.find(s=>s.category.categoryId ===x).category.name
      }
    }).sort()
  console.log(distinctCategories)
  const [activeFaq, setActiveFaq] = useState(distinctCategories[0].categoryId)
  const [activeAnswers, setActiveAnswers] = useState(faqs)
  React.useEffect(()=>{
    let activeFaqList = new Array();
    faqs.map(faq=>{
      if (faq.category.categoryId === activeFaq){
        activeFaqList.push(faq);
      }
      return
    })
    setActiveAnswers(activeFaqList)
  }, [activeFaq])
  let count =2
  let dataToPrint

 // const [activeAnswers, setActiveAnswers] = useState(activeFaqList)


  return (

      <div className="2xl:mx-auto 2xl:container xl:px-20 sm:px-6 px-4 py-12 bg-indigo-700">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-extrabold text-gray-200">Frequently Asked Questions</h1>
        </div>
        <div className="md:flex hidden items-center xl:justify-start justify-between mt-12 ">
          {
            distinctCategories.map((item)=>{
              return  <button key={item.categoryId} onClick={() => {
                setActiveFaq(item.categoryId)
              }} className={activeFaq === item.categoryId? "text-xl border-b-2 border-gray-300 pb-2  font-semibold leading-5 focus:outline-none xl:mr-20 text-gray-300": "text-xl border-b-2 border-transparent pb-2 focus:border-gray-300 hover:border-gray-300 font-semibold leading-5 xl:mr-20 focus:outline-none text-gray-400 focus:text-gray-400 hover:text-gray-300"}>{item.name}</button>

            })
          }
        {/*  <button className="text-xl border-b-2 border-gray-300 pb-2  font-semibold leading-5 focus:outline-none xl:mr-20 text-gray-300">Account Setting</button>
          <button className="text-xl border-b-2 border-transparent pb-2 focus:border-gray-300 hover:border-gray-300 font-semibold leading-5 xl:mr-20 focus:outline-none text-gray-400 focus:text-gray-400 hover:text-gray-300">Pricing Plan</button>
          <button className="text-xl border-b-2 border-transparent pb-2 focus:border-gray-300 hover:border-gray-300 font-semibold leading-5 xl:mr-20 focus:outline-none text-gray-400 focus:text-gray-400 hover:text-gray-300">Delivery Methods</button>
          <button className="text-xl border-b-2 border-transparent pb-2 focus:border-gray-300 hover:border-gray-300 font-semibold leading-5 xl:mr-20 focus:outline-none text-gray-400 focus:text-gray-400 hover:text-gray-300">Usage Guidelines</button>
          <button className="text-xl border-b-2 border-transparent pb-2 focus:border-gray-300 hover:border-gray-300 font-semibold leading-5 xl:mr-20 focus:outline-none text-gray-400 focus:text-gray-400 hover:text-gray-300">Other Plans</button>
        */}</div>
        <div className="md:hidden relative w-full mx-auto bg-white rounded mt-12">
          <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="8 9 12 5 16 9" />
              <polyline points="16 15 12 19 8 15" />
            </svg>
          </div>
          <select onChange={(event) => {
            const result = distinctCategories.filter(catName=> catName.name === event.target.value)
            if (result){
              setActiveFaq(result[0].categoryId)
            }
          }}aria-label="Selected tab" className="form-select block w-full p-3  border rounded border-gray-200 text-gray-600 appearance-none bg-transparent relative z-10">
            {
              distinctCategories.map((item)=>{
                return  <option key={item.categoryId} selected={activeFaq === item.categoryId}
                                className="text-base text-gray-400"
                                >{item.name}</option>

              })
            }
           {/* <option selected className="text-base text-gray-400">
              Account Setting
            </option>
            <option className="text-base leading-none text-gray-400">Pricing Plan</option>
            <option className="text-base leading-none text-gray-400">Delivery Methods</option>
            <option className="text-base leading-none text-gray-400">Usage Guidelines</option>*/}
          </select>
        </div>


            {activeAnswers.map((faq, index, arr)=>{

              if(count % 2 === 0) {
                count++
                if (index === (arr.length-1)){
                  return (
                    <div className="flex flex-col mt-12">
                      <div className="w-full lg:flex items-stretch ">
                        <div key={faq.id} className="lg:w-1/2 lg:mr-4 lg:mb-0 mb-10">
                          <Popover>
                            {({ open }) => (
                              <>
                            <Popover.Button className={`
                ${open ? '' : 'text-opacity-90'}
                text-left text-gray-200 group rounded-md inline-flex text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                            ><ChevronDownIcon
                              className={`${open ? '' : 'text-opacity-70'}
                                 px-1 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                            />
                              {faq.question}

                            </Popover.Button>
                            <Popover.Panel className="text-base leading-6 text-gray-300 mt-4">
                              {faq.answer}
                            </Popover.Panel>
                            </>
                              )}
                          </Popover>
                        </div>
                      </div>
                    </div>
                  )
                }
                dataToPrint = (
                  <div key={faq.id} className="lg:w-1/2 lg:mr-4 lg:mb-0 mb-10">
                    <Popover>
                      {({ open }) => (
                        <>
                      <Popover.Button className={`
                ${open ? '' : 'text-opacity-90'}
                text-left text-gray-200 group rounded-md inline-flex text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                      ><ChevronDownIcon
                        className={`${open ? '' : 'text-opacity-70'}
                          px-1 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                      />
                        {faq.question}

                      </Popover.Button>
                      <Popover.Panel className="text-base leading-6 text-gray-300 mt-4">
                        {faq.answer}
                      </Popover.Panel>
                      </>
                        )}
                    </Popover>
                  </div>
                )
              return
              }
              else{
                count++
                return(
                  <div className="flex flex-col mt-12">
                    <div className="w-full lg:flex items-stretch ">
                      {dataToPrint}
                      <div key={faq.id} className="lg:w-1/2 mr-4">
                        <Popover>
                          {({ open }) => (
                            <>
                          <Popover.Button className={`
                ${open ? '' : 'text-opacity-90'}
                text-left text-gray-200 group rounded-md inline-flex text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                          ><ChevronDownIcon
                            className={`${open ? '' : 'text-opacity-70'}
                              px-1   h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                          />
                            {faq.question}

                          </Popover.Button>
                          <Popover.Panel className="text-base leading-6 text-gray-300 mt-4">
                            {faq.answer}
                          </Popover.Panel>
                            </>
                          )}

                        </Popover>

                      </div>
                    </div>
                  </div>
                )
              }

            })}
           {/* <div className="lg:w-1/2 lg:mr-4 lg:mb-0 mb-10">
              <h2 className="text-base font-semibold leading-4 text-gray-200">Are random sentences computer generated?</h2>
              <p className="text-base leading-6 text-gray-300 mt-4">No, the random sentences in our generator are not computer generated. We considered using computer generated sentences when building this tool, but found the results to be disappointing. Even though it took a lot of time, all the sentences in this generator were created by us.</p>
            </div>
            <div className="lg:w-1/2 mr-4">
              <h2 className="text-base font-semibold leading-4 text-gray-300">Can i write random sentences?</h2>
              <p className="text-base leading-6 text-gray-300 mt-4">No, the random sentences in our generator are not computer generated. We considered using computer generated sentences when building this tool, but found the results to be disappointing. Even though it took a lot of time, all the sentences in this generator were created by us.</p>
            </div>*/}

      </div>

  );
}
export default FAQResidentialRealEstate