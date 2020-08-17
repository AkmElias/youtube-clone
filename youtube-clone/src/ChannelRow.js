import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import "./ChannelRow.css";

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  description,
  noOfVideos,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" src={image} alt={channel} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} Subscribers . {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
