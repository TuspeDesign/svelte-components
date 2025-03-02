<script lang="ts">
  import type {Snippet} from 'svelte'
  import ButtonClose from '$lib/ButtonClose.svelte'
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
  let {
    children,
    buttonAriaLabel,
    colorButton = 'white',
    headerClass = 'bg-primary text-white',
    innerClass,
    open = $bindable(),
    outerClass = 'bg-white text-content',
    title,
    titleClass = 'text-white'
  }: Props = $props()
  const handleClose = () => {
    open = false
  }
</script>

<div id="modal" class:hidden={!open}>
  <div id="modal-content" class={outerClass} aria-live="polite">
    <header class={headerClass}>
      {#if title}
        <h2 class={titleClass}>{title}</h2>
      {/if}
      <ButtonClose ariaLabel={buttonAriaLabel} onclick={handleClose} color={colorButton} hover="transparent" />
    </header>
    <div id="modal-body" class={innerClass}>
      {@render children?.()}
    </div>
  </div>
</div>

<style scoped>
  #modal {
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    height: 100vh;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 200;
  }
  #modal:not(.hidden) {
    display: flex;
  }
  #modal.hidden {
    display: none;
    visibility: hidden;
  }
  #modal-content {
    border-radius: 1rem;
    border: 2px solid var(--color-primary);
    color: var(--color-content);
    margin-left: auto;
    margin-right: auto;
    max-width: 95vw;
    overflow: hidden;
    overscroll-behavior: contain;
    position: relative;
  }
  #modal-body {
    max-height: 70vh;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 1rem;
  }
  header {
    border-bottom: 1px solid var(--color-border);
    padding: 1rem;
  }
  h2 {
    font-size: clamp(1.2rem, 1.6rem, 6vw);
    line-height: 1.25;
    margin: 0;
    max-width: 90%;
  }
  .bg-primary {
    background-color: var(--color-primary);
  }
  .bg-white {
    background-color: #fff;
  }
  .text-content {
    color: var(--color-content);
  }
  .text-white {
    color: #fff;
  }
</style>
