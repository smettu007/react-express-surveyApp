module.exports = (survey)=>{

    return `
    
            <html>
                <div style="text-align:center;">

                    <h3>I would like your input!</h3>
                    <p>Please answer the following question!</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="https://evening-river-87048.herokuapp.com/api/surveys/${survey.id}/yes">Yes</a>
                    </div>

                    <div>
                        <a href="https://evening-river-87048.herokuapp.com/api/surveys/${survey.id}/no">No</a>
                    </div>
                </div>
            </html>

    `
}