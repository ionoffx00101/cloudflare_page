import React from "react";
import { Github } from "lucide-react";

function Introduce() {
  return (
    <div className="grid h-screen ">
      <div className="hero max-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="flex flex-row">
              <div className="flex-col">
                <h1 className="text-5xl font-bold">안녕하세요</h1>

                <a href={"https://github.com/ionoffx00101"} target="_blank">
                  <button className="btn">
                    <Github />
                  </button>
                </a>
              </div>
              <div className="flex-col ">
                <h3 className="text-5s font-bold"> 하고 있거나 해본 개발</h3>
                <div>IOS 개발 </div> <div> Android 개발</div>
                <div>크로스플랫폼 개발 (Flutter)</div>
                <div> 웹개발 (angulra, react, jquery, Django)</div>{" "}
                <div> 데스크탑개발 (wpf)</div>
                <div>Tizen 웹 어플리케이션 개발 </div>
                <h3 className="text-5s font-bold">할 줄 아는 언어</h3>
                <div>Swift </div>
                <div>Kotlin </div>
                <div> JAVA</div>
                <div>Dart</div>
                <div>C# </div>
                <div>Python</div>
                <div>JS (es6)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
