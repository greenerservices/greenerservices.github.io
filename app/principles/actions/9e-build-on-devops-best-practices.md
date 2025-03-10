---
homepage: false
layout: main
title: 9e. Build on DevOps best practices
includeInBreadcrumbs: true
eleventyNavigation:
  key: 9e. Build on DevOps best practices
  parent:  9. Develop and test for efficiency
---

DevOps is a an approach that combines software development practices and operations to improve collaboration and software delivery. 

### Lead Roles

DevOps Engineer, Solution architect

* * *

## Sub-actions

[9e. (i) Optimise your logging and retention policy](#(i)-optimise-your-logging-and-retention-policy)
[9e. (ii) Plan library and dependency updates](#(ii)-plan-library-and-dependency-updates)
[9e. (iii) Optimise continuous integration and delivery pipelines, containers and kubernetes clusters](#(iii)-optimise-continuous-integration-and-delivery-pipelines,-containers-and-kubernetes-clusters)
[9e. (iv) Avoid prematurely optimising your services for load](#(iv)-avoid-prematurely-optimising-your-services-for-load)

* * *

###  (i) Optimise your logging and retention policy

Logging can use significant computing and storage resources. 

Check logging and retention policies are appropriate. Consider removing unused logs, and automate this process if possible.

#### Environmental benefit: 
Doing only the necessary logging can ensure 

{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukDetails({
  summaryText: "Read more",
  text: "Some placeholder text"
}) }}
* * *

###  (ii) Plan library and dependency updates

Consider how often libraries and dependencies are updated. Avoid daily or continual updates if they are not needed.

#### Environmental benefit: 
Reducing the number of updates can save on resources.

{{ govukDetails({
  summaryText: "Read more",
  text: "Some placeholder text"
}) }}
* * *

### (iii) Optimise continuous integration and delivery pipelines, containers and kubernetes clusters

A Continuous Improvement/Continuous Delivery (CI-CD) pipeline is a series of steps that developers must follow to test and deliver software. 

Optimise kubernetes clusters, limit container image sizes. enable kubernetes resource limits. 

#### Environmental benefit: 
Placeholder

{{ govukDetails({
  summaryText: "Read more",
  text: "Some placeholder text"
}) }}
* * *

### (iv) Avoid prematuarely optimising your services for load

Rely on green computing principles of rightsizing and dynamic scaling covered in infrastructure design.

#### Environmental benefit: 
Placeholder

{{ govukDetails({
  summaryText: "Read more",
  text: "Some placeholder text"
}) }}