import { Col, Container, Row } from 'react-bootstrap'
import { MdFileDownload } from 'react-icons/md'
import bg from '@/assets/section.svg'
import { useTranslation } from 'react-i18next'
import {
  Experience,
  HeroLeft,
  HeroRight,
  ResizeButton,
  Skills,
  Introduction
} from '@/components'
import { Divider } from '@/@core'

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="homepage-screen">
      <div
        style={{
          backgroundImage: `url(${bg})`,
          width: '100%',
          height: 500,
          position: 'absolute',
          top: 0,
          backgroundRepeat: 'no-repeat',
          zIndex: 0
        }}
      ></div>
      <section className="mt-md-7 mt-2">
        <Container style={{ position: 'relative' }}>
          <Row>
            <Col className="d-none d-md-block" md={6}>
              <HeroLeft />
            </Col>
            <Col md={6}>
              <HeroRight />
            </Col>
            <Col
              xs={12}
              className="d-md-none d-flex mt-4 justify-content-center"
            >
              <ResizeButton
                btnText={t('heroSection.cv')}
                btnIcons={<MdFileDownload />}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Introduction />
        </Container>
      </section>
      <Divider />
      <section>
        <Container>
          <Experience />
        </Container>
      </section>
      <Divider />
      <section>
        <Container>
          <Skills />
        </Container>
      </section>
    </div>
  )
}
