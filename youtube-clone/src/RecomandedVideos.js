import React from "react";

import "./RecomandedVideos.css";
import VideoCard from "./VideoCard";

function RecomandedVideos() {
  return (
    <div className="recomandedVideos">
      <h2>Recomanded</h2>
      <div className="recomandedVideos__videos">
        <VideoCard
          title="Become a web developer in 10 minutes | 2019/2020"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
          channel="Sonny Snaga"
          image="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
        />
        <VideoCard
          title="Become a web developer in 10 minutes | 2019/2020"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage="https://www.tubics.com/wp-content/uploads/2018/10/how-to-create-youtube-thumbnails-1.png"
          channel="Sonny Snaga"
          image="https://www.tubics.com/wp-content/uploads/2018/10/how-to-create-youtube-thumbnails-1.png"
        />
        <VideoCard
          title="Become a web developer in 10 minutes | 2019/2020"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQ0GP0UDxEpJlwfeZqlDNOe8UBHC077iSBWQ&usqp=CAU"
          channel="Sonny Snaga"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQ0GP0UDxEpJlwfeZqlDNOe8UBHC077iSBWQ&usqp=CAU"
        />
        <VideoCard
          title="Become a web developer in 10 minutes | 2019/2020"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage="https://i.ytimg.com/vi/d_T5P-zIIAs/maxresdefault.jpg"
          channel="Sonny Snaga"
          image="https://i.ytimg.com/vi/d_T5P-zIIAs/maxresdefault.jpg"
        />
        <VideoCard
          title="Become a web developer in 10 minutes | 2019/2020"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzX8wOw7rWNLK6Y0L_Me6T58jW3FnAFkb_ew&usqp=CAU"
          channel="Sonny Snaga"
          image="hhttps://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzX8wOw7rWNLK6Y0L_Me6T58jW3FnAFkb_ew&usqp=CAU"
        />
        <VideoCard
          title="Become a web developer in 10 minutes | 2019/2020"
          views="2.3M views"
          timestamp="3 days ago"
          channelImage="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
          channel="Sonny Snaga"
          image="https://i.ytimg.com/vi/duJNVv9m2NY/maxresdefault.jpg"
        />
        <VideoCard image />
        <VideoCard image />
        <VideoCard image />
      </div>
    </div>
  );
}

export default RecomandedVideos;
