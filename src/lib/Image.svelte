<script lang="ts">
  import type {ImageData} from '$lib'

  interface Props {
    ariaHidden?: boolean
    aspect?: '3:4' | '4:3' | 'square' | 'video'
    ball?: boolean
    border?: boolean
    center?: boolean
    display?: 'block' | 'inline-block'
    extraClasses?: string
    fullWidth?: boolean
    image: ImageData
    loading?: 'eager' | 'lazy'
    objectFit?: 'contain' | 'cover'
  }

  let {ariaHidden, aspect, ball = false, border, center = false, display = 'inline-block' extraClasses, fullWidth, image, loading = 'lazy', objectFit}: Props = $props()

  let classes = $state(display)
  if (aspect) {
    classes += ` aspect-${aspect}`
  }
  if (objectFit) {
    classes += ' ' + objectFit
  }
  if (ball) {
    classes += ' radius-full'
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

{#if image?.src}
  <img
    {loading}
    alt={image.alt}
    aria-hidden={ariaHidden}
    class={classes}
    decoding="async"
    height={image.height}
    src={image.src}
    width={image.width}
  />
{/if}

<style scoped>
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
  .block {
    display: block;
  }
  .border-full {
    border: 1px solid var(--color-content);
  }
  .contain {
    object-fit: contain;
    max-height: 100%;
  }
  .cover {
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
  .cover,
  .full:not(.contain) {
    width: 100%;
  }
  .inline-block {
    display: inline-block;
  }
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .radius-full {
    border-radius: 50%;
    overflow: hidden;
  }
</style>
