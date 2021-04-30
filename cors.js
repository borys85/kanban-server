function cors(app) {
    app.use((req, res, next) => {
        // eslint-disable-line consistent-return
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        );
        if (req.method === 'OPTIONS') {
            res.header(
                'Access-Control-Allow-Methods',
                'PUT, POST, PATCH, DELETE, GET',
            );
            return res.status(200).json({});
        }
        next();
    });
}

module.exports = cors;
