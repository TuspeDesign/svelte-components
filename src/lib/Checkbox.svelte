<script lang="ts">
  import type {Snippet} from 'svelte'

  interface Props {
    onchange?: () => void
    children: Snippet
    color?: 'primary' | 'secondary'
    checked: boolean
    disabled?: boolean
    outerClass?: string
  }

  let {onchange, children, color = 'primary', checked = $bindable(false), disabled, outerClass}: Props = $props(),
    labelClass = $state(color)

  if (outerClass) {
    labelClass += ' ' + outerClass
  }
</script>

<label class={labelClass}>
  <input bind:checked {disabled} {onchange} type="checkbox" />
  <span>{@render children?.()}</span>
</label>

<style scoped>
  input {
    accent-color: var(--color-primary);
    appearance: none;
    border-radius: 50%;
    border: 1px solid var(--color-border);
    color: var(--color-content);
    height: 22px;
    margin-right: 10px;
    outline: none;
    vertical-align: middle;
    width: 22px;
  }

  input:checked {
    appearance: auto;
    clip-path: circle(50% at 50% 50%);
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
    display: flex;
    align-items: center;
    cursor: pointer;
    line-height: 1.25;
    font-size: 1rem;
  }

  span {
    margin-top: 1px;
  }
</style>
