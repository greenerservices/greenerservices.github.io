---
homepage: false
layout: main
title: 5a. Take a green approach to AI used by the service
includeInBreadcrumbs: true
eleventyNavigation:
  key: 5a. Take a green approach to AI used by the service
  parent:  5. Take a greener approach to AI and software tools
---

The use of Artificial Intelligence on a service could include analysing datasets, such as satellite or weather data. It could also include generative AI to create new content, such as text.

These technologies may bring about benefits as well as costs from an environmental sustainability standpoint. 

* * *

## Sub-actions

[5a. (i) Be clear on use case for AI](#(i)-be-clear-on-the-use-case-for-ai)
[5a. (ii) Choose the appropriate size model](#(ii)-choose-the-appropriate-size-model)
[5a. (iii) Reuse existing models where possible](#(iii)-reuse-existing-models-where-possible)
[5a. (iv) Carefully choose supplier and region](#(iv)-carefully-choose-supplier-and-region)

* * *

###  (i) Be clear on the use case for AI

Be clear on the use case for generative AI and whether an alternative non-generative AI approach such as image recognition, natural language processing would be more appropriate.

[AI Playbook for the UK Government](https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government/artificial-intelligence-playbook-for-the-uk-government-html#using-ai-safely-and-responsibly): 'Assess the environmental impact of training and/or deploying your AI system before commencing development. Consider whether the impact represents a reasonable trade-off between benefits and energy consumption, and whether a less energy-intensive system might be able to achieve the same or similar results.'   

#### Environmental benefit: 
Being clear on the use case for AI, and likely environmental impacts, helps ensure the right choices are made.

{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukDetails({
  summaryText: "Read more",
  text: "Coming soon!"
}) }}
* * *

###  (ii) Choose the appropriate size model

Services will use AI for different tasks. Small AI models can be trained for a specific task, are cost effective, quick (as there is less data for them to reference) and they can be run on basic hardware (such as a PC or phone).

Having good AI evaluation/performance metrics will allow teams to make effective choices about the smallest model they can 'get away with' using.

#### Environmental benefit: 
Smaller AI models consume less resources to train and operate compared to larger ones.

{{ govukDetails({
  summaryText: "Read more",
  html: "Coming soon!"
}) }}

* * *

###  (iii) Reuse existing models where possible

Consider building on an existing model rather than starting a new one from scratch.

#### Environmental benefit: 
Reusing an exisitng model saves on the impacts assoicated with developing a new one.

{{ govukDetails({
  summaryText: "Read more",
  html: "Coming soon!"
}) }}

* * *

###  (iv) Carefully choose supplier and region

Choosing the right AI supplier and location is important. You can reduce the carbon footprint by training models in low-carbon regions or times of day.

Keep in mind the other environmental impacts of AI, especially water use. Always consider regional differences. For example. water use will have a different impact in Scotland than Suffolk.

Use third-party auditors to help select the most environmentally-friendly supplier.

Teams might be able to swap a well-known model for a more sustainable and similarly-effective option (e.g. DistilBERT vs BERT) - especially if they have the service performance metrics to support their decision

#### Environmental benefit: 
Choice of supplier and region for AI models can have a significant impact on carbon footprint.

{{ govukDetails({
  summaryText: "Read more",
  html: "Coming soon!"
}) }}
