# Tuspe SvelteKit Components

[Tuspe Design](https://tuspe.com/en) builds websites and online stores for small and large businesses. This component library includes essential elements for forms, modals, breadcrumbs, and images. It also offers utility functions for price display, VAT calculations, and validations for tables and strings.

## Breadcrumbs

A breadcrumb navigation provide links back to previous pages, and shows the user's current location in a website. The component complies with [Google standards](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb).

```TypeScript
  interface Breadcrumb {
    '@type'?: string
    item: string
    name: string
    position?: string
  }

  interface Props {
    homeName?: string
    homeSlug?: string
    values: Breadcrumb[]
  }
```

## Button

Easily replace most buttons in your project with this versatile button component. The `control` value makes it ideal for icons and as a toggler for the mobile menu.

```TypeScript
  interface Props {
    ariaControls?: string | undefined
    ariaExpanded?: boolean | undefined
    ariaLabel?: string
    ariaPopup?: 'dialog' | 'menu' | 'listbox' | undefined
    ball?: boolean
    borderColor?: 'content' | 'default' | 'primary'
    borderSize?: 0 | 1 | 2
    children: Snippet
    color?: string
    colorBg?: string
    control?: boolean
    disabled?: boolean
    extraClass?: string
    fill?: boolean
    fontWeight?: 'normal' | 'bold'
    fullWidth?: boolean
    hover?: 'black' | 'primary' | 'secondary' | 'success' | 'transparent'
    hoverText?: 'black' | 'primary' | 'secondary' | 'white'
    href?: string | undefined
    id?: string
    isActive?: boolean
    noHeight?: boolean
    noPadding?: boolean
    onclick?: any
    preload?: 'hover' | 'tap'
    role?: string
    target?: '_blank' | '_top' | undefined
    type?: 'submit'
    uppercase?: boolean
    value?: string | number
  }
```

## ButtonArrow

Arrow icons for navigation, such as image sliders or content transitions.

```TypeScript
  interface Props {
    onclick?: () => any
    ariaLabel: string
    color?: string
    direction: 'left' | 'right'
  }
```

## ButtonClose

Close button for modals and other dismissible elements.

```TypeScript
  interface Props {
    onclick: () => any
    color?: string
  }
```

## ButtonMenu

A button for toggling the mobile menu, dynamically changing its icon based on the menu's open or closed state.

```TypeScript
  interface Props {
    onclick?: () => any
    ariaControls: string
    ariaLabel: string
    color?: 'black' | 'white'
    extraClass?: string
    hidden?: boolean
    open: boolean
  }
```

## Image

A versatile image component supporting various aspect ratios and object fit options. Features include optional borders, centering, full-width display, custom classes, and configurable loading behavior.

```TypeScript
  interface ImageData {
    alt: string
    height?: number
    src: string
    width?: number
  }

  interface Props {
    aspect?: '3:4' | '4:3' | 'square' | 'video'
    ball?: boolean
    border?: boolean
    center?: boolean
    extraClasses?: string
    fullWidth?: boolean
    image: ImageData
    loading?: 'eager' | 'lazy'
    objectFit?: 'contain' | 'cover'
  }
```

## Input

A flexible `Input` component supporting common input types with basic styling for form fields. It includes optional attributes for labels, placeholders, min/max values, steps, and event handlers but does not perform content validation.

```TypeScript
  interface Props {
    onchange?: () => void
    onclick?: () => void
    borderColor?: string
    disabled?: boolean
    id?: string
    label: string
    max?: number | string
    min?: number | string
    outerClass?: string
    placeholder?: string
    required?: boolean
    step?: number
    type?: 'email' | 'date' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'textarea' | 'time' | 'url'
    value: string | number
  }
```

## Select

A customizable `Select` component for choosing from a list of options. Supports labels, placeholders, required fields, and disabled states. Accepts an array of selectable items and triggers an optional onchange event when the value changes.

```TypeScript
  interface SelectItem {
    name: string
    value: number | string
  }

  interface Props {
    onchange?: () => void
    disabled?: boolean
    outerClass?: string
    id?: string
    label: string
    placeholder?: string
    required?: boolean
    value: string | number
    values: SelectItem[]
  }
```

## Checkbox

Allows users to toggle between checked and unchecked states.

```TypeScript
  interface Props {
    children: Snippet
    onchange?: () => void
    checked: boolean
    disabled?: boolean
    group?: boolean
    id?: string
    outerClass?: string
    value?: string
  }
```

## Modal

A simple `Modal` component that displays a popup with customizable content.

```TypeScript
  interface Props {
    children: Snippet
    innerClass?: string
    open?: boolean
    outerClass?: string
    title?: string
  }
```

## Prevent Default

Previously, Svelte handled form submission without reloading the page. However, the preventDefault function is no longer supported by Svelte v5, so this function handles form submission without loading the page.

```JavaScript
export const preventDefault = (fn: Function) => {
  return function (this: any, event: any) {
    event.preventDefault()
    fn.call(this, event)
  }
}
```
