# ASTRA: Autonomous Service & Transaction Routing Agent

![Uploading ccb23444-866e-4abc-8715-fdb2ddfbfca9.png…]()

<br>

> **Submission for:** [Weilliptic Problem Statement 1: Multi-Step Agentic Workflows on Icarus]
> **Track:** The Payment Protocol for the AI Economy
> **Team:** [Your Team Name]

---

## 📖 Overview

**ASTRA (Autonomous Service & Transaction Routing Agent)** is a decentralized, agentic workflow engine built on the **Weilliptic Icarus** ecosystem. It bridges the critical "trust gap" in the AI economy by automating the verification and settlement of digital work.

Current automation tools (Zapier, Make) operate as opaque "black boxes"—when a payment is triggered, there is no immutable proof of *why* or *if* the conditions were truly met. ASTRA solves this by acting as a transparent, on-chain adjudicator. It orchestrates complex, multi-step workflows that verify external events (e.g., GitHub PR merges, Jira tickets, IoT sensor data) and executes financial transactions only when strict Service Level Agreement (SLA) policies are cryptographically proven.

---

## 🚀 Key Features

* **Trustless Verification:** Connects to external "source of truth" APIs (GitHub, Linear, Slack) to verify work completion in real-time.
* **On-Chain Auditability:** Every decision—whether to approve or deny a payout—is hashed and recorded on the blockchain, creating an immutable audit trail for policy enforcement.
* **Natural Language Control:** Powered by **Icarus LLM**, allowing users to define complex logic in plain English (e.g., *"Pay 500 USDC if the 'Release' branch passes CI/CD"*).
* **Resilient Workflows:** Built with **Weil-SDK**, featuring built-in error recovery, conditional branching, and "Human-in-the-Loop" escalation for ambiguous cases.
* **Model Context Protocol (MCP) Integration:** Detailed context injection to prevent AI hallucinations and ensure accurate data interpretation.

---

## 🏗️ Architecture 

[Image of software architecture diagram]


The ASTRA architecture consists of three core layers:

1.  **Input Layer (Icarus Engine):**
    * Captures user intent via Natural Language.
    * Parses context using the Model Context Protocol (MCP).
2.  **Orchestration Layer (Weil-SDK):**
    * **Fetcher Nodes:** Retrieve data from external APIs (GitHub, Jira).
    * **Logic Core:** Executes conditional branching (`IF status == 'success'`).
    * **Executor Nodes:** Trigger payments or notifications.
3.  **Settlement & Trust Layer:**
    * **Smart Contracts:** Store decision hashes on-chain (Polygon/Base).
    * **Icarus Dashboard:** Visualizes the live workflow state.

---

## 🛠️ Technology Stack

* **Agent Framework:** Weilliptic `weil-sdk` (Node.js)
* **AI/LLM:** Weilliptic Icarus Engine (MCP support)
* **Blockchain:** [Polygon / Ethereum Sepolia / Base] (for Audit Logs)
* **Integrations:**
    * **DevOps:** GitHub API, GitLab
    * **Communication:** Slack Webhooks, Discord
    * **Payments:** ERC-20 Smart Contracts, Stripe Wrapper

---

## 📦 Installation & Setup

### Prerequisites
* Node.js v18+
* Weilliptic SDK API Key
* Wallet Private Key (for testnet transactions)

### 1. Clone the Repository
```bash
git clone [https://github.com/yourusername/astra-agent.git](https://github.com/yourusername/astra-agent.git)
cd astra-agent

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Configure Environment

Create a `.env` file in the root directory:

```env
WEILLIPTIC_API_KEY=your_key_here
GITHUB_TOKEN=your_github_token
WALLET_PRIVATE_KEY=your_private_key
RPC_URL=your_rpc_url
SLACK_WEBHOOK_URL=your_webhook_url

```

---

## 🏃 Usage / Demo

### Step 1: Initialize the Agent

Start the local Weil-SDK runtime:

```bash
npm run start:agent

```

### Step 2: Trigger a Workflow

You can trigger the workflow via the CLI or the Icarus Dashboard.

**Example Command:**

> "Monitor the repository `astra-core` for PR #42. If the CI checks pass, release the milestone payment of 0.5 ETH to the contributor."

### Step 3: View Execution

1. Open the **Icarus Dashboard**.
2. Watch the agent verify the GitHub status in real-time.
3. Observe the conditional logic branch to "Approved."
4. Click the **Transaction Hash** link to verify the audit log on Etherscan.

---

## 🧩 How It Works (Code Snippet)

Here is a simplified view of the Weil-SDK logic used in ASTRA:

```javascript
import { Workflow, Step } from '@weilliptic/weil-sdk';

const auditWorkflow = new Workflow('GitHub_Payment_Audit');

// Step 1: Fetch Context
auditWorkflow.addStep('verify_pr', async (ctx) => {
    const prStatus = await github.getPRStatus(ctx.repo, ctx.prId);
    return { passed: prStatus.checks === 'success' };
});

// Step 2: Conditional Logic
auditWorkflow.addStep('adjudicate', async (ctx) => {
    if (ctx.steps.verify_pr.passed) {
        await blockchain.writeAuditLog('APPROVED', ctx.prId);
        return 'PAYMENT_RELEASED';
    } else {
        await blockchain.writeAuditLog('DENIED', ctx.prId);
        throw new Error('SLA Verification Failed');
    }
});

```

---

## 🏆 Challenge Requirements Checklist

| Requirement | Status | Implementation Detail |
| --- | --- | --- |
| **Chain External Services** | ✅ | Chains GitHub API -> Logic -> Payment/Slack. |
| **Natural Language Exec** | ✅ | Parses intent via Icarus LLM & MCP. |
| **Deploy on Icarus** | ✅ | Fully visualizable DAG on Icarus UI. |
| **On-Chain Auditability** | ✅ | Hashes decision logic to Smart Contract. |
| **Error Recovery** | ✅ | Implements retries & human-escalation branches. |

---

## 🛣️ Roadmap

* **Phase 1 (MVP):** GitHub & ERC-20 integration with basic audit logging.
* **Phase 2:** Multi-sig support for high-value transactions.
* **Phase 3:** Integration with "Replit Agent" for autonomous code generation & self-payment.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

---

*Built with ❤️ for the Weilliptic Hackathon 2026.*

```

```


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
