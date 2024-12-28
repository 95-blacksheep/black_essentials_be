import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";


import Avatar from "../images/author.png";
import ErrorMessage from "./ErrorMessage";

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')





  return (
    <section className="profile">
      <div className="profile_container">
        <div className="profile_details">
          <div className="avatar_container">
            <img src={avatar} alt="Profile avatar" />
          </div>

          <form className="avatar_form">
            <input
              type="file"
              name="avatar"
              id="avatar"
              onChange={(e) => setAvatar(e.target.files(0))}
              accept="png, jpg, jpeg"
            />
            <label htmlFor="avatar">
              <MdModeEditOutline />
            </label>

            <button className="profile_avatar_btn">
              <FaCheck />
            </button>
          </form>
        </div>

        <h3>James Gunner</h3>

        <Link to={"/my_posts/"} className="btn_primary" id="btn_primary">
          My Dashboard
        </Link>





        <form className="register_form">

          <ErrorMessage />

          <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} autoFocus/>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Current Password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
          <input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
          <input type="password" placeholder="Confirm New Password" value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />

          <button type="submit" className="btn_primary">
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default UserProfile;
