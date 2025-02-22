import {get, writable} from 'svelte/store'

import Breadcrumbs from './Breadcrumbs.svelte'
import Button from './Button.svelte'
import ButtonArrow from './ButtonArrow.svelte'
import ButtonClose from './ButtonClose.svelte'
import ButtonMenu from './ButtonMenu.svelte'
import Checkbox from './Checkbox.svelte'
import Image from './Image.svelte'
import Input from './Input.svelte'
import Modal from './Modal.svelte'
import Select from './Select.svelte'

export {Breadcrumbs, Button, ButtonArrow, ButtonClose, ButtonMenu, Checkbox, Image, Input, Modal, Select}

export interface Breadcrumb {
  '@type'?: string
  item: string
  name: string
  position?: string
}

export interface ImageData {
  alt: string
  height: number
  src: string
  width: number
}

export interface SelectItem {
  name: string
  value: number | string
}

export const loading = writable(0)

/**
 * PRICES AND NUMBERS
 */

export const formatPrice = (value: number | string, comma = false, currency = '€'): string => {
  if (!value) {
    return '0.00 ' + currency
  }
  let price = Number(value)
    .toFixed(2) // Ensure two decimal places
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ') // Add space as thousand separator
  if (comma) {
    price = price.replace('.', ',') // Replace dot with comma
  }
  if (currency) {
    price += ' ' + currency
  }
  return price
}

export const fixNumber = (value: number | string): number => {
  if (typeof value === 'string') {
    value = Number(value)
  }
  if (!value) {
    return 0
  }
  return Math.round((value + Number.EPSILON) * 100) / 100
}

/**
 * VAT CALCULATION
 */

const defaultVatPercentage = 25.5

export const calculateTax = (total: number, vatPercentage = defaultVatPercentage): number =>
  fixNumber((vatPercentage * total) / (100 + vatPercentage))

export const calculatePreTax = (total: number, vatPercentage = defaultVatPercentage): number => fixNumber(total - calculateTax(total, vatPercentage))

/**
 * STRING VALIDATIONS
 */

export const slugify = (value: string): string => {
  if (!value) {
    return ''
  }

  return value
    .toLowerCase()
    .replace(/[äå]/g, 'a') // Replace ä and å with a
    .replace(/ö/g, 'o') // Replace ö with o
    .replace(/['"]/g, '') // Remove ' and "
    .replace(/[^a-z0-9]+/g, '-') // Replace any non-alphanumeric characters with -
    .replace(/^-+|-+$/g, '') // Trim leading and trailing hyphens
}

export const validateSlug = (value: string): boolean => {
  return value && slugify(value) === value ? true : false
}

export const validateEmail = (email: string): boolean => {
  var re = /\S+@\S+\.\S+/
  return re.test(email)
}

export const validateString = (value: string): boolean => {
  return value && value.replace(/[^\w\s@!.:;äÄöÖåÅ/%&-]/gi, '') === value ? true : false
}

/**
 * ARRAY VALIDATIONS
 */

export const validateArray = (value: any, items = 0): boolean => {
  return value && Array.isArray(value) && value.length > items ? true : false
}

/**
 * CACHE
 */

export const cacheValues = writable<{[key: string]: any}>({})
export const handleCache = (key: string, value: any = undefined) => {
  if (!key) {
    return null
  }
  const newKey = slugify(key)
  const cache = get(cacheValues)
  if (value) {
    const newValues = cache ? {...cache, [newKey]: value} : {[newKey]: value}
    cacheValues.set({...newValues})
  } else if (cache?.[newKey]) {
    return cache[newKey]
  }
  return null
}

/**
 * PREVENT DEFAULT
 * Previously, Svelte handled form submission without reloading
 * the page. However, the preventDefault function is no longer
 * supported by Svelte v5, so this function handles form
 * submission without loading the page.
 */

export const preventDefault = (fn: Function) => {
  return function (this: any, event: any) {
    event.preventDefault()
    fn.call(this, event)
  }
}
