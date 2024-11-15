import { Col, Container, Row } from 'react-bootstrap'
import { MdFileDownload } from 'react-icons/md'
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
import { useRef } from 'react'
import { urlCV as url } from '@/helpers'

export default function HomePage() {
  const { t } = useTranslation()

  const experienceRef = useRef<HTMLDivElement>(null)

  const handleClickMySkills = () => {
    experienceRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  const handleDownloadCV = () => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className="homepage-screen">
      <section className="mt-md-7 mt-2">
        <Container style={{ position: 'relative' }}>
          <Row>
            <Col className="d-none d-md-block" md={6}>
              <HeroLeft
                handleClickMySkills={handleClickMySkills}
                handleDownloadCV={handleDownloadCV}
              />
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
          <Experience ref={experienceRef} />
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
