import Head from 'next/head'
import Link from 'next/link'
import games from '../../styles/Games.module.css'
import SporeHunter from '../../components/games/SporeHunter';
import { useState } from 'react';
import CricketChamp from '../../components/games/CricketChamp';
import SnowboardHero from '../../components/games/SnowboardHero';
import KnifeDart from '../../components/games/KnifeDart';
import PunchBox from '../../components/games/PunchBox';
import PopUp from '../../components/games/Popup';
import LockMaster from '../../components/games/LockMaster';
import WorldJump from '../../components/games/WorldJump';
import DinoRun from '../../components/games/DinoRun';
import FlickBasketball from '../../components/games/FlickBasketball';
import JumpSplat from '../../components/games/jumpSplat';

const Games = () => {
    const [game, setGame] = useState(null);

    return (
        <>
            <Head>
                <title>Random | Game</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <div className={ games.wrapper }>
                    <h1>Games</h1>
                    <div className={ games.content }>
                        <div className={ games.grid }>
                            <div className={ games.card } onClick={() => { setGame('cricket') }}>
                                <h2>Pro Cricket Champion</h2>
                                <Link href='/'>Play</Link>
                                <div className={ games.thumbnail }>
                                    <span>PLAY</span>
                                    <img src="/bat.png" alt="" />
                                </div>
                            </div>
                            <div className={ games.card } onClick={() => { setGame('spore') }}>
                                <h2>Spore Hunter</h2>
                                <Link href='/'>Play</Link>
                                <div className={ games.thumbnail }>
                                    <span>PLAY</span>
                                    <img src="/rocket.png" alt="" />
                                </div>
                            </div>
                            <div className={ games.card } onClick={() => { setGame('snow') }}>
                                <h2>Snowboard Hero</h2>
                                <Link href='/'>Play</Link>
                                <div className={ games.thumbnail }>
                                    <span>PLAY</span>
                                    <img src="/snowboard.png" alt="" />
                                </div>
                            </div>
                            <div className={ games.card } onClick={() => { setGame('dart') }}>
                                <h2>Knife Dart</h2>
                                <Link href='/'>Play</Link>
                                <div className={ games.thumbnail }>
                                    <span>PLAY</span>
                                    <img src="/knife.png" alt="" />
                                </div>
                            </div>
                            <div className={ games.card } onClick={() => { setGame('punch') }}>
                                <h2>Punch Box</h2>
                                <Link href='/'>Play</Link>
                                <div className={ games.thumbnail }>
                                    <span>PLAY</span>
                                    <img src="/punch.png" alt="" />
                                </div>
                            </div>
                            <div className={ games.card } onClick={() => { setGame('pop') }}>
                                <h2>Pop Up</h2>
                                <Link href='/'>Play</Link>
                                <div className={ games.thumbnail }>
                                    <span>PLAY</span>
                                    <img src="/hoop.png" alt="" />
                                </div>
                            </div>
                            <div className={ games.card } onClick={() => { setGame('lock') }}>
                                <h2>Lock Master</h2>
                                <Link href='/'>Play</Link>
                                <div className={ games.thumbnail }>
                                    <span>PLAY</span>
                                    <img src="/lock.png" alt="" />
                                </div>
                            </div>
                            <div className={ games.card } onClick={() => { setGame('jump') }}>
                                <h2>World Jump</h2>
                                <Link href='/'>Play</Link>
                                <div className={ games.thumbnail }>
                                    <span>PLAY</span>
                                    <img src="/world.png" alt="" />
                                </div>
                            </div>
                            <div className={ games.card } onClick={() => { setGame('dino') }}>
                                <h2>Dinosaur Run</h2>
                                <Link href='/'>Play</Link>
                                <div className={ games.thumbnail }>
                                    <span>PLAY</span>
                                    <img src="/dino1.png" alt="" />
                                </div>
                            </div>
                            <div className={ games.card } onClick={() => { setGame('ball') }}>
                                <h2>Flick Basketball</h2>
                                <Link href='/'>Play</Link>
                                <div className={ games.thumbnail }>
                                    <span>PLAY</span>
                                    <img src="/ball.png" alt="" />
                                </div>
                            </div>
                            <div className={ games.card } onClick={() => { setGame('splat') }}>
                                <h2>Jump and Splat</h2>
                                <Link href='/'>Play</Link>
                                <div className={ games.thumbnail }>
                                    <span>PLAY</span>
                                    <img src="/bounce.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    { game && (
                        <div className={ games.game }>
                            { game == 'cricket' && <CricketChamp />}
                            { game == 'spore' && <SporeHunter />}
                            { game == 'snow' && <SnowboardHero />}
                            { game == 'dart' && <KnifeDart />}
                            { game == 'punch' && <PunchBox /> }
                            { game == 'pop' && <PopUp /> }
                            { game == 'lock' && <LockMaster /> }
                            { game == 'jump' && <WorldJump /> }
                            { game == 'dino' && <DinoRun /> }
                            { game == 'ball' && <FlickBasketball /> }
                            { game == 'splat' && <JumpSplat /> }
                            <button onClick={() => { setGame('') }}>CLOSE</button>
                        </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}
 
export default Games;