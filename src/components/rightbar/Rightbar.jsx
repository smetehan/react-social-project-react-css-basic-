import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        {" "}
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/gift.png?raw=true"
            alt="bd"
          />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img
          className="rightbarAd"
          src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/ad.png?raw=true"
          alt="ad"
        />
        <h4 className="rightbarTitle">Online Friends </h4>
        <ul className="rightbarFriendList">
          {Users?.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">NewYork</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/1.jpeg?raw=true"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/2.jpeg?raw=true"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/3.jpeg?raw=true"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/person/4.jpeg?raw=true"
              alt=""
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
