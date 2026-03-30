type InputRangeProps = {
  min: number
  max: number
  value: number
  onChange: (value: number) => void
  ariaLabel: string
  activeColor?: string
  inactiveColor?: string
  className?: string
}

export function InputRange({
  min,
  max,
  value,
  onChange,
  ariaLabel,
  activeColor = '#00ACFD',
  inactiveColor = '#D6DCE6',
  className = 'h-2 w-full',
}: InputRangeProps) {
  const safeRange = Math.max(1, max - min)
  const percent = ((value - min) / safeRange) * 100

  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
      className={`${className} cursor-pointer appearance-none rounded-full`}
      style={{
        background: `linear-gradient(to right, ${activeColor} 0%, ${activeColor} ${percent}%, ${inactiveColor} ${percent}%, ${inactiveColor} 100%)`,
      }}
      aria-label={ariaLabel}
    />
  )
}
