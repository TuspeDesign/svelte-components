<script lang="ts">
  import {loading} from '$lib'
  import type {ButtonView} from '$lib/types'

  let {
    ariaControls,
    ariaExpanded,
    ariaLabel,
    ariaPopup,
    borderColor = 'content',
    borderSize = 0,
    children,
    color = 'white',
    colorBg = 'primary',
    control,
    disabled,
    extraClass,
    fill,
    fontWeight = 'bold',
    fullWidth,
    hover = 'secondary',
    hoverText = 'white',
    href,
    id,
    noCenter = false,
    noHeight,
    noPadding,
    noSpinner,
    onclick = undefined,
    preload,
    rel = 'noopener noreferrer',
    role,
    rounded = 'sm',
    spinnerColor = 'white',
    target,
    title,
    type,
    uppercase = true,
    value
  }: ButtonView = $props()

  let classes = $state(`btn text-${color}`)

  if (control) {
    classes += ' control'
  } else {
    classes += ' bg-' + colorBg
  }
  if (borderSize) {
    classes += ' border-solid border-' + borderSize + ' border-' + borderColor
  }
  if (extraClass) {
    classes += ' ' + extraClass
  }
  if (fill) {
    classes += ' fill'
  }
  if (fontWeight) {
    classes += ' font-' + fontWeight
  }
  if (fullWidth) {
    classes += ' w-full'
  }
  if (hover) {
    classes += ' hover-' + hover
  }
  if (hoverText) {
    classes += ' hover-text-' + hoverText
  }
  if (!noCenter) {
    classes += ' center'
  }
  if (noHeight) {
    classes += ' no-height'
  }
  if (noPadding) {
    classes += ' no-padding'
  }
  if (rounded) {
    classes += ' radius-' + rounded
  }
  if (uppercase) {
    classes += ' uppercase'
  }
</script>

{#if href}
  <a class={classes} {href} {id} {target} data-sveltekit-preload-data={preload} {rel} {title}>
    {@render children?.()}
  </a>
{:else if control}
  <button
    {id}
    {onclick}
    {role}
    {title}
    {value}
    aria-controls={ariaControls}
    aria-expanded={ariaExpanded}
    aria-haspopup={ariaPopup}
    aria-label={ariaLabel}
    class={classes}
    {disabled}
  >
    {@render children?.()}
  </button>
{:else}
  <button {onclick} class={classes} {disabled} {title} {type}>
    {#if $loading && !noSpinner}
      <span class={`loader ${spinnerColor}`}></span>
    {:else}
      {@render children?.()}
    {/if}
  </button>
{/if}

<style scoped>
  .loader {
    animation: rotation 1s linear infinite;
    border-radius: 50%;
    border-right: 6px solid transparent;
    border-top-style: solid;
    border-top-width: 6px;
    box-sizing: border-box;
    display: inline-block;
    height: 20px;
    width: 20px;
  }
  .loader.black {
    border-top-color: #000;
  }
  .loader.white {
    border-top-color: #fff;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  a {
    text-decoration: none;
  }
  .bg-primary:not(:hover),
  .hover-primary:hover {
    background-color: var(--color-primary);
  }
  .bg-secondary:not(:hover),
  .hover-secondary:hover {
    background-color: var(--color-secondary);
  }
  .bg-success:not(:hover),
  .hover-success:hover {
    background-color: green;
  }
  .bg-danger:not(:hover),
  .hover-danger:hover {
    background-color: darkred;
  }
  .bg-black:not(:hover),
  .hover-black:hover {
    background-color: #000;
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
  }
  .btn.center {
    justify-content: center;
  }
  .btn:not(.border-solid) {
    border: 0;
  }
  .btn:not(.fill):not(.no-height) {
    height: 48px;
  }
  .btn:not(:disabled) {
    cursor: pointer;
  }
  .btn:not(.control) {
    font-size: 1rem;
  }
  .btn:not(.control):not(.flll):not(.no-padding):not(.radius-full) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .btn:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  .control {
    border: 0;
  }
  .control,
  .hover-transparent:hover {
    background-color: transparent;
  }
  .control,
  .fill,
  .radius-full {
    padding: 0;
  }
  .control:not(.fill) {
    width: 48px;
  }
  .fill {
    height: 100%;
    width: 100%;
  }
  .font-400 {
    font-weight: 400;
  }
  .font-700 {
    font-weight: 700;
  }
  .hover-text-black:hover,
  .text-black {
    color: #000;
  }
  .hover-text-primary:hover,
  .text-primary {
    color: var(--color-primary);
  }
  .hover-text-content:hover,
  .text-content {
    color: var(--color-content);
  }
  .hover-black:hover,
  .hover-primary:hover,
  .hover-success:hover,
  .hover-text-white:hover,
  .text-white {
    color: #fff;
  }
  .hover-text-secondary:hover,
  .text-secondary {
    color: var(--color-secondary);
  }
  .radius-full {
    border-radius: 50%;
    overflow: hidden;
  }
  .radius-lg {
    border-radius: 25px;
  }
  .radius-sm {
    border-radius: 0.375rem;
  }
  .w-full {
    width: 100%;
  }
</style>
