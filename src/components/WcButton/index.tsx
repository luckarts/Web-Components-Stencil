import { Component, Prop, h,Element } from '@stencil/core';
import { CssClassMap} from '../../utils/interfaces'
// CssClassMap Interface
@Component({
  tag: 'wc-button',
  styleUrl: 'wc-button.scss',
  shadow: true
})
export class WcButton {
  @Prop({ reflectToAttr: true }) disabled: boolean;
  @Prop({ reflectToAttr: true }) href: string;
  @Prop({ reflectToAttr: true }) target:'_blank' | '_self'  = '_self';
  @Prop()
  type: 'button' | 'reset' | 'submit' = 'button';
  @Prop()
  color:  'accent' | 'light' | ''= '';
  @Prop()
  variante: 'solid' | 'outline'|'clear' |''= '';
  @Prop()
  shape: 'rounded'|''='';
  @Prop()
  size: 'small' | 'default' | 'large' | ''= '';


  @Element() btnEl : HTMLButtonElement;

//carte de classe
  private getCssClassMap(): CssClassMap {

    return {
      ['button-native']: true,
      [this.color]: true,
      [this.shape]:true,
      [this.size]: true,
      [this.variante]: true
    };
  }

  render() {
    const classMap = this.getCssClassMap();
    return  [
      this.href ? <a class={classMap} href={this.href} target={this.target}>
       <slot />
       </a>
       :
    <button disabled={this.disabled} class={classMap}>
    <slot />
  </button>]
  }
}
