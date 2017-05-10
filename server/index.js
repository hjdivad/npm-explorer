require('isomorphic-fetch');

const host = 'registry.npmjs.org';

function toJSONAPI(responseBody, packageName) {
  return {
    data: {
      id: packageName,
      type: 'npm-package',
      attributes: responseBody,
    }
  };
}

module.exports = function setupMiddleware(app) {
  app.use('/api/package/', function loadNodePackageInfo(req, res, next) {
    let packageName = req.path.substring(1);
    let url = `//${host}/${packageName}`;

    fetch(url).
      then(npmResponse => {
        npmResponse.json().
          then(npmResponseBody => {
            res.
              status(npmResponse.status).
              send(toJSONAPI(npmResponseBody, packageName))
          });
      });
  });
}
