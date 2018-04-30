module.exports = (survey)=>{

    return `
    
            <html>
                <div style="text-align:center;">

                    <h3>I would like your input!</h3>
                    <p>Pleae answer the following question!</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="https://evening-river-87048.herokuapp.com/api/surveys/thanks">Yes</a>
                    </div>

                    <div>
                        <a href="https://evening-river-87048.herokuapp.com/api/surveys/thanks">No</a>
                    </div>
                </div>
            </html>

    `
}