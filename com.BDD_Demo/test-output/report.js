$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "JBK offline application test",
  "description": "",
  "id": "jbk-offline-application-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "login test with multiple data",
  "description": "",
  "id": "jbk-offline-application-test;login-test-with-multiple-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@invalidLogin"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user enters \"\u003cuname\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user will verify \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user will capture error message",
  "keyword": "And "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "jbk-offline-application-test;login-test-with-multiple-data;",
  "rows": [
    {
      "cells": [
        "uname",
        "pass",
        "title"
      ],
      "line": 31,
      "id": "jbk-offline-application-test;login-test-with-multiple-data;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456",
        "Dashboard"
      ],
      "line": 32,
      "id": "jbk-offline-application-test;login-test-with-multiple-data;;2"
    },
    {
      "cells": [
        "mangesh@gmail.com",
        "1234567",
        "Log in"
      ],
      "line": 33,
      "id": "jbk-offline-application-test;login-test-with-multiple-data;;3"
    },
    {
      "cells": [
        "neelam@gmail.com",
        "asdfgh",
        "Log in"
      ],
      "line": 34,
      "id": "jbk-offline-application-test;login-test-with-multiple-data;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11094677200,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "login test with multiple data",
  "description": "",
  "id": "jbk-offline-application-test;login-test-with-multiple-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@invalidLogin"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user will verify \"Dashboard\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user will capture error message",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 2922979000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 35
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 5108135800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard",
      "offset": 18
    }
  ],
  "location": "LoginStepDef.user_will_verify(String)"
});
formatter.result({
  "duration": 24253400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_will_capture_error_message()"
});
formatter.result({
  "duration": 22048700,
  "status": "passed"
});
formatter.after({
  "duration": 533282800,
  "status": "passed"
});
formatter.before({
  "duration": 3669350200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "login test with multiple data",
  "description": "",
  "id": "jbk-offline-application-test;login-test-with-multiple-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@invalidLogin"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user enters \"mangesh@gmail.com\" and \"1234567\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user will verify \"Log in\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user will capture error message",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 5975281900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mangesh@gmail.com",
      "offset": 13
    },
    {
      "val": "1234567",
      "offset": 37
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1063419000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "LoginStepDef.user_will_verify(String)"
});
formatter.result({
  "duration": 131097800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_will_capture_error_message()"
});
formatter.result({
  "duration": 187582600,
  "status": "passed"
});
formatter.after({
  "duration": 1519793800,
  "status": "passed"
});
formatter.before({
  "duration": 3911600300,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "login test with multiple data",
  "description": "",
  "id": "jbk-offline-application-test;login-test-with-multiple-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@invalidLogin"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user enters \"neelam@gmail.com\" and \"asdfgh\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user will verify \"Log in\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user will capture error message",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 2012769200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "neelam@gmail.com",
      "offset": 13
    },
    {
      "val": "asdfgh",
      "offset": 36
    }
  ],
  "location": "LoginStepDef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 2849788100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 18
    }
  ],
  "location": "LoginStepDef.user_will_verify(String)"
});
formatter.result({
  "duration": 40089900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_will_capture_error_message()"
});
formatter.result({
  "duration": 231681700,
  "status": "passed"
});
formatter.after({
  "duration": 1023877800,
  "status": "passed"
});
});