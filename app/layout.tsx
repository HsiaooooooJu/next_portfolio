import { poppins } from "@/app/ui/fonts";
import "./ui/globals.css";
import cx from 'clsx';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="zh-tw">
			<body className={cx(poppins.className, "antialiased")}>{children}</body>
		</html>
	);
}
