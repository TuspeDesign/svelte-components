<script lang="ts">
  import {cx, isDisabled, loading} from '$lib'
  import type {CheckboxView} from '$lib/types'
  let {children, onchange, checked = $bindable(false), disabled = $bindable(false), group = $bindable(), id, outerClass, required, value, ...props}: CheckboxView = $props()
  let classes = $derived(cx('input-checkbox', outerClass))
</script>

<label class={classes}>
  <input bind:checked disabled={isDisabled(disabled, $loading)} {id} {onchange} {required} type="checkbox" {value} {...props} />
  <span>
    {@render children?.()}
    {#if required}<sup>*</sup>{/if}
  </span>
</label>

<style scoped>
  input {
    accent-color: var(--color-primary);
    border: 1px solid var(--color-border, #999);
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
    color: var(--color-danger, darkred);
  }
</style>
