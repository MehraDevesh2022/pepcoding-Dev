import React, { useState, useEffect } from "react";

function User() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  useEffect(function getUser() {
    (async function () {
      try {
        const resoponse = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );

        const data = await resoponse.json();

        setUser(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setTimeout(() => {
          setError(false);
        }, 1000);
      }
    })();
  }, []);

  return (
    <>
      <h1>user is :</h1>
      {loading == true ? (
        <h1>Loading...</h1>
      ) : error == true ? (
        <h1>{error}</h1>
      ) : (
        <h2> {user.name}</h2>
      )}
    </>
  );
}

export default User;  // this one is normal async state change exampe with useState()
