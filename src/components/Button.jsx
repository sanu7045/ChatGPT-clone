
export default function Button({ 
  children, 
  onClick, 
  variant = "", 
  disabled = false,
  className = "" 
}) {
  const baseStyles = " items-center justify-center transition-all duration-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed";
  
  const variants = {
    // black back-ground
    primary: "border-1 border-black text-white hover:cursor-pointer hover:border-sky-500 rounded-3xl px-2 py-1 bg-black text-bold w-25 ",
    // white back-ground
    secondary: "border-1 border-gray-300 text-black hover:cursor-pointer hover:border-sky-500 rounded-3xl px-2 py-1 text-bold h-10 w-25",
    secondary1: "border-1 border-gray-200 text-black hover:cursor-pointer hover:border-sky-500 rounded-2xl px-2 py-1 text-bold ",
  };

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}






