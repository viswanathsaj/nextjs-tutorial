"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
	const pathname = usePathname();

	const productId = pathname.split("/")[2];
	const reviewId = pathname.split("/")[4];
	return (
		<div>
			<h2>Review Not Found</h2>
			<p>
				Rewview {reviewId} not found for {productId}
			</p>
		</div>
	);
}
