$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As a user I should be able to search cars",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I click \"Search Cars\" link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I navigate to \"New \u0026 Used Car Search\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "comments": [
        {
          "line": 20,
          "value": "#      | BMW        | 118d      | NT - North   | 50000 |"
        }
      ],
      "cells": [
        "Audi",
        "A5",
        "WA - Perth",
        "50000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18754933000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "BackgroundSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 260188300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BackgroundSteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 280216900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 20,
      "value": "#      | BMW        | 118d      | NT - North   | 50000 |"
    }
  ],
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I click \"Search Cars\" link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I navigate to \"New \u0026 Used Car Search\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select model \"A5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select location \"WA - Perth\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select price \"50000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 9
    }
  ],
  "location": "SearchCarsSteps.iClickLink(String)"
});
formatter.result({
  "duration": 495985900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New \u0026 Used Car Search",
      "offset": 15
    }
  ],
  "location": "SearchCarsSteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 1951068500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "SearchCarsSteps.iSelectMake(String)"
});
formatter.result({
  "duration": 231742500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A5",
      "offset": 16
    }
  ],
  "location": "SearchCarsSteps.iSelectModel(String)"
});
formatter.result({
  "duration": 138670200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WA - Perth",
      "offset": 19
    }
  ],
  "location": "SearchCarsSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 176594400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 16
    }
  ],
  "location": "SearchCarsSteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 246515900,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 1937245900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 162840800,
  "status": "passed"
});
formatter.after({
  "duration": 794213500,
  "status": "passed"
});
});