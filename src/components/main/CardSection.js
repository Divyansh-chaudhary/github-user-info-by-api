import React, { useState, useEffect, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/card-section.css'
import { DataContext } from '../Context'

export default function CardSection() {
   let { searchInput } = useContext(DataContext);

   if (searchInput === "") {
      searchInput = "example";
   }

   const [name, setName] = useState(),
      [avatar, setAvatar] = useState(),
      [bio, setBio] = useState(),
      [followers, setFollowers] = useState(),
      [following, setFollowing] = useState(),
      [location, setLocation] = useState(),
      [repos, setRepos] = useState();

   const setData = (data) => {
      console.log(data);
      setName(data.name);
      setAvatar(data.avatar_url);
      setBio(data.bio);
      setFollowers(data.followers);
      setFollowing(data.following);
      setLocation(data.location);
      setRepos(data.public_repos);
      console.log(data)
   }

   useEffect(() => {
      fetch(`https://api.github.com/users/${searchInput}`)
         .then(res => res.json())
         .then(data => {
            setData(data);
         });
   });

   return (
      <>
         <section className="cards_section">
            <div className="card" style={{ width: "18rem" }}>
               <img src={avatar} className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">Name: {name}</h5>
                  <p className="card-text">Bio: {bio}</p>
                  <p className="card-text">Followers: {followers}</p>
                  <p className="card-text">Following: {following}</p>
                  <p className="card-text">Location: {location}</p>
                  <p className="card-text">Public Repos: {repos}</p>
               </div>
            </div>
         </section >
      </>
   );
}
