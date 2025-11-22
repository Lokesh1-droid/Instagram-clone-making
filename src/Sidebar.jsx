import './App.css'
export default function Sidebar(){
  return(
    <div>
      <div className="d-flex flex-column gap-3 m-3">
        <img className="insta-text" src="src/assets/text.png"/>
        <div><i className="bi bi-house-fill"></i>Home</div>
        <div><i className="bi bi-search"></i>Search</div>
        <div><i className="bi bi-compass"></i>Explore</div>
        <div><i className="bi bi-camera-reels-fill"></i>Reels</div>
        <div><i className="bi bi-chat-dots"></i>Messages</div>
        <div><i className="bi bi-heart-fill"></i>Notification</div>
        <div><i className="bi bi-plus"></i>Create</div>
        <div><i className="bi bi-person-fill"></i>Profile</div>
      </div>
      <div className="position-fixed bottom-0 d-flex flex-column gap-3 m-3">
        <div><i className="bi bi-threads"></i>Treads</div>
        <div><i className="bi bi-list"></i>More</div>
      </div>
    </div>
    );
}