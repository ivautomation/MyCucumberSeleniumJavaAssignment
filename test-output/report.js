$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "successful login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters url \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_enters_url(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"admin@yourstore.com\" and Password \"admin\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_enters_and_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on loginBtn",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.click_on_loginBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page title display \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.page_title_display(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on logoutLink",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.click_on_logoutLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page title display \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.page_title_display(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
});