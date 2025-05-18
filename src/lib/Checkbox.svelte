<script lang="ts">
  import {loading} from '$lib'
  import type {CheckboxView} from '$lib/types'
  let {
    children,
    onchange,
    checked = $bindable(false),
    disabled = $bindable(false),
    group = $bindable(),
    id,
    outerClass,
    required,
    value,
    ...props
  }: CheckboxView = $props()
  let classes = $state('input-checkbox')
  if (outerClass) {
    classes += ` ${outerClass}`
  }
</script>

<label class={classes}>
  <input bind:checked disabled={disabled || $loading ? true : false} {id} {onchange} {required} type="checkbox" {value} {...props} />
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
