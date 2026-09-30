<script lang="ts">
	import { CONTACT_LINKS } from '$lib/config/site';
	import { NAVIGATION_SECTIONS } from '$lib/data/navigation';
</script>

<aside class="site-sidebar" aria-label="Portfolio navigation">
	<div>
		<a class="home-link" href="/">Home</a>
		<nav class="site-navigation">
			{#each NAVIGATION_SECTIONS as section}
				<div class="navigation-section">
					<a class="navigation-section__link" href={section.href}>
						{section.label}
					</a>
					{#if section.children.length > 0}
						<div class="navigation-children">
							<div class="navigation-children__inner">
								{#each section.children as child}
									<a
										class="navigation-child-link"
										href={child.href}
										rel={child.href.startsWith('http') ? 'noreferrer' : undefined}
										target={child.href.startsWith('http') ? '_blank' : undefined}
									>
										{child.label}
									</a>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</nav>
	</div>

	<div class="sidebar-contact-links">
		<p class="section-label">Contacts</p>
		<ul>
			{#each CONTACT_LINKS as link}
				<li>
					<a
						href={link.href}
						rel={link.newTab ? 'noreferrer' : undefined}
						target={link.newTab ? '_blank' : undefined}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</aside>
