import React from 'react'

function SkillCard(props) {
  return (

        <div key={props.item.tech} className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl'>{props.item.tech}</h2>
            <p className='text-center'>{props.item.description}</p>
        </div>

  )
}

export default SkillCard