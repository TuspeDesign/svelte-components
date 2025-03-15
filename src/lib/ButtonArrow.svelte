<script lang="ts">
  import Button from '$lib/Button.svelte'
  interface Props {
    ariaLabel: string
    color?: string
    direction: 'left' | 'right'
    id?: string
    onclick?: () => any
  }
  let {onclick, ariaLabel, color = 'black', direction, id}: Props = $props()
</script>

<Button {ariaLabel} control {color} {id} {onclick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
    <title>Arrow {direction}</title>
    {#if direction === 'left'}
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    {:else}
      <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
    {/if}
  </svg>
</Button>
