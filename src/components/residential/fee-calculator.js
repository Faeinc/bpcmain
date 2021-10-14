import React, { Fragment, useEffect, useRef, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Switch } from '@headlessui/react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function FeeCalculator() {
  const getData = graphql`
   query calculatorIcons {
  allContentfulBranding {
    nodes {
      realEstateCalculator {
        title
        gatsbyImageData
        description
      }
    }
  }
}

`
  const db = useStaticQuery(getData);
  const images = db.allContentfulBranding.nodes[0].realEstateCalculator
  const [stepOneVisible, setIsStepOneVisible] = useState(true)
  const [stepTwoVisible, setIsStepTwoVisible] = useState(false)
  const [stepThreeVisible, setIsThreeVisible] = useState(false)
  const [transactionType, setTransactionType] = useState()
  const [firstTimeBuyer, setFirstTimeBuyer] = useState(false)
  const [inToronto, setInToronto] = useState(false)
  const [purchasePrice, setPurchasePrice] = useState(0)
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  const [ontarioLTT, setOntarioLTT] =useState(0)
  const [torontoLTT, setTorontoLTT] =useState(0)
  const [totalFees, setTotalFees] =useState(0)
  let [baseLTT, level2LTT, level3LTT,level4LTT, level5LTT, totalOntarioLTT, totalTorontoLTT] = [0.00, 0.00,0.00,0.00, 0.00, 0.00]
  useEffect(() => {
    let tempPurchasePrice = 0
    totalTorontoLTT = 0
    totalOntarioLTT = 0
    if (purchasePrice > 55000){
      baseLTT = 55000*0.005
       tempPurchasePrice = purchasePrice - 55000
    }else{
       baseLTT = purchasePrice *0.005
     }
     console.log(baseLTT)
    if (tempPurchasePrice>194999.99){
      level2LTT = 0.01 * 194999.99
      tempPurchasePrice = tempPurchasePrice - 194999.99
    }else{
      level2LTT = tempPurchasePrice * 0.01
      tempPurchasePrice = 0
    }
    if (tempPurchasePrice> 149999.99){
      level3LTT = 0.015 * 149999.99
      tempPurchasePrice = tempPurchasePrice-149999.99
    }else{
      level3LTT = tempPurchasePrice * 0.015
      tempPurchasePrice = 0;
    }
    if (tempPurchasePrice>1599999.99){
      level4LTT = 1599999.99 * 0.02
      tempPurchasePrice = tempPurchasePrice - 1599999.99
    }else{
      level4LTT = tempPurchasePrice *0.02
      tempPurchasePrice = 0
    }
    console.log(level5LTT)
    if (tempPurchasePrice>0){
      level5LTT = tempPurchasePrice *0.025
    }
    totalOntarioLTT = Math.round(baseLTT + level2LTT + level3LTT + level4LTT + level5LTT)
    totalTorontoLTT = totalOntarioLTT
    if (totalOntarioLTT<100){
      totalOntarioLTT = 100
    }
    if (firstTimeBuyer){
      if (totalOntarioLTT>4000){
        totalOntarioLTT = totalOntarioLTT -4000
      }
      else{
        totalOntarioLTT = 0
      }
      if (totalTorontoLTT >4475){
        totalTorontoLTT = totalTorontoLTT -4475
      }
      else{
        totalTorontoLTT =0
      }
    }
    if (!inToronto){
      totalTorontoLTT = 0
    }
    baseLTT = level2LTT = level3LTT = level4LTT = level5LTT = 0
    setOntarioLTT(totalOntarioLTT)
    setTorontoLTT(totalTorontoLTT)
    const legalFees = transactionType==='purchase'? 999: transactionType==='sale' ? 899: 799
    const taxes = 0.13*legalFees
    let total = 0.00;
    if (transactionType === 'sale'){
      total = legalFees + taxes + total + 73.45
    }
    if (transactionType === 'purchase'){
      total = ontarioLTT + torontoLTT + legalFees + taxes + 155.24
    }
    if (transactionType === 'refinance'){
      total = legalFees + taxes + 77.62
    }
    setTotalFees(total)
  }, [purchasePrice, firstTimeBuyer, inToronto]);
  //const saleImage = images.filter(f=> f.title ==='sale')
  //const refinance = images.filter(f=> f.title ==='refinance')
  return (
    <>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="bg-white fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="bg-white flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-indigo-700 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden transform transition-all">

            <div className="flex items-center justify-center" >
        <div className="xl:w-10/12 w-full px-8 bg-white">
          <div className="bg-white py-12 flex flex-wrap items-center justify-center">
            <div className="hidden w-52 h-16 relative md:flex md:mt-0 mt-4">
              <img src={stepOneVisible? "https://i.ibb.co/DwNs7zG/Steps.png": "https://i.ibb.co/wNZ4nzy/Steps2.png"} alt="step1" className="w-full h-full" />
              <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                <p className={stepOneVisible? "w-full text-sm font-medium leading-4 text-white": "w-full text-sm font-medium leading-4 text-indigo-800" }>Type of Transaction</p>
              </div>
            </div>
            <div className="hidden w-52 h-16 relative md:flex md:mt-0 mt-4">
              <img src={stepTwoVisible? "https://i.ibb.co/DwNs7zG/Steps.png": "https://i.ibb.co/wNZ4nzy/Steps2.png"}  alt="step2" className="w-full h-full" />
              <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                <p className={stepTwoVisible? "w-full text-sm font-medium leading-4 text-white": "w-full text-sm font-medium leading-4 text-indigo-800"}>Transaction Details</p>
               </div>
            </div>
            <div className="hidden w-52 h-16 relative md:flex md:mt-0 mt-4">
              <img src={stepThreeVisible? "https://i.ibb.co/DwNs7zG/Steps.png": "https://i.ibb.co/wNZ4nzy/Steps2.png"}  alt="step3" className="w-full h-full" />
              <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                <p className={stepThreeVisible? "w-full text-sm font-medium leading-4 text-white": "w-full text-sm font-medium leading-4 text-indigo-800"}>Quote</p>
              </div>
            </div>
            <div className={stepOneVisible? "xl:px-24" : "xl:px-24 hidden"}>
              <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                <ul
                  role="list"
                  className="space-y-12 sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                >
                  {images.map((image) =>
                    (

                      <>
                        <li key={image.title} onClick={()=> {
                          setTransactionType(image.title)
                          if (image.title === 'refinance'){
                            setIsStepOneVisible(false)
                            setIsStepTwoVisible(false)
                            setIsThreeVisible(true)
                          }
                          else{
                            setIsStepOneVisible(false)
                            setIsStepTwoVisible(true)
                            setIsThreeVisible(false)
                          }

                        }}>
                          <div className="space-y-4">
                            <div className="aspect-w-3 aspect-h-2">
                              <GatsbyImage alt={image.description} image={image.gatsbyImageData} className="object-cover shadow-lg rounded-lg"></GatsbyImage>
                            </div>
                            <div className="space-y-2">
                              <div className="text-lg leading-6 font-medium space-y-1">
                                <h3 className="uppercase text-center">{image.title}</h3>
                              </div>
                            </div>
                          </div>
                        </li>
                      </>
                    ))}
                </ul>

              </div>
            </div>
            <div className={stepTwoVisible? "xl:px-24" : "xl:px-24 hidden"}>
              <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                <div className="flex flex-col md:mr-16">
                  <div className="pb-12">
                    <label htmlFor="price" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                      <p className="capitalize mb-2">{transactionType} Price </p>
                    </label>
                    <div className="relative">
                      <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-3 border-r dark:border-gray-700 h-full">
                        <span className="uppercase text-sm leading-tight tracking-normal">cad</span>
                      </div>
                      <input id="price"
                             className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 font-normal w-auto h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow"
                             placeholder="$0.00"
                             type="number"
                             value={purchasePrice}
                             onChange={(e)=>{
                               setPurchasePrice(parseInt(e.target.value))
                             }}/>
                    </div>
                  </div>
                  <div className={transactionType==='purchase'? "pb-12": "pb-12 hidden"} >
                    <label htmlFor="price" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                      <p className="capitalize mb-2">Are you a first time home buyer? </p>
                    </label>
                    <Switch
                      checked={firstTimeBuyer}
                      onChange={setFirstTimeBuyer}
                      className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="sr-only">Use setting</span>
                      <span aria-hidden="true" className="pointer-events-none absolute bg-white w-full h-full rounded-md" />
                      <span
                        aria-hidden="true"
                        className={classNames(
                          firstTimeBuyer ? 'bg-indigo-600' : 'bg-gray-200',
                          'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200'
                        )}
                      />
                      <span
                        aria-hidden="true"
                        className={classNames(
                          firstTimeBuyer ? 'translate-x-5' : 'translate-x-0',
                          'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200'
                        )}
                      />
                    </Switch>
                  </div>
                  <div className={transactionType==='purchase'? "pb-12": "pb-12 hidden"}>
                    <label htmlFor="price" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                      <p className="capitalize mb-2">Is property located in Toronto? </p>
                    </label>
                    <Switch
                      checked={inToronto}
                      onChange={setInToronto}
                      className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="sr-only">Use setting</span>
                      <span aria-hidden="true" className="pointer-events-none absolute bg-white w-full h-full rounded-md" />
                      <span
                        aria-hidden="true"
                        className={classNames(
                          inToronto ? 'bg-indigo-600' : 'bg-gray-200',
                          'pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200'
                        )}
                      />
                      <span
                        aria-hidden="true"
                        className={classNames(
                          inToronto ? 'translate-x-5' : 'translate-x-0',
                          'pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200'
                        )}
                      />
                    </Switch>
                  </div>
                </div>


              </div>
              <div className="pt-5 pb-12">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={()=>{
                      setIsStepTwoVisible(false)
                      setIsThreeVisible(false)
                      setIsStepOneVisible(true)
                      setInToronto(false)
                      setFirstTimeBuyer(false)
                      setPurchasePrice(0)
                    }}>
                    Restart
                  </button>
                  <button

                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={()=>{
                    setIsStepOneVisible(false)
                    setIsStepTwoVisible(false)
                    setIsThreeVisible(true)
                  }}>
                    Generate Quote
                  </button>
                </div>
              </div>
            </div>
            <div className={stepThreeVisible? "xl:px-24" : "xl:px-24 hidden"}>
              <div className="bg-gray-100">
                <div className="pt-12 sm:pt-16 lg:pt-20">
                  <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Flat Fee Pricing</h2>
                  </div>
                </div>
                <div className="mt-8 bg-gray-100 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
                  <div className="relative">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div>
                        <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                          <dl className="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:col-span-5">
                            <div className="pb-4 flex items-center justify-between">
                              <dt className="text-gray-600">Our Fee</dt>
                              <dd className="font-medium text-gray-900">{transactionType==='purchase'? '$999': transactionType==='sale' ? '$899': '$799'}</dd>
                            </div>
                            <div className="py-4 flex items-center justify-between">
                              <dt className="text-gray-600">HST on Legal Fees</dt>
                              <dd className="font-medium text-gray-900">${transactionType==='purchase'? 999*0.13 : transactionType==='sale' ? 899 *0.13: 799*0.13}</dd>
                            </div>
                            <div className={transactionType==='purchase'? "py-4 flex items-center justify-between": "hidden"}>
                              <dt className="text-gray-600">Land Transfer Tax (Ontario)</dt>
                              <dd className="font-medium text-gray-900">${ontarioLTT}</dd>
                            </div>
                            <div className={transactionType==='purchase'  && inToronto? "py-4 flex items-center justify-between": "hidden"}>
                              <dt className="text-gray-600">Land Transfer Tax (Toronto)</dt>
                              <dd className="font-medium text-gray-900">${torontoLTT}</dd>
                            </div>
                            <div className={transactionType==='purchase'? "py-4 flex items-center justify-between": "hidden"}>
                              <dt className="text-gray-600">Government Registration Fees ($77.62 Each)</dt>
                              <dd className="font-medium text-gray-900">$155.24</dd>
                            </div>
                            <div className={transactionType==='refinance'? "py-4 flex items-center justify-between": "hidden"}>
                              <dt className="text-gray-600">Government Registration Fees ($77.62 Each)</dt>
                              <dd className="font-medium text-gray-900">$77.62</dd>
                            </div>
                            <div className="py-4 flex items-center justify-between text-left">
                              <dt className="text-gray-600">Other Disbursements (If Applicable): Fees Charged By Govt, Teranet Fees, Costs Of Condo Status Certificate, Lawyers Creditor's Letters And Title Insurance</dt>
                              <dd className="font-medium text-gray-900">TBD</dd>
                            </div>
                            <div className={transactionType==='sale'? "py-4 flex items-center justify-between": "hidden"}>
                              <dt className="text-gray-600">LSO Transaction Levy</dt>
                              <dd className="font-medium text-gray-900">$73.45</dd>
                            </div>
                            <div className="pt-4 flex items-center justify-between">
                              <dt className="font-medium text-gray-900">Summary </dt>
                              <dd className="font-medium text-indigo-600">${totalFees} plus Other Disbursements, as per above</dd>
                            </div>
                          </dl>
                        </div>

                        <div className={transactionType==='purchase'? 'flex-1 bg-white px-6 py-8 lg:p-12': "hidden"}>
                          <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Important Information</h3>
                          <p className="mt-6 text-base text-gray-500">
                            This quote applies to residential real estate transactions for a typical purchase with up to one mortgage through a commercial lender. Private mortgages are subject to additional fees.
                          </p>
                          <p className="mt-6 text-base text-gray-500">
                            Our disbursements (if applicable) comply with LSO Rule 4.2-2.1:
                            HST, Ontario and Toronto land transfer tax, government registration fees, Teranet fees, costs of condo status certificate, cost of tax certificates, lawyers creditor's letters and title insurance vary from transaction to transaction and are not included in this quote.
                          </p>
                          <p className="mt-6 text-base text-gray-500">
                            If we do not receive your Agreement of Purchase and Sale and mortgage instructions at least five business days prior to the date of your closing, additional fees may apply to handle rush requests. If any issues or unforeseen circumstances arise, we will advise you immediately.
                          </p>

                        </div>
                        <div className={transactionType==='sale'? 'flex-1 bg-white px-6 py-8 lg:p-12': "hidden"}>
                          <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Important Information</h3>
                          <p className="mt-6 text-base text-gray-500">
                            This quote applies to residential real estate transactions for a typical sale requiring, at most, one mortgage discharge. Discharge of additional encumbrances or correction of title issues may be subject to additional fees.
                          </p>
                          <p className="mt-6 text-base text-gray-500">
                            Our disbursements (if applicable) comply with LSO Rule 4.2-2.1:
                            HST, Ontario and Toronto land transfer tax, government registration fees, Teranet fees, costs of condo status certificate, cost of tax certificates, lawyers creditor's letters and title insurance vary from transaction to transaction and are not included in this quote.
                          </p>
                          <p className="mt-6 text-base text-gray-500">
                            If we do not receive your Agreement of Purchase and Sale at least five business days prior to the date of your closing, additional fees may apply to handle rush requests. If any issues or unforeseen circumstances arise, we will advise you immediately.
                          </p>

                        </div>
                        <div className={transactionType==='refinance'? 'flex-1 bg-white px-6 py-8 lg:p-12': "hidden"}>
                          <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Important Information</h3>
                          <p className="mt-6 text-base text-gray-500">
                            This quote applies to residential real estate transactions for a typical mortgage refinance through a bank or credit union.  Private mortgages may be subject to additional fees.
                          </p>
                          <p className="mt-6 text-base text-gray-500">
                            Our disbursements (if applicable) comply with LSO Rule 4.2-2.1:
                            HST, Ontario and Toronto land transfer tax, government registration fees, Teranet fees, costs of condo status certificate, cost of tax certificates, lawyers creditor's letters and title insurance vary from transaction to transaction and are not included in this quote.
                          </p>
                          <p className="mt-6 text-base text-gray-500">
                            If any issues or unforeseen circumstances arise, we will advise you immediately.
                          </p>

                        </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
      <div className="mt-8 flex">
        <div className="inline-flex rounded-md shadow">
          <button
            type="button"
            onClick={()=>{
              setIsThreeVisible(false)
              setIsStepTwoVisible(false)
              setIsStepOneVisible(true)
              setOpen(true)
            }}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get a Fee Quote
          </button>
        </div>
        <div className="ml-3 inline-flex">
          <a
            href="/practice-areas/residential-real-estate/"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
          >
            Learn more
          </a>
        </div>
      </div>
    </>
  );
}

export default FeeCalculator;
