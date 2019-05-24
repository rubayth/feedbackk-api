const keys = require('../../config/keys');
const defaultTemplate = require('./default');

module.exports = (survey, template) => {
    switch(template){
      case 'default':
        return defaultTemplate(survey);
      case '2':
        return (
         `
            <html>
                <body>
                    <div style="text-align: center;">
                        <h3>I'd Like your input!</h3>
                        <p>Please answer the following question:</p>
                        <p>${survey.body}</p>
                        <div>
                            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes"</a>
                            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
                        </div>
                    </div>
                </body>
            </html>
            `
        )
      default:
        return defaultTemplate(survey);
    }
}