import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

function HoverPlayer({
  title,
  thumbnail,
  youtubeVideoUrl,
  leftSideBtnUrl,
  leftSideBtnText,
  rightSideBtnUrl,
  rightSideBtnText,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [renderElem, setRenderElem] = useState(false);
  const [expendVideo, setExpendVideo] = useState(false);
  useEffect(() => {
    if (isHovering) {
      setRenderElem(true);
    } else if (!expendVideo) {
      const timer = setTimeout(() => setRenderElem(false), 300);
      return () => clearTimeout(timer);
    }
  }, [expendVideo, isHovering]);

  const handelExpendVideoButton = () => {
    const elem = document.getElementById("video-container-main");

    if (elem) {
      elem.classList.remove("go-to-normal-mode");
      elem.classList.add("expend-mode");
      setExpendVideo(true);
    }
  };
  const handelNormalVideoButton = () => {
    const elem = document.getElementById("video-container-main");

    if (elem) {
      elem.classList.remove("expend-mode");
      elem.classList.add("go-to-normal-mode");
      setExpendVideo(false);
    }
  };
  return (
    <div
      className="max-h-max max-w-max   flex flex-col items-center justify-center relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
      <div className="max-w-max">
        <span className="w-full flex items-center gap-2.5">
          <span className="text-white text-[40px] text-center w-full block font-semibold leading-[49px] tracking-[2px]">
            {title ?? ""}
          </span>
          <img src={thumbnail ?? ""} alt="youtube-video-thumbnail" className=" w-10 h-11" />
        </span>
        <span className="w-full h-[4px] rounded bg-[#fdaf4d] block line-animation"></span>
      </div>
      {renderElem ? (
        <div
          className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full transition duration-100"
          id="video-container-main">
          <div
            className={`inner w-full h-full min-w-[355px] min-h-[200px] rounded-[8px] overflow-hidden container-first-child  relative 
                ${expendVideo ? "" : isHovering ? "on-render-animation" : "on-exit-animation"}
                 ${expendVideo ? "" : "max-w-[355px] mx-auto max-h-[240px]"}`}>
            <div
              className={`video w-full bg-black relative z-[1] remove-border-radius rounded-b-[8px] overflow-hidden ${
                expendVideo ? "h-[406px]" : "h-[200px]"
              }`}>
              <ReactPlayer
                className="react-player"
                url={youtubeVideoUrl ?? ""}
                width="100%"
                height="100%"
                muted={true}
                playing={true}
                controls={true}
              />
            </div>
            {!expendVideo ? (
              <div
                className="absolute top-0 right-0 w-full h-full z-[1] flex justify-end"
                onClick={handelExpendVideoButton}>
                <button
                  className="expend-button w-fit h-fit flex items-center py-[7.5px] px-[15px] bg-[#222731]/[0.15]"
                  onClick={handelExpendVideoButton}>
                  <span className="text-white text-[16px] font-semibold ">Expend</span>
                  <img
                    src="https://scriptdev.gethovr.com//Resources/Expand.svg"
                    alt=""
                    className="w-[20px] h-[20px] ml-[6px]"
                  />
                </button>
              </div>
            ) : null}
            <div className="w-full bg-[#000]/[0.3] backdrop-blur-[7.5px] flex items-center justify-start custom-bg  h-[40px] translate-y-[-40px] border-t-[1px]  border-t-[#ffffff]/[0.2] render-button overflow-hidden rounded-b-[8px]">
              <div className="flex items-center justify-center w-full h-full backdrop-blur-[15px] py-[4px] px-[4px] gap-x-1.5">
                <a
                  className="w-1/2 h-full text-white bg-white/[0.3] rounded text-[12px] capitalize"
                  href={leftSideBtnUrl ?? ""}
                  target="_blank"
                  style={{
                    textShadow: "rgba(0, 0, 0, 0.7) 0px 1px 10px",
                    boxShadow: "rgba(0, 0, 0, 0.28) 0px 6px 6px 0px",
                  }}
                  rel="noreferrer">
                  <span className="text-center w-full h-full flex items-center justify-center">
                    {" "}
                    {leftSideBtnText ?? ""}
                  </span>
                </a>
                <a
                  className="w-1/2 h-full text-white border-[1px] border-[#ffffff]/[0.2] rounded text-[12px] capitalize"
                  href={rightSideBtnUrl ?? ""}
                  target="_blank"
                  style={{
                    textShadow: "rgba(0, 0, 0, 0.7) 0px 1px 10px",
                    boxShadow: "rgba(0, 0, 0, 0.28) 0px 6px 6px 0px",
                  }}
                  rel="noreferrer">
                  <span className="text-center w-full h-full flex items-center justify-center">
                    {rightSideBtnText ?? ""}
                  </span>
                </a>
              </div>
            </div>
          </div>
          {expendVideo ? (
            <button
              className="expend-button absolute top-[-25px] right-[-35px] flex items-center py-[7.5px] px-[15px] z-[1]"
              onClick={handelNormalVideoButton}>
              <img
                src="https://scriptdev.gethovr.com//Resources/PlayerCloseButton.svg"
                alt=""
                className="w-[43px] h-[43px] ml-[6px]"
              />
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default HoverPlayer;
