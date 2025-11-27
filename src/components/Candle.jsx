import { useEffect, useRef, useState } from "react"
import "../components/Candle.css"
import cake from "../pic/cake.png"

export default function Candle({ onRelight }) {
    const [blown, setBlown] = useState(false)
    const blownRef = useRef(false)


    //Relight button
    useEffect(() => {
        setBlown(false)
    }, [onRelight])

    useEffect(() => {
        blownRef.current = blown
    }, [blown])

    // For microphone on
    useEffect(() => {
        let audioContext;
        let analyser;
        let micStream;
        let isMounted = true

        async function startMic() {
            try {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                micStream = await navigator.mediaDevices.getUserMedia({ audio: true });

                const source = audioContext.createMediaStreamSource(micStream);

                analyser = audioContext.createAnalyser();
                analyser.fftSize = 512;

                source.connect(analyser);

                const dataArray = new Uint8Array(analyser.frequencyBinCount);

                function detectBlow() {
                    if (!isMounted) return

                    analyser.getByteFrequencyData(dataArray);

                    const volume =
                        dataArray.reduce((a, b) => a + b) / dataArray.length;

                    if (volume > 75 && !blownRef.current) {
                        setBlown(true);
                    }

                    requestAnimationFrame(detectBlow);
                }

                requestAnimationFrame(detectBlow);

            } catch (err) {
                console.log("Microphone error", err);
            }
        }

        startMic();

        return () => {
            if (micStream) micStream.getTracks().forEach(track => track.stop());
            if (audioContext) audioContext.close();
        };
    }, []);



    return (
        <>
            <div className="ccake" onClick={() => !blown && setBlown(true)}>
                <img src={cake} alt="cake" className="icake" />

                <div className="candle-wrapper">
                    <div className="candle-body"></div>
                    <div className="candle-top">
                        {!blown && <div className="flame"></div>}
                        {blown && <div className="smoke"></div>}
                    </div>
                </div>
            </div>
        </>
    )
}