interface FormFieldProps {
  label: string;
  type?: "text" | "email" | "tel" | "password";
  placeholder?: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
  variant?: "line" | "box";
  className?: string;
}

export default function FormField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  variant = "line",
  className = "",
}: FormFieldProps) {
  const inputClass = variant === "box" ? "form-input-box" : "form-input";

  return (
    <div className={className}>
      <label className="form-label">
        {label}{required && " *"}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      />
    </div>
  );
}