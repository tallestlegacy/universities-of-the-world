<script>
  import { fade, fly } from "svelte/transition"
  export let university
  export let index
  let delay = 200 * (index + 1)
</script>

<main in:fade={{ delay }}>
  <h3>{university.name}</h3>
  {#each university.domains as domain}
    <span><a href={domain}>{domain}</a></span>
  {/each}
  <h4>Pages</h4>
  {#each university.web_pages as page}
    <p>
      <a href={page}>{page}</a>
    </p>
  {/each}
</main>

<style>
  main {
    margin: 0.5rem;
    padding: 1rem;
    box-shadow: 0 2px 5px #0003;
    background-color: white;
    line-height: 150%;
    flex: 1 1 32ch;
  }
</style>
