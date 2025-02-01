import { useEffect, useRef, useState } from "react"
import './Background.css'

const Background = () => {

    const [color, setColor] = useState('white')

    const color1 = useRef(null)
    const color2 = useRef(null)
    const color3 = useRef(null)
    const color4 = useRef(null)
    const color5 = useRef(null)

    const main = useRef(null)
    
    //main.current.style.backgroundColor = color
    useEffect(() => {
        main.current.style.backgroundColor = color
    }, [color])

    return (
        <>
            <div className="container" ref={main}>
                <div className="colorPicker">
                    <div className="color" ref={color1} onClick={() => setColor(window.getComputedStyle(color1.current).backgroundColor)} style={{background: 'red'}}></div>
                    <div className="color" ref={color2} onClick={() => setColor(window.getComputedStyle(color2.current).backgroundColor)} style={{background: 'blue'}}></div>
                    <div className="color" ref={color3} onClick={() => setColor(window.getComputedStyle(color3.current).backgroundColor)} style={{background: 'green'}}></div>
                    <div className="color" ref={color4} onClick={() => setColor(window.getComputedStyle(color4.current).backgroundColor)} style={{background: 'yellow'}}></div>
                    <div className="color" ref={color5} onClick={() => setColor(window.getComputedStyle(color5.current).backgroundColor)} style={{background: 'black'}}></div>
                </div>
                    
            </div>
        </>
    )
}

export default Background