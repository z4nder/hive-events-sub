<template>
  <div class="text-primary-900">
    <Nav />

    <div class="container mx-auto px-4 p-3">
      <PostSub class="mt-5 lg:mt-auto" />
    </div>
  </div>
</template>

<script setup>
import JSConfetti from "js-confetti";

onMounted(() => {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti();
});
</script>
