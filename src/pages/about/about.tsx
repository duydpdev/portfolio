import { About } from '@/components'
import { Container } from 'react-bootstrap'

const AboutPage = () => {
  return (
    <div className="about-screen">
      <section className="mt-md-5 mt-2 pt-md-5 pt-0">
        <Container>
          <About />
        </Container>
      </section>
    </div>
  )
}

export default AboutPage
