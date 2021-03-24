const express = require('express');
const path = require('path');
const ngApimock = require('ng-apimock')();
const app = express();

/**
* Register all available mocks and generate interface
*/
ngApimock.run({
   "src": "e2e/mock/mockData",
   "outputDir": "e2e/mock/.tmp/ngApimock",
   "done": function() {}
});

ngApimock.watch("e2e/mock/mockData");

app.set('port', (process.env.PORT || 3000));
app.use(require('ng-apimock/lib/utils').ngApimockRequest);
app.use('/mocking', express.static('e2e/mock/.tmp/ngApimock'));

app.listen(app.get('port'), function() {
 console.log('app running on port', app.get('port'));
});
