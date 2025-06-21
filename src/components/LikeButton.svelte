<script>
  import { onMount } from 'svelte';
  export let postId = 'default-post';

  const storageKey = `likes-${postId}`;
  let likes = 0;

  // Recuperar de localStorage cuando el componente se monta
  onMount(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored !== null) {
      likes = parseInt(stored, 10);
    }
  });

  function addLike() {
    likes += 1;
    localStorage.setItem(storageKey, likes);
  }
</script>

<button onclick={addLike  }>
  ❤️ Like ({likes})
</button>

<style>
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background: #eee;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }

  button:hover {
    background: #eee;
  }
</style>
