import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [jokes, setJokes] = useState('');
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState('');

  const getJokes = () => {
    fetch('https://v2.jokeapi.dev/joke/any?type=single')
        .then(res => {
            if (!res.ok) {
                throw Error('Could not fetch the data for that Resource');
            }
            return res.json();
        })
        .then((data) => {
            setJokes(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);
        });
  };

  return (
    <>
      <Head>
          <title>Random</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className='container'>
        <div className={styles.content}>
          <div>
            <h1>Random</h1>
            <div className={ styles.buttons }>
              <Link href='/games'>Play</Link>
              <Link href='/leaderboards'>Leaderboards</Link>
            </div>
          </div>
          <div>
            { jokes == '' && <button onClick={ getJokes }>Up for a Joke?</button>}
          </div>
          { jokes && <div className={ styles.advice } onClick={() => { setJokes('') }}><strong>{ jokes.joke }</strong> <img src="laugh.png" alt="" srcset="" /></div>}
        </div>
      </section>
    </>
  )
}
