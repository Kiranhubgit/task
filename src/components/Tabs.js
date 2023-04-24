import React, { useContext, useEffect, useRef} from "react";
import noteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";

const Tabs = () => {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  // API CONNECTION 
  const context = useContext(noteContext);
  let history = useNavigate();
  const {getNotes} = context;

  useEffect(() => {

    if(localStorage.getItem('token')){
      getNotes()
    }
    else{
      history("/login");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* <div className="container my-2">

      <video width="100%" height="230px" ref={videoRef}>
          <source src="/Videos/dummyVideo.mp4" />
      </video>
 
      <div className="col-md-12 text-center">
        <button className="btn btn-danger mx-2 my-2 px-2" onClick={handlePlay}>Play</button>
        <button className="btn btn-dark mx-2 my-2 px-2" onClick={handlePause}>Pause</button>
        </div>

  </div> */}

      <div className="container my-3">
        <nav>
          <div className="nav nav-tabs nav-pills" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Educational
            </button>
            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Motivational
            </button>
            <button
              className="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Cartoon
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabIndex="0"
          >
            <div className="container my-4">
              <video width="100%" height="530px" ref={videoRef}>
                <source src="/Videos/EducationalVideo.mp4" />
              </video>

              <div className="col-md-12 text-center">
                <button
                  className="btn btn-danger mx-2 my-2 px-2"
                  onClick={handlePlay}
                >
                  Play
                </button>
                <button
                  className="btn btn-dark mx-2 my-2 px-2"
                  onClick={handlePause}
                >
                  Pause
                </button>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabIndex="0"
          >
            <div className="container my-4">
              <video width="100%" height="530px" ref={videoRef}>
                <source src="/Videos/motivationalVideo.mp4" />
              </video>

              <div className="col-md-12 text-center">
                <button
                  className="btn btn-danger mx-2 my-2 px-2"
                  onClick={handlePlay}
                >
                  Play
                </button>
                <button
                  className="btn btn-dark mx-2 my-2 px-2"
                  onClick={handlePause}
                >
                  Pause
                </button>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabIndex="0"
          >
            <div className="container my-4">
              <video width="100%" height="530px" ref={videoRef}>
                <source src="/Videos/dummyVideo.mp4" />
              </video>

              <div className="col-md-12 text-center">
                <button
                  className="btn btn-danger mx-2 my-2 px-2"
                  onClick={handlePlay}
                >
                  Play
                </button>
                <button
                  className="btn btn-dark mx-2 my-2 px-2"
                  onClick={handlePause}
                >
                  Pause
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
