# Automated API Testing Tool

This tool facilitates automated API testing through Mocha, Chai, and TypeScript. It helps you streamline your API testing process by automating test cases and assertions.

## Prerequisites

Before using this tool, make sure you have the following in place:

1. **Identify the API Endpoint**: Determine the API endpoint that you intend to test.

2. **Install Dependencies**: Execute the following command to install the required dependencies:
   ```sh
   npm install
3. **Configure Environment Variables**: Create a .env file in the project root directory to configure global and sensitive data. For example:
   ```sh
    CLIENT_ID=your_client_id
    CLIENT_SECRET=your_client_secret
    BASE_URL=your_base_url
    USERNAME=your_username
    PASSWORD=your_password

## Explanation of the structure:

1. `src/schema`: This directory is used to store JSON data schemas.
2. `src/testcase`: This directory is used to create test cases.
3. `src/test`: This directory is used to configure assertions.
4. `src/runnerTest.ts`: This file is used to collect all test suite 
5. `src/utils`: This file is used to provide functions for configuring the API, setting assertion configurations, defining the base URL, and other related tasks.

## Runner Test
1. **Running Script**: To run the automated tests, follow these steps: 
    ```sh
    npm run dev