<script>
  import { getUniversities } from "./api/hipolabs"
  import University from "./components/University.svelte"
  import Error from "./components/Error.svelte"
  let country = "Brazil"
</script>

<main>
  <header>Universities API</header>
  <input type="country" bind:value={country} />
  <div class="universities">
    {#await getUniversities(country)}
      <div class="waiting">Fetching Universities in {country}</div>
    {:then universities}
      {#if universities.data.length > 0}
        {#each universities.data as university, index}
          <University {university} {index} />
        {/each}
      {:else}
        <h1>No Campus in {country}</h1>
      {/if}
    {:catch error}
      <Error {error} />
    {/await}
  </div>
</main>

<style>
  main {
    display: block;
    background-color: #e3e3e3;
  }

  header {
    position: sticky;
    top: 0;
    background-color: green;
    font-size: 2rem;
    color: white;
    text-align: center;
    text-transform: uppercase;
  }
  input {
    margin: 8px;
  }
  .universities {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
