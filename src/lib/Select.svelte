<script lang="ts">
  import {cx, isDisabled, loading} from '$lib'
  import type {SelectView} from '$lib/types'
  let {disabled, id, innerClass, label, onchange, outerClass, placeholder, required = false, value = $bindable(), values}: SelectView = $props()
  let classes = $derived(cx(innerClass))
</script>

<label class={outerClass}>
  {label}
  {#if required}<sup>*</sup>{/if}
  <select bind:value {onchange} class={classes} disabled={isDisabled(disabled, $loading)} {id} {placeholder} {required}>
    {#each values as item}
      <option value={item.value}>{item.name}</option>
    {/each}
  </select>
</label>

<style scoped>
  select {
    appearance: none;
    background-attachment: scroll;
    background-color: var(--color-input-bg, #fff);
    background-image: url('data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+');
    background-position-x: 98%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    background-size: auto;
    border-radius: 0.375rem;
    border: 1px solid var(--color-border, #999);
    color: var(--color-content, #222);
    font-size: 1rem;
    height: 48px;
    margin-top: 0.25rem;
    padding: 0 0.5rem;
    width: 100%;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  select:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  label,
  select {
    display: block;
  }

  label.filter {
    position: relative;
    font-size: var(--text-sm, 0.95rem);
  }

  sup {
    color: var(--color-danger, darkred);
  }
</style>
