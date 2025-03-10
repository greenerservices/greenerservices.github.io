---
homepage: false
layout: main
title: 7b. Design lightweight digital pages
includeInBreadcrumbs: true
eleventyNavigation:
  key: 7b. Design lightweight digital pages
  parent:  7. Design for greener user journeys across all channels
---

The size of webpages affects the data that is transferred to a user device. Data transfer has implications for electricity consumption. Lightweight pages have environmental, general usability and inclusivity benefits.

### Lead Roles

Interaction designer, developer, content designer

* * *

## Sub-actions

[7b. (i) Set page weight budgets](#(i)-set-page-weight-budgets)
[7b. (ii) Design for lightweight multimedia](#(ii)-design-for-lightweight-multimedia)
[7b. (iii) Design for lightweight forms](#(iii)-design-for-lightweight-forms)
* * *

###  (i) Set page weight budgets

A page weight budget is an upper limit of the size of a webpage, measured in bytes.

Page weight budgets encourage close consideration of what is essential for users with small screen sizes or low bandwidth.   

#### Environmental benefit: 
Setting an limit on page sizes helps prevent bloat and save on data transfer and energy usage.

{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukDetails({
  summaryText: "Read more",
  text: "Some placeholder text"
}) }}
* * *

###  (ii) Design for lightweight multimedia

Images, videos and animation are frequently the most significant contributors to page weight. 

There are a range of approaches to reduce the impact of multimedia, including:

• only creating multimedia when there is a clear rationale for it
• choosing appropriate formats and compressing multimedia
• disabling autoplay on video content

#### Environmental benefit: 
Limiting the use and size of multimedia reduces data transfer.

{{ govukDetails({
  summaryText: "Read more",
  html: "Placeholder"
}) }}

* * *

###  (iii) Design for lightweight forms

Lightweight forms are designed to be simple and have the minimum functionality required. 

#### Environmental benefit: 
Designing lightweight forms means processing requires fewer resources. 

{{ govukDetails({
  summaryText: "Read more",
  html: "Placeholder"
}) }}
