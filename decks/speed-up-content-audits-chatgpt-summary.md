---
title: "How to Speed Up Content Audits using ChatGPT"
presenter: "Jonathon Roberts, Fly High Media"
---
## Key Takeaways

1. Tools Used:
   - Google Sheets
   - ChatGPT 4
   - Google App Scripts

2. Google App Scripts:
   - Allow automation of tasks within Google Sheets
   - Can be used to extract various data points from web pages

3. Data Points That Can Be Extracted:
   - Meta Data
   - Canonical Tag
   - Schema Markup
   - Published Date
   - Last Modified Date
   - Author
   - Article Tags and Category
   - Headings
   - Word Count
   - Internal & External Links
   - Robots.txt status
   - Tracking Code presence
   - Image details (number, file size, format)
   - Backlink Data
   - Search Console / Bing Webmaster Tools Data
   - GA4 Metrics
   - Page Speed & Core Web Vitals
   - Google Business Profile API data

4. Advantages Over Other Tools:
   - Faster
   - Potentially less costly
   - More flexible and customizable

5. Process Overview:
   - Extract site URLs (using Screaming Frog or XML Sitemap URL Extractor)
   - Use ChatGPT to generate Google App Scripts for data extraction
   - Deploy the scripts as Web Apps in Google Sheets
   - Run the formulas to extract data
   - Use ChatGPT to summarize actionables from the audit

6. Key Benefits:
   - Boosts Efficiency
   - Improved Accuracy & Consistency
   - Customizable & Scalable Solutions
   - Frees up time for other tasks
   - Easy to use

## Action Items

1. Set Up Tools:
   - Ensure access to Google Sheets and ChatGPT 4
   - Familiarize yourself with Google App Scripts

2. Extract Site URLs:
   - Use Screaming Frog or XML Sitemap URL Extractor to get a list of site URLs

3. Generate Scripts with ChatGPT:
   - Use the prompt: "Create a Google Script formula that extracts the [Insert What You Want to Extract] from a URL that is in a cell in Google Sheets"
   - Repeat for each data point you want to extract

4. Deploy Scripts in Google Sheets:
   - Copy the generated script into Google Sheets' App Script editor
   - Deploy as a Web App, setting appropriate permissions

5. Run Formulas:
   - Use the deployed formulas in your Google Sheet to extract data
   - Paste results as plain text (Ctrl/CMD + Shift + V)

6. Analyze Results:
   - Use ChatGPT to summarize actionables from the audit data

7. Troubleshoot Common Issues:
   - If ChatGPT provides a script instead of a formula, specify that you want a formula
   - For complex data like internal/external links, ask ChatGPT to split into separate columns
   - If content is not found, review HTML structure and adjust script accordingly

8. Continuous Improvement:
   - Refine your scripts and process over time for better efficiency and accuracy

Remember: This method offers a customizable, scalable solution for content audits that can significantly speed up the process while maintaining accuracy and consistency.

For more information and resources:
- Presentation Slides: speakerdeck.com/jonathonrobertsseo
- SOP Document: bit.ly/jonathon-brightonseo
- LinkedIn: linkedin.com/in/jonathon-roberts-seo/
- Twitter: @jonathonrseo
