<script lang="ts">
	import { Button } from "@/components/ui/button";
	import * as Select from "@/components/ui/select";
	import * as Alert from "@/components/ui/alert";
	import { Label } from "@/components/ui/label";
	import { Textarea } from "@/components/ui/textarea";
	import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
	import * as Form from "@/components/ui/form";
	import { Input } from "@/components/ui/input";
	import { formSchema, type FormSchema } from "@/schemas";
	import { type SuperValidated, type Infer, superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { Field } from "formsnap";

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
</script>

<Card class="bg-muted/60 dark:bg-card">
	<CardHeader class="text-2xl text-primary"></CardHeader>
	<CardContent>
		<form method="POST" use:enhance class="grid gap-4">
			<div class="flex flex-col gap-8 md:flex-row">
				<div class="flex w-full flex-col gap-1.5">
					<Form.Field {form} name="firstName">
						<Form.Control let:attrs>
							<Form.Label for="first-name">First Name</Form.Label>
							<Input
								id="first-name"
								type="text"
								placeholder="Leopoldo"
								bind:value={$formData.firstName}
							/>
						</Form.Control>
					</Form.Field>
				</div>

				<div class="flex w-full flex-col gap-1.5">
					<Form.Field {form} name="lastName">
						<Form.Control let:attrs>
							<Label for="last-name">Last Name</Label>
							<Input
								id="last-name"
								type="text"
								placeholder="Miranda"
								bind:value={$formData.lastName}
							/>
						</Form.Control>
					</Form.Field>
				</div>
			</div>

			<div class="flex flex-col gap-1.5">
				<Form.Field {form} name="email">
					<Form.Control let:attrs>
						<Label for="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="leomirandadev@gmail.com"
							bind:value={$formData.email}
						/>
					</Form.Control>
				</Form.Field>
			</div>

			<div class="flex flex-col gap-1.5">
				<Form.Field {form} name="subject">
					<Form.Control let:attrs>
						<Label for="subject">Subject</Label>
						<Select.Root {...attrs}>
							<Select.Trigger>
								<Select.Value placeholder="Select a subject" />
							</Select.Trigger>
							<Select.Content>
								<Select.Group>
									<Select.Item value="Web Development">Web Development</Select.Item>
									<Select.Item value="Mobile Development">Mobile Development</Select.Item>
									<Select.Item value="Figma Design">Figma Design</Select.Item>
									<Select.Item value="REST API ">REST API</Select.Item>
									<Select.Item value="FullStack Project">FullStack Project</Select.Item>
								</Select.Group>
							</Select.Content>
						</Select.Root>
					</Form.Control>
				</Form.Field>
			</div>

			<div class="flex flex-col gap-1.5">
				<Label for="message">Message</Label>
				<Textarea id="message" placeholder="Your message..." rows={5} />
			</div>

			{#if false}
				<Alert.Root variant="destructive">
					<Alert.Title>Error</Alert.Title>
					<Alert.Description>
						There is an error in the form. Please check your input.
					</Alert.Description>
				</Alert.Root>
			{/if}

			<Form.Button class="mt-4">Send message</Form.Button>
		</form>
	</CardContent>
</Card>
