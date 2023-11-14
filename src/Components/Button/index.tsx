type ButtonProps = {
  onClick: () => void
  text: string
  variant?: string
}

export const Button = ({
  onClick,
  text,
  variant = 'primary'
}: ButtonProps) => (
  <button onClick={onClick} className={`btn-${variant}`}>
    {text}
  </button>
)
