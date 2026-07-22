<script>
    import RosterDetails from '$lib/components/rosterDetails.svelte';
    let { data } = $props();

</script>
    <RosterDetails roster={data.roster} players={data.players} />
