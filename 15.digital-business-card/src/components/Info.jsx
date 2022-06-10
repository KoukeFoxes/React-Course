import React from 'react'

export default function Info(){
    return(
    <div className="info">
        <img src="https://scontent.frmq1-1.fna.fbcdn.net/v/t1.6435-9/123136908_170188244732123_1634315602398268329_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=PO1l5sRI5ncAX_ALbOt&tn=80hYJbk2XodNUvxo&_nc_ht=scontent.frmq1-1.fna&oh=00_AT_0XjHufiR1qGhBj7qrS9IHF1yIf_em-3JYX0QyPDdLIw&oe=62C81C11" 
            alt="profile" 
            className="info--image"/>
        <h1 className="info--name">陳德生</h1>
        <h2 className="info--title">國立雲林科技大學</h2>
        <h3 className="info--website">!林勇誠 • Mocha • イトリ猫猫#0910</h3>
        <div className="info--buttons">
            <a href="https://www.facebook.com/koukefoxes" target="_blank" rel="noopener noreferrer" className="info--button">
                <i className="fab fa-facebook-square"></i> Facebook
            </a>
            <a href="https://www.facebook.com/koukefoxes" target="_blank" rel="noopener noreferrer" className="info--button--alt">
                <i className="fab fa-discord"></i> Discord
            </a>
        </div>
    </div>)
}