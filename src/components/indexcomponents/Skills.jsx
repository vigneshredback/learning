import React from 'react'
import SkillCard from './SkillCard'

function Skills() {
    let myskills = [
        {
            id:1,
            tech:'html',
            description:'html htmlhtml html html html html html html html html '
        },
        {
            id:2,
            tech:'css',
            description:'css css css css css css css css css css '
        },
        {
            id:3,
            tech:'js',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
        },
        {
            id:4,
            tech:'react',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
        },

    ]
  return (
    <>
        <div className='flex flex-col items-center justify-center bg-[pink] h-[90vh]'>
            <h1 className='mt-[50px] text-[60px]'>Skills</h1>
            <div className='flex gap-10 mt-5 '>
                {myskills.map((item)=>(

                    <SkillCard item={item}   />
                    
                ))}
            </div>
        </div>
    </>
  )
}

export default Skills