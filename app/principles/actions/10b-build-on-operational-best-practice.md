---
homepage: false
layout: main
title: 10b. Build on operational best practices
includeInBreadcrumbs: true
eleventyNavigation:
  key: 10b. Build on operational best practices
  parent:  10. Operate a greener service
---

There are a number of approaches that we can take to build on operational best practices and reduce environmental impacts as far as possible.

### Likely Lead Roles

Service owner, business analyst, delivery manager

* * *

## Sub-actions

[10b. (i) Set Service Level Objectives that balance performance, reliability and sustainability](#(i)-set-service-level-objectives-that-balance-performance,-reliability-and-sustainability)
[10b. (ii) Continue to optimise and refactor new code](#(ii)-continue-to-optimise-and-refactor-new-code)
[10b. (iii) Use spot instances](#(iii)-use-spot-instances)
[10b. (iv) Turn off unneeded resources](#(iv)-turn-off-unneeded-resources)
[10b. (v) Schedule carbon aware updates](#(v)-schedule-carbon-aware-updates)

* * *

###  (i) Set Service Level Objectives that balance performance, reliability and sustainability

A service level objective (SLO) is an agreed target for a particular service over a period of time.  SLOs can build upon sustainability non-functional requirements (NFRs) to balance performance, reliability and sustainability targets.

#### Environmental benefit: 
Setting SLOs for sustainability can serve to ensure that environmental impacts continue to be monitored and reduced through the live phase of a service.

{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukDetails({
  summaryText: "Read more",
  text: "Coming soon!"
}) }}

* * *

### (ii) Continue to optimise and refactor new code

Refactoring is the process of restructuring code, without affecting its original functionality. It can make code more efficient, cleaner and reusable.

#### Environmental benefit: 
Optimised code reduces resources and energy used. 

{{ govukDetails({
  summaryText: "Read more",
  text: "Coming soon!"
}) }}

* * *

### (iii) Use spot instances

Spot instances are unused cloud capacity that can be used at reduced prices. Making use of spot instances requires workloads with flexible start and end times. See 8b.(vi) Design for asynchronous patterns and transactions. 

#### Environmental benefit: 
Use spot instances to help cloud providers to improve data centre utilisation and reduce carbon footprint of workloads.

{{ govukDetails({
  summaryText: "Read more",
  text: "Coming soon!"
}) }}

* * *

### (iv) Turn off unneeded resources

Turn off all environments out of hours. This should be the default pattern for all non-production environments, including testing, QA or pre-production environments.

#### Environmental benefit: 
Turning off environments when not in use saves on energy consumption.

{{ govukDetails({
  summaryText: "Read more",
  text: "Coming soon!"
}) }}

* * *

### (v) Schedule carbon aware updates

Rather than patching immediately, where possible schedule updates to take advantage of low carbon electricity.

#### Environmental benefit: 
Updates scheduled when there is lower-carbon electricty available reduce carbon footprint.

{{ govukDetails({
  summaryText: "Read more",
  text: "Coming soon!"
}) }}