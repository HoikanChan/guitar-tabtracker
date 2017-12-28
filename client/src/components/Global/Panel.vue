<template>
    <div class="white elevation-2">
    
        <v-toolbar flat dense dark class="cyan">
    
            <v-toolbar-title class="white--text">
    
                {{title}}
            </v-toolbar-title>
            <slot name='actions'/>
        </v-toolbar>
        <slot>
            Not Defined
        </slot>
    </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
