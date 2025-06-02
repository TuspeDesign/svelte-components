<script lang="ts">
  import {loading} from '$lib'
  import type {InputView} from '$lib/types'

  let {
    bgColor = 'transparent',
    borderColor = 'default',
    disabled,
    id,
    inputClass,
    label,
    max,
    min,
    onchange,
    outerClass,
    placeholder,
    required = false,
    step,
    type = 'text',
    value = $bindable(),
    ...props
  }: InputView = $props()

  let classesIn = $state(''),
    classesOut = $state(`input-${type}`)
  if (inputClass) {
    classesIn = inputClass
  }
  if (bgColor && bgColor !== 'none') {
    classesIn += ` bg-${bgColor}`
  }
  if (borderColor && borderColor !== 'none') {
    classesIn += ` border-color-${borderColor}`
  }
  if (outerClass) {
    classesOut += ` ${outerClass}`
  }
</script>

<label class={classesOut}>
  {label}{#if required}<sup>*</sup>{/if}

  {#if type === 'textarea'}
    <textarea
      bind:value
      class={classesIn}
      disabled={disabled || $loading ? true : false}
      {id}
      maxlength={max ? Number(max) : undefined}
      {required}
      {placeholder}
      rows={4}
      {...props}
    ></textarea>
  {:else if ['date', 'number'].includes(type)}
    <input
      bind:value
      class={classesIn}
      disabled={disabled || $loading ? true : false}
      lang="fi-FI"
      {max}
      {min}
      {onchange}
      {required}
      {step}
      {type}
      {placeholder}
      {...props}
    />
  {:else}
    <input
      bind:value
      {id}
      {placeholder}
      {required}
      {type}
      class={classesIn}
      disabled={disabled || $loading ? true : false}
      maxlength={max ? Number(max) : undefined}
      minlength={min ? Number(min) : undefined}
      onkeyup={onchange}
      {...props}
    />
    {#if type === 'search'}
      <svg
        clip-rule="evenodd"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        width="20"
      >
        <path
          d="m15.97 17.031c-1.479 1.238-3.384 1.985-5.461 1.985-4.697 0-8.509-3.812-8.509-8.508s3.812-8.508 8.509-8.508c4.695 0 8.508 3.812 8.508 8.508 0 2.078-.747 3.984-1.985 5.461l4.749 4.75c.146.146.219.338.219.531 0 .587-.537.75-.75.75-.192 0-.384-.073-.531-.22zm-5.461-13.53c-3.868 0-7.007 3.14-7.007 7.007s3.139 7.007 7.007 7.007c3.866 0 7.007-3.14 7.007-7.007s-3.141-7.007-7.007-7.007z"
          fill-rule="nonzero"
        />
      </svg>
    {/if}
  {/if}
</label>

<style scoped>
  input {
    height: 48px;
  }

  input,
  textarea {
    border-radius: 0.375rem;
    border-style: solid;
    border-width: 1px;
    color: var(--color-content);
    display: block;
    font-size: 1rem;
    margin-top: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    -webkit-appearance: none;
  }

  input,
  label,
  textarea {
    width: 100%;
  }

  input:disabled,
  textarea:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  label {
    display: inline-block;
    position: relative;
  }

  label.filter {
    font-size: var(--text-sm);
  }

  label svg {
    bottom: 15px;
    position: absolute;
    right: 8px;
  }

  sup {
    color: darkred;
  }

  textarea {
    height: 150px;
    padding-bottom: 0.25rem;
    padding-top: 0.25rem;
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-white {
    background-color: white;
  }

  .border-color-default {
    border-color: var(--color-border);
  }

  .border-color-primary {
    border-color: var(--color-primary);
  }

  .border-color-content {
    border-color: var(--color-content);
  }
</style>
