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
        'x-api-key': 'sk-ant-api03-G80ubq8orP4d3koekWJym0sTqGB4p_mk_hZqXKLdy8XFzQzQn4FxZ-Q1n0bPg8Q9JM9rfjbDmG1AXCIy-6Z7bw-cnWVBgAA',
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
