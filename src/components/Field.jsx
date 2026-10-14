export function Field({
  id,
  label,
  icon: Icon,
  value,
  onChange,
  placeholder,
  type = 'text',
  autoComplete
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>

      <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-50">
        {Icon && <Icon size={18} className="text-slate-400" />}

        <input
          id={id}
          type={type}
          required
          minLength={id === 'name' ? 2 : undefined}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="w-full py-3.5 text-sm outline-none"
        />
      </div>
    </div>
  );
}