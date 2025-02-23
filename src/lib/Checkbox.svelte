<script lang="ts">
  import {loading} from '$lib'
  import type {Snippet} from 'svelte'

  interface Props {
    children: Snippet
    onchange?: () => void
    checked?: boolean
    disabled?: boolean
    id?: string
    outerClass?: string
    value?: string
  }

  let {children, onchange, checked = $bindable(false), disabled, id, outerClass, value}: Props = $props()
</script>

<label class={outerClass}>
  <input bind:checked disabled={disabled || $loading} {id} {onchange} type="checkbox" {value} />
  <span>{@render children?.()}</span>
</label>

<style scoped>
  input {
    accent-color: var(--color-primary);
    border: 1px solid var(--color-border);
    height: 20px;
    outline: none;
    vertical-align: middle;
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
    align-items: center;
    cursor: pointer;
    display: grid;
    font-size: 1rem;
    gap: 1rem;
    grid-template-columns: 20px 1fr;
    line-height: 1.25;
  }
</style>
