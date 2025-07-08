<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const blobs = ref([
  createBlob("bg-gradient-to-br from-pink-300 to-purple-400"),
  createBlob("bg-gradient-to-tr from-yellow-200 to-red-300"),
  createBlob("bg-gradient-to-tl from-sky-200 to-indigo-300"),
  createBlob("bg-gradient-to-bl from-emerald-200 to-teal-300"),
]);

function createBlob(tailwindGradient) {
  const size = 600 + Math.random() * 150;
  return {
    x: Math.random() * (screenWidth - size),
    y: Math.random() * (screenHeight - size),
    vx: (Math.random() - 0.5) * 2, // Velocity X
    vy: (Math.random() - 0.5) * 2, // Velocity Y
    size,
    gradient: "",
    borderRadius: randomRadius(),
    class: tailwindGradient,
  };
}

function randomRadius() {
  return `${50 + Math.random() * 25}% ${50 + Math.random() * 25}% ${
    50 + Math.random() * 25
  }% ${50 + Math.random() * 25}% / ${50 + Math.random() * 25}% ${
    50 + Math.random() * 25
  }% ${50 + Math.random() * 25}% ${50 + Math.random() * 25}%`;
}

let animationId;

function animate() {
  blobs.value.forEach((blob) => {
    blob.x += blob.vx * 1.5;
    blob.y += blob.vy * 1.5;

    // Bounce from edges
    if (blob.x <= 0 || blob.x + blob.size >= screenWidth) {
      blob.vx *= -1;
      blob.borderRadius = randomRadius();
    }

    if (blob.y <= 0 || blob.y + blob.size >= screenHeight) {
      blob.vy *= -1;
      blob.borderRadius = randomRadius();
    }
  });

  animationId = requestAnimationFrame(animate);
}

onMounted(() => {
  // Assign gradient background after mounting
  blobs.value.forEach((blob) => {
    const el = document.createElement("div");
    el.className = blob.class;
    document.body.appendChild(el);
    const style = window.getComputedStyle(el);
    blob.gradient = style.backgroundImage;
    el.remove();
  });

  animate();
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
});
</script>

<template>
  <div class="fixed inset-0 overflow-hidden gradient-bg">
    <div
      v-for="(blob, index) in blobs"
      :key="index"
      class="absolute rounded-[50%] mix-blend-multiply blur-2xl opacity-30 pointer-events-none transition-all duration-75"
      :style="{
        top: blob.y + 'px',
        left: blob.x + 'px',
        width: blob.size + 'px',
        height: blob.size + 'px',
        background: blob.gradient,
        borderRadius: blob.borderRadius,
      }"
    />
  </div>
</template>

<style scoped>
/* Optional: smoother shape changes */
div {
  transition: border-radius 1s ease;
}

.gradient-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1; /* Ensures it stays behind all other elements */
  pointer-events: none; /* Prevents blocking of clicks */
  /* background: linear-gradient(135deg, #4f46e5, #9333ea); Indigo to purple */
  /* opacity: 0.2; Optional: subtle background */
}
</style>
