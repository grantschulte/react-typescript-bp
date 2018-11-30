import React from 'react'
import ChannelSelect from '../ChannelSelect/ChannelSelect'

// console.log(tcss)

function VideoSelectionForm (props) {
  return (
    <form name="videoSelectionForm" onSubmit={props.submitVideoForm}>
      <div className='flex'>
        <div className='w-40 mr2'>
          <ChannelSelect />
        </div>

        <div className='w-40 mr2'>
          <input type='text' className='w-100' name='videoId' />
        </div>

        <div className='w-20'>
          <button type='submit' className='w-100'>Submit</button>
        </div>
      </div>
    </form>
  )
}

export default VideoSelectionForm
