---
homepage: false
layout: main
title: 4c. Select greener data centre providers
includeInBreadcrumbs: true
eleventyNavigation:
  key: 4c. Select greener data centre providers
  parent:  4. Work with partners who can support your greener goals
---
Data centre providers may differ significantly in terms of the availability of renewable energy in the regions where their facilties are based and how they monitor and report on electricity consumption and water usage.

* * *

## Sub-actions

[4c. (i) Choose providers with regions with renewable energy available](#(i)-choose-providers-with-regions-with-renewable-energy-available)
[4c. (ii) Choose providers monitoring energy and water usage](#(ii)-choose-providers-monitoring-energy-and-water-usage)
[4c. (iii) Ensure providers supply reporting tools and actionable data on environmental impact](#(iii)-ensure-providers-supply-reporting-tools-and-actionable-data-on-environmental-impact)

* * *

###  (i) Choose providers with regions with renewable energy available

Select cloud provider regions where the grid carbon intensity is low.

Choose cloud providers with higher proportion of energy consumed by the data centre that comes from renewable resources.

NB: Government departments may be constrained to choosing regions within the UK for reasons of data sovereignty
 

#### Environmental benefit: 
Data centres in regions with a lower-carbon grid mix will likely have lower operational carbon footprint.

{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukDetails({
  summaryText: "Read more",
  text: "Coming soon!"
}) }}
* * *

###  (ii) Choose providers monitoring energy, water usage and performance

The energy efficiency of a data centre is often expressed in terms of Power Usage Effectiveness (PUE). It is calculated by dividing the total amount of energy consumed by the facility by the energy used specifically by the IT equipment.

Water plays an essential role in cooling data centres. Water Usage Effectiveness (WUE) is a measure of water efficiency. Tracking water use is even more important in areas of water stress and where free cooling is not used.

#### Environmental benefit: 
Monitoring energy and water use allows comparison between the efficiency of data centres.

{{ govukDetails({
  summaryText: "Read more",
  html: "

#### Likely environmental impact: medium

This sub-action is likely to be of medium environmental impact.

{% from "govuk/components/table/macro.njk" import govukTable %}

{{ govukTable({
  caption: "Month you apply",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    {
      text: "Date",
      classes: "govuk-!-width-one-half"
    },
    {
      text: "Rate for vehicles",
      classes: "govuk-!-width-one-quarter"
    },
    {
      text: "Rate for bicycles",
      classes: "govuk-!-width-one-quarter"
    }
  ],
  rows: [
    [
      {
        text: "First 6 weeks"
      },
      {
        text: "£109.80 per week"
      },
      {
        text: "£59.10 per week"
      }
    ],
    [
      {
        text: "Next 33 weeks"
      },
      {
        text: "£159.80 per week"
      },
      {
        text: "£89.10 per week"
      }
    ],
    [
      {
        text: "Total estimated pay"
      },
      {
        text: "£4,282.20"
      },
      {
        text: "£2,182.20"
      }
    ]
  ]
}) }}

"
}) }}


* * *

###  (iii) Ensure providers supply reporting tools and actionable data on environmental impact

Check providers have tools available to estimate, monitor and manage cloud environmental footprint. 

When working with hyperscalers, confirm that these tools and professional services are available where your organization is consuming cloud services.

#### Environmental benefit: 
Actionable data empowers action! 

{{ govukDetails({
  summaryText: "Read more",
  html: "Coming soon!"
}) }}
