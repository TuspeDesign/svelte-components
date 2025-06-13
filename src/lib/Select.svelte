<script lang="ts">
  import {loading} from '$lib'
  import type {SelectView} from '$lib/types'
  let {
    colorBg = 'bg-transparent',
    disabled,
    id,
    innerClass,
    label,
    onchange,
    outerClass,
    placeholder,
    required = false,
    value = $bindable(),
    values
  }: SelectView = $props()
  let classes = $state(colorBg)
  if (innerClass) {
    classes += ' ' + innerClass
  }
</script>

<label class={outerClass}>
  {label}
  {#if required}<sup>*</sup>{/if}
  <select bind:value {onchange} class={classes} disabled={disabled || $loading ? true : false} {id} {placeholder} {required}>
    {#each values as item}
      <option value={item.value}>{item.name}</option>
    {/each}
  </select>
</label>

<style scoped>
  select {
    background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)
      no-repeat 98% 50%;
    border-radius: 0.375rem;
    border: 1px solid var(--color-border);
    color: var(--color-content);
    font-size: 1rem;
    height: 48px;
    margin-top: 0.25rem;
    padding: 0 0.5rem;
    width: 100%;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }

  select.bg-transparent {
    background-color: transparent;
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
    font-size: var(--text-sm);
  }

  sup {
    color: darkred;
  }
</style>
