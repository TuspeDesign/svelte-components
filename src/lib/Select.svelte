<script lang="ts">
  import type {SelectItem} from '$lib'

  interface Props {
    onchange?: () => void
    disabled?: boolean
    outerClass?: string
    borderColor?: string
    label: string
    placeholder?: string
    required?: boolean
    value: string | number
    values: SelectItem[]
    width?: string
  }

  let {
      onchange,
      disabled,
      outerClass,
      borderColor = 'border-primary',
      label,
      placeholder,
      required = false,
      value = $bindable(),
      values
    }: Props = $props(),
    inputClass = $state(borderColor),
    labelClass = $state('')

  if (outerClass) {
    labelClass += outerClass
  }
</script>

<label class={labelClass}>
  {label}
  {#if required}<sup>*</sup>{/if}
  <select bind:value {onchange} class={inputClass} {disabled} {placeholder} {required}>
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
