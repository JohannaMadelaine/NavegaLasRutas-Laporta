import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <video width="70%" height="auto" controls>
        <source
          src="https://videocdn.cdnpk.net/videos/f78ad25a-4b66-4c84-a8ad-11d64921d1ca/horizontal/previews/clear/large.mp4?token=exp=1721436140~hmac=c99585161489bee672c6987be91585eeca4eccf5811f4e1303a5a5ec4fe5233c"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Home;
