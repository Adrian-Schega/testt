<script lang="ts">
	import { Package, Menu, X } from 'lucide-svelte';
	
	let { children } = $props();
	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<div class="min-h-screen bg-white">
	<!-- Header -->
	<header class="bg-white shadow-sm border-b">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<!-- Logo -->
				<div class="flex items-center">
					<Package class="h-8 w-8 text-primary-600" />
					<span class="ml-2 text-xl font-bold text-gray-900">WMS SaaS</span>
				</div>

				<!-- Desktop Navigation -->
				<nav class="hidden md:flex space-x-8">
					<a href="#features" class="text-gray-700 hover:text-primary-600 transition-colors">Features</a>
					<a href="#pricing" class="text-gray-700 hover:text-primary-600 transition-colors">Pricing</a>
					<a href="#about" class="text-gray-700 hover:text-primary-600 transition-colors">About</a>
					<a href="#contact" class="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
				</nav>

				<!-- CTA Buttons -->
				<div class="hidden md:flex items-center space-x-4">
					<a href="/login" class="text-gray-700 hover:text-primary-600 transition-colors">Sign In</a>
					<a href="/register" class="btn btn-primary">Get Started</a>
				</div>

				<!-- Mobile menu button -->
				<button 
					onclick={toggleMobileMenu}
					class="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
				>
					{#if mobileMenuOpen}
						<X class="h-6 w-6" />
					{:else}
						<Menu class="h-6 w-6" />
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden border-t border-gray-200">
				<div class="px-2 pt-2 pb-3 space-y-1">
					<a href="#features" class="block px-3 py-2 text-gray-700 hover:text-primary-600">Features</a>
					<a href="#pricing" class="block px-3 py-2 text-gray-700 hover:text-primary-600">Pricing</a>
					<a href="#about" class="block px-3 py-2 text-gray-700 hover:text-primary-600">About</a>
					<a href="#contact" class="block px-3 py-2 text-gray-700 hover:text-primary-600">Contact</a>
					<div class="border-t border-gray-200 pt-4">
						<a href="/login" class="block px-3 py-2 text-gray-700 hover:text-primary-600">Sign In</a>
						<a href="/register" class="block px-3 py-2 text-primary-600 font-medium">Get Started</a>
					</div>
				</div>
			</div>
		{/if}
	</header>

	<!-- Main Content -->
	<main>
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="bg-gray-900 text-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
				<div class="col-span-1 md:col-span-2">
					<div class="flex items-center mb-4">
						<Package class="h-8 w-8 text-primary-400" />
						<span class="ml-2 text-xl font-bold">WMS SaaS</span>
					</div>
					<p class="text-gray-400 max-w-md">
						Modern warehouse management system with multi-tenant support, 
						designed for businesses of all sizes.
					</p>
				</div>
				
				<div>
					<h3 class="text-lg font-semibold mb-4">Product</h3>
					<ul class="space-y-2 text-gray-400">
						<li><a href="#features" class="hover:text-white transition-colors">Features</a></li>
						<li><a href="#pricing" class="hover:text-white transition-colors">Pricing</a></li>
						<li><a href="/docs" class="hover:text-white transition-colors">Documentation</a></li>
					</ul>
				</div>
				
				<div>
					<h3 class="text-lg font-semibold mb-4">Company</h3>
					<ul class="space-y-2 text-gray-400">
						<li><a href="#about" class="hover:text-white transition-colors">About</a></li>
						<li><a href="#contact" class="hover:text-white transition-colors">Contact</a></li>
						<li><a href="/privacy" class="hover:text-white transition-colors">Privacy</a></li>
						<li><a href="/terms" class="hover:text-white transition-colors">Terms</a></li>
					</ul>
				</div>
			</div>
			
			<div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
				<p>&copy; 2024 WMS SaaS. All rights reserved.</p>
			</div>
		</div>
	</footer>
</div>