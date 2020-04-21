import { Component, Prop, h ,Element} from '@stencil/core';
@Component({
  tag: 'wc-lazyload',
  styleUrl: 'wc-lazyload.css',
  shadow: true
})
export class WcLazyload {
@Prop() src : string;
@Prop() dataSrc : string;
@Element() el :HTMLElement;

private observer: IntersectionObserver;
private option ={
threshold:[0.5,0]
}
private onIntersection = async (listImg)=>{
  listImg.forEach(entry => {
    let img = entry.target;
   if(entry.isIntersecting && this.src){
    if(this.dataSrc){
      img.setAttribute('src',this.dataSrc)
      img.src = this.src;
      this.observer.unobserve(img);
    }
    else img.src = this.src;
   }
});
}
componentDidLoad(){
  const img = this.el.shadowRoot.querySelector('img');
  this.observer = new IntersectionObserver(this.onIntersection,this.option);
  this.observer.observe(img);
}
  render() {

    return<img />;
  }
}
