import React, { useState } from "react";
import { GatsbyImage } from 'gatsby-plugin-image'
import Typist from 'react-typist';
import { graphql, StaticQuery, useStaticQuery } from 'gatsby'
export default function HomeHeader(props) {

  const getData = graphql`
   query HomeHeaderItems {
  allContentfulBranding {
    nodes {
      businessLawHeader {
        gatsbyImageData
        description
      }
      realEstateHeader {
        description
        gatsbyImageData
      }
    }
  }
}

`

  const db = useStaticQuery(getData);
  const branding = db.allContentfulBranding.nodes[0]
  const [activeArea, setActiveArea] = useState('real-estate');

  const businessLawHeader = branding.businessLawHeader.gatsbyImageData
  const realEstateHeader = branding.realEstateHeader.gatsbyImageData
  return (
    <>
      <div className="bg-gray-1000">
        <section>
          <div className="pt-20 lg:px-4 ">
             <div className="2xl:mx-auto 2xl:container w-full flex justify-center items-center flex-col">
              <div className="mb-20">
                <Typist cursor={{
                  show: true,
                  blink: true,
                  element: '',
                  hideWhenDone: true,
                  hideWhenDoneDelay: 10,
                }} avgTypingDelay={90}>
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-center">
                    <span className="block xl:inline text-gray-800">Beganyi P.C.</span> <br/>
                    <span className="block xl:inline text-gray-800">Business | Real Estate</span> <br/>
                    <span className="block xl:inline text-indigo-700 underline">Law Firm </span>
                  </h1>
                </Typist>
              </div>
            </div>
          </div>
          <div className="2xl:mx-auto 2xl:container w-full mt-24 flex flex-col justify-between items-center">
            <div className="mx-auto container ">

              <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
                <div className="py-8" onClick={()=>{
                  setActiveArea('real-estate')
                  props.onChangeName('real-estate')
                }}>
                  <div role="alert" className="container mx-auto justify-center">
                    <div className="relative shadow rounded-md">
                      <GatsbyImage className="w-full h-full rounded" alt="Real Estate Law" image={realEstateHeader}></GatsbyImage>
                      <div className={activeArea ==='real-estate'?
                        "flex items-center justify-center w-full h-full absolute inset-0 bg-blue-700  bg-opacity-10 rounded hover:bg-opacity-10":
                        "flex items-center justify-center w-full h-full absolute inset-0 bg-blue-700  bg-opacity-90 rounded hover:bg-opacity-10 transform hover:-translate-y-1 hover:scale-110"}>

                      <div className="px-5   flex flex-col items-center">
                          <p className="text-base sm:text-xl md:text-2xl font-bold md:leading-8 text-center text-gray-100"> {activeArea==='real-estate'? 'CURRENT SELECTION': 'LEARN MORE'} |> REAL ESTATE LAW</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-8" onClick={()=>{
                  setActiveArea('business')
                  props.onChangeName('business')
                }}>
                  <div role="alert" className="container mx-auto justify-center">
                    <div className="relative shadow rounded-md">
                      <GatsbyImage alt="Business Law" image={businessLawHeader} className="w-full h-full rounded"></GatsbyImage>

                      <div className={activeArea ==='business'?
                        "flex items-center justify-center w-full h-full absolute inset-0 bg-blue-700  bg-opacity-10 rounded":
                        "flex items-center justify-center w-full h-full absolute inset-0 bg-blue-700  bg-opacity-90 rounded hover:bg-opacity-10 transform hover:-translate-y-1 hover:scale-110"}>
                        <div className="px-5   flex flex-col items-center">
                          <p className="text-base sm:text-xl md:text-2xl font-bold md:leading-8 text-center text-gray-100">{activeArea==='business'? 'CURRENT SELECTION': 'LEARN MORE'} |> BUSINESS LAW</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*<div className="md:-mt-40 -mt-20 xl:px-40 md:px-20 px-6 flex justify-center items-center">

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
                 Code block starts

                <div className="w-full sm:w-1/2 rounded bg-white dark:bg-gray-800 pr-5">
                  <div className="w-full h-24 bg-gray-100 dark:bg-gray-700 rounded-t">
                    <GatsbyImage alt="Business Law Header Section" image={businessLawHeader}
                                 className="object-contain"></GatsbyImage>
                  </div>
                  <div className="w-full h-64 border-t border-gray-400 dark:border-gray-600 rounded-b">
                      <span>Test</span>
                  </div>
                </div>
                 Code block ends
                 Code block starts
                <div className="w-full sm:w-1/2 rounded bg-white dark:bg-gray-800 pl-5">
                  <div className="w-full h-24 bg-gray-100 dark:bg-gray-700 rounded-t">
                    <GatsbyImage alt="Real Estate Law Header Section" image={realEstateHeader}
                                 className="object-contain"></GatsbyImage>
                  </div>
                  <div className="w-full h-64 border-t border-gray-400 dark:border-gray-600 rounded-b">
                  </div>
                </div>
                 Code block ends

              </div>
              </div>
         */} </div>
        </section>
      </div>
    </>
  );
}
