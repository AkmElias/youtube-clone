import React from "react";

import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://i.ytimg.com/vi/d_T5P-zIIAs/maxresdefault.jpg"
        channel="Clever programmer"
        verified
        subs="660k"
        noOfVideos={333}
        description="You can find some awesome programming content"
      />
      <hr />
      <VideoRow
        views="2.3M"
        subs="660K"
        title="Lets Build a YouTube Clone with REACT JS for Beginners"
        description="Lets Build a YouTube Clone with REACT JS for Beginners sadghj sdfhgh gfjhgfsdvf sdkfyewrg "
        timestamp="4 days ago"
        channel="Clever programmer"
        image="https://i.ytimg.com/vi/d_T5P-zIIAs/maxresdefault.jpg"
      />
      <VideoRow
        views="2.3M"
        subs="660K"
        title=" Let's Build a TINDER Clone with REACT JS for Beginners"
        description="In this FREE LIVE training, Qazi & Sonny will show you how to build a TINDER Clone with REACT JS 🚀."
        timestamp="4 days ago"
        channel="Clever programmer"
        image="https://miro.medium.com/max/2560/1*2oszyW4ja3z9-VLfTjBwFA.jpeg"
      />
      <VideoRow
        views="2.3M"
        subs="660K"
        title="How to Build a Instagram Clone with REACT JS for Beginners (in 3 Hours!)"
        description="In this FREE LIVE training, Qazi and Sonny will show you how simple it is to create a full stack, INSTAGRAM CLONE using React, Firebase & Material-UI...  "
        timestamp="4 days ago"
        channel="Clever programmer"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2Y45EHYBC1raBCUoG_v7nBwfR23r8ck2kmg&usqp=CAU"
      />
      <VideoRow
        views="2.3M"
        subs="660K"
        title=" Build a Zoom Clone with Node JS for Beginners"
        description="In this FREE LIVE training, Naz & Youssef will show you how to build a Zoom Clone with NodeJS 🚀."
        timestamp="4 days ago"
        channel="Clever programmer"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqPLqRGZ-2nW4oWAlijVVI8CuAgE4IljHOcA&usqp=CAU"
      />
      <VideoRow
        views="2.3M"
        subs="660K"
        title="Lets Build a YouTube Clone with REACT JS for Beginners"
        description="Lets Build a YouTube Clone with REACT JS for Beginners sadghj sdfhgh gfjhgfsdvf sdkfyewrg "
        timestamp="4 days ago"
        channel="Clever programmer"
        image="data:image/png;base64,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"
      />
      <VideoRow
        views="2.3M"
        subs="660K"
        title="Lets Build a YouTube Clone with REACT JS for Beginners"
        description="Lets Build a YouTube Clone with REACT JS for Beginners sadghj sdfhgh gfjhgfsdvf sdkfyewrg "
        timestamp="4 days ago"
        channel="Clever programmer"
        image="https://i.ytimg.com/vi/d_T5P-zIIAs/maxresdefault.jpg"
      />
    </div>
  );
}

export default SearchPage;
