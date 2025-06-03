<script lang="ts">
  import {Button, ButtonMenu, Checkbox, Select, loading, Modal} from '$lib'
  let menuOpen = $state(false),
    checkStatus = $state(false),
    disabled = $state(false),
    selectValue = $state(1)
  const changeStatus = () => {
    disabled = !disabled
    $loading = disabled ? 1 : 0
  }
</script>

<Select
  bind:value={selectValue}
  label="Hakusana"
  values={[
    {name: 'Cat', value: 1},
    {name: 'Dog', value: 2}
  ]}
/>
<Button ariaLabel="Tärkeää tietoa" bind:disabled>Status check</Button>
<Button ariaLabel="Active / disable" onclick={changeStatus}>Change disabled status</Button>
<Button control color="light" ariaLabel="Morjens">
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
    <path
      d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.094l-4.157-4.104 4.1-4.141-1.849-1.849-4.105 4.159-4.156-4.102-1.833 1.834 4.161 4.12-4.104 4.157 1.834 1.832 4.118-4.159 4.143 4.102 1.848-1.849z"
    />
  </svg>
</Button>
<Checkbox bind:checked={checkStatus}>Check Option 1</Checkbox>

<ButtonMenu bind:open={menuOpen} ariaControls="menu" title="Open menu" />

<Modal open={menuOpen} title="Modal title">
  <p>
    Modal content Modal content Modal content Modal content Modal content Modal content Modal content Modal content Modal content Modal content Modal
    content Modal content Modal content Modal content Modal content Modal content Modal content Modal content Modal content Modal content Modal
    content Modal content Modal content Modal content Modal content Modal content Modal content Modal content Modal content Modal content Modal
    content Modal content Modal content Modal content Modal content Modal content Modal content Modal content Modal content Modal content
  </p>
</Modal>

<style>
  :root {
    --color-primary: darkblue;
    --color-border: #999;
  }
</style>
