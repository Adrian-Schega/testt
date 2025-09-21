<svelte:head>
	<title>Get Started - WMS SaaS</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
	<div class="max-w-md w-full space-y-8">
		<div>
			<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
				Create your WMS account
			</h2>
			<p class="mt-2 text-center text-sm text-gray-600">
				Already have an account? <a href="/login" class="font-medium text-primary-600 hover:text-primary-500">Sign in</a>
			</p>
		</div>
		<form class="mt-8 space-y-6">
			<div class="space-y-4">
				<div>
					<label for="company-name" class="block text-sm font-medium text-gray-700">Company Name</label>
					<input 
						id="company-name" 
						name="company" 
						type="text" 
						required 
						class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" 
						placeholder="Your Company Name"
					>
				</div>
				<div>
					<label for="subdomain" class="block text-sm font-medium text-gray-700">Subdomain</label>
					<div class="mt-1 flex rounded-md shadow-sm">
						<input 
							id="subdomain" 
							name="subdomain" 
							type="text" 
							required 
							class="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-l-md border-gray-300 focus:ring-primary-500 focus:border-primary-500 sm:text-sm" 
							placeholder="mycompany"
						>
						<span class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
							.wms.com
						</span>
					</div>
				</div>
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
					<input 
						id="email" 
						name="email" 
						type="email" 
						required 
						class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" 
						placeholder="you@company.com"
					>
				</div>
				<div>
					<label for="password" class="block text-sm font-medium text-gray-700">Password</label>
					<input 
						id="password" 
						name="password" 
						type="password" 
						required 
						class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm" 
						placeholder="Password"
					>
				</div>
			</div>

			<div class="flex items-center">
				<input 
					id="agree-terms" 
					name="agree-terms" 
					type="checkbox" 
					required
					class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
				>
				<label for="agree-terms" class="ml-2 block text-sm text-gray-900">
					I agree to the <a href="/terms" class="text-primary-600 hover:text-primary-500">Terms of Service</a> and <a href="/privacy" class="text-primary-600 hover:text-primary-500">Privacy Policy</a>
				</label>
			</div>

			<div>
				<button 
					type="submit" 
					class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
				>
					Create Account
				</button>
			</div>
		</form>
	</div>
</div>