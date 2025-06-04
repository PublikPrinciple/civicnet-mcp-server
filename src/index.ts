import express from 'express';
import { loadPrinciples, checkPrincipleAlignment } from './principles';
import { chainOfThoughtAgent, selfReflectiveAgent } from './agents';
import { ingestData, fetchGISData } from './data';

const app = express();
app.use(express.json());

// Sample API route for agentic prompt
app.post('/api/analyze', async (req, res) => {
  const { query, context } = req.body;
  const principles = loadPrinciples();
  let result = await chainOfThoughtAgent(query, context);

  // Self-reflection and principle check
  result = await selfReflectiveAgent(result, principles);

  // Final principle alignment check
  if (!checkPrincipleAlignment(result, principles)) {
    return res.status(400).json({ error: 'Output does not meet principle alignment.' });
  }

  res.json({ result });
});

// Sample GIS data endpoint
app.get('/api/gis/:area', async (req, res) => {
  const area = req.params.area;
  const gisData = await fetchGISData(area);
  res.json({ gisData });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`MCP Server running on port ${PORT}`);
});
