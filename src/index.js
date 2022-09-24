import "../style/style.scss"
import {VirtualScroll} from "./virtual-scroll"
$(function(){
  //4つのclass名を指定(dist/index.htmlを参照してください。)
  var virtualScroll = new VirtualScroll('outer-scroll-content', 'inner-scroll-content', 'item','items');
  //仮想スクロール
  virtualScroll.start();
  //アイテムの件数取得
  virtualScroll.getItemCount();
})