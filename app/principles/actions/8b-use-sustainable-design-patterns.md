---
homepage: false
layout: main
title: 8b. Use sustainable design patterns
includeInBreadcrumbs: true
eleventyNavigation:
  key: 8b. Use sustainable design patterns
  parent:  8. Design for greener architecture, data and security
---

Sustainable design patterns help create application architecture that:

• minimises idle resources
• enhances efficiency
• leverages shared infrastructure

### Likely lead roles

Technical architect

## Sub-actions

[8b.(i) Follow patterns for microservices](#(i)-follow-patterns-for-microservices)
[8b.(ii) Apply best practices for containers](#(ii)-apply-best-practices-for-containers)
[8b.(iii) Use autoscaling capabilities](#(iii)-use-autoscaling-capabilities)
[8b.(iv) Prioritise open and inner source where possible](#(iv)-prioritise-open-and-inner-source-where-possible)
[8b.(v) Use caching](#(v)-use-caching)
[8b.(vi) Design for asynchronous patterns and transactions](#(vi)-design-for-asynchronous-patterns-and-transactions)

* * *

###  (i) Follow patterns for microservices

A microservices architecture breaks applications into smaller, independent services. This helps us build composable and collaborative services, driven by events, commands and queries. 

#### Environmental benefit: 
Ensure that only the necessary resources are consumed.

{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukDetails({
  summaryText: "Read more",
  html: "

#### Likely environmental impact: medium

This sub-action is likely to be of medium environmental impact.

#### Current adoption level: high

This sub-action is being implemented on many projects.

***
  
#### Co-benefits

• Scalability and cost: Microservices can be scaled independently to meet demand, which can save costs. 
• Flexibility and speed: Microservices enable each service to be changed independently, reducing the risk and time associated with making coordinated changes across a monolithic application.

#### Trade-offs
 
• Complexity: Microservices can be more complex maintain than monolithic applications. 
• Security: Each microservice requires its own security measures and there needs to be communication between them

#### Further reading

• Microsoft, [Microservice architecture style](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices)
• Atlassian, [Advantages of microservices and disadvantages to know](https://www.atlassian.com/microservices/cloud-computing/advantages-of-microservices)

"
}) }}

***

###  (ii) Apply best practices for containers

Containarized architecture means packaging software into self-contained units. These can then consistently run in any environment.

#### Environmental benefit: 
Containerization helps ensure that services only consume necessary resources.

{{ govukDetails({
  summaryText: "Read more",
  html: "

#### Likely environmental impact: medium

This sub-action is likely to be of medium environmental impact.

#### Current adoption level: medium

This sub-action is being implemented on some projects across government.

***
  
#### Co-benefits

• Scalability: Containers can be easily added to a single machine, and can be scaled up or down as needed
• Security: Containers isolate applications from one-another, reducing the risk of malicious code spreading between them or to the host system. 
• Portability: Containers can run on any platform, and can be easily moved between different environments. 
• Agility: Containers allow developers to integrate with their existing environment.

#### Trade-offs
 
• Complexity: Having a large number of containers across different environments can present a management challenge. 

#### Further reading 

• Google, [7 Best Practices for Building Containers](https://cloud.google.com/blog/products/containers-kubernetes/7-best-practices-for-building-containers)
• IBM, [Containerization](https://www.ibm.com/think/topics/containerization)

"
}) }}

* * *

### (iii) Use autoscaling capabilities

Autoscaling is about adjusting the resources allocated to a workload based on demand.

#### Environmental benefit: 
Ensure efficient resource use and reduces energy consumption during periods of low usage.

{{ govukDetails({
  summaryText: "Read more",
  html: "

#### Likely environmental impact: high

This sub-action is likely to be of high environmental impact.

#### Current adoption level: medium

This sub-action is being implemented on some projects.

***
  
#### Co-benefits

• Cost - Autoscaling can help reduce costs by scaling down during periods of low demand and avoiding over-provisioning and under-provisioning.
• Performance - Autoscaling can help ensure that application performance is optimised by providing the right resources. 
• Resilience- Autoscaling helps ensure that applications have the resources they need to maintain consistent availability.
• Management: Autoscaling simplifies the management of computing resources.

#### Trade-offs
 
• Setting organisational policy: Successful autoscaling requires organisations define proper scaling policies, including thresholds and rules.

#### Further reading

• IBM, [What is auto scaling?](https://www.ibm.com/think/topics/autoscalings)

"
}) }}

* * *

### (iv) Prioritise open and inner source where possible

Open source is software where the source is publicly available. This allows anyone to access, change and distribute it. Organisations use inner source to apply open source practices internally.

#### Environmental benefit: 
Reduce redundancy, improves efficiency and promotes sustainable coding.

{{ govukDetails({
  summaryText: "Read more",
  html: "

#### Likely environmental impact: medium

This sub-action is likely to be of medium environmental impact.

#### Current adoption level: medium

This sub-action is being implemented on some projects.

***
  
#### Co-benefits

• Development time and costs: Inner source promotes the reuse of existing components, reducing development time and associated costs
• Design and code quality: Inner source encourages collective review and quality assurance of designs and code, serving to improve
• Knowledge sharing: Inner source promotes a culture of collaboration and knowledge sharing between teams, breaking down siloes in the process

#### Trade-offs
 
• Organisational alignment: Inner sourcing may require a significant cultural shift within an organization.

#### Further reading

• Salesforce, [‘Inner source - what is it?’](https://engineering.salesforce.com/inner-sourcing-whats-this-ef2220ae59ec/)

"
}) }}

* * *

### (v) Use caching

Caching temporarily stores frequently accessed data in a designated area (called a "cache"). This enables faster access to that data.

#### Environmental benefit: 
Reduce unnecessary data transfer, server load and energy consumption.

{{ govukDetails({
  summaryText: "Read more",
  html: "

#### Likely environmental impact: medium

This sub-action is likely to be of medium environmental impact.

#### Current adoption level: medium

This sub-action is being implemented on some projects.

***
  
#### Co-benefits

• User experience: Caching can improve the performance of applications like websites by speeding up loading times.
• Improved SEO - Caching can help improve a website's search engine optimization (SEO) by making it more user-friendly
• Cost savings - Caching can reduce the need for duplicated infrastructure, which can save money

#### Trade-offs
 
• Complexity: Caching can add complexity to applications, and how to invalidate data that is ‘stale’.

#### Further reading

• AWS, [Caching Overview](https://aws.amazon.com/caching/)

"
}) }}

* * *

### (vi) Design for asynchronous patterns and transactions

Asynchronous patterns and transactions allow tasks to run independently of one-another. 

#### Environmental benefit: 
Enables workloads to run when grid is greener.

{{ govukDetails({
  summaryText: "Read more",
  html: "

#### Likely environmental impact: medium

This sub-action is likely to be of medium environmental impact.

#### Current adoption level: medium

This sub-action is being implemented on some projects.

***
  
#### Co-benefits

• Efficiency and cost: Asynchronous patterns can enable efficient use of cloud resources and running workloads when there is unused capacity. 

#### Trade-offs
 
• Complexity: Lack of Service Level Agreements (SLAs) can create issues if not implemented properly 

#### Further reading

• Salesforce, [Asynchronous Processing](https://architect.salesforce.com/decision-guides/async-processing)

"
}) }}