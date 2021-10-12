
import React from "react";
import ResidentialHeader from './residential-header'
import FAQRealEstate from '../faq-residential-real-estate'
import ResidentialTestimonial from './residential-testimonial'
import FeeCalculator from './fee-calculator'
import WhyChooseBPCResidential from './why-choose-us'
function ResidentialRealEstateLaw(isSelectedPractice) {
  return(
    <div className={!isSelectedPractice.isSelectedPractice? 'hidden': ''}>
      <ResidentialHeader></ResidentialHeader>
      <ResidentialTestimonial></ResidentialTestimonial>
      <WhyChooseBPCResidential></WhyChooseBPCResidential>
      <FAQRealEstate></FAQRealEstate>
    </div>
  )
}
export default ResidentialRealEstateLaw