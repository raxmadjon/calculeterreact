import { Back, Backspace, Trash, WindowStack } from "react-bootstrap-icons";


const Button = (props) => {
    function hendleClick(e) {
        const current = e.target.textContent
        props.setOutput(s => s == 0 ? current : s += current)
    }
    function hendleClier() {
        props.setOutput(0)
    }
    function hendleDelete() {
        props.setOutput(s => s.toString().length <= 1 ? 0 : s.toString().slice(0, s.toString().length - 1))
    }
    function hendleEqual(){
        props.setOutput(s => eval(s))
    }
    return (
        <div className="buttons " style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.3rem" }}>
            <button data-aos="zoom-in-down" onClick={hendleClier} id="button1" className="btn btn-outline-danger fs-5"><Trash /></button>
            <button data-aos="zoom-in-down" onClick={hendleDelete} id="button2" className="btn btn-outline-danger fs-5"><Backspace /></button>
            <button data-aos="zoom-in-down" id="button3" className="btn btn-outline-info fs-5  ">%</button>
            <button data-aos="zoom-in-down" onClick={hendleClick} id="button4" className="btn btn-outline-info fs-5  ">/</button>
            <button data-aos="zoom-in-down" onClick={hendleClick} id="button5" className="btn btn-outline-secondary fs-5 ">7</button>
            <button data-aos="zoom-in-down" onClick={hendleClick} id="button6" className="btn btn-outline-secondary fs-5 ">8</button>
            <button data-aos="zoom-in-down" onClick={hendleClick} id="button7" className="btn btn-outline-secondary fs-5 ">9</button>
            <button data-aos="zoom-in-down" onClick={hendleClick} id="button8" className="btn btn-outline-info fs-5  ">*</button>
            <button data-aos="zoom-in-down" onClick={hendleClick} id="button9" className="btn btn-outline-secondary fs-5 ">4</button>
            <button data-aos="zoom-in-down" onClick={hendleClick} id="button10" className="btn btn-outline-secondary fs-5">5</button>
            <button data-aos="zoom-in-down" onClick={hendleClick} id="button11" className="btn btn-outline-secondary fs-5">6</button>
            <button data-aos="zoom-in-down" onClick={hendleClick} id="button12" className="btn btn-outline-info fs-5 ">-</button>
            <button data-aos="zoom-in-down" onClick={hendleClick} id="button13" className="btn btn-outline-secondary fs-5">1</button>
            <button data-aos="zoom-in-down" onClick={hendleClick} id="button14" className="btn btn-outline-secondary fs-5">2</button>
            <button data-aos="zoom-in-down" onClick={hendleClick} id="button15" className="btn btn-outline-secondary fs-5">3</button>
            <button data-aos="zoom-in-down" onClick={hendleClick} id="button16" className="btn btn-outline-info fs-5 ">+</button>
            <button data-aos="zoom-in-down" id="button17" className="btn btn-outline-warning fs-5  "><Back /></button>
            <button data-aos="zoom-in-down" onClick={hendleClick} id="button17" className="btn btn-outline-secondary fs-5">0</button>
            <button data-aos="zoom-in-down" onClick={hendleClick} id="button18" className="btn btn-outline-info fs-5 ">.</button>
            <button data-aos="zoom-in-down" onClick={hendleEqual} id="button19" className="btn btn-success fs-5  ">=</button>
        </div>
    );
}

export default Button;