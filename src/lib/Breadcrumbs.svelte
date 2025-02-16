<script lang="ts">
  import {page} from '$app/state'
  import type {Breadcrumb} from '$lib'

  interface Props {
    homeName?: string
    homeSlug?: string
    values: Breadcrumb[]
  }

  let {homeName = 'Etusivu', homeSlug = '', values}: Props = $props()
  const origin = page.url.origin + '/'

  let originWithSlug = $state(origin + homeSlug),
    listItems = $derived<Breadcrumb[]>(
      Array.isArray(values) && values.length > 0
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
</script>

<svelte:head>
  {#if ldjson}
    {@html ldjson}
  {/if}
</svelte:head>

{#if Array.isArray(listItems) && listItems.length > 0}
  <div class="border-bottom truncate">
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
    white-space: nowrap;
    text-overflow: ellipsis;
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
