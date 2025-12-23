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

<div class="px-2 md:px-5 lg:px-10 bg-gray-900 text-white h-screen flex flex-col">
    <Navbar class="border-b border-gray-500 flex">
        <NavBrand href="/"></NavBrand>
        <NavHamburger />
        <NavUl {activeUrl} class="dark:text-white">
            <NavLi class="cursor-pointer">
                Seasons
                <ChevronDownOutline class="h-6 w-6 inline" />
            </NavLi>
            <Dropdown simple>
                <DropdownItem href="/season/2026">2026</DropdownItem>
            </Dropdown>
            <NavLi href="/rules">League rules</NavLi>
        </NavUl>
    </Navbar>

    <div class="flex grow p-5">
        {@render children()}
    </div>

    <Footer footerType="socialmedia" class=" dark:bg-gray-900 flex border-t dark:border-gray-500">
        <P class="dark:text-gray-400 w-full text-center">Unofficial and non-commercial fan website</P>
    </Footer>
</div>
