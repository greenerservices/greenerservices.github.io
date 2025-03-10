---
homepage: false
layout: main
title: 8c. Build and reuse common components
includeInBreadcrumbs: true
eleventyNavigation:
  key: 8c. Build and reuse common components
  parent:  8. Design for greener architecture, data and security
---

Using and re-using common architectural components can help:

• increase resource efficiency
• reduce costs
• increase development speed

## Lead Roles

<p class="govuk-body"><strong class="govuk-tag">
  Technical architect
</strong></p>

* * *

## Sub-actions

[8b. (i) Build with modular components](#(i)-build-with-modular-components)
[8b. (ii) Create component libraries](#(ii)-create-component-libraries)

* * *

###  (i) Build with modular components

Component based architecture designs software as a collection of independently deployable modules.

#### Environmental benefit: 
Reduce resource usage by reusing components in different applications

{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukDetails({
  summaryText: "Read more",
  text: "Some placeholder text"
}) }}
* * *

###  (ii) Create component libraries

A component library is a collection of re-usable components, helping teams make use of things created for other projects. 

#### Environmental benefit: 
Save on resource consumption coming from developing components from scratch.

{{ govukDetails({
  summaryText: "Read more",
  html: "Some placeholder text"

}) }}
