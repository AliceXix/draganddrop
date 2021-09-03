import React from "react"
import { useDrag, useDrop } from 'react-dnd'

function Bucket() {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
      // The type (or types) to accept - strings or symbols
      accept: 'BOX',
      // Props to collect
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
      })
    }))
  
    return (
      <div
        ref={drop}
        role={'Dustbin'}
        style={{ backgroundColor: isOver ? 'red' : 'white' }}
      >
        {canDrop ? 'Release to drop' : 'Drag a box here'}
      </div>
    )
}
  


function Box({content}) {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: 'BOX',
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

    return (
      <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1 }}>
          <div role="Handle" ref={drag} >
          <p>{content}</p>
            </div>
    </div>
  )
}

export {Box, Bucket}