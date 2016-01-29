// app/routes.js
var Post = require('./models/blog');
var path = require('path');
module.exports = function(app) {
    app.get('/api/blog', function(req, res) {
        Post.find(function(err, blogs) {
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);

            res.json(blogs);
        });
    });

    // route to handle creating goes here (app.post)
    // route to handle delete goes here (app.delete)

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile('./public/index.html', { root: path.join(__dirname, '../') });
    });
};
