export default function InputWithLabel({
    label = 'Label', 
    id = 'id', 
    name = 'name', 
    type = 'text', 
    required = false, 
    autoComplete = 'off',
    onChange = () => {},
    disabled = false,
    value = ""
}) {
    return (
        <div>
            <label className="block text-sm font-medium leading-6 text-gray-800">
              {label}
            </label>
            <div className="mt-2">
              <input 
              disabled={disabled}
              id={id}
              value={value}
              name={name}
              type={type}
              required={required}
              autoComplete={autoComplete}
              onChange={onChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2
               ring-inset ring-indigo-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
              />
            </div>
        </div>
    )
}