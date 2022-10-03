import Head from 'next/head'
import leaderboards from '../styles/Leaderboards.module.css'

const Leaderboards = () => {
    return (
        <>
            <Head>
                <title>Random | Leaderboards</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <div className={ leaderboards.wrapper }>
                    <h1>Leaderboards</h1>
                    <div className={ leaderboards.tiledaily }>
                        <h2>Daily Winners</h2>
                        <div className={ leaderboards.winners }>
                            <div className={ leaderboards.winner }>
                                <img src="/hoop.png" alt="" />
                                <h3>September 20, 2022</h3>
                                <h3>Crisbern</h3>
                            </div>
                        </div>
                    </div>
                    <div className={ leaderboards.tile }>
                        <h2>Most Wins</h2>
                        <ol>
                            <li>
                                <img src="/user.png" alt="" />
                                <span>Crisbern</span>
                                <strong>3</strong>
                            </li>
                            <li>
                                <img src="/user.png" alt="" />
                                <span>Adi</span>
                                <strong>1</strong>
                            </li>
                            <li>
                                <img src="/user.png" alt="" />
                                <span>Jov</span>
                                <strong>1</strong>
                            </li>
                            <li>
                                <img src="/user.png" alt="" />
                                <span>Ef</span>
                                <strong>1</strong>
                            </li>
                            <li>
                                <img src="/user.png" alt="" />
                                <span>Jeremicah</span>
                                <strong>1</strong>
                            </li>
                        </ol>
                        <img className={ leaderboards.crown } src="/crown.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Leaderboards;