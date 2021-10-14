import React from "react";
import BusinessHeader from './business-header'
function BusinessLaw(isSelectedPractice) {
  return(
    <div className={!isSelectedPractice.isSelectedPractice? 'hidden': ''}>
      <BusinessHeader></BusinessHeader>

    </div>
  )
}
export default BusinessLaw