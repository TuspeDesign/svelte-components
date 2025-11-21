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

export const formatPrice = (value: number | string | undefined, comma = false, currency = '€'): string => {
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

export const fixNumber = (value: number | string | undefined): number => {
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

export const calculateTax = (value: number, vatPercentage = defaultVatPercentage): number =>
  fixNumber((vatPercentage * value) / (100 + vatPercentage))

export const calculatePreTax = (value: number, vatPercentage = defaultVatPercentage): number => fixNumber(value - calculateTax(value, vatPercentage))

export const calculateWithTax = (value: number, vatPercentage = defaultVatPercentage): number => fixNumber(value * (1 + vatPercentage / 100))

/**
 * STRING VALIDATIONS
 */

export const slugify = (value: string | undefined): string => {
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

export const validateSlug = (value: string | undefined): boolean => {
  return value && slugify(value) === value ? true : false
}

export const validateEmail = (email: string): boolean => {
  var re = /\S+@\S+\.\S+/
  return re.test(email)
}

export const validateString = (value: string): boolean => {
  return value && value.replace(/[^\w\s@!.:;,?+äÄöÖåÅ/%&()|-]/gi, '') === value ? true : false
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

interface Stored {
  date: number
  value: any
}

export const cacheValues = writable<{[key: string]: Stored}>({})

export const handleCache = (key: string, value: any = undefined, ttl: number = 60) => {
  if (!key) {
    return null
  }

  const cache = get(cacheValues),
    newKey = slugify(key),
    now = Date.now(),
    ttlMs = ttl * 1000

  if (value !== undefined) {
    const newValues = {
      ...cache,
      [newKey]: {date: now, value}
    }
    cacheValues.set(newValues)
  } else if (cache?.[newKey]) {
    const cachedItem = cache[newKey]
    if (now - cachedItem.date < ttlMs) {
      return cachedItem.value
    } else {
      // Remove expired cache entry
      const {[newKey]: _, ...rest} = cache
      cacheValues.set(rest)
    }
  }
  return null
}

/**
 * PREVENT DEFAULT
 */

export const preventDefault = (fn: Function) => {
  return function (this: any, event: any) {
    event.preventDefault()
    fn.call(this, event)
  }
}

/**
 * SUMMARY
 */

export const summary = (text: any, num: number = 160): string => {
  if (!text || typeof text !== 'string') {
    return ''
  }

  // Remove HTML tags
  let sum = text.replace(/<[^>]*>/g, '').trim()

  // If the summary is within the limit, return it directly.
  if (sum.length <= num) {
    return sum
  }

  // Truncate the summary to the specified number of characters.
  let truncatedSummary = sum.substring(0, num)

  // Define end characters to find the last occurrence for truncation.
  const endChars = ['.', '!', '?']

  // Variable to track if an end character is found.
  let foundEndChar = false

  // Find the last occurrence of any end character within the truncated summary.
  for (const char of endChars) {
    const lastIndex = truncatedSummary.lastIndexOf(char)
    if (lastIndex !== -1) {
      truncatedSummary = truncatedSummary.substring(0, lastIndex + 1)
      foundEndChar = true
      break // Exit loop after finding the first end character.
    }
  }

  // Return the summary. Append ellipsis only if no end character was found.
  return truncatedSummary.trim() + (foundEndChar ? '' : '...')
}
