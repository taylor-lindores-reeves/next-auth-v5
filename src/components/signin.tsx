import { signInAction } from "@/actions/signIn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export const SignIn: React.FC = () => {
	return (
		<form
			action={signInAction}
			className="space-y-4 w-96"
		>
			<div className="space-y-2">
				<Label htmlFor="email">Email</Label>
				<Input
					id="email"
					name="email"
					placeholder="johndoe@example.com"
					required
					type="email"
				/>
			</div>
			<button
				className="bg-zinc-900 py-2 text-zinc-100 shadow hover:bg-zinc/90 w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
				type="submit"
			>
				Send me a magic link
			</button>
		</form>
	);
};