import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-4 py-2 rounded-lg ${copied ? "text-green-500" : "text-black"}`}
    >
        <FaRegCopy />
    </button>
  );
}
