# Poly.fun: Farcaster Frame for Prediction Market Ideation
## Project Context
Poly.fun is a Farcaster frame application designed to facilitate the creation and evaluation of prediction market ideas. The platform allows users to submit structured prediction market proposals and enables community voting on these proposals.
## Core Features

Idea Submission: Users can submit prediction market ideas in a specific format.
Voting System: Community members can vote on submitted ideas using emoji reactions.
Format Enforcement: The system ensures all submissions adhere to a predefined structure.

## Submission Format
Each prediction market idea must include:

Question
Market Rules
Outcomes
Resolution Date
Resolution Source
Reasoning behind market
Plan for distribution
Estimated starting odds and LP commitment

## Voting Options

✅ (Approve)
❌ (Reject)
🔄 (Needs Revision)

## Technical Requirements

Farcaster Frame Integration: Implement the necessary API calls and response handling for Farcaster frames.
Server-Side Logic: Develop backend functionality for storing and retrieving submissions and votes.
Authentication: Implement user authentication to prevent multiple votes from the same user.
Input Validation: Ensure robust validation and sanitization of user inputs.
Character Limit: Enforce Farcaster's character limitations for frame content.

## Next Steps for Implementation

Set up a Node.js backend with Express.js to handle API requests.
Implement database integration (e.g., PostgreSQL) for storing submissions and votes.
Create API endpoints for:

Submitting new prediction market ideas
Retrieving submitted ideas
Casting and tallying votes


```
npm install
npm run dev
```

Head to http://localhost:5173/api

Develop Farcaster frame integration:

Implement frame action handling
Generate appropriate frame responses


Enhance the React component to work within Farcaster's frame constraints:

Adjust the UI to fit within frame size limits
Implement pagination or summarization for longer content


Add user authentication using Farcaster's authentication mechanisms.
Implement input validation and sanitization on both client and server sides.
Create admin tools for moderating submissions and managing the platform.

## Additional Considerations

Scalability: Design the system to handle a potentially large number of submissions and votes.
Privacy: Ensure user data is handled securely and in compliance with relevant regulations.
Community Guidelines: Develop and enforce rules for appropriate content and behavior.

As you proceed with the implementation, focus on creating a seamless user experience within the constraints of Farcaster frames while ensuring the integrity and fairness of the ideation and voting process.

