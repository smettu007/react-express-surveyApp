module.exports = (survey)=>{

    return `
    
            <html>
                <div style="text-align:center;">

                    <h3>I would like your input!</h3>
                    <p>Pleae answer the following question!</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="http://localhost:3000">Yes</a>
                    </div>

                    <div>
                        <a href="http://localhost:3000">No</a>
                    </div>
                </div>
            </html>

    `
}