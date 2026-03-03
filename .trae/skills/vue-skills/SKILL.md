---
name: "vue-skills"
description: "Applies Vue 3 best practices, Composition API patterns, and performance optimizations. Invoke when writing or reviewing Vue code."
---

# Vue Skills & Best Practices

This skill enforces best practices for Vue 3 development, specifically focusing on the Composition API, TypeScript, and performance.

## Core Principles

### Composition API
- **Script Setup**: Always use `<script setup lang="ts">` for concise and type-safe components.
- **Reactivity**: Prefer `ref()` for most state to avoid destructuring issues. Use `computed()` for derived state.
- **Props & Emits**: Use `defineProps<{ ... }>()` and `defineEmits<{ ... }>()` for type-safe definitions.

### Component Structure
- **Single File Components (SFC)**: Keep template, script, and style in one file. Order: `<script>`, `<template>`, `<style>`.
- **Naming**: Use PascalCase for component filenames (e.g., `MyComponent.vue`).
- **Logic Extraction**: Extract complex logic into composables (`useFeature.ts`) to keep components clean.

## Performance Optimization

### Rendering
- **v-show vs v-if**: Use `v-show` for frequent toggles, `v-if` for conditional rendering that rarely changes.
- **Key Attribute**: Always use a unique `key` in `v-for` loops.
- **Shallow Refs**: Use `shallowRef()` for large objects that don't need deep reactivity (e.g., third-party library instances).

### Async Components
- **Lazy Loading**: Use `defineAsyncComponent(() => import('./MyComponent.vue'))` for heavy components that are not immediately visible.

## State Management (Pinia)

- **Setup Stores**: Prefer Setup Stores (`defineStore('id', () => { ... })`) over Option Stores for better TypeScript support and flexibility.
- **Direct Access**: Access store state directly; avoid destructuring unless using `storeToRefs()`.

## Composables

- **Naming**: Start with `use` (e.g., `useMouse`).
- **Input Flexibility**: Use `MaybeRef` or `MaybeRefOrGetter` for arguments to accept raw values, refs, or getters seamlessly.
- **Return Values**: Return refs or functions, allowing the consumer to decide on destructuring.
