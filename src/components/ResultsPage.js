import React from 'react'
import SubHeader from './SubHeader'

const ResultsPage = props => {
  return (
    <div>
      <SubHeader
      subHeader={"Nice one, your score is " + props.score}/>
    </div>
  )
};

export default ResultsPage;