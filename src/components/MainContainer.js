import React from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center ml-12">
      <ButtonsList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
