```markdown
# ASTRA: Autonomous Service & Transaction Routing Agent

![ASTRA Logo](https://i.postimg.cc/J0GgZ5kM/image-10.png)

> **Submission for:** [Weilliptic Problem Statement 1: Multi-Step Agentic Workflows on Icarus]
> **Track:** The Payment Protocol for the AI Economy
> **Team:** [Your Team Name]

---

## 📖 Overview

**ASTRA (Autonomous Service & Transaction Routing Agent)** is a decentralized, agentic workflow engine built on the **Weilliptic Icarus** ecosystem. It bridges the critical "trust gap" in the AI economy by automating the verification and settlement of digital work.

Current automation tools (Zapier, Make) operate as opaque "black boxes"—when a payment is triggered, there is no immutable proof of *why* or *if* the conditions were truly met. ASTRA solves this by acting as a transparent, on-chain adjudicator. It orchestrates complex, multi-step workflows that verify external events (e.g., GitHub PR merges, Jira tickets, IoT sensor data) and executes financial transactions only when strict Service Level Agreement (SLA) policies are cryptographically proven, directly addressing the challenge to develop sophisticated multi-step workflows with the Weil-SDK that integrate multiple external services.

---

## 🚀 Key Features

* **Trustless Verification:** Connects to external "source of truth" APIs (GitHub, Linear, Slack) to verify work completion in real-time, fulfilling the requirement to chain multiple external services using Weilliptic's SDK.
* **On-Chain Auditability:** Every decision—whether to approve or deny a payout—is hashed and recorded on the blockchain, creating an immutable audit trail for policy enforcement.
* **Natural Language Control:** Powered by **Icarus LLM**, allowing users to define complex logic in plain English (e.g., *"Pay 500 USDC if the 'Release' branch passes CI/CD"*), meeting the requirement to execute multi-step workflows via natural language.
* **Resilient Workflows:** Built with **Weil-SDK**, featuring built-in error recovery, conditional branching, and "Human-in-the-Loop" escalation for ambiguous cases, as required to handle data flow, error recovery, and conditional branching.
* **Model Context Protocol (MCP) Integration:** Detailed context injection to prevent AI hallucinations and ensure accurate data interpretation, consistent with the overview's focus on Model Context Protocol (MCP).

---

## 🏗️ Architecture Diagram

Below is the detailed technical architecture of ASTRA, showing the data flow from natural language input to on-chain finality.

![ASTRA Technical Architecture Diagram](https://i.postimg.cc/vHWQ1WzC/image-7.png)

### High-Level Data Flow Chart

![ASTRA High-Level Flow](https://i.postimg.cc/sxjX1ZgL/image-3.png)

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

1. Open the **Icarus Dashboard** to see the workflow visualization.
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

ASTRA is engineered to meet every requirement of Weilliptic Problem Statement 1:

| Requirement | Status | Implementation Detail |
| --- | --- | --- |
| **1. Chain multiple external services using Weilliptic's SDK** | ✅ | Chains GitHub API -> Logic -> Payment/Slack. |
| **2. Execute multi-step workflows via natural language** | ✅ | Parses intent via Icarus LLM & MCP. |
| **3. Deploy & visualize workflows on Icarus** | ✅ | Fully visualizable DAG on Icarus UI. |
| **4. Maintain on-chain auditability & policy enforcement** | ✅ | Hashes decision logic to Smart Contract. |
| **5. Handle data flow, error recovery & conditional branching** | ✅ | Implements retries & human-escalation branches. |

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
