
export const ShinnyButton = ({label}: {label: string}) => {
  return (
    <button className='text-white font-medium px-4 py-2 rounded-md bg-transparent border border-transparent hover:border-gray-700 ease-in-out transition-all cursor-pointer'>{label}</button>
  )
}