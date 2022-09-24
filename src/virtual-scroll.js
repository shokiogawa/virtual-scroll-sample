export class VirtualScroll {
  constructor(outerClassName, innerClassName, itemClassName, itemsClassName){
    this.outerClassName = outerClassName
    this.innerClassname = innerClassName
    this.itemClassName = itemClassName
    this.itemsClassName = itemsClassName

    var itemElement =$(`.${itemClassName}`);
    //データセット
    this.outerHeight = $(`.${outerClassName}`).height();
    this.itemHeight = itemElement.height();
    this.itemCount = itemElement.length;
    this.innerHeight = this.itemHeight * this.itemCount
    this.visibleItemCount = Math.ceil(this.outerHeight / this.itemHeight);

    //内部スクロールの高さ指定
    $(`.${innerClassName}`).css('height', `${this.innerHeight}`);

    //初期データ表示
    var displayingElement = itemElement.slice(0, 0 + this.visibleItemCount);
    displayingElement.css('display', 'block');
  }

  //仮想スクロール実装
  start(){
    var itemElement = $(`.${this.itemClassName}`);
    var itemsElement = $(`.${this.itemsClassName}`)
    $(`.${this.outerClassName}`).on('scroll',(e)=>{
      var scrollPosition = e.currentTarget.scrollTop;
      var startIndex = Math.floor(scrollPosition / this.itemHeight);
      var visibleElement = itemElement.slice(startIndex, startIndex + this.visibleItemCount);
      visibleElement.css('display', 'block');
      var hiddenElementUp = itemElement.slice(0, startIndex);
      var hiddenElementDown = itemElement.slice(startIndex + this.visibleItemCount, itemElement.length)
      hiddenElementUp.css('display','none')
      hiddenElementDown.css('display','none')
      $(itemsElement).css('transform', `translateY(${startIndex * this.itemHeight}px`)
    })
  }

  //アイテムの件数取得
  getItemCount(){
    $('.count-area').text(`データ件数${this.itemCount}件`)
  }
}