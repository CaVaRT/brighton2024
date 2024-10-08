---
title: "How to validate your site speed optimization efforts"
presenter: "Loukil Aymen (Speetals)"
---
## Introduction

- Site speed matters for:
  - Users
  - SEO
  - Conversions
  - Brand reputation
  - Inclusiveness
  - Accessibility
  - Costs
  - Business

- Web performance optimization is costly:
  - Web Performance Consultant: $1500/day
  - Costs can accumulate quickly ($1 every 30 seconds)

## Challenges in Validating Optimization Efforts

- Lack of impact evidence
- Projects can go wrong (e.g., migrations increasing TTFB)

Main reasons for ineffective validation:
1. Inadequate tools/data
2. Inadequate metrics
3. Unclear expectations

## How to Validate Site Speed Efforts

### 1. Set a Baseline

- Set up the right tools
- Measure and know your current performance
- Get a performance history

### 2. Use Real User Monitoring (RUM)

- RUM provides real-time user data and interactions
- Benefits:
  - Clear view of users' experience
  - Ability to optimize and see the impact

### 3. Leverage RUM Data Effectively

- Break down and segment the data:
  - Device
  - Connection type
  - Location
  - Navigation type
  - CPU
  - Device memory
  - Page type

- Analyze different segments for insights:
  - Different locations may show varied performance
  - Connection types can impact metrics like LCP

### 4. Use Appropriate Metrics

- Don't rely solely on averages
- Use percentiles (25th, 75th, 95th) for a more accurate representation

### 5. Focus on Atomic Optimizations

- Make optimizations small, isolated, and atomic
- Example: Adding "fetchpriority" high to hero image
  - Specify metric, page type, device, and location
  - Describe the optimization
  - Plan how to measure the impact using RUM data

## Key Takeaways

1. Implement Real User Monitoring (RUM) and learn to use it effectively
2. Use adequate metrics, focusing on percentiles rather than averages
3. Perform atomic optimizations for easier validation

## Action Points

1. Set up RUM tools to collect real user data
2. Create a baseline of your current site performance
3. Segment your data based on various factors (device, location, connection type, etc.)
4. Analyze performance across different segments
5. Start using percentiles (25th, 75th, 95th) instead of averages for performance metrics
6. Break down optimization efforts into small, atomic changes
7. For each optimization:
   - Clearly define the metric to improve
   - Specify the segment (page type, device, location)
   - Describe the optimization in detail
   - Plan how to measure the impact using RUM data
8. Regularly review and validate the impact of each optimization
9. Continuously iterate and improve based on the data collected

By following these steps and focusing on data-driven, atomic optimizations, you can more effectively validate your site speed optimization efforts and ensure tangible improvements in user experience.

