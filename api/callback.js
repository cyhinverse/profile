export default async function handler(req, res) {
  const { code } = req.query;
  const client_id = process.env.OAUTH_CLIENT_ID;
  const client_secret = process.env.OAUTH_CLIENT_SECRET;

  if (!code || !client_id || !client_secret) {
    return res.status(400).send('Missing code or configuration');
  }

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id,
        client_secret,
        code,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(400).send(data.error_description || data.error);
    }

    const token = data.access_token;
    const provider = 'github';

    // Script trả về token cho cửa sổ CMS
    const script = `
      <script>
        (function() {
          function receiveMessage(e) {
            console.log("receiveMessage %o", e);
            
            // Gửi token lại cho cửa sổ cha (CMS)
            window.opener.postMessage(
              'authorization:${provider}:success:${JSON.stringify({ token })}', 
              e.origin
            );
          }
          window.addEventListener("message", receiveMessage, false);
          
          // Báo cho cửa sổ cha biết là đã sẵn sàng nhận message
          window.opener.postMessage("authorizing:${provider}", "*");
        })()
      </script>
    `;

    res.setHeader('Content-Type', 'text/html');
    res.send(script);

  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
