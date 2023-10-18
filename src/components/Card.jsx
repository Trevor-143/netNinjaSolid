export default function Card(props) {
  return(
    <div 
    className="bg-white p-4 text-center rounded-md shadow-md flex flex-col justify-between" 
    classList={{"rounded-md": props.rounded, "shadow-md": !props.flat}}
    >
        
    </div>
  )
}
