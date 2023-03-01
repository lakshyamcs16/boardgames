import { useState } from "react";
import Join from "./Join";

export default function JoinRoom() {
  const [id, setId] = useState<string>("");
  return (
    <div>
      Room ID{" "}
      <input
        type="text"
        name="roomid"
        id="roomid"
        onChange={(e) => setId(e.currentTarget.value)}
      />
      <Join id={id} />
    </div>
  );
}
