<script lang="ts">
  import type {Snippet} from 'svelte'

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
    hover?: 'primary' | 'success' | 'black' | 'transparent'
    hoverText?: 'primary' | 'black' | 'white'
    href?: string | undefined
    id?: string
    rounded?: 'full' | 'ball'
    target?: '_blank' | '_top' | undefined
    type?: 'submit'
    uppercase?: boolean
  }

  let {
    onclick = undefined,
    children,
    ariaControls,
    ariaExpanded,
    ariaLabel,
    ariaPopup,
    borderColor = 'content',
    borderSize = 0,
    color = 'white',
    colorBg = 'primary',
    control,
    disabled,
    extraClass,
    fill,
    hover,
    hoverText,
    href,
    id,
    rounded,
    target,
    type,
    uppercase = true
  }: Props = $props()

  let classes = $state('btn text-' + color)

  if (control) {
    classes += ' control'
  } else {
    classes += ' ' + colorBg
  }
  if (borderSize) {
    classes += ' border-solid border-' + borderSize + ' border-' + borderColor
  }
  if (fill) {
    classes += ' fill'
  }
  if (uppercase) {
    classes += ' uppercase'
  }
  if (extraClass) {
    classes += ' ' + extraClass
  }
  if (hover) {
    classes += ' hover-' + hover
  }
  if (hoverText) {
    classes += ' hover-text-' + hoverText
  }
  if (rounded) {
    classes += ' rounded-' + rounded
  }
</script>

{#if href}
  <a {href} class={classes} {target} rel="nofollow noopener">
    {@render children?.()}
  </a>
{:else if control}
  <button
    {onclick}
    aria-controls={ariaControls}
    aria-expanded={ariaExpanded}
    aria-haspopup={ariaPopup}
    aria-label={ariaLabel}
    class={classes}
    {disabled}
    {id}
  >
    {@render children?.()}
  </button>
{:else}
  <button {onclick} class={classes} {disabled} {type}>
    {@render children?.()}
  </button>
{/if}

<style scoped>
  a {
    text-decoration: none;
  }
  .bg-primary:not(:hover) {
    background-color: var(--color-primary);
  }
  .bg-success:not(:hover) {
    background-color: green;
  }
  .bg-danger:not(:hover) {
    background-color: darkred;
  }
  .border-solid {
    border-style: solid;
  }
  .border-1 {
    border-width: 1px;
  }
  .border-2 {
    border-width: 2px;
  }
  .border-content {
    border-color: var(--color-content);
  }
  .border-default {
    border-color: var(--color-border);
  }
  .border-primary {
    border-color: var(--color-primary);
  }
  .btn {
    align-items: center;
    display: inline-flex;
    justify-content: center;
  }
  .btn:not(.border-solid) {
    border: 0;
  }
  .btn:not(.fill) {
    height: 48px;
  }
  .btn:not(:disabled) {
    cursor: pointer;
  }
  .btn:not(.control) {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1;
    padding: 0 2rem;
  }
  .btn:not(.control):not(.hover-primary):not(.hover-black):not(.hover-success):hover {
    background-color: var(--color-secondary);
  }
  .btn:not(.rounded-full) {
    border-radius: 0.375rem;
  }
  .btn:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  .control {
    background-color: transparent;
    border: 0;
    padding: 0;
  }
  .control:not(.fill) {
    width: 48px;
  }
  .fill {
    height: 100%;
    width: 100%;
  }
  .hover-black:hover {
    background-color: #000;
  }
  .hover-primary:hover {
    background-color: var(--color-primary);
  }
  .hover-success:hover {
    background-color: green;
  }
  .hover-text-black:hover {
    color: #000;
  }
  .hover-text-primary:hover {
    color: var(--color-primary);
  }
  .hover-black:not(.text-white):hover,
  .hover-primary:not(.text-white):hover,
  .hover-success:not(.text-white):hover,
  .hover-text-white:hover {
    color: #fff;
  }
</style>
