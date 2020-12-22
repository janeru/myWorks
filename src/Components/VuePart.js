import React from "react";

export default function VuePart({ title, subtitle, dark, id }) {
    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
            <div className="section-content" id={id}>
                <h1>{title}</h1>
                <div style={{ display: 'flex' }}>

                    <div style={{ margin: '10px' }}> <h3><a style={{ 'color': 'blue', textDecoration: 'none' }} href="https://client-shop.herokuapp.com/products"> <i className="fas fa-angle-double-right"></i> Vue Product後台管理介面 </a></h3></div>
                    <div style={{ margin: '10px' }}> <h3><a style={{ 'color': 'blue', textDecoration: 'none' }} href="https://github.com/janeru/client_shop">github frontend</a></h3></div>
                    <div style={{ margin: '10px' }}> <h3><a style={{ 'color': 'blue', textDecoration: 'none' }} href="https://github.com/janeru/shopping_server_express">github backend</a></h3></div>
                </div>

                <div style={{ margin: '10px' }}>製作說明：利用 axios 取得資料，用 Vue 框架呈現</div>

                <div style={{ margin: '10px' }}><li>說明：可以在不同分頁拿取、新增、修改、刪除產品資料、排序資料</li></div>
                <div style={{ margin: '10px' }}><li>主要目的：實作最新的Vue compostion API、此外利用Vue axios集中管理request </li></div>
            </div>

        </div >
    );
}