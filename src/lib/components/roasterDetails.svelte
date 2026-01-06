<script>
    import {
        Badge,
        Table,
        TableHead, TableHeadCell,
        TableBody, TableBodyRow, TableBodyCell,
    } from 'flowbite-svelte';
    import { BanOutline, CheckOutline } from 'flowbite-svelte-icons';

    let { players, roaster } = $props();

    const formatNumber = value => new Intl.NumberFormat('en-US').format(value);
</script>

<Table hoverable={true} striped={true} class="capitalize">
    <TableHead class='capitalize'>
        <TableHeadCell>quantité</TableHeadCell>
        <TableHeadCell>nom</TableHeadCell>
        <TableHeadCell>coût</TableHeadCell>
        <TableHeadCell>m</TableHeadCell>
        <TableHeadCell>f</TableHeadCell>
        <TableHeadCell>a</TableHeadCell>
        <TableHeadCell>p</TableHeadCell>
        <TableHeadCell>ar</TableHeadCell>
        <TableHeadCell>compétences</TableHeadCell>
    </TableHead>
    <TableBody>
        {#each players as player (player.name) }
            <TableBodyRow>
                <TableBodyCell>0 - {player.quantity}</TableBodyCell>
                <TableBodyCell>
                    <p class="capitalize">{player.name}</p>
                    <div class="flex flex-row gap-1">
                        {#each player.keywords.split(',') as keyword (keyword) }
                            <Badge class="italic">{keyword}</Badge>
                        {/each}
                    </div>
                </TableBodyCell>
                <TableBodyCell>
                    {formatNumber(player.cost)}
                </TableBodyCell>
                <TableBodyCell class="text-center">{player.move}</TableBodyCell>
                <TableBodyCell class="text-center">{player.strength}</TableBodyCell>
                <TableBodyCell class="text-center">{player.agility}+</TableBodyCell>
                <TableBodyCell class="text-center">{player.passing}+</TableBodyCell>
                <TableBodyCell class="text-center">{player.armour}+</TableBodyCell>
                <TableBodyCell class="flex flex-wrap max-w-screen">
                    {#if player.playerToSkill.length === 0}
                        <BanOutline/>
                    {:else}
                        <div class="flex flex-wrap gap-1">
                            {#each player.playerToSkill as skill (skill.skill)}
                                <Badge class="flex">{skill.display}</Badge>
                            {/each}
                        </div>
                    {/if}
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
    <tfoot>
        <tr>
            <th scope="row text-center" colspan="8">
                0-16 Relances: {formatNumber(roaster.reroll_cost)}
            </th>
            <th class="flex flex-row gap-1">
                <span class="capitalize">apothicaire</span>
                    {#if roaster.apothecary}
                        <CheckOutline />
                    {:else}
                        <BanOutline />
                    {/if}
            </th>
        </tr>
    </tfoot>
</Table>
