import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { code, redirect_uri } = await req.json();

    if (!code || !redirect_uri) {
      return new Response(
        JSON.stringify({ error: "Missing code or redirect_uri" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const CLIENT_ID = "1483937727186604212";
    const CLIENT_SECRET = Deno.env.get("DISCORD_CLIENT_SECRET");

    if (!CLIENT_SECRET) {
      return new Response(
        JSON.stringify({ error: "Discord client secret not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Exchange code for access token
    const tokenRes = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "authorization_code",
        code,
        redirect_uri,
      }),
    });

    const tokenData = await tokenRes.json();

    if (!tokenRes.ok) {
      console.error("Token exchange failed:", tokenData);
      return new Response(
        JSON.stringify({ error: "Token exchange failed", details: tokenData }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Fetch user info from Discord
    const userRes = await fetch("https://discord.com/api/users/@me", {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });

    const userData = await userRes.json();

    if (!userRes.ok) {
      console.error("User fetch failed:", userData);
      return new Response(
        JSON.stringify({ error: "Failed to fetch user data" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        id: userData.id,
        username: userData.username,
        email: userData.email,
        avatar: userData.avatar,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Discord callback error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
