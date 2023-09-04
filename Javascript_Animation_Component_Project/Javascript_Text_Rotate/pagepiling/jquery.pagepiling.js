/*!
 * pagepiling.js 1.5.6
 *
 * https://github.com/alvarotrigo/pagePiling.js
 * @license MIT licensed
 *
 * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
 */
html, body {
    overflow:hidden;
    margin:0;
    padding:0;

    /*Avoid flicker on slides transitions for mobile phones #336 */
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.pp-section {
    height:100%;
    position:absolute;
    width:100%;
    
    /* fixes flickering in firefox*/
    backface-visibility: hidden; 
}
.pp-easing {
    -webkit-transition: all 1000ms cubic-bezier(0.550, 0.085, 0.000, 0.990);
    -moz-transition: all 1000ms cubic-bezier(0.550, 0.085, 0.000, 0.990);
    -o-transition: all 1000ms cubic-bezier(0.550, 0.085, 0.000, 0.990);
    transition: all 1000ms cubic-bezier(0.550, 0.085, 0.000, 0.990);
    /* custom */
    -webkit-transition-timing-function: cubic-bezier(0.550, 0.085, 0.000, 0.990);
    -moz-transition-timing-function: cubic-bezier(0.550, 0.085, 0.000, 0.990);
    -o-transition-timing-function: cubic-bezier(0.550, 0.085, 0.000, 0.990);
    transition-timing-function: cubic-bezier(0.550, 0.085, 0.000, 0.990);
    /* custom */
}
#pp-nav {
    position: fixed;
    z-index: 100;
    margin-top: -32px;
    top: 50%;
    opacity: 1;
}
#pp-nav.right {
    right: 17px;
}
#pp-nav.left {
    left: 17px;
}
.pp-section.pp-table{
    display: table;
}
.pp-tableCell {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;
}
.pp-slidesNav{
    position: absolute;
    z-index: 4;
    left: 50%;
    opacity: 1;
}
.pp-slidesNav.bottom {
    bottom: 17px;
}
.pp-slidesNav.top {
    top: 17px;
}
#pp-nav ul,
.pp-slidesNav ul {
  margin: 0;
  padding: 0;
}
#pp-nav li,
.pp-slidesNav li {
    display: block;
    width: 14px;
    height: 13px;
    margin: 7px;
    position:relative;
}
.pp-slidesNav li {
    display: inline-block;
}
#pp-nav li a,
.pp-slidesNav li a {
    display: block;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
}
#pp-nav li .active span,
.pp-slidesNav .active span {
    background: #333;
}
#pp-nav span,
.pp-slidesNav span {
    top: 2px;
    left: 2px;
    width: 8px;
    height: 8px;
    border: 1px solid #000;
    background: rgba(0, 0, 0, 0);
    border-radius: 50%;
    position: absolute;
    z-index: 1;
}
.pp-tooltip {
    position: absolute;
    top: -2px;
    color: #fff;
    font-size: 14px;
    font-family: arial, helvetica, sans-serif;
    white-space: nowrap;
    max-width: 220px;
}
.pp-tooltip.right {
    right: 20px;
}
.pp-tooltip.left {
    left: 20px;
}
.pp-scrollable{
    overflow-y: scroll;
    height: 100%;
}