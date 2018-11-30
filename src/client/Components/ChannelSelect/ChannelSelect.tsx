import React from 'react'
import { CHANNELS } from './../../channel.config'

function ChannelSelect () {
  let arr = []

  for (let prop in CHANNELS) {
    arr.push(CHANNELS[prop])
  }

  const options = arr.map((c, i) => {
    return <option value={c.id} key={i}>{c.label}</option>
  })

  return (
    <select className='w-100' name='channel'>
      { options }
    </select>
  )
}

export default ChannelSelect
