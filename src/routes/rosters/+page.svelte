<script>
    import { page } from '$app/state';
    import { A } from 'flowbite-svelte';

    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    let { data } = $props();
</script>

<div class="grid grid-cols-2 md:grid-cols-5 gap-4">
    {#each data.rosters as roster (roster.uid)}
        <A
            class="m-2 capitalize md:text-center"
            href={`${page.url.pathname}/${roster.uid}`}
        >
            {roster.name}
            <ArrowRightOutline />
        </A>
    {/each}
</div>
