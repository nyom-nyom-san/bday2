import "../Cards/C2.css"

export default function C2({ handleNext, handleBefore }) {
    return (
        <div className="w2">
            <div className="left-t">
                <h2>Happy 18th birthday <br />
                    <i>You Xuan</i></h2>
            </div>
            <div className="right-t">
                <p>Congratulations on graduating from being a minor.
                    You're definitely old now. Here are the new skills you are gonna unlock:
                    <br />
                    <br />
                    <li>Random Grandma back pain</li>
                    <li>Paying taxes</li>
                    <li>More responsibilities you didn't ask for</li>
                </p>
            </div>
            <button onClick={handleNext} className="next-btn">Next</button>
            <button onClick={handleBefore} className="before-btn">Prev</button>
        </div>
    )
}