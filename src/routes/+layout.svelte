<script lang="ts">
    import { page } from '$app/state';
    import './layout.css';
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        Dropdown,
        DropdownItem,
    } from 'flowbite-svelte';
    import { Footer } from 'flowbite-svelte';
    import { P } from 'flowbite-svelte';

    import { ChevronDownOutline } from 'flowbite-svelte-icons';

    let { children } = $props();

    let activeUrl = $derived(page.url.pathname);
</script>

<Navbar class="bg-gray-400 dark:bg-neutral-900">
    <NavBrand href="/"></NavBrand>

    <NavHamburger />
    <NavUl {activeUrl}>
        <NavLi class="cursor-pointer">
            Seasons <ChevronDownOutline class="h-6 w-6" />
        </NavLi>
        <Dropdown simple>
            <DropdownItem href="/season/2026">2026</DropdownItem>
        </Dropdown>
        <NavLi href="/about">League rules</NavLi>
    </NavUl>
</Navbar>

<div class="h-full"></div>

{@render children()}

<Footer>
    <P>Unofficial and non-commercial fan website</P>
</Footer>
