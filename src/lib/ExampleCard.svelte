<script>
  // Instructor starter, drafted with OpenAI Codex: receive two text props using Svelte 5.
  let { heading, description } = $props();
</script>

<!-- Instructor starter, drafted with OpenAI Codex: show the inputs in semantic HTML. -->
<article>
  <h3>{heading}</h3>
  <p>{description}</p>
</article>

<style>
  /* Instructor starter, drafted with OpenAI Codex: scoped styles apply to every instance. */
  article {
    border: 1px solid currentColor;
    padding: 1rem;
    margin-block: 1rem;
  }
</style>
