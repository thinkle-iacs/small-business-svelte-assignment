<script>
  // Instructor starter, drafted with OpenAI Codex: demonstrate importing and reusing a component.
  import ExampleCard from "./lib/ExampleCard.svelte";
</script>

<!-- Instructor starter, drafted with OpenAI Codex: a neutral placeholder, not a business design. -->
<main>
  <h1>Your local business, built from components</h1>
  <p>
    Read README.md, choose your business, and complete PLAN.md before building.
  </p>
  <section aria-labelledby="example-heading">
    <h2 id="example-heading">One component, different information</h2>
    <ExampleCard
      heading="First instance"
      description="These two boxes use the same component with different props."
    />
    <ExampleCard
      heading="Second instance"
      description="Change the style in ExampleCard.svelte and both instances change."
    />
  </section>
  <p>Replace this example with the first component from your own plan.</p>
  <p><a href="citations.html">Sources and AI acknowledgments</a></p>
</main>

<style>
  /* Example simple main styling */
  main {
    font-family: sans-serif; /* sans */
    max-width: 65em; /* don't be too wide */
    font-size: 16px;
    margin-inline: auto; /* center horizontally */
  }
</style>
