import React from 'react'
import {} from '@emotion/react'
import RiseLoader from 'react-spinners/FadeLoader'

//css
const override = {
   display: "flex",
   margin: "0 auto",
   borderColor: "gray",
 };
 

const LoadingComponent = ()=> {
  return (
    <RiseLoader color='gray' loading={true} css={override}>
    </RiseLoader>
  )
}

export default LoadingComponent

