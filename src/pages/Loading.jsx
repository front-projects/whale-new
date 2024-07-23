import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadImages } from "../util/front/loadImages";
import { imagesToLoad } from "../util/front/imagesToLoad";
import { useSelector } from "react-redux";
import RingLoader from "react-spinners/RingLoader";

export default function Loading() {
  const [isReady, setIsReady] = useState();
  const [error, setIsError] = useState();
  const [imagesReady, setImagesReady] = useState();
  const tokenInfo = useSelector((state) => state.auth);
  const usersInfo = useSelector((state) => state.users);
  const userInfo = useSelector((state) => state.user);

  const FallbackNavigate = ({ to }) => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate(to);
    }, [to, navigate]);
    return null;
  };

  useEffect(() => {
    loadImages(imagesToLoad)
      .then(() => {
        setImagesReady(true);
      })
      .catch((err) => {
        console.log("Failed to load images", err);
      });
  }, []);

  useEffect(() => {
    if (
      imagesReady &&
      tokenInfo.status == "succeeded" &&
      usersInfo.status == "succeeded" &&
      userInfo.status == "succeeded"
    ) {
      setIsReady(true);
    } else if (
      tokenInfo.status == "failed" ||
      usersInfo.status == "failed" ||
      userInfo.status == "failed"
    ) {
      setIsError(true);
    }
  }, [imagesReady, tokenInfo, usersInfo, userInfo]);

  return (
    <>
      <main
        className="relative flex items-center justify-center flex-col w-screen h-screen bg-[#062E03]"
        id="loading-layout"
      >
        <div className="text-center w-full">
          {error ? (
            <div className="text-red-500 px-4 text-[24px]">
              Something went wrong. Try to reload app
            </div>
          ) : (
            <div className="text-xl w-full text-center flex flex-col items-center justify-center gap-4">
              <p className="text-[36px] mb-4"> Loading ...</p>
              <RingLoader color="white" size={70} />
            </div>
          )}
        </div>
      </main>

      {isReady && <FallbackNavigate to="/menu" />}
      {/* <FallbackNavigate to="/menu" /> */}
    </>
  );
}
