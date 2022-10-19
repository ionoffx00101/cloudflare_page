import React from "react";
import ReactMarkdown from "react-markdown";

function LogContent() {
  return (
    <div className="grid h-screen place-items-center">
      <ReactMarkdown># Hello, *world*!</ReactMarkdown>
    </div>
  );
}

export default LogContent;
