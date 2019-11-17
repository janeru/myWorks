import React from "react";

export default function ReactPart({ title, subtitle, dark, id }) {
    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
            <div className="section-content" id={id}>
                <h1>{title}</h1>
                <div style={{ display: 'flex' }}>

                    <div style={{ margin: '10px' }}> <h4><a style={{ 'color': 'blue', textDecoration: 'none' }} href="http://janeru_flag_game.surge.sh/"> <i class="fas fa-angle-double-right"></i> react 國旗遊戲</a></h4></div>
                    <div style={{ margin: '10px' }}> <h4><a style={{ 'color': 'blue', textDecoration: 'none' }} href="https://github.com/janeru/flag_game/tree/flag_branch">github連結</a></h4></div>
                </div>

                <div style={{ margin: '10px' }}><li>製作說明：利用axios取得資料，用react框架呈現</li></div>
                <div style={{ margin: '10px' }}><li>遊戲說明：隨機出現四個國家選項，點選項，若猜對圖片中國家，則換下一題，得到10分，遊戲結束</li></div>
                <hr />
                <div style={{ display: 'flex' }}>
                    <div style={{ margin: '10px' }}> <h4><a style={{ 'color': 'blue', textDecoration: 'none' }} href="http://new_classadmin.surge.sh/"> <i class="fas fa-angle-double-right"></i> react-redux 網頁版班級頁面</a></h4></div>
                    <div style={{ margin: '10px' }}> <h4><a style={{ 'color': 'blue', textDecoration: 'none' }} href="https://github.com/janeru/class/tree/review_">github連結</a></h4></div>
                </div>

                <div style={{ margin: '10px' }}><li>製作說明：利用reactstrap的UI製作，用實習單位提供的三筆班級假資料在redux store取得</li></div>
                <div style={{ margin: '10px' }}><li>班級列表說明：班級列表可以新增/刪除班級</li></div>
                <div style={{ margin: '10px' }}><li>班級管理頁面說明：點擊班級列表的圖片，進入班級管理頁面</li></div>
                <div style={{ margin: '10px' }}><li>[選單]：可以看分組與未分組真實學生姓名</li></div>
                <div style={{ margin: '10px' }}><li>[新增/刪除小組]：可以新增或移除小組</li></div>
                <div style={{ margin: '10px' }}><li>[新增學生]:可以增加空座位的學生</li></div>
                <div style={{ margin: '10px' }}><li>[點擊真實姓名]：可以對該筆資料進行修改暱稱或刪除該筆資料</li></div>
                <div style={{ margin: '10px' }}><li>[小組內人名圖像]：可以將該筆資料移出小組</li></div>
                <div style={{ margin: '10px' }}><li>[小組外人名圖像]：可以將該筆資料選擇加入哪個小組</li></div>
                <hr />
                <div style={{ display: 'flex' }}>
                    <div style={{ margin: '10px' }}> <h4><a style={{ 'color': 'blue', textDecoration: 'none' }} href="http://janeurbookapp.surge.sh/"> <i class="fas fa-angle-double-right"></i> react 書籍頁面</a></h4></div>
                    <div style={{ margin: '10px' }}> <h4><a style={{ 'color': 'blue', textDecoration: 'none' }} href="https://github.com/janeru/bookapp">github連結</a></h4></div>
                </div>

                <div style={{ margin: '10px' }}><li>製作說明：利用現成google的書籍api呈現頁面</li></div>
                <div style={{ margin: '10px' }}><li>利用react-router切換頁面</li></div>
                <div style={{ margin: '10px' }}><li>製作rwd版與電腦版的頁面</li></div>
                <div style={{ margin: '10px' }}><li>加入動畫(animate css)</li></div>
            </div>

        </div >
    );
}