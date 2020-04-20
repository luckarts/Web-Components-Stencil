## <wc-icon>
> IMPORTANT: The Web Components are a work in progress

## Installation
comming soon !

## Example usage
### Standard

```html
  <wc-button color="primary" solid>
        <span> Open Modal</span>
    </wc-button>
```
```html
  <wc-button variante="outline" shape="rounded">
        Click Me
    </wc-button>
```
```html
 <wc-button color="primary" variante="solid">
         Click Me
    </wc-button>
```
```html
<style>
    :root {
    --color-primary: #488aff;
    --color-contrast: white ;
    --color-primary-rgb: 72, 138, 255;
    --color-primary-hsl: 218, 100%;
}
</style>
```

### Properties/Attributes

| Name | Type | Description
| ------------------------------------- | -------------------------------------------------- | ---
| `color`                               |        string               |  base color text button
| `variante`                            |       string               |  button contain
| `shape`                               |       string               |  button with border radius
| `size`                                |       string               |  button size large
| `strong`                              |       boolean               |  button font strong

### CSS Custom Properties

| Name | Default | Description
| ------------------------------------- | -------------------------------------------------- | ---
| `--color-primary`                     |  #488aff;                  | base color of the icon
| `--color-base`                        |  #488aff;                  | base color of the icon
| `--color-primary-rgb`                 |  #488aff;                  | base color of the icon
| `--color-contrast`                    |  white                     | default width icon


MIT © [Bachelerie Luc]()