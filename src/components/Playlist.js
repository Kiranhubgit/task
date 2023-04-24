import React, {useRef} from 'react'

const Playlist = ()=>{
    const videoRef = useRef();
    
    
    const handlePlay = ()=>{
        videoRef.current.play();
        
      };

    const handlePause = ()=>{
        videoRef.current.pause();
      };

      
  return (

    <>
  <div className="container text-center my-2">
  <h1> Animation Videos </h1>
  </div>

  <div className="container my-2">

      <video width="100%" height="430px" ref={videoRef}>
          <source src="/Videos/dummyVideo2.mp4" />
      </video>
 
      <div className="col-md-12 text-center">
        <button className="btn btn-danger mx-2 my-2 px-2" onClick={handlePlay}>Play</button>
        <button className="btn btn-dark mx-2 my-2 px-2" onClick={handlePause}>Pause</button>
        </div>

  </div>

  <div className="container display-7 ">
      <p>Animated videos are videos created with original designs, drawings, illustrations or computer-generated effects that have been made to move in an eye-catching way using any number of artistic styles. Although they may integrate live action video, they don’t require any live action recording to convey an idea or story.</p>
      <p>Many associate animated videos with fictional elements that craft a realistic story, but animated videos are not limited to that; they're multi-faceted</  p>
    
  </div>
    </>
  );
};
export default Playlist ;
