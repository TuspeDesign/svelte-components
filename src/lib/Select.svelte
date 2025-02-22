<script lang="ts">
  import {loading, type SelectItem} from '$lib'

  interface Props {
    onchange?: () => void
    disabled?: boolean
    outerClass?: string
    id?: string
    label: string
    placeholder?: string
    required?: boolean
    value: string | number
    values: SelectItem[]
  }

  let {onchange, disabled, outerClass, id, label, placeholder, required = false, value = $bindable(), values}: Props = $props()
</script>

<label class={outerClass}>
  {label}
  {#if required}<sup>*</sup>{/if}
  <select bind:value {onchange} disabled={disabled || $loading} {id} {placeholder} {required}>
    {#each values as item}
      <option value={item.value}>{item.name}</option>
    {/each}
  </select>
</label>

<style scoped>
  select {
    background-color: transparent;
    border-radius: 0.375rem;
    border: 1px solid var(--color-border);
    color: var(--color-content);
    font-size: 1rem;
    height: 48px;
    margin-top: 0.25rem;
    padding: 0 0.5rem;
    width: 100%;
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
