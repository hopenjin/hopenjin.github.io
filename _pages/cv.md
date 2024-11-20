---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D in Computer Science, Florida International University, 2027 (expected)
* M.S. in Information Technology and Management, The University of Texas at Dallas, 2018
* B.A. in Tourism Management, Nanjing Normal University, 2016

Research Experience
======
* Efficient Deployment and Inferencing of Large Language Models
  * Research on optimizing both the inference processes and scalability of Large Language Models (LLMs) by leveraging strategies like cloud-edge collaboration, distributed AI, and ML efficiency techniques (e.g., early exit, quantization).
  * Mentor: Dr. Yanzhao Wu
  * Contributions:
    * **CE-CoLLM: Efficient and Adaptive Large Language Models Through Cloud-Edge Collaboration**  
      * *arXiv:2411.02829*, under review at MLSys 2025  
      Proposed the CE-CoLLM method to optimize the inference efficiency and accuracy of LLMs on edge devices through cloud-edge collaboration and ML efficiency techniques, addressing diverse requirements such as inference accuracy, low latency, resource constraints, and privacy preservation.
    * **DA-MoE: Dynamic Expert Allocation for Mixture-of-Experts Models**  
      * *arXiv:2409.06669*, 2024  
      Proposed the DA-MoE method, a dynamic expert allocation mechanism for Mixture-of-Experts (MoE) models that leverages attention-based token importance in Transformer architectures to dynamically adjust the number of experts per token, enhancing efficiency and predictive performance.

* Advanced Training Strategies and Ensemble Learning for Model Performance
  * Research on enhancing training efficiency, performance, and robustness of deep neural networks (DNNs) and large language models (LLMs).
  * Mentor: Dr. Yanzhao Wu
  * Contributions:
    * **Efficient and Learning Rate Boosted Deep Ensembles**  
      * under review at CVPR 2025  
      Proposed the LREnsemble framework, effectively utilizing diverse models, generated through learning rate (LR) tuning, to construct efficient and high-quality ensembles, avoiding the waste of sub-optimal LR-tuned models by leveraging their diversity for ensemble learning.
    * **Effective Diversity Optimizations for Deep Ensembles**  
      * *CogMI 2024*  
      Proposed the Synergistic Diversity metric, significantly improving ensemble accuracy and robustness to out-of-distribution samples by optimizing diversity among member models.
    * **Rethinking Learning Rate Tuning in Large Language Models**  
      * *CogMI 2023*  
      Introduced the LRBench++, a dynamic learning rate tuning framework, improving DNNs and LLMs training efficiency and achieving a balance between model accuracy and training cost.

Work Experience
======
* **Cintra US**  
  * Data Scientist, May 2022 – Aug. 2023, Austin, TX  
    * Built machine learning models to improve the work efficiency of business and operation teams, including:  
      1. **Dynamic Pricing**: Developed LightGBM (quantile) models to predict future demand and its confidence interval, enabling the identification of demand anomalies.  
      2. **Incident Detection**: Created a prediction system using real-time vehicle status data, incident history reports, and highway pavement data.  
      3. **Analytics AI**: Built predictive models and explainability tools for business decision-making.  
    * Conducted statistical analyses (A/B tests) to quantify driver behaviors and preferences, such as peak-hour behavior and lane-changing patterns, while measuring the impact of external interventions (e.g., large events, extreme weather).

* **HP Inc.**  
  * Marketing Survey Data Analyst, Apr. 2020 – May 2022, Vancouver, WA  
    * Modeled large-scale email survey data to analyze the impact of customer journey experiences on Net Promoter Scores (NPS) and provide actionable insights.  
    * Prioritized customer review records for response team efficiency using Supervised LDA topic modeling and statistical learning models.  
    * Assisted UX teams with power analysis, A/B testing, and general linear regression methods to optimize email survey titles and UI.

* **Samsung Electronics America**  
  * QA Engineer, Mar. 2019 – Mar. 2020, Plano, TX  

* **ZTE USA Inc.**  
  * Software Test Engineer (Automation Testing), Apr. 2018 – Mar. 2019, Richardson, TX  
    * Developed and implemented the "AIO" automation testing project, transitioning from manual to automated testing to enhance efficiency and quality.

Awards
======
* IEEE TPS 2023 NSF Travel Award, November 2023

Service and Leadership
======
* Reviewer: ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD), 2024
* Reviewer: Asian Conference on Machine Learning (ACML), 2024
* External Reviewer: The Web Conference (WWW), 2024, 2025
* External Reviewer: Association for the Advancement of Artificial Intelligence (AAAI), 2024
* External Reviewer: International Joint Conference on Artificial Intelligence (IJCAI), 2024
* External Reviewer: IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 2024 
* External Reviewer: SIAM International Conference on Data Mining (SDM), 2024

<!-- Education
======
* Ph.D in Computer Science, Florida International University, 2027 (expected)
* M.S. in Information Technology and Management, The University of Texas at Dallas, 2018
* B.A. in Tourism Management, Nanjing Normal University, 2016

Work experience
======
* Spring 2024: Academic Pages Collaborator
  * Github University
  * Duties includes: Updates and improvements to template
  * Supervisor: The Users

* Fall 2015: Research Assistant
  * Github University
  * Duties included: Merging pull requests
  * Supervisor: Professor Hub

* Summer 2015: Research Assistant
  * Github University
  * Duties included: Tagging issues
  * Supervisor: Professor Git
  
Skills
======
* Skill 1
* Skill 2
  * Sub-skill 2.1
  * Sub-skill 2.2
  * Sub-skill 2.3
* Skill 3

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams -->
