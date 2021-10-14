
import React from "react";
import CommercialHeader from './commercial-header'
function CommercialRealEstateLaw(isSelectedPractice) {
  return(
    <div className={!isSelectedPractice.isSelectedPractice? 'hidden': ''}>
      <CommercialHeader></CommercialHeader>

    </div>
  )
}
export default CommercialRealEstateLaw