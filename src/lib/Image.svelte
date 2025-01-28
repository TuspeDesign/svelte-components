<script lang="ts">
  import type {ImageData} from '$lib'

  interface Props {
    alt?: string
    aspect?: '3:4' | '4:3' | 'square' | 'video'
    bgSize?: 'contain' | 'cover'
    border?: boolean
    center?: boolean
    height?: number
    image: ImageData
    loading?: 'eager' | 'lazy'
    maxWidth?: number
    width?: number
  }

  let {alt, aspect, border, bgSize, center = false, height, image, loading = 'lazy', maxWidth, width}: Props = $props()
  let classes = $state('')
  if (aspect) {
    classes += `aspect-${aspect}`
  }
  if (bgSize) {
    classes += ' ' + bgSize
  }
  if (center || maxWidth) {
    classes += ' mx-auto'
  }
  if (border) {
    classes += ' border-full'
  }
</script>

<img alt={alt ?? image.alt} class={classes} decoding="async" height={height ?? image.height} {loading} src={image.url} width={width ?? image.width} />

<style scoped>
  img {
    display: inline-block;
    max-width: 100%;
  }
  img:not(.object-*) {
    height: auto;
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
    background-size: contain;
    height: auto;
    max-height: 100%;
    width: auto;
  }
  .cover {
    background-size: cover;
    max-height: 100%;
    max-width: 100%;
  }
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
</style>
