module.exports = {
    server: 'output',
    port: 8080,
    files: ['output/**/*'],
    open: false,
    middleware: [
        function (req, res, next) {
            // Strip .html if already present in URL — redirect to clean version
            if (req.url.match(/\.html$/)) {
                res.writeHead(301, { Location: req.url.replace(/\.html$/, '') });
                res.end();
                return;
            }
            // Serve .html file for clean URLs
            var url = req.url.split('?')[0];
            if (url !== '/' && !url.includes('.')) {
                req.url = url + '.html';
            }
            next();
        }
    ]
};
