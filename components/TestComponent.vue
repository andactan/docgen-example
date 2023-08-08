<template></template>

<script lang="ts" setup>
import {
  FunctionalComponent,
  SVGAttributes,
  onMounted,
  ref,
  useSlots,
} from "vue";
const slots = useSlots();

const props = withDefaults(
  defineProps<{
    /**
     * Main indigo title.
     * [NOTE] Its color and font can be customized using `titleClassName`
     */
    title: string;
    /**
     * Second line in the heading.
     */
    description?: string[];
  }>(),
  {
    title: "anan",
    description: () => ["bacin"],
  }
);
</script>
