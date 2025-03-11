---
homepage: false
layout: main
title: 8g. Identify data to be collected
includeInBreadcrumbs: true
eleventyNavigation:
  key: 8g. Identify data to be collected
  parent:  8. Design for greener architecture, data and security
---
'Data is distinct pieces of information. When designing and running services you should make appropriate use of data to inform your choices and improve the experience for users.' GOV.UK Service Manual, [Designing With Data](https://www.gov.uk/service-manual/design/designing-with-data-an-introduction/)

Identifying the data that a service needs to collect has environmental impact implications as that data will have to be stored.

### Likely Lead Roles

Data architect, technical architect

* * *

## Sub-actions

[8g. (i) Only collect data that is necessary](#(i)-only-collect-data-that-is-necessary)
[8g. (ii) Identify opportunities for data sharing](#(ii)-identify-opportunities-for-data-sharing)

* * *

###  (i) Only collect data that is necessary

Find out if the data you need has been collected elsewhere and if you can reuse it.

#### Environmental benefit: 
Reducing data storage cuts required infrastructure, power and data transfer.

{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukDetails({
  summaryText: "Read more",
  text: "Coming soon!"
}) }}
* * *

###  (ii) Identify opportunities for data sharing

Sharing data with other services might mean it only needs to be collected once, saving on storage.

#### Environmental benefit: 
Reducing data storage cuts required infrastructure, power and data transfer.

{{ govukDetails({
  summaryText: "Read more",
  html: "Coming soon!"

}) }}
