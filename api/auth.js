export default function handler(req, res) {
  const { host } = req.headers;
  const client_id = process.env.OAUTH_CLIENT_ID;
  
  // Tự động xác định protocol (http hay https)
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const redirect_uri = `${protocol}://${host}/api/callback`;
  
  const scope = 'repo user';

  if (!client_id) {
    return res.status(500).send('Missing OAUTH_CLIENT_ID env variable');
  }

  const authorizationUri = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${scope}`;

  res.redirect(authorizationUri);
}
