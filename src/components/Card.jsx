
export default function Card({ children, title, className = "" }) {
  return (
    <div className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 ${className}`}>
      {title && (
        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
          {title}
        </h3>
      )}
      <div className="text-gray-600">
        {children}
      </div>
    </div>
  );
}



export function Card1({ children, title, className = "" }) {
  return (
    <div className={`bg-white  p-5 h-2 border border-white ${className}`}>
      {title && (
        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
          {title}
        </h3>
      )}
      <div className=" ">
        {children}
      </div>
    </div>
  );
}

export function Card2({ children, title, className = "" }) {
  return (
    <div className={`bg-white  h-2 border border-gray-300 ${className}`}>
      {title && (
        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
          {title}
        </h3>
      )}
      <div className=" ">
        {children}
      </div>
    </div>
  );
}