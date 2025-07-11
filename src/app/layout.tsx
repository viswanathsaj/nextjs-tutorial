import ErudaDebugger from '@/app/_lib/eruda'

export const metadata = {
	title: "NextJS",
	description: "Generated by NextJS",
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				{/* Layout UI */}
				{/* Place children where you want to render a page or nested layout */}
				<h1>Hello World</h1>
				<main>{children}</main>
				<ErudaDebugger />
				<h1>Bye World</h1>
			</body>
		</html>
	);
}
