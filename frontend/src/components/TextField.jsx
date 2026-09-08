import Field from './Field';

export default function TextField({
  label,
  value,
  onChange,
  required = false,
  disabled = false
}) {
  return <Field
    label={label}
    required={required}
  >
    <input
      type="text"
      value={value}
      required={required}
      onInput={(e) => onChange?.(e.target.value)}
      disabled={disabled}
    />
  </Field>;
}