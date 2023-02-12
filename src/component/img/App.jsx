import { useState } from "react";
import Button from "../Button";
import String from "../String";
import reacts from "../img/react.png"
const App = () => {

    const [output, setOutput] = useState(0)

    return ( 
        <div className="d-flex justify-content-center align-items-center min-vh-100 ">
            <div className="calc card p-2 shadow p-3 mb-5 bg-body-tertiary rounded">
            <String output={output} />
            <Button setOutput={setOutput}/>
            
            </div>
            <img src="reacts" alt="" className="img1" />
            <img src="" alt="" className="img2" />
        </div>
     );
}
 
export default App;