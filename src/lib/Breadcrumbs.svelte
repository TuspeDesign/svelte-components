<script lang="ts">
  import {page} from '$app/state'
  import {onMount} from 'svelte'
  import {validateArray} from '$lib'
  import type {Breadcrumb} from '$lib'
  import type {BreadcrumbView} from '$lib/types'

  let {homeName = 'Etusivu', homeSlug = '', onlyMeta = false, outerClass, values}: BreadcrumbView = $props()
  let classes = $state('truncate')

  const origin = page.url.origin + '/'

  let originWithSlug = $state(origin + homeSlug),
    listItems = $derived<Breadcrumb[]>(
      validateArray(values)
        ? [
            {
              '@type': 'ListItem',
              item: originWithSlug,
              name: homeName,
              position: '1'
            },
            ...values.map((page: Breadcrumb, index: number) => ({
              '@type': 'ListItem',
              item: homeSlug ? originWithSlug + '/' + page.item : origin + page.item,
              name: page.name,
              position: String(index + 2)
            }))
          ]
        : []
    ),
    ldjson = $derived(
      listItems.length > 0
        ? `<script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":${JSON.stringify(listItems)}}${'<'}/script>`
        : ''
    )

  onMount(() => {
    if (outerClass) {
      classes += ` ${outerClass}`
    }
  })
</script>

<svelte:head>
  {#if ldjson}
    {@html ldjson}
  {/if}
</svelte:head>

{#if !onlyMeta && validateArray(listItems)}
  <div class={classes}>
    <ol id="breadcrumb" class="max-w-screen-xl mx-auto my-0 px-4 py-2" vocab="https://schema.org/" typeof="BreadcrumbList">
      {#each listItems as page}
        <li property="itemListElement" typeof="ListItem">
          <a href={page.item} class="bc-link" property="item" typeof="WebPage">
            <span property="name">{page.name}</span>
          </a>
          <meta property="position" content={page.position} />
        </li>
      {/each}
    </ol>
  </div>
{/if}

<style scoped>
  #breadcrumb {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #breadcrumb li {
    display: inline-block;
  }

  #breadcrumb li:not(:last-child):after {
    content: '»';
    display: inline;
    font-size: 0.95em;
    padding: 0 5px;
  }

  #breadcrumb a:not(:hover) {
    text-decoration: none;
  }
</style>
