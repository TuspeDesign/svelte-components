# Tuspe SvelteKit Components

[Tuspe Design](https://tuspe.com/en) builds websites and online stores for small and large businesses. [SvelteKit](https://svelte.dev/docs/kit/introduction) or [React](https://react.dev/) is used as the frontend. This component library contains the necessary elements for using forms, modals, breadcrumbs, and images.

## Breadcrumbs

A breadcrumb navigation provide links back to previous pages, and shows the user's current location in a website. The component complies with [Google standards](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb). The title of the home page link supports Finnish and English.

```TypeScript
interface Breadcrumb {
  '@type'?: string
  item: string
  name: string
  position?: string
}

interface Props {
  language?: string
  values: Breadcrumb[]
}
```

## Button

In Tuspe's projects, except Sports, all buttons are made with this component. `control` makes the button suitable for icons and toggler for the mobile menu.

```TypeScript
interface Props {
  onclick?: any
  children: Snippet
  ariaControls?: string | undefined
  ariaExpanded?: boolean | undefined
  ariaLabel?: string
  ariaPopup?: 'dialog' | 'menu' | 'listbox' | undefined
  borderColor?: 'content' | 'default' | 'primary'
  borderSize?: 0 | 1 | 2
  color?: string
  colorBg?: string
  control?: boolean
  disabled?: boolean
  extraClass?: string
  fill?: boolean
  hidden?: boolean
  hover?: 'primary' | 'success' | 'black'
  href?: string | undefined
  id?: string
  rounded?: 'full' | 'ball'
  type?: 'submit'
  uppercase?: boolean
}
```

## ButtonArrow

Arrow icons, e.g. for image sliders or changing content.

```TypeScript
interface Props {
  onclick?: () => any
  ariaLabel: string
  color?: string
  direction: 'left' | 'right'
}
```

## ButtonClose

Close button for modal and other elements.

```TypeScript
interface Props {
  onclick: () => any
  color?: string
}
```

## ButtonMenu

Button for opening and closing mobile menu. Changes icon depending on whether the menu is open or closed.

```TypeScript
interface Props {
  onclick?: () => any
  ariaControls: string
  ariaLabel: string
  color?: 'black' | 'white'
  hidden?: boolean
  open: boolean
}
```

## Image

```TypeScript
interface ImageData {
  alt: string
  height: number
  url: string
  width: number
}

interface Props {
  aspect?: '3:4' | '4:3' | 'square' | 'video'
  bgSize?: 'contain' | 'cover'
  border?: boolean
  center?: boolean
  extraClasses?: string
  fullWidth?: boolean 
  image?: ImageData
  loading?: 'eager' | 'lazy'
  rounded?: string
}
```

## Input

The `Input` component supports the most common input types and provides basic styles for form fields. Does not validate content.

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

## Modal

A simple Modal / Popup, inside which you can insert any text, code or other content.

```TypeScript
interface Props {
  children: Snippet
  open?: boolean
  title?: string
}
```

## Select

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
