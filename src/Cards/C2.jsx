import "../Cards/C2.css"

export default function C2({ handleNext, handleBefore }) {
    return (
        <div className="w2">
            <div className="left-t">
                <h2>Happy 25th birthday <br />
                    <i>Shahmy Ahmed</i></h2>
            </div>
            <div className="right-t">
                <p>May Allah S.W.T bless you with good health and happiness on your birthday and the coming year.
                    You're definitely old now. Here are the new skills you are gonna unlock:
                    <br />
                    <br />
                    <li>Random Grandpa back pain</li>
                    <li>More responsibilities you didn't ask for</li>
                </p>
            </div>
            <button onClick={handleNext} className="next-btn">Next</button>
            <button onClick={handleBefore} className="before-btn">Prev</button>
        </div>
    )
}