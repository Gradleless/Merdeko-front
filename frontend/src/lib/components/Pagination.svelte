<script>
    // J'ai juste choisi la facilité pour le css, faut que je le refasse histoire de pouvoir enlever les 3000 border à la place de mettre sur la div
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    export let page = 1;
    export let totalPages = 10;
    export let size = "md";
    export let textColor = "";
    export let borderColor = "border-slate-600";

    const sizez = {
        "sm": "text-sm px-2 py-1",
        "md": "px-4 py-2",
        "lg": "text-lg px-6 py-3"
    }

    function previous() {
        dispatch('previous');
    }

    function next() {
        dispatch('next');
    }

    $: size = sizez[size];

</script>

<div class="flex justify-center items-center rounded-md w-full h-full {textColor}">
    <button class="bg-panel {size} rounded-l-md border-[1px] {borderColor} transition duration-500 hover:bg-slate-700 active:bg-slate-600 active:transition-none" on:click={previous}>Previous</button>
    <div class="{size} border-y-[1px] {borderColor}">
        <span class="h-full">Page {page} of {totalPages}</span>
    </div>
    <button class="bg-panel {size} rounded-r-md border-[1px] {borderColor} transition duration-500 hover:bg-slate-700 active:bg-slate-600 active:transition-none" on:click={next}>Next</button>
</div>