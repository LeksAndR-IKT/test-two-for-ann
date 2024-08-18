"use client";

import React, { useState } from "react";

import { setUser, verificationOfAuthorization } from "../GlobalRedux/Autorisations/AutorisationsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootReducerType } from "../GlobalRedux/store";

import styles from './styles.module.css'
import { useRouter } from "next/navigation";

let Registration: React.FC<any> = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorLog, setErrorLog] = useState<boolean>(false)
  const [errorLogOrPass, setErrorLogOrPass] = useState<boolean>(false)

  const router = useRouter()

  const dispatch = useDispatch<AppDispatch>()

  const users = useSelector((state: RootReducerType) => state.users)

  const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!(/(?=.*[0-9])|(?=.*!)/.test(password))){
      setErrorLogOrPass(true)
    }else if (!verificationOfAuthorization(users, username, password)){
        dispatch(setUser({username, password}))
        router.push('/dashboard')
    } else {
      setErrorLog(true)
    }
    
  }
  return (<div className={styles.container}>
    <h2>Регистрация</h2>
    <form onSubmit={handleRegistration}>
      <input
        type="text"
        placeholder="введите логин"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value)
          setErrorLog(false)
          setErrorLogOrPass(false)  }
        }
        required
        className={styles.input}
      />
      {errorLog && <div className={styles.error}>
          Это имя уже занято, придумайте другое
        </div>}
      <input
        type="password"
        placeholder="Придумайте пароль"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
          setErrorLog(false)
          setErrorLogOrPass(false)  }
        }
        required
        className={styles.input}
      />
      {errorLogOrPass && <div className={styles.error}>
          Слишком слабый пароль, используйте цифры, спец. знаки такие как ! # № % ? *
        </div>}

    <button className={styles.button}>Зарегистрироваться</button>    
    </form>
  </div>
  );
}

export default Registration