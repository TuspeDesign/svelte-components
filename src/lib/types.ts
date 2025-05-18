import type {Snippet} from 'svelte'
import type {Breadcrumb, ImageData, SelectItem} from '$lib'

export interface BreadcrumbView {
  homeName?: string
  homeSlug?: string
  onlyMeta?: boolean
  outerClass?: string
  values: Breadcrumb[]
}

export interface ButtonArrowView {
  onclick?: () => any
  ariaLabel: string
  color?: string
  direction: 'left' | 'right'
  id?: string
}

export interface ButtonCloseView {
  onclick?: any
  ariaLabel?: string
  color?: string
  hover?: 'black' | 'primary' | 'secondary' | 'success' | 'transparent'
  hoverText?: 'black' | 'primary' | 'secondary' | 'white'
  id?: string
}

export interface ButtonMenuView {
  onclick?: () => any
  ariaControls: string
  color?: 'black' | 'white'
  extraClass?: string
  hidden?: boolean
  id?: string
  open: boolean
  title: string
}

export interface ButtonView {
  children: Snippet
  ariaControls?: string | undefined
  ariaExpanded?: boolean | undefined
  ariaLabel?: string | undefined
  ariaPopup?: 'dialog' | 'listbox' | 'menu' | undefined
  borderColor?: 'content' | 'default' | 'primary'
  borderSize?: 0 | 1 | 2
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
  noCenter?: boolean
  noHeight?: boolean
  noPadding?: boolean
  noSpinner?: boolean
  onclick?: any
  preload?: 'hover' | 'tap'
  rel?: string
  role?: string
  rounded?: 'full' | 'lg' | 'none' | 'sm'
  spinnerColor?: 'black' | 'white'
  target?: '_blank' | '_top' | undefined
  title?: string | undefined
  type?: 'submit'
  uppercase?: boolean
  value?: string | number
}

export interface CheckboxView {
  children: Snippet
  onchange?: () => void
  checked?: boolean
  disabled?: boolean
  group?: boolean
  id?: string
  outerClass?: string
  required?: boolean
  value?: number | string
}

export interface ImageView {
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

export interface InputView {
  onchange?: () => void
  onclick?: () => void
  borderColor?: 'content' | 'default' | 'primary' | 'none'
  bgColor?: 'transparent' | 'white' | 'none'
  disabled?: boolean
  id?: string
  inputClass?: string
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

export interface ModalView {
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

export interface SelectView {
  onchange?: () => void
  colorBg?: string
  disabled?: boolean
  id?: string
  innerClass?: string
  label: string
  outerClass?: string
  placeholder?: string
  required?: boolean
  value: string | number
  values: SelectItem[]
}
