import React, { useState } from 'react'
const faqs = [
  {
    id: 1,
    category: {
                  "name": "One",
                  "categoryId": 1
              },
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is NOT a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    category: {
      "name": "Two",
      "categoryId": 2
    },
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    category: {
      "name": "Three",
      "categoryId": 3
    },
    question: "What's the best thing about Switzerland?",
    answer:
      "That I rock",
  },
  {
    id: 4,
    category: {
      "name": "One",
      "categoryId": 1
    },
    question: "What's the best thing about Switzerland?",
    answer:
      "That I rock",
  },
  {
    id: 5,
    category: {
      "name": "One",
      "categoryId": 1
    },
    question: "What's the best thing about Switzerland?",
    answer:
      "That I rock again",
  },
  // More questions...
]

function FAQResidentialRealEstate() {

  const distinctCategories = [...new Set(faqs.map(x=>x.category.categoryId))]
    .map(x=>{
      return {
        categoryId: x,
        name: faqs.find(s=>s.id ===x).category.name
      }
    })
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
                      <h2 className="text-base font-semibold leading-4 text-gray-200">{faq.question}</h2>
                      <p className="text-base leading-6 text-gray-300 mt-4">{faq.answer}</p>
                    </div>
                    </div>
                    </div>
                  )
                }
                dataToPrint = (
                  <div key={faq.id} className="lg:w-1/2 lg:mr-4 lg:mb-0 mb-10">
                    <h2 className="text-base font-semibold leading-4 text-gray-200">{faq.question}</h2>
                    <p className="text-base leading-6 text-gray-300 mt-4">{faq.answer}</p>
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
                    <h2 className="text-base font-semibold leading-4 text-gray-300">{faq.question}</h2>
                    <p className="text-base leading-6 text-gray-300 mt-4">{faq.answer}</p>
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