<script lang="ts">
  import type {Snippet} from 'svelte'
  import ButtonClose from '$lib/ButtonClose.svelte'
  interface Props {
    children: Snippet
    open?: boolean
    title?: string
  }
  let {children, open = $bindable(), title}: Props = $props()
  const handleClose = () => {
    open = false
  }
</script>

<div id="modal" class:hidden={!open}>
  <div id="modal-content">
    <header>
      {#if title}
        <h2>{title}</h2>
      {/if}
      <ButtonClose color="black" onclick={handleClose} />
    </header>
    <div id="modal-body">
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
    background-color: #fff;
    border-radius: 1rem;
    border: 2px solid var(--color-primary);
    box-shadow: var(--shadow-md);
    margin-left: auto;
    margin-right: auto;
    max-height: 85vh;
    max-width: 800px;
    overflow: hidden;
    overscroll-behavior: contain;
    position: relative;
    width: 100%;
  }
  #modal-body {
    max-height: 45vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 1rem;
  }
  header {
    border-bottom: 1px solid var(--color-border);
    padding: 1rem;
  }
  h2 {
    font-size: 1.6rem;
    line-height: 1;
    margin: 0;
  }
</style>
