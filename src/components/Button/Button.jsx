export default function Button({ text }){
    return (
        <div>
            <button
              type="submit"
              className="block w-full py-2 text-center font-semibold text-white bg-indigo-600 
              rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 
              focus:ring-indigo-600"
            >
              {text}
            </button>
          </div>
    )
}