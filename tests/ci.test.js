var TestCafe = require('testcafe');
var testCafe = new TestCafe (
    {
        controlPanelPort : 1337,
        servicePort : 1338,
        testsDir : './',
        reportsPath: '/testcafe/reports',
        browsers : {  // CI Tests will likely be headless (phantom, nightmare)
            'Mozilla Firefox': {
                path : "bin/firefox.exe",
                cmd : "-new-window"
            }
        }
    });
 
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