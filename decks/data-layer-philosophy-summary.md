---
title: Data Layer Philosophy
presenter: Matt Bentley (@mattdoesdata, @Matts_At_Work)
---
## Key Takeaways

1. Purpose of a Data Layer:
   - Delivers consistent and quality data across an entire digital estate
   - Enables joining data together for improved marketing, customer journeys, and bug fixing
   - Essential for companies with complex digital ecosystems (e.g., logged-in areas, products, checkouts across multiple platforms)

2. Data Layer Definition:
   - More than just a JavaScript object
   - Includes the schema definition and core principles underpinning the architecture
   - Designed to meet specific needs and built with consideration of who will maintain it

3. Data Layer Structure:
   - Reflects basic human interaction: Input (user action) and Output (view)
   - Everything else is context
   - Standardizes the "conversation" between customer and business

4. Architectural Considerations:
   - Data layer is a resourcing solution
   - Designed to allocate work efficiently between implementation teams and development teams
   - Must be easy for developers to build and maintain consistently

5. Design Principles:
   - Remove bespoke elements and standardize for automation
   - Keep it simple and event-driven
   - Make it centralized and delivered from the server
   - Create a modular structure with reusable components
   - Make the data layer granular for flexibility and reduced tech debt
   - Automate validation using tools like JSON schema

## Action Items

1. Assess Need for a Data Layer:
   - Evaluate your digital ecosystem's complexity
   - Determine if you need consistent data across multiple platforms or technologies

2. Plan Data Layer Project:
   - Focus on delivering data consistency and quality, not just technical implementation
   - Align the project with revenue generation and cost-saving goals

3. Define Responsibilities:
   - Assign implementation team to define and maintain the data layer schema
   - Task development teams with building and maintaining the data layer as part of platform maintenance

4. Implement Design Principles:
   - Standardize and simplify data layer structure
   - Create a centralized, event-driven architecture
   - Develop modular, reusable data components
   - Implement granular data structure for flexibility

5. Establish Rigorous Processes:
   - Create strict acceptance criteria for new additions to the data layer
   - Implement automated validation using JSON schema or similar tools

6. Foster Cross-Team Collaboration:
   - Ensure implementation team understands development processes
   - Create clear communication channels between implementation and development teams

7. Automate and Validate:
   - Integrate data layer components into platform components for automatic consistency
   - Set up automated validation processes to catch errors early in development

8. Continuous Improvement:
   - Regularly review and refine the data layer schema
   - Stay updated on best practices in data architecture and implementation

Remember: A well-designed data layer is crucial for delivering value from first-party data. It should be approached as a strategic initiative that enables better decision-making and improved customer experiences across all digital touchpoints.

For more information:
- Twitter: @mattdoesdata
- LinkedIn: @Matts_At_Work
- Presentation Deck: Speakerdeck.com/mattsatwork24
