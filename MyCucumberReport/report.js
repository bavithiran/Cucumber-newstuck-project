$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('Features\cucumberJava.feature');
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 19,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 21,
  "name": "Login functionality exists",
  "description": "",
  "id": "cucumberjava;login-functionality-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I open newstuck website",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Login button should exits",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Brower Quit action",
  "keyword": "Then "
});
formatter.match({
  "location": "Annotation.openBrowser()"
});
formatter.result({
  "duration": 6863300400,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.goToFacebook()"
});
formatter.result({
  "duration": 6354386900,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.loginButton()"
});
formatter.result({
  "duration": 7472614500,
  "status": "passed"
});
formatter.match({
  "location": "Annotation.Brower_Quit_action()"
});
formatter.result({
  "duration": 494860600,
  "status": "passed"
});
});