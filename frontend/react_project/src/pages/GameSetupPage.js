/**
 * @file GameSetupPage.js
 * @description このモジュールは、ゲームの初期設定ページ（プレイヤー人数、エロウルフ人数、トークタイム）を提供します。
 * @module GameSetupPage
 * @example
 * import GameSetupPage from './pages/GameSetupPage';
 * // このページをレンダリングするには、Reactコンポーネントとして使用します。
 * <GameSetupPage />
 * 作成者：橋倉 佳希
 * 更新者：
 * 更新履歴：
 * 　・初期作成 2024/10/04
 */

import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Title, SubTitle, Counter, NextPageButton } from '../components'
import { GameContext } from '../App';

const GameSetupPage = () => {
    const { 
        players, increasePlayers, decreasePlayers, 
        wolves, increaseWolves, decreaseWolves, 
        talkTime, increaseTalkTime, decreaseTalkTime,  
    } = useContext(GameContext);

    return (
        <Container className="text-center" style={{ maxWidth: '400px', marginTop: '50px' }}>
            <Title />
            <SubTitle/>
            <div className="setup-box bg-light p-4 rounded">
                <div className="d-flex flex-column">
                    <Counter 
                        title={"How many players are there?"}
                        currentcount={players}
                        decreaseFunction={decreasePlayers}
                        increaseFunction={increasePlayers}
                        unit={"people"}
                    />
                    <Counter 
                        title={"How many wolves are there?"}
                        currentcount={wolves}
                        decreaseFunction={decreaseWolves}
                        increaseFunction={increaseWolves}
                        unit={"people"}
                    />
                    <Counter 
                        title={"Talk time?"}
                        currentcount={talkTime}
                        decreaseFunction={decreaseTalkTime}
                        increaseFunction={increaseTalkTime}
                        unit={"minute"}
                    />
                </div>
            </div>
            <div className="d-flex flex-column">
                <NextPageButton />
                <Button className="mt-2" variant="link">遊び方を見る</Button>
            </div>
      </Container>
    );
}
export default GameSetupPage;