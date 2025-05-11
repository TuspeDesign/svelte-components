<script lang="ts">
  import {loading} from '$lib'
  import type {Snippet} from 'svelte'

  interface Props {
    children: Snippet
    onchange?: () => void
    checked?: boolean
    disabled?: boolean
    group?: boolean
    id?: string
    outerClass?: string
    required?: boolean
    value?: number | string
  }

  let {children, onchange, checked = $bindable(false), disabled, group = $bindable(), id, outerClass, required, value, ...props}: Props = $props()

  let classes = $state('input-checkbox')
  if (outerClass) {
    classes += ` ${outerClass}`
  }
</script>

<label class={classes}>
  <input bind:checked disabled={disabled || $loading} {id} {onchange} {required} type="checkbox" {value} {...props} />
  <span>
    {@render children?.()}
    {#if required}<sup>*</sup>{/if}
  </span>
</label>

<style scoped>
  input {
    accent-color: var(--color-primary);
    border: 1px solid var(--color-border);
    height: 20px;
    margin-top: 3px;
    outline: none;
    width: 20px;
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  input,
  label {
    cursor: pointer;
  }

  label {
    cursor: pointer;
    display: grid;
    font-size: 1rem;
    gap: 1rem;
    grid-template-columns: 20px 1fr;
  }

  sup {
    color: darkred;
  }
</style>
