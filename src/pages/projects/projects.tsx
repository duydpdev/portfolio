import { Projects } from '@/components'
import { Container } from 'react-bootstrap'

const ProjectPage = () => {
  return (
    <div className="project-screen">
      <section className="mt-md-5 mt-2 pt-md-5 pt-0">
        <Container>
          <Projects />
        </Container>
      </section>
    </div>
  )
}

export default ProjectPage
