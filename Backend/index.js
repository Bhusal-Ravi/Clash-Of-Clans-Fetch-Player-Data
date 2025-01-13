const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import CORS package
app.use(express.static('public'));
const app = express();
const PORT = process.env.PORT || 3000; // Use the dynamic port provided by Render or default to 3000

// Enable CORS for all origins (this allows requests from any origin)
app.use(cors());

// Clash of Clans API details
const API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU4ODY5MDU0LWVkN2UtNGVjNC1hZDk0LTM5MGI4ODMwODRjNSIsImlhdCI6MTczNjc4Nzk1OCwic3ViIjoiZGV2ZWxvcGVyLzVmNjc3Y2IxLTM1MDYtNTU5Zi0wNjk1LWRhOGM3YzU4NWQ1ZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEzLjIyOC4yMjUuMTkiLCIxOC4xNDIuMTI4LjI2IiwiNTQuMjU0LjE2Mi4xMzgiXSwidHlwZSI6ImNsaWVudCJ9XX0.X_ajumAn0aHYI2iijw4tc-Itn23upEHkw71diLJWb-hgrlUAnA4IfkFAUDc1IuzyMYNq0_OWCMhQGhoBwbdQ-g'; // Replace with your Clash API token
const BASE_URL = 'https://api.clashofclans.com/v1';

// Endpoint to fetch player data
app.get('/player/:tag', (req, res) => {
  const playerTag = encodeURIComponent(req.params.tag); // Encode player tag for URL safety

  axios
    .get(`${BASE_URL}/players/%23${playerTag}`, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    })
    .then((response) => res.json(response.data))
    .catch((error) => res.status(error.response.status).json(error.response.data));
});

// Start the server with dynamic port binding
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
