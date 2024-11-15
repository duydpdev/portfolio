import { Button } from 'react-bootstrap'

interface IProps {
  btnText: string
  btnIcons: JSX.Element
  btnStyle?: React.CSSProperties
  onClick?: () => void
}

export default function ResizeButton({
  btnText,
  btnIcons,
  btnStyle,
  onClick
}: IProps) {
  return (
    <Button onClick={onClick} className="resize-button" style={btnStyle}>
      <span style={{ textTransform: 'uppercase' }}>{btnText}</span>
      <>{btnIcons}</>
    </Button>
  )
}
