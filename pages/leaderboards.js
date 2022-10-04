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
                                <div>
                                    <img src="/hoop.png" alt="" />
                                </div>
                                <span>
                                    <p>September 20, 2022</p>
                                    <h3>Pop up</h3>
                                </span>
                                <h3>Crisbern</h3>
                            </div>
                            <div className={ leaderboards.winner }>
                                <div>
                                    <img src="/punch.png" alt="" />
                                </div>
                                <span>
                                    <p>September 21, 2022</p>
                                    <h3>Punch Box</h3>
                                </span>
                                <h3>Adi</h3>
                            </div>
                            <div className={ leaderboards.winner }>
                                <div>
                                    <img src="/lock.png" alt="" />
                                </div>
                                <span>
                                    <p>September 22, 2022</p>
                                    <h3>Lock Master</h3>
                                </span>
                                <h3>Crisbern</h3>
                            </div>
                            <div className={ leaderboards.winner }>
                                <div>
                                    <img src="/world.png" alt="" />
                                </div>
                                <span>
                                    <p>September 23, 2022</p>
                                    <h3>World Jump</h3>
                                </span>
                                <h3>Jeremicah</h3>
                            </div>
                            <div className={ leaderboards.winner }>
                                <div>
                                    <img src="/knife.png" alt="" />
                                </div>
                                <span>
                                    <p>September 27, 2022</p>
                                    <h3>Knife Dart</h3>
                                </span>
                                <h3>Ef</h3>
                            </div>
                            <div className={ leaderboards.winner }>
                                <div>
                                    <img src="/snowboard.png" alt="" />
                                </div>
                                <span>
                                    <p>September 28, 2022</p>
                                    <h3>Snowboard Hero</h3>
                                </span>
                                <h3>Jov</h3>
                            </div>
                            <div className={ leaderboards.winner }>
                                <div>
                                    <img src="/rocket.png" alt="" />
                                </div>
                                <span>
                                    <p>September 29, 2022</p>
                                    <h3>Spore Hunter</h3>
                                </span>
                                <h3>Crisbern</h3>
                            </div>
                            <div className={ leaderboards.winner }>
                                <div>
                                    <img src="/bat.png" alt="" />
                                </div>
                                <span>
                                    <p>September 30, 2022</p>
                                    <h3>Pro Cricket Champion</h3>
                                </span>
                                <h3>Crisbern</h3>
                            </div>
                            <div className={ leaderboards.winner }>
                                <div>
                                    <img src="/punch.png" alt="" />
                                </div>
                                <span>
                                    <p>October 3, 2022</p>
                                    <h3>Punch Box</h3>
                                </span>
                                <h3>Adi</h3>
                            </div>
                        </div>
                    </div>
                    <div className={ leaderboards.tile }>
                        <h2>Most Wins</h2>
                        <ol>
                            <li>
                                <img src="/user.png" alt="" />
                                <span>Crisbern</span>
                                <strong>4</strong>
                            </li>
                            <li>
                                <img src="/user.png" alt="" />
                                <span>Adi</span>
                                <strong>2</strong>
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