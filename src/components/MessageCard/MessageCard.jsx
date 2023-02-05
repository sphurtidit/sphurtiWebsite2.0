import React from 'react'

function MessageCard({data}) {
  return (
    <div>
      <img src={data.imageUrl} alt="" /><br/>
      {data.name}<br/>
      {data.designation}<br/>
      {data.message}
    </div>
  )
}

export default MessageCard
