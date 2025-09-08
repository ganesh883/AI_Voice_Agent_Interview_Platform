// /pages/api/auth/google.ts
import { NextApiRequest, NextApiResponse } from "next";
import { OAuth2Client } from "google-auth-library";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        // Your server-side Google auth logic here
        // For example, generating auth URL
        const url = client.generateAuthUrl({
            access_type: "offline",
            scope: ["profile", "email"],
        });
        res.status(200).json({ url, message: "Auth URL generated" });
    } catch (err) {
        res.status(500).json({ error: "Google Auth failed", details: err });
    }
}
