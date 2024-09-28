<script lang="ts">
	import { Building2, Phone, Mail, Clock } from "lucide-svelte";
	import ContactForm from "@/components/ContactForm.svelte";
	import Section from "@/components/layouts/Section.svelte";
	import type { PageData } from "./$types.js";
	export let data: PageData;

	let title = "Contact Us";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>

<Section>
	<div class="grid grid-cols-1 gap-8 py-52 md:grid-cols-2">
		<div>
			<div class="mb-4">
				<h2 class="mb-2 text-lg tracking-wider text-primary">Contact</h2>

				<h2 class="text-3xl font-bold md:text-4xl">Connect With Us</h2>
			</div>
			<p class="mb-8 text-muted-foreground lg:w-5/6">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam sint enim
				exercitationem ex autem corrupti quas tenetur
			</p>

			<div class="flex flex-col gap-4">
				<div>
					<div class="mb-1 flex gap-2">
						<Building2 />
						<div class="font-bold">Find us</div>
					</div>

					<div>742 Evergreen Terrace, Springfield, IL 62704</div>
				</div>

				<div>
					<div class="mb-1 flex gap-2">
						<Phone />
						<div class="font-bold">Call us</div>
					</div>

					<div>+1 (619) 123-4567</div>
				</div>

				<div>
					<div class="mb-1 flex gap-2">
						<Mail />
						<div class="font-bold">Mail US</div>
					</div>

					<div>leomirandadev@gmail.com</div>
				</div>

				<div>
					<div class="flex gap-2">
						<Clock />
						<div class="font-bold">Visit us</div>
					</div>

					<div>
						<div>Monday - Friday</div>
						<div>8AM - 4PM</div>
					</div>
				</div>
			</div>
		</div>
		<ContactForm data={data.form} />
	</div>
</Section>
