import React, { useState } from "react";
import HomeHeader from '../../home-header';
import { Popover } from '@headlessui/react'
import FAQRealEstate from '../../faq-residential-real-estate'
import ResidentialRealEstateLaw from '../../residential/residential'
import CommercialRealEstateLaw from '../../commercial/commercial'
import BusinessLaw from '../../business/business'
import MergerLaw from '../../mergers/mergers'

const HomeCore = (props) => {

  const [practiceAreaSelected, changePracticeAreaSelected] = React.useState("real-estate");
  React.useEffect(()=>{
  }, [practiceAreaSelected])

  return(
    <>
      <HomeHeader name={practiceAreaSelected} onChangeName={(e)=>{
        changePracticeAreaSelected(e)
      }}></HomeHeader>
      <ResidentialRealEstateLaw isSelectedPractice={practiceAreaSelected==='real-estate'}></ResidentialRealEstateLaw>
      <CommercialRealEstateLaw isSelectedPractice={practiceAreaSelected==='commercial-real-estate'}></CommercialRealEstateLaw>
      <BusinessLaw isSelectedPractice={practiceAreaSelected==='business'}></BusinessLaw>
      {/*<MergerLaw isSelectedPractice={practiceAreaSelected==='mergers'}></MergerLaw>*/}
    </>
  )
}
export default HomeCore