# ChainTeaNode

Welcome to ChainTeaNode, a comprehensive Node.js library designed to facilitate seamless interaction with the Ethereum blockchain. Whether you're developing decentralized applications (dApps), running automated scripts, or simply exploring the vast landscape of blockchain technology, ChainTeaNode provides you with the tools you need to integrate blockchain functionalities with ease.

## Features

- **Easy Balance Queries**: Quickly fetch the balance of any Ethereum address in Ether units.
- **Effortless Transaction Handling**: Send Ether between accounts with minimal setup, handling all the complexities of transaction signing and gas estimation.
- **Utility Functions**: Convert between Ether and Wei, or encode and decode data, with our handy utility functions.
- **Robust Error Handling**: Designed with error resilience in mind, ensuring your application runs smoothly even when the blockchain doesn't.

## Getting Started

### Prerequisites

Ensure you have Node.js (version 12 or later) installed on your machine. ChainTeaNode is built with compatibility in mind, supporting both traditional Node.js environments and modern async/await patterns.

### Installation

To add ChainTeaNode to your project, run the following command in your project directory:

```bash
npm install ChainTeaNode

This command fetches the latest version of ChainTeaNode and adds it to your project's dependencies.
```

## Quick Setup

Once installed, you can start using ChainTeaNode by requiring it in your Node.js application:

const { getBalance, sendTransaction } = require('ChainTeaNode');

// Example usage
async function main() {
  const address = '0xYOUR_ADDRESS_HERE';
  const balance = await getBalance(address);
  console.log(`Balance: ${balance} ETH`);
}

main();

## Configuration

To run the ChainTeaNode project successfully on your local environment, you need to set up some environment variables. We use a `.env` file for this purpose, which allows you to define your private and sensitive information without exposing it in your source code.

### Setting Up the .env File

1. **Create a `.env` File**: In the root directory of the project, create a file named `.env`.

2. **Add Environment Variables**: Open the `.env` file with your favorite text editor and add the following environment variables:

    ```plaintext
    # Ethereum Network Configuration
    INFURA_PROJECT_ID=your_infura_project_id
    ETHERSCAN_API_KEY=your_etherscan_api_key

    # Account Information
    WALLET_PRIVATE_KEY=your_wallet_private_key

    # General Settings
    PORT=3000
    ```

    Replace `your_infura_project_id`, `your_etherscan_api_key`, and `your_wallet_private_key` with your actual Infura project ID, Etherscan API key, and Ethereum wallet private key respectively. 

3. **Save the File**: After adding the necessary environment variables, save the `.env` file.

### Using Environment Variables in Your Application

To access these environment variables in your application, make sure you have the `dotenv` package installed. If not, you can install it by running:

```bash
npm install dotenv

At the beginning of your main application file (e.g., index.js), add the following line to load the environment variables:

require('dotenv').config();

Now, you can access the environment variables anywhere in your application using 
`process.env.VARIABLE_NAME` , for example, `process.env.INFURA_PROJECT_ID`.

```

## Important Note
Never commit your .env file to your version control system. This file contains sensitive information that should not be shared publicly. Make sure to add .env to your .gitignore file to prevent it from being uploaded to your repository.

## Contributing

We welcome contributions from the community! If you're interested in improving ChainTeaNode or adding new features, please submit a pull request or open an issue to discuss your ideas.