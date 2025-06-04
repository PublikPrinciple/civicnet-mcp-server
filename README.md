# 🚀 MCP Server – Model Context Protocol

**Welcome to the official open-source MCP Server.**  
This is the heart of Konstellation & CivicNet’s federated civic infrastructure—a modular, principle-driven server for running local, trusted, and agentic community AI.

---

## 🧭 What Is the MCP Server?

The MCP Server powers **neighborhood, city, or org-level “nodes”** in the CivicNet/Konstellation grid. Each node:

- Ingests and validates local data (GIS, policy, community stories, public records)
- Hosts and orchestrates agentic models (reasoning, self-audit, simulation, role-play, etc.)
- Applies **civic principles** (equity, truth, privacy, transparency) to every query and output
- Publishes secure, documented APIs for dashboards, GIS clients, and external partners
- Federates with other MCP nodes to share knowledge while keeping local control

**Why?**  
So every community can own, govern, and continually improve their own civic intelligence—no black boxes, no vendor lock-in, no silent bias.

---

## 🌌 Key Features

- **LLM-Agnostic:** Plug in any modern language model (OpenAI, Anthropic, open source)
- **Cloud-Agnostic:** Deploy on your cloud, on-prem, edge, or local device
- **Principle Repository:** Define, audit, and evolve community principles in code
- **Modular Agentic Logic:** Supports chain-of-thought, self-reflection, role simulation, multi-agent debate, and more
- **Data Stewardship:** Fine-grained connectors for local, open, and federated civic data
- **Simulation-Ready:** Run “what-if” scenarios and participatory simulations
- **Full Audit Trail:** Every output, agent step, and data source is logged and reviewable
- **Dockerized:** Easy container setup, local or distributed

---

## 🗃 Directory Overview

| Folder         | Purpose                                      |
|----------------|----------------------------------------------|
| `src/agents`   | Agentic models (reasoning, alignment, simulation) |
| `src/api`      | REST/GraphQL APIs for queries, data, tools   |
| `src/principles` | Principle repo (YAML/JSON + logic)         |
| `src/data`     | Data ingestion, validation, and connectors   |
| `src/prompts`  | Prompt templates and scenario scripts        |
| `src/simulation` | Simulation, scenario modeling logic        |
| `src/utils`    | Logging, audit, helper functions             |
| `config/`      | Node config, enabled features, .env template |
| `scripts/`     | Dev, test, migration scripts                 |
| `tests/`       | Unit and integration tests                   |

---

## ⚡️ Quickstart (Local Docker Compose)

1. **Clone the Repo:**
   ```sh
   git clone https://github.com/PublikPrinciple/civicnet-mcp-server.git
   cd civicnet-mcp-server
   ```

2. **Copy and edit your environment variables:**

   ```sh
   cp config/.env.example .env
   # Edit .env with your API keys, DB, LLM settings, etc.
   ```

3. **Start the MCP Server (plus optional data services):**

   ```sh
   docker-compose up --build
   ```

4. **View API Docs:**

   * Go to `http://localhost:4000/docs` (Swagger/OpenAPI by default)

---

## 🛠️ Core Concepts

### Principle Repository

* All outputs are checked, filtered, or rewritten to align with your community’s core principles (e.g., “ensure equity,” “avoid harm,” “cite sources”).
* Update principles via YAML/JSON in `/src/principles/`.

### Agents & Agentic Logic

* **Chain-of-Thought Agent:** Step-by-step logic for transparency
* **Self-Reflective Agent:** Checks its own bias, logic, and compliance
* **Role Simulation Agent:** Simulates debates (planner vs. resident), expert panels, or historical perspectives
* **Multi-Agent Collaboration:** Supports scenario testing, participatory budgeting, and red teaming
* Each agent’s logic is modular and composable (see `/src/agents/`).

### Data Layer

* **Connectors** for GIS, census, local CSVs, APIs, and more
* **Validation/Redaction** steps for privacy and data hygiene
* **Federation:** Share/selectively with trusted nodes (opt-in)

### Prompt & Scenario Templates

* All agentic reasoning is driven by prompt templates (see `/src/prompts/`)
* Write your own or use built-in civic case study and simulation templates

### Simulation

* Model “what if?” futures (housing, climate, budget, etc.) using real and synthetic data
* Outputs are interactive and principle-audited

---

## 🔑 Example Use Cases

* **Generate a “Durham Housing Crisis” case study with maps, timelines, and equity analysis, ready for GIS and public review**
* **Support a participatory budgeting simulation with role-played debate between community agents**
* **Publish a plain-language, principle-aligned data API for local dashboards**
* **Audit all outputs for bias, error, and community principles (with logs and feedback)**
* **Federate with other neighborhoods/cities to compare, remix, and improve local analyses**

---

## 🧑‍💻 For Developers

* **Languages:** TypeScript/Node.js by default, Python agent compatibility in roadmap
* **Contributing:** See `CONTRIBUTING.md` for branching, code style, and principle-alignment PR checks
* **Tests:** `npm test` (Jest), or run all with `docker-compose -f docker-compose.test.yml up`

---

## 🏛️ For Civic Data Stewards

* **Principle-Driven Governance:** Edit `/src/principles/` to update your node’s values
* **Logs & Audit:** Every answer is traceable (who asked, what data, which agents, what checks)
* **Open APIs:** Build your own GIS client, dashboard, or mobile app on top of the MCP Server’s endpoints

---

## 🔒 Security & Privacy

* Sensitive data is never shared or exposed without explicit principle-driven consent and redaction
* Each node is sandboxed; federation is always opt-in and auditable

---

## 🌍 Federation & Constellation

* **Konstellation Ready:** This server is designed to federate—publish/share insights with other communities, cities, or regions while keeping full local governance and privacy
* **Federated queries:** Allow comparisons (e.g., “Show eviction rates across all neighborhoods”)

---

## 📖 Docs & Community

* Full docs in `/docs/` or [link to civicnet.org/docs](https://civicnet.org/docs)
* Join the #mcp-server channel on Discord for support and discussion

---

## 📝 License

AGPL 2.0 – Open, remixable, and community-driven  
See [LICENSE](./LICENSE) for details


---

## ✨ Get Started Building the Future of Civic Infrastructure!

---

## 📘 Swagger/OpenAPI Setup (API Endpoint Overview)

Add this to /src/api/routes.ts (sample):

import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const router = express.Router();
const swaggerDocument = YAML.load('./config/swagger.yaml');

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
export default router;

Sample swagger.yaml starter:

openapi: 3.0.0
info:
  title: MCP Server API
  version: 1.0.0
paths:
  /api/analyze:
    post:
      summary: Analyze civic query using agentic logic
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                query:
                  type: string
                context:
                  type: object
      responses:
        '200':
          description: Analysis complete
