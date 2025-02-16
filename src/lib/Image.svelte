<script lang="ts">
  import type {ImageData} from '$lib'

  interface Props {
    aspect?: '3:4' | '4:3' | 'square' | 'video'
    objectFit?: 'contain' | 'cover'
    border?: boolean
    center?: boolean
    extraClasses?: string
    fullWidth?: boolean
    image?: ImageData
    loading?: 'eager' | 'lazy'
  }

  let {aspect, border, center = false, extraClasses, fullWidth, image, loading = 'lazy', objectFit}: Props = $props()
  let classes = $state('')
  if (aspect) {
    classes += `aspect-${aspect}`
  }
  if (objectFit) {
    classes += ' ' + objectFit
  }
  if (border) {
    classes += ' border-full'
  }
  if (center) {
    classes += ' mx-auto'
  }
  if (fullWidth) {
    classes += ' full'
  }
  if (extraClasses) {
    classes += ' ' + extraClasses
  }
</script>

{#if image?.url}
  <img alt={image.alt} class={classes} decoding="async" height={image.height} {loading} src={image.url} width={image.width} />
{/if}

<style scoped>
  img {
    display: inline-block;
  }
  img:not(.cover) {
    height: auto;
    max-width: 100%;
  }
  .aspect-4\:3 {
    aspect-ratio: 4 / 3;
  }
  .aspect-3\:4 {
    aspect-ratio: 3 / 4;
  }
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .aspect-video {
    aspect-ratio: 16 / 9;
  }
  .border-full {
    border: 1px solid var(--color-content);
  }
  .contain {
    object-fit: contain;
    max-height: 100%;
  }
  .cover {
    object-fit: cover;
    object-position: top;
  }
  .cover,
  .full:not(.contain) {
    width: 100%;
  }
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
</style>
