require('isomorphic-fetch');

const host = 'registry.npmjs.org';

module.exports = function setupMiddleware(app) {
  app.use('/api/package/', function loadNodePackageInfo(req, res, next) {
    let packageName = req.path.substring(1);
    let url = `//${host}/${packageName}`;

    fetch(url).
      then(npmResponse => {
        npmResponse.text().
          then(npmResponseBody => {
            res.
              status(npmResponse.status).
              send(npmResponseBody)
          });
      });
  });
}
