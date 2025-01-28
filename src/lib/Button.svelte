<script lang="ts">
  import type {Snippet} from 'svelte'

  interface Props {
    onclick?: () => void
    children: Snippet
    ariaControls?: string
    ariaExpanded?: boolean
    ariaPopup?: 'dialog' | 'menu' | 'listbox' | undefined
    ariaLabel?: string
    color?: 'dark' | 'light'
    colorBg?: 'primary' | 'success' | 'danger' | 'transparent'
    control?: boolean
    disabled?: boolean
    extraClass?: string
    hover?: 'primary' | 'success'
    href?: string
    type?: 'submit'
    uppercase?: boolean
  }

  let {
    onclick = undefined,
    children,
    ariaControls,
    ariaExpanded,
    ariaPopup,
    ariaLabel,
    color = 'light',
    colorBg = 'primary',
    control,
    disabled,
    extraClass,
    hover,
    href,
    type,
    uppercase = true
  }: Props = $props()

  let classes = $state('btn ' + color)

  if (control) {
    classes += ' control'
  } else {
    classes += ' ' + colorBg
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
</script>

{#if href}
  <a {href} class={classes}>
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
  .btn:not(:disabled) {
    cursor: pointer;
    height: 48px;
  }
  .btn:not(.control) {
    align-items: center;
    border-radius: 0.375rem;
    border: 1px solid var(--color-border);
    cursor: pointer;
    display: inline-flex;
    font-size: 1rem;
    font-weight: 700;
    justify-content: center;
    line-height: 1;
    padding: 0 2rem;
  }
  .control {
    background-color: transparent;
    border: 0;
    padding: 0;
    width: 48px;
  }
  .dark {
    color: #000;
  }
  .light,
  .hover-primary:hover,
  .hover-success:hover {
    color: #fff;
  }
  .control:hover {
    fill: var(--color-primary);
  }
  .hover-primary:hover,
  .primary {
    background-color: var(--color-primary);
  }
  .hover-success:hover,
  .success {
    background-color: green;
  }
  .primary:not(.hover-success):not(.hover-primary):hover {
    background-color: var(--color-secondary);
  }
  .success:hover {
    background-color: var(--color-primary);
  }
  .danger {
    background-color: darkred;
  }
  .danger:hover {
    background-color: #000;
  }
  .transparent {
    background-color: transparent;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .btn:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
</style>
