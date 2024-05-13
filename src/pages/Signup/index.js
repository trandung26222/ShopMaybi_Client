import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

function Signup(props) {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  const signup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
        });
        toast.success("user registered successfully!", {
          position: "top-center",
        });
      }
    } catch (err) {
      console.log(err.message);
      toast.success("user register fail !", {
        position: "top-center",
      });
    }
  };

  return (
    <section className="flex flex-col w-[200px]">
      <form onSubmit={signup}>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="w-[300px] h-[50px] border"
        />

        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="w-[300px] h-[50px] border"
        />
        <button type="submit" className="w-[50px] h-[30px] bg-blue-300">
          signup
        </button>
      </form>
      <Link to={"/account/login"}>login tai day</Link>
    </section>
  );
}

Signup.propTypes = {};

export default Signup;
