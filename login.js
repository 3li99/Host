export default function handler(req, res) {
  const clientId = "YOUR_CLIENT_ID";
  const redirectUri = "http://localhost:3000/api/auth/callback";
  const scope = "identify guilds";

  const url = \`https://discord.com/api/oauth2/authorize?client_id=\${clientId}&redirect_uri=\${encodeURIComponent(redirectUri)}&response_type=code&scope=\${scope}\`;

  res.redirect(url);
}
