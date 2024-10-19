import React, { useContext } from 'react';
import { SetupPage, PlayersInputPage, PlayerMessagesPage, TalkStartPage, TalkEndPage, ResultsPage } from '.';
import { StepUpContext } from '../contexts';

export const TransactionPage = () => {

    // ページ遷移用のカスタムフック
    const { stepUps } = useContext(StepUpContext);

    return (
        <>
            {/* 初期設定画面 */}
            {stepUps === 1 && <SetupPage />}
            {/* ユーザ名入力画面 */}
            {stepUps === 2 && <PlayersInputPage />}
            {/* ワード表示画面 */}
            {stepUps === 3 && <PlayerMessagesPage />}
            {/* トーク開始画面 */}
            {stepUps === 4 && <TalkStartPage />}
            {/* トーク終了画面 */}
            {stepUps === 5 && <TalkEndPage />}
            {/* 結果発表画面 */}
            {stepUps === 6 && <ResultsPage />}
        </>
    );
};