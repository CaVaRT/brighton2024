---
title: "Top 10 Consent Mode Mistakes to Avoid"
presenter: "Phil Pearce, Analytics Director & Founder"
---
## Key Takeaways:

1. Consent Mode and Modelling:
   - Modelling (also called Upscaling) helps recover approximately 15% of missed sessions due to consent issues.
   - Consent Mode V2 introduced two new fields: ad_personalization and ad_user_data.

2. Basic vs Advanced Mode:
   - Advanced mode generally provides more conversions (10-20% upscaling).
   - Basic mode should only be used in specific circumstances (e.g., legal restrictions, very small sites).

3. Top 10 Consent Mode Mistakes:
   a. Using Basic mode instead of Advanced mode
   b. Using HTML instead of CMP Template and not refreshing the template regularly
   c. Using AutoBlock instead of GTM categories
   d. Blending consent mode with blocking rules
   e. Incorrectly setting defaults and GEO-IP countries
   f. Using the wrong event_name trigger
   g. Incorrect industry category for basic mode
   h. Not categorizing non-Google tags (e.g., Facebook, LinkedIn, TikTok)
   i. Not enabling Bing Consent Mode
   j. Lack of regular monitoring and validation

4. Importance of Correct Implementation:
   - Avoiding GDPR fines (up to 4% of global revenue) or CCPA class action lawsuits ($5k per user)
   - Preventing negative PR, brand damage, and potential Google Ads account bans
   - Ensuring accurate reporting and bidding for PPC and SEO

## Action Items:

1. Implement Advanced Consent Mode unless there are specific reasons not to (e.g., legal restrictions).

2. Use CMP Templates instead of custom HTML for Consent Mode implementation.
   - Regularly update and refresh these templates.

3. Avoid using AutoBlock; instead, use GTM categories for proper tag management.

4. Don't mix consent mode with blocking rules - choose one approach.

5. Set default consent states correctly:
   - Ensure GEO-IP country settings are applied before general defaults.
   - Be cautious with the new "set default" feature in GTAG due to potential race conditions with GTM.

6. Use the correct event_name trigger for your specific CMP (e.g., OneTrustGroupsUpdated for OneTrust).

7. If using Basic mode, select the appropriate industry vertical (can affect conversions by 2-4%).
   - Note: Changing this setting should be done ethically and with client permission.

8. Properly categorize non-Google tags (Facebook, LinkedIn, TikTok) to ensure compliance.

9. Enable Bing Consent Mode alongside Google's Consent Mode.

10. Implement regular monitoring and validation of your Consent Mode setup:
    - Use tools like ConsentModeMonitor.com for free validation.
    - Regularly check consent validation in Tag Assistant and GA4.

11. Stay informed about consent regulations in different regions, especially if operating internationally.

12. Document your Consent Mode implementation thoroughly for future reference and audits.

13. Consider attending training events or accessing free resources to stay updated on best practices (e.g., bit.ly/privacy4marketers-recordings).

Remember: Proper implementation of Consent Mode is crucial for legal compliance, accurate data collection, and optimized marketing performance. Regular audits and updates are necessary to maintain effectiveness and compliance.
