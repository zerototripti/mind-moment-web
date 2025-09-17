"use client";
import { useEffect, useState } from "react";
import { Room, RoomEvent, createLocalTracks } from "livekit-client";

// This static page is a workaround for dynamic route type issues.
// Replace 'test-session-id' with the actual sessionId as needed.
export default function JoinTest() {
  const sessionId = "test-session-id";
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/video-token", {
        method: "POST",
        body: JSON.stringify({ room: sessionId, identity: "me" })
      });
      const { token } = await res.json();
      const room = new Room();
      await room.connect(process.env.NEXT_PUBLIC_LIVEKIT_URL!, token);
      const tracks = await createLocalTracks({ audio: true, video: true });
      tracks.forEach(t => room.localParticipant.publishTrack(t));
      room.on(RoomEvent.Disconnected, () => setConnected(false));
      setConnected(true);
    })();
  }, [sessionId]);

  return <main className="p-6">{connected ? "Connected" : "Joining..."}</main>;
}
