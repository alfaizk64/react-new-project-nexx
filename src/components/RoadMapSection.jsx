import React from 'react'
import MileStone from './MileStone'

const roadmap = [
    {
        id:1,
        title: 'Project kickoff',
        description: 'Establishing project objectives, setting priorities, and understanding stakeholders',
    },
    {
        id:2,
        title: 'Planning & Design',
        description: 'Identifying project requirements, defining scope, and designing project architecture',
    },
    {
        id:3,
        title: 'Development',
        description: 'Implementing the project, coding, and testing',
    },
    {
        id:4,
        title: 'Testing & QA',
        description: 'Verifying the project functionality, addressing bugs, and conducting quality assurance',
    },
    {
        id:5,
        title: 'Deployment & Maintenance',
        description: 'Setting up deployment pipelines, monitoring, and maintaining the project',
    }

]



const RoadMapSection = () => {
  return (
    <>
      <section className=' max-w-96 mx-auto'>
        <h2 className="font-bold text-3xl text-center mb-16">Roadmap</h2>
        <div className="">
          {roadmap.map((roadmapItem,index) => (
            <MileStone
             key={index} 
             title={roadmapItem.title}              
             description={roadmapItem.description}
             lastItem={index ===roadmap.length-1}
             />
          ))}
        </div>
      </section>
      
    </>
  )
}


export default RoadMapSection
