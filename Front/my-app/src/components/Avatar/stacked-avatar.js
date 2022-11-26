import React from "react";
import Avatar from "react-avatar";

const DEFAULT_MAX_AVATARS = 1;

function renderRemaining(props) {
  const { avatars = [], maxAvatars = DEFAULT_MAX_AVATARS, ...other } = props;
  const remaining = avatars.length - maxAvatars;

  if (remaining < 1) return null;

  return <Avatar {...other} value={`+${remaining}`} color="gray" />;
}

export default function StackedAvatar(props) {
  const { avatars = [], maxAvatars = DEFAULT_MAX_AVATARS, ...others } = props;

  const style = {
    border: "0px solid white",
    ...props.style,
    marginLeft: -(props.size / 2) + "px",
  };

  return (
    <div style={{ marginLeft: props.size / 2 }}>
      {avatars.slice(0, maxAvatars).map((avatar, idx) => (
        <Avatar {...avatar} {...others} key={idx} style={style} />
      ))}
      {renderRemaining({ ...props, style })}
    </div>
  );
}