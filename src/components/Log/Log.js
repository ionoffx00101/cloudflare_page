import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Octokit } from "octokit";

function Log() {
  const [contents, setContents] = useState([]);

  const octokit = new Octokit({
    auth: process.env.REACT_APP_OCTOKIT_TOKEN,
  });

  useEffect(() => {
    fetchContent();
  }, []);

  useEffect(() => {
    console.log(contents);
  }, [contents]);

  async function fetchContent() {
    try {
      const response = await octokit.request(
        "GET /repos/{owner}/{repo}/contents/{path}",
        {
          owner: "ionoffx00101",
          repo: "cloudflare_page",
          path: "log",
        }
      );
      setContents(response.data);
    } catch (e) {}
  }

  const listItems = contents.map((item) => <div>{item.name}</div>);

  return <div className="grid h-screen place-items-center">{listItems}</div>;
}

export default Log;
