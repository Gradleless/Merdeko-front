<script>
    import Button from "./components/Button.svelte";
    import { currentPage, game, previousPage } from "./js/Store";
    import { scale } from "svelte/transition";
    export const title = '';
    export const description = '';
    export const image = '';
    export const download = '';

    function downloadGame() {
        alert("Downloaded");
    }
</script>


    <div class="w-64" role="button" tabindex="0" on:click={() => { $previousPage = $currentPage ; $currentPage = 'Game'; $game = "ff" }  } on:keydown={() => {}} in:scale>
        <div class="card p-4 rounded-lg bg-panel">
            <img src="https://placehold.co/250x350" alt="" class="rounded-lg mb-4">
            <h3 class="text-lg font-semibold mb-2">League of Legends</h3>
            <p class="text-sm mb-4">Become a legend, choose a champion, learn his skills, beat opponents in 5v5...</p>
            <Button text="Download" on:click={() => downloadGame} />
        </div>
    </div>

<!-- Card v2
<div class="grid grid-cols-4 gap-4">
    <div class="card p-4 rounded-lg relative">
        <div class="absolute top-0 right-0 p-2 discount-tag">
            <span class="text-xs font-bold">-75%</span>
        </div>
        <img src="https://placehold.co/200x200" alt="Game with discount image" class="rounded-lg mb-2">
        <h3 class="text-lg font-semibold mb-1">God of War</h3>
        <div class="text-sm mb-1">
            <span class="line-through text-gray-500">$59.99</span>
            <span class="font-bold">$9.99</span>
        </div>
    </div>
</div>
-->