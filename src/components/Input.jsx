
function Input({ label, error, name, ...props }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        {...props}
        className={`p-2.5  rounded-xl outline-none transition-all focus:ring-2 
        ${error ? "border-red-500 focus:ring-red-100" : "border-gray-300 focus:ring-white focus:border-white"}`}
      />
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  );
} export default Input;


export function Input1({ label, error, name, ...props }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        {...props}
        className={`p-2.5  rounded-xl outline-none transition-all focus:ring-2
        ${error ? "border-red-500 focus:ring-red-100" : "bg-gray-100 w-96 p-3.5"}`}
      />
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  );
}