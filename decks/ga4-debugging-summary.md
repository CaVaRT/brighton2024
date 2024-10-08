---
title: GA4 Debugging - Survive and Thrive
presenter: Jonathan Moore, Technical SEO and Analytics Consultant
---
## Key Takeaways

1. Understanding Google Tags:
   - Google Tags can send data to multiple destinations
   - Different tag IDs: GT-XXXXXXXXX, G-XXXXXXXXX, AW-XXXXXXXXX

2. Google Tag Checks:
   - Review Data Streams > Web Stream Details > Configure Tag Settings
   - Pay attention to Google Tag IDs
   - Check tag details for "ignore duplicates" setting
   - Review Google Tag settings for potential conflicts

3. Snippet Checks:
   - Ensure correct placement of Google Tag snippet in HTML head
   - Check for proper GTM snippet placement (head and body)
   - Use Screaming Frog to check tag presence on every page
   - Use Little Warden to detect snippet changes

4. Chrome Debugging Setup:
   - Set up a Chrome property for auditing
   - Add the Tag Assistant Companion Chrome extension

5. Debugging 101: Using Tag Assistant:
   - Navigate to Tag Assistant site and connect to debug
   - Use Summary to see WHERE tags are firing
   - Inspect WHEN tags fired using the timeline
   - Check WHAT is being sent in individual tags

6. Debugging 201: GTM Preview Mode:
   - Use GTM preview mode to debug tags, triggers, and variables
   - Triggers show WHY tags fire
   - Variables show WHAT is being sent
   - Use debug_mode parameter to check WHAT and WHEN

7. Debugging 301: Using Chrome Dev Tools:
   - Use Network tab for detailed debugging
   - Filter requests to focus on GA, gtag, or GTM
   - Inspect Payload and Initiator tabs for deeper insights
   - Use wildcards to filter Google-related requests
   - Block specific requests to troubleshoot issues

## Action Items

1. Set Up Debugging Environment:
   - Create a Chrome property for auditing
   - Install Tag Assistant Companion Chrome extension

2. Perform Regular Tag Checks:
   - Review Google Tag settings in GA4 interface
   - Check for correct snippet placement across your site

3. Implement Bulk Checking Tools:
   - Set up Screaming Frog for site-wide tag checks
   - Configure Little Warden for snippet change detection

4. Master Tag Assistant Debugging:
   - Practice using Tag Assistant for basic debugging
   - Familiarize yourself with Summary, Timeline, and individual tag inspection

5. Utilize GTM Preview Mode:
   - Use GTM preview mode to debug complex setups
   - Pay special attention to triggers and variables

6. Advanced Debugging with Chrome Dev Tools:
   - Set up Network tab for detailed debugging
   - Practice filtering techniques to isolate specific requests
   - Learn to inspect Payload and Initiator information

7. Troubleshoot Common Issues:
   - Check for duplicate events firing
   - Identify and fix broken user journeys
   - Use debug_mode parameter for detailed event tracking

8. Stay Updated:
   - Regularly check for updates to GA4 and debugging tools
   - Follow best practices for tag management and debugging

Remember: Effective GA4 debugging requires a combination of tools and techniques. Regular practice and staying updated with the latest features will help you survive and thrive in the world of analytics debugging.

For more information:
- LinkedIn: https://www.linkedin.com/in/moorejonathan/
- Twitter: https://x.com/nathanless
- Presentation Deck: Speakerdeck.com/nathanless
