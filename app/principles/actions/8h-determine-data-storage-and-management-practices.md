---
homepage: false
layout: main
title: 8h. Determine data storage and management practices
includeInBreadcrumbs: true
eleventyNavigation:
  key: 8d. Determine data storage and management practices
  parent:  8. Design for greener architecture, data and security
---

The approaches we take to the storage and management of data can have significant implications for energy usage.

### Likely Lead Roles

Solution architect, data architect

* * *

## Sub-actions

[8h. (i) Use appropriate storage tiers for different data needs](#(i)-use-appropriate-storage-tiers-for-different-data-needs)
[8h. (ii) Choose the right data format](#(ii)-create-component-libraries)
[8h. (iii) Use data deduplication methods for storage and backup](#(iii)-use-data-deduplication-methods-for-storage-and-backup)
[8h. (iv) Apply best practice for database indexing](#(iv)-apply-best-practice-for-database-indexing)
[8h. (v) Implement automated rules for archiving or deleting data](#(v)-implement-automated-rules-for-archiving-or-deleting-data)
[8h. (vi) Fit the data formatted to the expected query patterns](#(vi)-fit-the-data-formatted-to-the-expected-query-patterns)
[8h. (vii) Create permissions and access plans that minimise the amount of data load per user](#(vii)-create-permissions-and-access-plans-that-minimise-the-amount-of-data-load-per-user)
[8h. (viii) Consider need for consistency of data](#(viii)-consider-the-need-for-consistency-of-data)

* * *

###  (i) Use appropriate storage tiers for different data needs

'Storage tiers' describe different levels of access based on how often data is used. 

These tiers are often referred to by 'temperature': 'hot' for high-performance, fast access storage for data that accessed often, and 'cold' for slower, cheaper storage options for data accessed less often.

#### Environmental benefit: 
Moving rarely accessed data to lower cost tiers reduces energy consumption.

{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukDetails({
  summaryText: "Read more",
  text: "Some placeholder text"
}) }}
* * *

###  (ii) Choose the right data format

Different formats for data storage have different levels of compression and efficiency.

For example, Parquet is a better way to store large datasets than CSV. It uses less space, and is faster and more efficient.

#### Environmental benefit: 
Choosing more efficient data format reduces storage for large data sets.

{{ govukDetails({
  summaryText: "Read more",
  html: "Some placeholder text"

}) }}

* * *

###  (iii) Use data deduplication methods for storage and backup

Data deduplication identifies and removes redundant copies of data in a storage system. This reduces the storage space needed by removing duplicate data.

#### Environmental benefit: 
Removing redundant data saves on storage and associated energy consumption. 

{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukDetails({
  summaryText: "Read more",
  text: "Some placeholder text"
}) }}
* * *

###  (iv) Apply best practice for database indexing 

A database index is a structure that improves the speed of data retrieval. 

#### Environmental benefit: 
Optimise database performance through a series of practices.

{{ govukDetails({
  summaryText: "Read more",
  html: "Some placeholder text"

}) }}


* * *

###  (v) Implement automated rules for archiving or deleting data

A clear data retention policy is needed to automate archiving or deleting of data. 

#### Environmental benefit: 
Reducing data storage saves on energy consumption

{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukDetails({
  summaryText: "Read more",
  text: "Some placeholder text"
}) }}
* * *

###  (vi) Fit the data formatted to the expected query patterns  

Placeholder

#### Environmental benefit: 
To optimise required storage and compute per query. 

{{ govukDetails({
  summaryText: "Read more",
  html: "Some placeholder text"

}) }}

* * *

###  (vii) Create permissions and access plans that minimise the amount of data load per user

Create permissions/access plans that minimise the amount of data load per user based on their actual needs.

Move away from access model per service/product to be built, and instead data level service created that creates access across all services based on data need per role. This brings benefit in terms of re-use of permission model, fewer touchpoints from service desks (tickets, actions, document required), tighter compliance to GDPR, fewer loads on pages for data they dont need.

#### Environmental benefit: 
Optimise required storage and compute per query 

{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukDetails({
  summaryText: "Read more",
  text: "Some placeholder text"
}) }}
* * *

###  (viii) Consider need for consistency of data

Making large data sets consistent across different regions requires cost and effort. Consider if a project needs high levels of consistency.

#### Environmental benefit: 
Optimise required storage and compute per query 

{{ govukDetails({
  summaryText: "Read more",
  html: "Some placeholder text"

}) }}


