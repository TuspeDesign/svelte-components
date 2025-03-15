# Tuspe SvelteKit Components

[Tuspe Design](https://tuspe.com/en) builds websites and online stores for small and large businesses. This component library includes essential elements for forms, modals, breadcrumbs, and images. It also offers utility functions for price display, VAT calculations, and validations for tables and strings.

## Example of required style specifications

```CSS
  :root {
    --color-border: #bbb;
    --color-content: #362e26;
    --color-primary: #20a3cb;
    --color-secondary: #263927;
  }
```

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
    rounded?: 'full' | 'lg' | 'none' | 'sm'
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
    ariaLabel: string
    color?: string
    direction: 'left' | 'right'
    id?: string
    onclick?: () => any
  }
```

## ButtonClose

Close button for modals and other dismissible elements.

```TypeScript
  interface Props {
    ariaLabel?: string
    color?: string
    hover?: 'black' | 'primary' | 'secondary' | 'success' | 'transparent'
    hoverText?: 'black' | 'primary' | 'secondary' | 'white'
    id?: string
    onclick?: any
  }
```

## ButtonMenu

A button for toggling the mobile menu, dynamically changing its icon based on the menu's open or closed state.

```TypeScript
  interface Props {
    ariaControls: string
    ariaLabel: string
    color?: 'black' | 'white'
    extraClass?: string
    hidden?: boolean
    id?: string
    onclick?: () => any
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
    ariaHidden?: boolean
    aspect?: '3:4' | '4:3' | 'square' | 'video'
    ball?: boolean
    border?: boolean
    center?: boolean
    display?: 'block' | 'inline-block'
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
    disabled?: boolean
    id?: string
    innerClass?: string
    label: string
    onchange?: () => void
    outerClass?: string
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
    buttonAriaLabel?: string
    colorButton?: string
    colorBg?: string
    headerClass?: string
    innerClass?: string
    open?: boolean
    outerClass?: string
    title?: string
    titleClass?: string
  }
```

## Functions

### calculatePreTax

Computes the pre-tax amount by subtracting the tax from the total, using the specified VAT percentage.

### calculateTax

Calculates the tax portion of a total amount based on a given VAT percentage (default: 25.5%), ensuring precision.

### fixNumber

Converts a number or string to a rounded number with two decimal places, ensuring precision.

### formatPrice

Formats a number or string as a price with two decimal places, spaces as thousand separators, optional comma as a decimal separator, and an appended currency symbol (default: €).

### handleCache

Retrieves or stores values in the cache; keys are slugified, and values are updated or returned if they exist. This ensures that `+page.ts` and other pages only retrieve data from the backend once and that the WordPress frontend uses the product list data on the product page without retrieving the same page again.

### preventDefault

Previously, Svelte handled form submission without reloading the page. However, the `preventDefault` function is no longer supported by Svelte v5, so this function handles form submission without loading the page.

### slugify

Converts a string to a URL-friendly format by replacing special characters, removing quotes, and replacing non-alphanumeric characters with hyphens.


### summary

This function removes any HTML tags from a given string, then trims it to a maximum of 160 characters. If possible, it truncates at the last occurrence of a sentence-ending character (".", "!", "?"); otherwise, it appends "..." to indicate truncation.

### validateArray

Checks if a value is an array and contains more than a specified number of items (default: 0).

### validateEmail

Validates if a string is a properly formatted email address.

### validateSlug

Checks if a given string is a valid slug by ensuring it matches its slugified version.

### validateString

Ensures a string contains only allowed characters (letters, numbers, spaces, and certain symbols).
