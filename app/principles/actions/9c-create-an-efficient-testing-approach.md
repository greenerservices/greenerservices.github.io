---
homepage: false
layout: main
title: 9c. Create an efficient testing approach
includeInBreadcrumbs: true
eleventyNavigation:
  key: 9c. Create an efficient testing approach
  parent:  9. Develop and test for efficiency
---

Design an approach to testing that is as efficienyt as possible.

### Likely Lead Roles

QA & Testing, Developer

* * *

## Sub-actions

[9c. (i) Adopt a shift-left testing approach ](#(i)-adopt-a-shift-left-testing-approach)
[9c. (ii) Make use of asynchronous testing](#(ii)-make-use-of-asynchronous-testing)
[9c. (iii) Optimise test scripts](#(iii)-optimise-test-scripts)
[9c. (iv) Avoid duplication of test data and reuse where possible](#(iv)-avoid-duplication-of-test-data-and-reuse-where-possible)
[9c. (v) Use test selection](#(v)-use-test-selection)
[9c. (vi) Test for page weight](#(vi)-test-for-page-weight)

* * *

###  (i) Adopt a shift-left testing approach

Shift-Left (test earlier) is accepted good practice to avoid energy intensive rework. Shift-Right (test in live environments) also enables identification of runtime inefficiencies.

#### Environmental benefit: 
Reduces resource consumption through fewer test runs, less rework, and unnecessary builds.

{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukDetails({
  summaryText: "Read more",
  text: "Some placeholder text"
}) }}
* * *

###  (ii) Make use of asynchronous testing

Testing software using asynchronous processing allows tests to run independently of each other.

#### Environmental benefit: 
Using asynchronous testing can reduce network congestion and data transfer costs.

{{ govukDetails({
  summaryText: "Read more",
  html: "Some placeholder text"
}) }}

* * *

### (iii) Optimise test scripts

A test script is a set of detailed instructions that outlines the steps to be taken to test a specific functionality of a software application.

Optimising test scripts for performance can mean avoiding redundant steps and minimising repetition.

#### Environmental benefit: 
Optimising test scripts use fewer resources.

{{ govukDetails({
  summaryText: "Read more"
}) }}

* * *

###  (iv) Avoid duplication of test data and reuse where possible

To avoid data duplication, consider:

• using test data across tests
• deduplicating test records
• generating test data on demand to avoid storing it 
• automatically removing redundant test data

#### Environmental benefit: 
Reduces

{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukDetails({
  summaryText: "Read more",
  text: "Some placeholder text"
}) }}
* * *

###  (v) Use test selection

Run only the relevant tests based on code changes. 

Some tests should be run in every commit, but complex tests can be kept for scheduled CICD jobs rather than every commit.

#### Environmental benefit: 
Avoiding running unnecessaryb tests saves on resource consumtpion.

{{ govukDetails({
  summaryText: "Read more",
  html: "Some placeholder text"
}) }}

* * *

### (vi) Test for page weight

It is important to test for page weight to avoid bloat. Although GDS priorities lightweight HTML, CSS and JavaScript, testing can identify unnecessary components.

#### Environmental benefit: 
Using asynchronous testing can reduce network congestion and data transfer costs.

{{ govukDetails({
  summaryText: "Read more"
}) }}