"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import ToasterContext from "./context/ToastContext";
import { useEffect, useLayoutEffect, useState } from "react";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // const [headerHeight, setHeaderHeight] = useState(0);

    // useLayoutEffect(() => {
    //     const header = document.getElementById("site-header");
    //     if (!header) return;

    //     // Set immediately before first paint
    //     setHeaderHeight(header.offsetHeight);

    //     // Update on resize (e.g. mobile nav opens, sticky kicks in)
    //     const observer = new ResizeObserver(() => {
    //         setHeaderHeight(header.offsetHeight);
    //     });

    //     observer.observe(header);
    //     return () => observer.disconnect();
    // }, []);

    // useEffect(() => {
    //   console.log(headerHeight);
    // }, [headerHeight])
    

    return (
        <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
            <Lines />
            <Header />
            <ToasterContext />

            <main style={{ marginTop: `95px` }}>{children}</main>

            <Footer />
            <ScrollToTop />
        </ThemeProvider>
    );
}