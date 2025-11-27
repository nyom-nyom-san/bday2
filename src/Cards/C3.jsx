import Candle from "../components/Candle"
import "../Cards/C3.css"
import { useEffect, useState, useRef } from "react"
import bday from "../assets/bday.mp3"

export default function C3({ handleBefore }) {
    const [relight, setRelight] = useState(0)
    const audioRef = useRef(null)

    const handleRelight = () => {
        setRelight(prev => prev + 1)
    }

    //Audio
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch(err => console.log("Autoplayblocked", err))
        }
    })

    return (
        <>
            <div className="c3-page">
                <div className="c3-container">
                    <div className="ltext">
                        <h1>Happy birthday!</h1>
                        <p>Well anyways, hope you enjoy you're birhday. Make a wish before blowing the candle</p>
                        <p className="s"> <i>Make sure to turn on the mic before blowing the candle</i></p>
                        <button className="relight-btn" onClick={handleRelight}>Reignite</button>
                        <button onClick={handleBefore} className="before-btn">Prev</button>
                    </div>

                    <div className="rtext">
                        <Candle onRelight={relight} />
                    </div>

                    <audio ref={audioRef} src={bday} loop />
                </div>
            </div>
        </>
    )
}