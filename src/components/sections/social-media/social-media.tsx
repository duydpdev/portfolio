import { FaFacebook } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
interface IProps {
  github: string
  facebook: string
}

export default function SocialMedia({ github, facebook }: IProps) {
  return (
    <div className="my-4 d-flex items-center gap-3">
      <a
        href={github}
        target="_blank"
        className="highlight"
        title="Github Phan Duy Dev"
      >
        <FaGithub size={30} />
      </a>
      <a
        href={facebook}
        target="_blank"
        className="highlight"
        title="Facebook Phan Duy Dev"
      >
        <FaFacebook size={30} />
      </a>
    </div>
  )
}
