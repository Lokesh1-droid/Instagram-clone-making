import { useState, useEffect } from 'react';

export default function Suggestions() {
  const [data1, setdata1] = useState(null);
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/profile')
      .then((data) => data.json())
      .then((data) => setdata1(data))
      .catch((error) => console.log(error));

    fetch('http://localhost:3000/users')
      .then((data) => data.json())
      .then((data) =>
        setSuggestion(
          data.map((user) => ({ ...user, isFollowed: false })) // <-- ADD follow state per user
        )
      )
      .catch((error) => console.log(error));
  }, []);

  const handleFollow = (id) => {
    setSuggestion(
      suggestion.map((user) =>
        user.id === id
          ? { ...user, isFollowed: !user.isFollowed }
          : user
      )
    );
  };

  return (
    <div>
      <div className="suggestions w-75 m-4">
        {data1 ? (
          <div className="d-flex">
            <img className="db rounded-circle" src={data1.profilePic} alt="profile-pic" />
            <h4>{data1.username}</h4>
            <small className="ms-auto text-primary">Switch</small>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        <div className="d-flex">
          <p>Suggested for you</p>
          <b className="ms-auto">See All</b>
        </div>

        {suggestion.length > 0 ? (
          suggestion.map((user) => (
            <div key={user.id}>
              <div className="d-flex mt-1">
                <img className="db rounded-circle" src={user.profilePic} alt="profile-pic" />
                <h4>{user.username}</h4>

                <button
                  onClick={() => handleFollow(user.id)}
                  className="text-primary ms-auto"
                >
                  {user.isFollowed ? "Unfollow" : "Follow"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
