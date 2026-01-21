import { useEffect, useState } from "react";

const AutoSaveNotes = () => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("Saved ✓");

  useEffect(() => {
    if (!text) return;

    setStatus("Saving...");

    const timer = setTimeout(() => {
      console.log("Saved note:", text);
      setStatus("Saved ✓");
    }, 2000);

    
    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <div>
      <h2>Auto-save Notes</h2>
      <textarea
        rows="5"
        cols="40"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your notes..."
      />
      <p>{status}</p>
    </div>
  );
};

export default AutoSaveNotes;
