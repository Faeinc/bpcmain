
import React from "react";
import MergerHeader from './merger-header'
function MergerLaw(isSelectedPractice) {
  return(
    <div className={!isSelectedPractice.isSelectedPractice? 'hidden': ''}>
      <MergerHeader></MergerHeader>

    </div>
  )
}
export default MergerLaw