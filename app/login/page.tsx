"use client";
import React, { useState } from 'react';

import styles from './styles.module.css'
import Link from 'next/link';

const Authorization: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorLogOrPass, setErrorLogOrPass] = useState<boolean>(false)

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

    };

    const handleRegister = () => {

    };

    return (<div className={styles.container}>
        <h2>Авторизация</h2>
        <form onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="Логин"
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value)
                    setErrorLogOrPass(false)
                }
                }
                required
                className={styles.input}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                    setErrorLogOrPass(false)
                }
                }
                required
                className={styles.input}
            />
            {errorLogOrPass && <div className={styles.error}>
                Неверный логин или пароль
            </div>
            }
            <Link href='/dashboard'>
                <button type="submit" className={styles.button}>Авторизоваться</button>
            </Link>

            <Link href='/registration'>
                <button type="button" onClick={handleRegister} className={styles.button}>Зарегистрироваться</button>
            </Link>
        </form>
    </div>
    );
};

export default Authorization;