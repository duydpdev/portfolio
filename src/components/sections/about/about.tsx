import { Col, Row } from 'react-bootstrap'
import codingJSON from '@/assets/lottie/coding.json'
import { DEVELOPMENT_LOTTIE } from '@/assets/lottie/string/development'
import { CONTACT_LOTTIE } from '@/assets/lottie/string/contact'
import { FaGraduationCap } from 'react-icons/fa6'
import { APP_DATA } from '@/helpers'
import { AnimationLottie, GlowCard, Divider } from '@/@core'
import { SocialMedia } from '@/components'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { i18n, t, ready } = useTranslation()

  if (!ready) return <p>Loading translations...</p>

  const hobbies =
    (t('aboutSection.hobbies.list', { returnObjects: true }) as any[]) || []

  const isEnglish = i18n.language === 'en'

  return (
    <>
      <Row>
        <Col md={6} xs={12}>
          <h3 className="text-center mb-md-5 mb-2">
            {isEnglish ? (
              <>
                Know Who <span className="text-pink-100">I'M</span>
              </>
            ) : (
              <>
                Tôi Là <span className="text-pink-100">Ai?</span>
              </>
            )}
          </h3>
          <div>
            <p>{t('aboutSection.introduce')}</p>
            <p>{t('aboutSection.workAt')}</p>
            <p>{t('aboutSection.study')}</p>
          </div>
          <div>
            <p>{t('aboutSection.hobbies.desc')}</p>
            <ul>
              {hobbies.map((hobby: any, index: number) => (
                <li key={index}>{hobby.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-center brand-red">
              {isEnglish
                ? '"Pursuing Your Dreams Is How You Become Homeless ~.~"'
                : '"Theo đuổi ước mơ đôi khi là con đường dẫn đến cảnh màn trời chiếu đất ~.~"'}
            </p>
            <p className="text-center brand-red">--Jimmy O Yang</p>
          </div>
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex align-items-center justify-content-center"
        >
          <AnimationLottie width="80%" animationPath={codingJSON} />
        </Col>
      </Row>

      <Row>
        <Col
          md={6}
          xs={12}
          className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
        >
          <AnimationLottie
            width="50%"
            animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
          />
        </Col>
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <div className="d-flex flex-column align-items-center gap-3">
            <h4 className="text-center brand-red">
              {isEnglish ? 'Education' : 'Học Vấn'}
            </h4>
            <GlowCard identifier="experience-5">
              <div className="p-3 relative">
                <div className="experience-container">
                  <div className="duration-text">
                    <p>2019-2023</p>
                  </div>
                  <div className="details">
                    <FaGraduationCap className="icon" size={36} />
                    <div className="info">
                      <p className="title">
                        {isEnglish ? 'Software Engineer' : 'Kỹ Sư Phần Mềm'}
                      </p>
                      <p className="company">
                        {isEnglish
                          ? 'FPT University (DaNang, VietNam)'
                          : 'Đại Học FPT (Đà Nẵng, Việt Nam)'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <h3 className="mb-md-5 mb-2">
            {isEnglish ? 'FIND ME ON' : 'KẾT NỐI VỚI TÔI'}
          </h3>
          <SocialMedia
            github={APP_DATA.GITHUB_URL}
            facebook={APP_DATA.FACEBOOK_URL}
          />
        </Col>
        <Col
          md={6}
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <AnimationLottie
            width="50%"
            animationPath={JSON.parse(CONTACT_LOTTIE)}
          />
          <h4 className="text-center">
            {isEnglish ? 'Contact Me' : 'Liên Hệ Với Tôi'}
          </h4>
        </Col>
      </Row>
      <div className="mb-5"></div>
    </>
  )
}
