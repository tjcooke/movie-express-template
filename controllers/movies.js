function retrieveAll(req, res) {
    res.render('movies', {
        locals: {
            message: "LETS PIRATE SOME MOVIES!"
        }
    })
}

module.exports = retrieveAll;