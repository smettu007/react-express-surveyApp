module.exports = (survey)=>{

    return `
    
            <html>
                <div style="text-align:center;">

                    <h3>I would like your input!</h3>
                    <p>Pleae answer the following question!</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="http://localhost:3000/api/surveys/${survey.id}/yes">Yes</a>
                    </div>

                    <div>
                        <a href="http://localhost:3000/api/surveys/${survey.id}/no">No</a>
                    </div>
                </div>
            </html>

    `
}