import './App.css';
import {useState, useEffect} from "react"

const withMousePosition=(WrappedComponent)=>{
  return (props) => {
    const [mousePosition, setmousePosition] = useState({
      x:0,
      y:0,
    });
    useEffect(() => {
      const handleMousePositionChange= (e) => {
        setmousePosition({
          x:e.clientX,
          y:e.clientY,
        });
      }
      window.addEventListener("mousemove", handleMousePositionChange)
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange)
      }
    }, []);
    return <WrappedComponent {...props} mousePosition={mousePosition}/>
  }
}
const PanelMouseLogger=({mousePosition})=>{
  if(!mousePosition){
    return null;
  }
  return(
    <div>
      <p>Mouse position: </p>
      <div className="Row"> 
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>

      </div>
    </div>
  )
}

const PointMouseLogger=({mousePosition})=>{
  if(!mousePosition){
    return null;
  }
  return(
   <p>
    ({mousePosition.x}, {mousePosition.y})
   </p>
  )
}
const PanelMouseTracker=withMousePosition(PanelMouseLogger);
const PointMouseTracker=withMousePosition(PointMouseLogger);

function App() {
  return (
    <div className="App">
      <header>Little Lemon Restaurant</header>
      <PanelMouseTracker/>
      <PointMouseTracker/>
    </div>
  );
}

export default App;
