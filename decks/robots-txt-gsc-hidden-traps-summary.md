---
title: Hidden Traps with Robots.txt and GSC
presenter: Gianna Brachetti-Truskawa, DEEPL SE
---
## Key Takeaways

1. Robots.txt Misconceptions:
   - It's not a security guard or a law bots must obey
   - It's an optional set of directives for crawl efficiency
   - Can be a security risk if misused

2. Absence of Robots.txt:
   - Crawlers assume they can access all content
   - Fine for small sites, but large sites benefit from crawl budget management

3. XML Sitemap Considerations:
   - Consider keeping it hidden for vulnerability reduction and crawl control
   - Helps prevent competitive intelligence in eCommerce and reduce attack vectors

4. Robots.txt Availability Issues:
   - Google may cache robots.txt for up to 24 hours
   - Changes can take up to 24 hours to be fetched
   - Redirect chains can lead to robots.txt being ignored

5. HTTP Status Code Implications:
   - 4xx errors (except 429) are treated as "allow all"
   - 429 (Too Many Requests) is treated as 5xx
   - 5xx errors can lead to domain deindexing

6. Security Risks:
   - Robots.txt can expose sensitive information or server vulnerabilities
   - It's not legally binding and can be ignored by malicious actors

7. Google's Approach:
   - May ignore robots.txt in some cases (e.g., click tracking parameters)
   - Often chooses indexation over restriction if in doubt

## Action Items

1. Implement Reliable Access Control:
   - Use HTTP Authentication instead of relying on robots.txt for security
   - Implement X-Robots-Tag: none for sensitive content

2. Handle Leaked Data:
   - Use 410 (Gone) status code for removed content
   - Implement X-Robots-Tag: none to prevent indexing

3. Protect Against Web Scraping and AI Training:
   - Implement rate limiting
   - Use path obfuscation techniques
   - Serve different versions of content to different user agents

4. Monitor Robots.txt:
   - Use Google Search Console to check versions and status
   - Implement uptime/status code monitoring
   - Set up alerts for relevant error classes in Search Console

5. Use Multi-level Control for AI Crawlers:
   - Combine robots.txt directives with other methods like HTTP headers and authentication

6. Regular Audits:
   - Check for outdated folders or sensitive data exposure
   - Review server vulnerabilities (e.g., Apache server status)
   - Ensure admin login paths and internal services are properly protected

7. Educate Team Members:
   - Ensure in-house teams understand the implications of robots.txt changes
   - Be aware of CMS plugins that might modify robots.txt

8. Use Parsers for Syntax Testing:
   - Utilize tools like www.realrobotstxt.com for syntax verification

9. Consider Alternatives to Robots.txt:
   - For duplicate content issues, address the root cause instead of relying on robots.txt
   - Use more robust methods for restricting access to personal data

10. Stay Informed:
    - Keep up-to-date with changes in how search engines interpret robots.txt
    - Monitor industry discussions and official documentation for best practices

Remember: While robots.txt is a useful tool for managing crawler behavior, it should not be relied upon for security or as the sole method of controlling access to sensitive content. A multi-layered approach to web security and SEO is essential.

For more information:
- Speakerdeck: Speakerdeck.com/giannabrachetti
- LinkedIn: @gianna-brachetti-truskawa
- Twitter: @tentaclequing
