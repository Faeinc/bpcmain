
import React from 'react'
import InboxIcon from '@heroicons/react/outline/InboxIcon'
import SparklesIcon from '@heroicons/react/outline/SparklesIcon'
import { GatsbyImage } from "gatsby-plugin-image"


const FeatureDetail = (detail) => {
  const itemsToProcess = detail.detail;
    if (itemsToProcess.length>0) {
      let isRight = true;
       return(
         <div className="relative bg-white pt-16 pb-32 overflow-hidden">
           {itemsToProcess.map((menuItem) => {

           if (isRight){
             isRight = !isRight
             const image = menuItem.node.descriptionImage.gatsbyImageData
             return <div key={menuItem.node.heading}>
             <div className="relative" key={menuItem.node.heading}>
               <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                 <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                   <div>
                     <div>
              <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
                     </div>
                     <div className="mt-6">
                       <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                         {menuItem.node.heading}
                       </h2>
                       <p className="mt-4 text-lg text-gray-500">
                         {menuItem.node.description.description}
                       </p>
                       <div className="mt-6">
                         {/*{!isRight &&
                         <a
                           href="#"
                           className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                         >
                           Get started
                         </a>
                         }*/}
                         <a
                           href="/contact/"
                           className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                         >
                           Contact Us
                         </a>
                       </div>
                     </div>
                   </div>

                 </div>
                 <div className="mt-12 sm:mt-16 lg:mt-0">
                   <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">

                     <GatsbyImage className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                   image={image} alt={menuItem.node.descriptionImage.title} />
                       {/*<img
                       className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                       src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                       alt="Inbox user interface"
                       />*/}


                   </div>
                 </div>
               </div>
             </div>
             </div>

           }

             isRight = !isRight
             const image = menuItem.node.descriptionImage.gatsbyImageData

             return (
               <div className="mt-24" key={menuItem.node.heading}>
                 <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                   <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                     <div>
                       <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                       </div>
                       <div className="mt-6">
                         <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                           {menuItem.node.heading}
                         </h2>
                         <p className="mt-4 text-lg text-gray-500">
                           {menuItem.node.description.description}
                         </p>
                         <div className="mt-6">
                           <a
                             href="/contact/"
                             className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                           >
                             Contact Us
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                     <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                       {image &&
                       <GatsbyImage className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                    image={image} alt={menuItem.node.descriptionImage.title} />
                       }

                     </div>
                   </div>
                 </div>
               </div>
             )
         })}
         </div>
    )
  }
    return null;

}
export default FeatureDetail
function returnLeft(){
  return (<h4>Left</h4>)
}
function returnRight(){
  return (<h4>Right</h4>)
}