import notFoundJSON from '@/assets/lottie/404.json'
import { AnimationLottie } from '../animation-lottie'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{
        height: '100vh',
        textAlign: 'center'
      }}
    >
      <Row className="justify-content-center align-items-center">
        <Col md={8}>
          <AnimationLottie width="100%" animationPath={notFoundJSON} />
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginTop: '1rem'
            }}
          >
            {t('notFound.title')}
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              color: '#6c757d',
              marginTop: '0.5rem'
            }}
          >
            {t('notFound.desc')}
          </p>
          <Link
            to={'/'}
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#8b5cf6',
              color: '#fff',
              borderRadius: '5px',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={e =>
              (e.currentTarget.style.backgroundColor = '#6d28d9')
            }
            onMouseLeave={e =>
              (e.currentTarget.style.backgroundColor = '#8b5cf6')
            }
          >
            {t('notFound.home')}
          </Link>
        </Col>
      </Row>
    </div>
  )
}
