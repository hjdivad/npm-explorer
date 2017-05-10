module.exports = function setupMiddleware(app) {
  console.log('setting up server middleware');
  app.use('/api/package/', function loadNodePackageInfo(req, res, next) {
    let packageName = req.path.substring(1);
    console.log('hello', packageName);
    let payload = { name: 'uwotm8', packageName: packageName };
    res.send(JSON.stringify(payload));
  });
}
