"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LiveKitRoom, PreJoin, VideoConference } from "@livekit/components-react";
import "@livekit/components-styles";

// Stub: Replace with real session/user auth logic
declare const sessionUser: { id: string; role: "owner" | "provider" | "guest" };

export default function JoinSessionPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [preJoin, setPreJoin] = useState(true);
  const [error, setError] = useState("");

  // Gate: Only owner or provider can join
  useEffect(() => {
    // Replace with real session/user check
    if (!sessionUser || (sessionUser.role !== "owner" && sessionUser.role !== "provider")) {
      setError("You are not authorized to join this session.");
    }
  }, []);

  // Fetch token after pre-join
  async function handleJoin(name: string) {
    try {
      const res = await fetch(`/api/video-token?room=${params.id}&user=${encodeURIComponent(name)}`);
      if (!res.ok) throw new Error("Could not get video token");
      const { token } = await res.json();
      setToken(token);
      setPreJoin(false);
    } catch (e) {
      setError("Failed to join session. Please try again.");
    }
  }

  if (error) {
    return <div className="max-w-lg mx-auto py-16 px-4 text-center text-coral">{error}</div>;
  }

  if (preJoin) {
    return (
      <div className="max-w-lg mx-auto py-16 px-4">
        <h1 className="text-2xl font-bold text-anchor mb-4">Join Your Session</h1>
        <PreJoin
          defaults={{
            username: sessionUser?.id || "Guest",
            videoEnabled: true,
            audioEnabled: true,
          }}
          onError={() => setError("Device check failed. Please check your mic/camera.")}
          onSubmit={({ username }) => handleJoin(username)}
        />
      </div>
    );
  }

  if (token) {
    return (
      <LiveKitRoom
        token={token}
        serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
        connect={true}
        data-lk-theme="default"
        style={{ height: "100vh" }}
      >
  <VideoConference />
      </LiveKitRoom>
    );
  }

  return null;
}
