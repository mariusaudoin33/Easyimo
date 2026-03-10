exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const body = JSON.parse(event.body);
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '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',
        'anthropic-version': '2023-06-01',
        'anthropic-beta': 'pdfs-2024-09-25'
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    return {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*','Content-Type': 'application/json'},
      body: JSON.stringify(data)
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
