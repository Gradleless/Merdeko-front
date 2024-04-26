<script>
    export let text = 'button';
</script>

<button class="px-4 py-2 bg-blue-600 text-white rounded-md transition duration-500 hover:bg-blue-700  active:bg-slate-400 active:transition-none" on:click|stopPropagation>{text}</button>