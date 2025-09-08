"use client";

import React, { useState, useEffect } from "react";
import Agent from "@/Components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const InterviewPage = () => {
    const [authData, setAuthData] = useState<any>(null);
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleGoogleAuth = async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/auth/google");
            const data = await res.json();
            setAuthData(data);

            // Optional: redirect user to Google auth URL
            if (data.url) {
                window.location.href = data.url;
            }
        } catch (err) {
            console.error("Google Auth failed", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getCurrentUser();
                setUser(userData);
            } catch (err) {
                console.error("Failed to fetch user", err);
            }
        };
        fetchUser();
    }, []);

    return (
        <div className="p-4">
            <h3 className="text-2xl font-bold mb-4">Interview Generation</h3>

            <button
                onClick={handleGoogleAuth}
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                disabled={loading}
            >
                {loading ? "Authenticating..." : "Authenticate with Google"}
            </button>

            {authData && (
                <div className="mt-4 bg-gray-100 p-2 rounded">
                    {authData.message && <p><strong>Message:</strong> {authData.message}</p>}
                    {authData.projectId && <p><strong>Project ID:</strong> {authData.projectId}</p>}
                </div>
            )}

            {user && (
                <div className="mt-4">
                    <Agent userName={user?.name} userId={user?.id} type="generate" />
                </div>
            )}
        </div>
    );
};

export default InterviewPage;
