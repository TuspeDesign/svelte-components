import Breadcrumbs from './Breadcrumbs.svelte'
import Button from './Button.svelte'
import Checkbox from './Checkbox.svelte'
import Image from './Image.svelte'
import Input from './Input.svelte'
import Modal from './Modal.svelte'
import Select from './Select.svelte'

export {Breadcrumbs, Button, Checkbox, Image, Input, Modal, Select}

export interface Breadcrumb {
  '@type'?: string
  item: string
  name: string
  position?: string
}

export interface ImageData {
  alt: string
  height: number
  url: string
  width: number
}

export interface SelectItem {
  name: string
  value: number | string
}
