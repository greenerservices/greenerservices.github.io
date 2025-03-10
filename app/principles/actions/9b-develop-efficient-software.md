---
homepage: false
layout: main
title: 9b. Develop efficient software
includeInBreadcrumbs: true
eleventyNavigation:
  key: 9b. Develop efficient software
  parent:  9. Develop and test for efficiency
---

Build on the good practice guidance described in Principle 8 'Design for greener architecture, data and security' and consider further approaches to reduce the energy consumption of the ‘front end’ (the user-facing part) and the ‘back end’ of a website or application.

### Likely Lead Roles

Developer

* * *

## Sub-actions

[9b. (i) Consider server side rendering](#(i)-consider-server-side-rendering)
[9b. (ii) Utilise lazy loading](#(ii)-utilise-lazy-loading)
[9b. (iii) Utilise caching where possible](#(iii)-utilise-caching-where-possible)
[9b. (iv) Use content delivery networks](#(iv)-use-content-delivery-networks)

* * *

###  (i) Consider server side rendering

Server-side rendering (SSR) renders a web page on a server before sending it to the user’s browser. This is different to client-side rendering (CSR), where the browser gets raw data from a server to generate content.

#### Environmental benefit: 
Using server-side rendering reduces processing and energy use.

{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukDetails({
  summaryText: "Read more",
  text: "Some placeholder text"
}) }}
* * *

###  (ii) Utilise lazy loading

Lazy loading delays the loading of resources until they are needed, such as when users scroll to them on a page.

#### Environmental benefit: 
Lazy loading can save on data transfer and energy use for the majority of users.

{{ govukDetails({
  summaryText: "Read more",
  html: "

#### Current level of adoption

This sub-action is a new one to implement.  

***
  
#### Co-benefits

User experience: Lazy loading can improve initial page loading times and optimise memory usage, especially for applications with large datasets. 

#### Trade-offs
 
Number of requests: Lazy loading may mean the browser has to send multiple requests to the server for content as some users interact with a page. 
Development time: It may also mean additional code needs to be added to instruct the browser how to lazy load. 

#### Implementation

Guidance on implementing lazy loading:
[https://cloudinary.com/guides/automatic-image-cropping/server-side-rendering-benefits-use-cases-and-best-practices](https://cloudinary.com/guides/automatic-image-cropping/server-side-rendering-benefits-use-cases-and-best-practices)

#### Further reading 

[https://www.cloudflare.com/en-gb/learning/performance/what-is-lazy-loading/](https://www.cloudflare.com/en-gb/learning/performance/what-is-lazy-loading/)

"
}) }}

* * *

### (iii) Utilise caching where possible

Caching temporarily stores frequently accessed data in a designated area ("cache") to enable faster access to it. Caching can focus on:

• the browser
• Content Delivery Networks (CDN)
• Application Programming Interfaces (API)

#### Environmental benefit: 
Using caching can reduce unnecessary data transfer and server load, cutting energy consumption.

{{ govukDetails({
  summaryText: "Read more",
  text: "Some placeholder text"
}) }}

* * *

### (iv) Use content delivery networks

Content delivery networks (CDNs) are a network of servers that cache static content as close to users as possible.

#### Environmental benefit: 
Using content delivery networks reduce web traffic helping cut energy use.

{{ govukDetails({
  summaryText: "Read more",
  text: "Some placeholder text"
}) }}