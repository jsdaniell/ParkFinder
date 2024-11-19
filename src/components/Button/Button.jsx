export default function Button({ onClick = () => {}, children, type = "button" }) {
    return (
        <div>
            <button
              type={type}
              onClick={onClick}
              className="block w-full p-2 text-center font-semibold text-white bg-blue-800 
              rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
              focus:ring-blue-600"
            >
              {children}
            </button>
          </div>
    )
}