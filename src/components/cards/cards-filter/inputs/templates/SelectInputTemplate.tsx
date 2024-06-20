interface SelectInputTemplateProps {
  options: any[]
}

export default function SelectInputTemplate({ options }: SelectInputTemplateProps) {
  return (
    <select>
      <option value=''></option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
