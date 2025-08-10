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
<Button ariaLabel="Tärkeää tietoa" bind:disabled hover="black">Status check</Button>
<Button ariaLabel="Active / disable" onclick={changeStatus} hover="black">Change disabled status</Button>
<Checkbox bind:checked={checkStatus} onchange={() => (menuOpen = !menuOpen)}>Check Option 1</Checkbox>

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
