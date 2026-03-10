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
    const text = await response.text();
    return {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*','Content-Type': 'application/json'},
      body: text
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify({ error: { message: err.message } })
    };
  }
};
