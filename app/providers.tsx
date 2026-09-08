"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ViewportProvider } from "@/components/viewport/ViewportController";

export type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
	return (
		<NextUIProvider>
			<NextThemesProvider {...themeProps}>
				<ViewportProvider>
					{children}
				</ViewportProvider>
			</NextThemesProvider>
		</NextUIProvider>
	);
}
