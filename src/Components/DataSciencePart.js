import React from "react";

export default function Data({ dark, id }) {
    return (
        <div className={"section" + (dark ? " section-dark" : "")}>
            <div className="section-content" id={id}>
                <h1>Data Science系列</h1>

                <div style={{ margin: '10px' }}> <h3><a style={{ 'color': 'white', textDecoration: 'none' }} href="https://github.com/janeru/b03801053"> <i class="fas fa-angle-double-right"></i> 使用R語言，進行不同主題的資料分析</a></h3></div>
                <div style={{ margin: '10px' }}> <h3><a style={{ 'color': 'white', textDecoration: 'none' }} href="https://github.com/janeru/b3801053csx"> <i class="fas fa-angle-double-right"></i> 使用Python語言，進行不同主題的資料分析</a></h3></div>
            </div>
        </div>
    );
}