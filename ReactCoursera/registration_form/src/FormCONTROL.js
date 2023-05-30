import React,  { useState }  from 'react'

const FormCONTROL = () => {
    const [score, setScore] = useState("10");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Number(score) <= 5 && comment.length <= 10) {
            alert("Please provide a comment explaining why experince was poor.");
            return;
        }
        console.log(" Form submitted")
        setComment("");
        setScore("10")
    }
    return (
        <div className="App1">
            <form onSubmit={handleSubmit} >
                <fieldset>
                    <h2>Feedback Form</h2>
                    <div>
                        <label >Score: {score}⭐</label>
                        <input
                            type="range"
                            min={0} max={10}
                            value={score}
                            onChange={e => setScore(e.target.value)}
                            name="" id="" />
                    </div>
                    <div className="Field">
                        <label >Comment: </label>
                        <textarea value={comment}
                            onChange={e => setComment(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    );
}


export default FormCONTROL