import "./Grady.css"

function Grady({bg}) { // title
  return (
    <div className="grady">
        {/* <h1>{title}</h1> */}
        <img  src={bg} alt="gradient image " />
    </div>
  )
}

export default Grady