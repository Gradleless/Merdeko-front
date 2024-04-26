<script>
    import Card from '../Card.svelte'
    import Header from '../Header.svelte'
    import Pagination from '../components/Pagination.svelte';
    import { page, trollText } from '../js/Store';

    // delete this, it's just an example
    function nextPage() {
        page.update(n => n + 1);
    }

    setInterval(nextPage, 1000);

</script>

<Header />

<div class="flex gap-y-8 gap-x-8 mb-8 flex-wrap justify-center">
    {#each [1,2,3,4, 5, 6, 7, 8] as item}
        <Card />
    {/each}
</div>

<div class="w-full text-center m-auto align-middle object-center items-center snap-center self-center">
    <Pagination page={$page} on:previous={() => console.log(trollText)} on:next={() => console.log(trollText)}  />
</div>