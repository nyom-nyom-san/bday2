import "../Cards/C1.css"
export default function C1({ handleNext }) {

    return (
        <>
            <div className="wrapper">
                <h1>A Card</h1>
                <i>From: A CS Student</i>
                <button onClick={handleNext} className="next-btn">Next</button>
            </div>
        </>
    )
}