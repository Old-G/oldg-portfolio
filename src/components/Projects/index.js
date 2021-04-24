import content from '../../content'
import ProjectsComp from './ProjectsComp'
import Carousel from 'nuka-carousel'

const Projects = () => {
  return (
    <div
      id='myprojects'
      className='min-h-screen'
      style={{
        background: '#FEFEFE',
      }}
    >
      <h1 className='text-center text-5xl font-dosis font-bold my-16'>
        Projects
      </h1>
      <Carousel
        className='mb-10 focus:outline-none'
        speed={1500}
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            className='ml-6 focus:outline-none hover:text-gray-600'
            onClick={previousSlide}
          >
            Previous
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            className='mr-6 focus:outline-none hover:text-gray-600'
            onClick={nextSlide}
          >
            Next
          </button>
        )}
      >
        <ProjectsComp data={content.work.projects[0]} />
        <ProjectsComp data={content.work.projects[1]} />
        <ProjectsComp data={content.work.projects[2]} />
        <ProjectsComp data={content.work.projects[3]} />
        <ProjectsComp data={content.work.projects[4]} />
        <ProjectsComp data={content.work.projects[5]} />
        <ProjectsComp data={content.work.projects[6]} />
      </Carousel>
    </div>
  )
}

export default Projects
