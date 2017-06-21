var TestCafe = require('testcafe');
var testCafe = new TestCafe (
    {
        controlPanelPort : 1337,
        servicePort : 1338,
        testsDir : '~/dev/qa-tool/tests/',
        reportFormat: 'json',
        reportsPath: '~/dev/qa-tool/tests/reports/report.json',
        browsers : {  // CI Tests will likely be headless (phantom, nightmare)
            'Mozilla Firefox': {
                path : '/Applications/Firefox.app',
                cmd : '-new-window -foreground'
            },
            'Safari': {
                path: '/Applications/Safari.app'
            },
            'Chrome': {
                path: '/Applications/Google Chrome.app'
            }
        }
    }
);
 
var runOptions = {
    workers: testCafe.listConnectedWorkers(),
    browsers: testCafe.listAvailableBrowsers(),
    emulateCursor: true
};
 
testCafe.runTests(runOptions, function () {
    testCafe.on('taskComplete', function (report) {
        console.log(report);
    });
});