import Typewriter from 'typewriter-effect'
import { useTranslation } from 'react-i18next'
import '../hero.scss'
import { MdFileDownload } from 'react-icons/md'
import { AiFillFire } from 'react-icons/ai'
import { APP_DATA } from '@/helpers'
import { SocialMedia, ResizeButton } from '@/components'

interface IProps {
  handleClickMySkills: () => void
  handleDownloadCV: () => void
}

export default function HeroLeft({
  handleClickMySkills,
  handleDownloadCV
}: IProps) {
  const { t } = useTranslation()

  return (
    <div className="hero-left">
      <h3>
        Hi There!{' '}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h3>
      <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
        I'M &nbsp;
        <strong className="brand-red">{t('appHeader.brand')}</strong>
      </h3>
      <Typewriter
        options={{
          strings: [
            'Software Developer',
            'Freelancer',
            'MERN Stack Developer',
            'Open Source Contributor'
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          wrapperClassName: 'brand-green'
        }}
      />
      <div className="mt-md-6 mt-3 mb-md-5 mb-2">
        <SocialMedia
          github={APP_DATA.GITHUB_URL}
          facebook={APP_DATA.FACEBOOK_URL}
        />
      </div>
      <div className="d-md-flex d-none gap-4">
        <ResizeButton
          onClick={handleClickMySkills}
          btnText={t('heroSection.exp')}
          btnIcons={<AiFillFire style={{ color: 'orange' }} />}
          btnStyle={{
            background: 'unset',
            border: '1px solid var(--border-hero-right)',
            color: 'var(--text-white-1)'
          }}
        />
        <ResizeButton
          onClick={handleDownloadCV}
          btnText={t('heroSection.cv')}
          btnIcons={<MdFileDownload />}
        />
      </div>
    </div>
  )
}