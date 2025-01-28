<script lang="ts">
  import type {Snippet} from 'svelte'
  import Button from '$lib/Button.svelte'
  interface Props {
    children: Snippet
    open?: boolean
    title?: string
  }
  let {children, open = $bindable(), title}: Props = $props()
</script>

<div id="modal" class:hidden={!open}>
  <div id="modal-content">
    <header>
      {#if title}
        <h2>{title}</h2>
      {/if}
      <div id="close-button">
        <Button onclick={() => (open = false)} control>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
            <title>Sulje ikkuna</title>
            <path
              d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5 15.538l-3.592-3.548 3.546-3.587-1.416-1.403-3.545 3.589-3.588-3.543-1.405 1.405 3.593 3.552-3.547 3.592 1.405 1.405 3.555-3.596 3.591 3.55 1.403-1.416z"
            />
          </svg>
        </Button>
      </div>
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
    max-width: 600px;
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
  #close-button {
    height: 48px;
    position: absolute;
    right: 0.4rem;
    top: 0.4rem;
    width: 48px;
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
