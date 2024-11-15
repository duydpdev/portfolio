import { Col, Row } from 'react-bootstrap'
import ProjectCard from './project-card'
import { PROJECTS } from '@/helpers'
import { useTranslation } from 'react-i18next'

type TLanguage = 'vi' | 'en'

export default function Projects() {
  const { t, i18n } = useTranslation()

  const currentLanguage = i18n.resolvedLanguage as TLanguage

  return (
    <>
      <Row>
        <Col xs={12}>
          {i18n.resolvedLanguage === 'en' ? (
            <h3 className="text-center">
              My Recent <span className="brand-red">Works</span>{' '}
            </h3>
          ) : (
            <h3 className="text-center">
              <span className="brand-red">Dự Án</span> Gần Đây Của Tôi{' '}
            </h3>
          )}
          <h6 className="text-center mb-md-1 mb-2">
            {t('projectSection.subHeading')}
          </h6>
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
        {PROJECTS?.map(item => {
          return (
            <Col md={4} className="project-card" key={item.id}>
              <ProjectCard
                imgPath={item.imgPath}
                title={item.title}
                description={item.description[currentLanguage]}
                githubLink={item?.githubLink}
                demoLink={item.demoLink}
              />
            </Col>
          )
        })}
      </Row>
      <div className="mb-7"></div>
    </>
  )
}
