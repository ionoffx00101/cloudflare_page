import React from "react";
import { AlertTriangle } from "lucide-react";

function NotFoundPage() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="mockup-window border bg-base-300">
        <div className="flex flex-col justify-center px-28 py-28 bg-base-200">
          <div className="grid place-items-center mb-4">
            <AlertTriangle />
          </div>
          <div> 존재하지 않는 페이지입니다.</div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
