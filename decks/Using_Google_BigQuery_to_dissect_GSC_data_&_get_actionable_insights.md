---
title: "Using Google BigQuery to dissect GSC data & get actionable insights"
presenter: "Marco Giordano - SEOTISTICS"
---
## Key Takeaways and Action Items:

1. Introduction to BigQuery
   - BigQuery is a data warehouse solution by Google
   - Allows storage of Google Search Console (GSC) data via a free connector
   - Provides access to more data rows due to anonymized queries

2. Advantages of BigQuery
   - Bypasses GSC 16-month limit and sampling
   - Enables easy reproduction and documentation of processes
   - Provides the purest data available from GSC

3. Using BigQuery
   - Write queries in SQL to extract data
   - AI can assist with basic SQL code writing
   - Choose the URL table for analysis as it contains the page column

4. Content Auditing Framework
   - Utilize BigQuery for comprehensive content auditing
   - Framework available at https://seotistics.com/content-auditing-framework/

5. Key Metrics to Analyze
   - Percentage of anonymized queries
   - Percentage of zero-click queries (aim for less than 40%)
   - Percentage of clicks from top 10% pages
   - Identify best-performing pages by clicks/impressions
   - Analyze evergreen content for repurposing and topic research

6. Query Analysis
   - Examine top 5 queries per page
   - Identify best-performing queries by clicks/impressions
   - Pay attention to queries with low clicks but high impressions

7. Integrating with GA4
   - Join GSC and GA4 data using the URL column
   - Create a page-centric table combining GSC and GA4 data
   - Focus on conversions, sales, and custom events/dimensions

8. Optimizations
   - Use DATA_DATE filtering to improve performance and reduce costs
   - Implement clustering on frequently queried columns (up to 4)
   - Consult with data engineers for optimal setup

9. Business Perspective
   - Align analysis with business goals and KPIs
   - Frame analysis around descriptive, predictive, and prescriptive questions
   - Connect insights to actions (e.g., optimize low-click pages, distribute high-performing content)

10. Risk Management
    - Set up triggers and warnings in BigQuery
    - Document common issues for quick resolution

## Action Items:
1. Set up BigQuery and connect it to your GSC data
2. Develop SQL queries for key metrics and analyses
3. Implement the content auditing framework
4. Integrate GA4 data with GSC data in BigQuery
5. Align your analysis with business questions and KPIs
6. Establish a process for turning insights into actions
7. Set up risk management protocols in BigQuery

## Resources:
- Learn Analytics for SEO [Course] - 30% Off (Until Oct. 15)
- Learn Analytics for SEO [Ebook] - 50% Off (Until Oct. 12)
- BigQuery Training By Google
- Google Documentation
- Seotistics Blog (for Web Analytics)

## For more information: 
- LinkedIn: /marco-giordano96/
- Twitter: @GiordMarco96
- Website: seotistics.com
