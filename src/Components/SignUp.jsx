import React from 'react'
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {

  const handleSubmit = (e) => {
    e.preventDefault();
    // inputの値を引数の(e)を使用して取得する
    const { email, password } = e.target.elements;
    createUserWithEmailAndPassword(auth,email.value, password.value)
  }


  return (
    <>
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input id="email" name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input id="password" name="password" type="password" />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </>
  )
}

export default SignUp
