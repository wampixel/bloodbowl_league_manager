<script>
    import RoasterDetails from '$lib/components/roasterDetails.svelte';
    let { data } = $props();

</script>
    <RoasterDetails roaster={data.roaster} players={data.players} />
