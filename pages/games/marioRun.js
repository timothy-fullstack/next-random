import Head from 'next/head';
import { useState } from 'react';
import runner from '../../styles/Runner.module.css'

const marioRun = () => {
    const [jump, setJump] = useState(false);
    const [canJump, setCanJump] = useState(true);

    const willJump = () => {
        if (canJump) {
            setCanJump(false);
            setJump(true);
            setTimeout(() => {
                setJump(false);
            }, 300);
            setTimeout(() => {
                setCanJump(true);
            }, 600);
        }
    }

    return (
        <>    
            <Head>
                <title>Mario ?msknjbsahgbniofbr</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={ runner.canvas } onClick={ willJump }>
                <div className={runner.bg}>

                </div>
                <img className={ runner.character + ` ${jump ? runner.jumping : "" }`} src="/mario.gif" alt="" />
            </div>
        </>
    );
}
 
export default marioRun;