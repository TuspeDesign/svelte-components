<script lang="ts">
  import {cx} from '$lib'
  import type {ImageView} from '$lib/types'
  let {ariaHidden, aspect, ball = false, border, center = false, display = 'inline-block', extraClasses, fullWidth, image, loading = 'lazy', objectFit}: ImageView = $props()

  let classes = $derived(cx(display, aspect && `aspect-${aspect}`, objectFit, ball && 'radius-full', border && 'border-full', center && 'mx-auto', fullWidth && 'full', extraClasses))
</script>

{#if image?.src}
  <img {loading} alt={image.alt} aria-hidden={ariaHidden} class={classes} decoding="async" height={image.height} src={image.src} width={image.width} />
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
    border: 1px solid var(--color-content, #222);
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
