import './App.css'; 
import { motion } from "framer-motion";

const App = ()=>{
  return (
    <div className='App'>
      
    <motion.div animate={{
      x:0,
      scale:1
    }} initial={{
      x:-100,
      scale:0.5
    }}>
      <img
      height={50}
      width={50}
      src="https://www.gizchina.com/wp-content/uploads/images/2022/10/macOS-6.jpg" />
    </motion.div>

    <motion.div drag="x"
    dragConstraints={{
      left:10,
      right:10
    }}
    >
    <img
      height={50}
      width={50}
      src="https://e7.pngegg.com/pngimages/327/99/png-clipart-computer-icons-pointer-drag-and-drop-symbol-full-screen-miscellaneous-angle.png"/>
    </motion.div>

    </div>
  );
}
export default App;
