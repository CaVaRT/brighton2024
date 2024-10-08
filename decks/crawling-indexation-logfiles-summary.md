---
title: Crawling, Indexation and Logfiles
presenter: Andor Palau, Palau Consulting
---
## Key Takeaways

1. Environmental Impact of Crawling:
   - Google data centers use significant amounts of water and resources
   - Google aims to make crawling more efficient and environmentally friendly

2. Crawl Budget Optimization:
   - Goal: Process content changes quickly, crawl new content fast, and manage resources efficiently
   - Crawl budget is allocated by hostname
   - Noindex and canonical tags don't help with crawling efficiency

3. Indexation Considerations:
   - Google can index various file types (PDF, HTML, images, videos, etc.)
   - Server errors can cause rapid and extreme damage to rankings
   - 4XX errors generally don't cost crawl budget, with some exceptions

4. Log File Analysis:
   - Log files provide crucial information about bot behavior on a website
   - Be aware of differences between server logs and load balancer logs
   - Google Search Console URL Inspection API can be helpful if log files are not available

5. Data Analysis Insights:
   - Web crawl data may deviate from Google Search Console data
   - Importance of identifying orphan pages and their impact
   - Analyze URLs with bot hits but no traffic
   - Monitor crawl rates for different types of content and URL structures

6. Crawl Efficiency Factors:
   - Impact of factors like word count, page size, URL depth, and content age on crawl frequency
   - Importance of monitoring pagination page crawling
   - Analyze how quickly new content starts generating traffic

## Action Items

1. Implement log file analysis:
   - Set up regular log file analysis to monitor bot behavior
   - Use tools like Oncrawl to analyze log data alongside other SEO metrics

2. Optimize crawl budget:
   - Identify and address inefficiencies in site structure and content
   - Monitor and optimize robots.txt file

3. Improve server performance:
   - Regularly check for and fix server errors
   - Implement monitoring for critical server issues

4. Analyze content performance:
   - Segment data by directories, URL types, authors, and temporal aspects
   - Identify patterns in crawl frequency and efficiency

5. Address orphan pages:
   - Develop a strategy to handle orphan pages (link, remove, or noindex)

6. Monitor new content performance:
   - Track how quickly new content is crawled and starts generating traffic
   - Optimize content launch strategies based on findings

7. Stay updated on Google's crawling practices:
   - Follow updates from Google about crawling efficiency
   - Adapt strategies based on new information about crawl budget allocation

For more information:
- Speaker deck: Speakerdeck.com/andorpalau
- Twitter: @andorpalau

Remember: Crawling and log file analyses remain extremely valuable for larger sites in 2024. Combine multiple data sources, segment your data effectively, and focus on identifying and addressing inefficiencies in your site's crawl patterns.
