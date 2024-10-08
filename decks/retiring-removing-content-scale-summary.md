---
title: Retiring and removing content… at scale

presenter: William Kerslake (University of Cambridge)
---
## Introduction
- The University of Cambridge faces challenges with an overgrown website
- Risks include duplicate content and a complex web of institutions
- The web estate is huge and growing, with over 2,500 sites and 2 million web pages

## Current Situation
- Websites are locally optimized
- Over 1,300 editors contribute to the content
- The vast amount of content makes it difficult for search engines and users to find relevant information

## SEO Approach
- Focus on making it easier for users, which in turn makes it easier for search engines
- Example: Searching for study costs can lead to incorrect or incomplete information

## Strategy for Content Retirement

### 1. Prioritize and Reduce
- Find content owners
- Don't work alone; involve stakeholders
- Get data: Implement Google Analytics 4 on everything
- Use Google Tag Manager with Lookup Table variable

### 2. Inventory and Audit
- Start crawling the entire web estate
- Be ruthless in content evaluation
- Be aware of additive bias (easy to add, hard to remove)

### 3. Archive
- Make archiving less scary for content owners

### 4. Establish Clear Criteria
Example criteria:
- For content from last year:
  - If views < 366, then delete
  - Else, review

### 5. Use ROT (Redundant, Obsolete, Trivial) Analysis
- Redundant: Duplicate or unnecessary content
- Obsolete: Outdated information
- Trivial: Content with little to no value in the last 12 months

### 6. Data-Driven Decisions
- Use formulas like:
  For content published > 10 years:
  - If ROT = true, then delete
  - Else, review

### 7. Tools and Techniques
- Use IMPORTXML function for data extraction
- Utilize Screaming Frog's Custom extraction & GA4 API for custom crawls
- Export data and use conditional formatting to target content for removal

### 8. Implementation
- Take out easy targets first
- Redirect users from removed content to relevant pages
- Develop a URL and domain strategy

## Key Takeaways
1. Content removal is crucial for maintaining a healthy, searchable website
2. Data-driven decisions are essential for identifying content to remove
3. Clear criteria and stakeholder involvement are key to successful content retirement
4. Archiving can make the process less daunting for content owners
5. Tools like Google Analytics 4, Screaming Frog, and custom scripts can streamline the process
6. Redirects are important to maintain user experience after content removal

## Action Points
1. Implement Google Analytics 4 across all websites
2. Set up Google Tag Manager with a Lookup Table variable for consistent tracking
3. Conduct a comprehensive content inventory and audit
4. Establish clear criteria for content retirement based on views, age, and relevance
5. Use the ROT (Redundant, Obsolete, Trivial) framework to evaluate content
6. Create custom crawls using tools like Screaming Frog to gather necessary data
7. Develop a process for involving content owners and stakeholders in the retirement decision
8. Set up an archiving system to preserve important but outdated content
9. Create a redirect strategy for removed content
10. Regularly review and update your URL and domain strategy
11. Monitor the impact of content removal on search performance and user experience

By implementing these strategies and regularly reviewing your content, you can maintain a more efficient and effective web presence, improving both user experience and search engine performance.

