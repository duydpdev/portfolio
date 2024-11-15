import { Button } from 'react-bootstrap'

interface IProps {
  btnText: string
  btnIcons: JSX.Element
  btnStyle?: React.CSSProperties
}

export default function ResizeButton({ btnText, btnIcons, btnStyle }: IProps) {
  return (
    <Button className="resize-button" style={btnStyle}>
      <span style={{ textTransform: 'uppercase' }}>{btnText}</span>
      <>{btnIcons}</>
    </Button>
  )
}
