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
    border-radius: 0.375rem;
    border: 1px solid var(--color-border);
    color: var(--color-content);
    font-size: 1rem;
    height: 48px;
    margin-top: 0.25rem;
    padding: 0 0.5rem;
    width: 100%;
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
