<script lang="ts">
  import Button from '$lib/Button.svelte'
  interface Props {
    onclick?: () => any
    ariaControls: string
    ariaLabel: string
    color?: 'black' | 'white'
    extraClass?: string
    hidden?: boolean
    open: boolean
  }
  let {ariaControls, ariaLabel, color = 'white', extraClass, hidden = false, open = $bindable()}: Props = $props()
  const handleOpen = () => {
    open = !open
  }
</script>

<div id="menu-button" class={extraClass} class:hidden>
  <Button onclick={handleOpen} {ariaControls} ariaPopup="menu" ariaExpanded={open} {ariaLabel} {color} control fill>
    <svg
      fill={color}
      clip-rule="evenodd"
      fill-rule="evenodd"
      stroke-linejoin="round"
      stroke-miterlimit="2"
      height="32"
      width="32"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{open ? 'Close' : 'Open'} menu</title>
      {#if !open}
        <path
          d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
          fill-rule="nonzero"
        />
      {:else}
        <path
          d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
        />
      {/if}
    </svg>
  </Button>
</div>

<style scoped>
  #menu-button {
    height: 48px;
    width: 48px;
  }
</style>
