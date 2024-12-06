import type { Metadata } from "next";
import localFont from "next/font/local";
import "./../globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Footer from "@/components/ui/footer";
import { ChauffeurSidebar } from "@/components/chauffeur/chauffeurSidebar";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (


                <SidebarProvider>
                    <ChauffeurSidebar />
                    <div className="flex flex-col min-h-[100vh] justify-between h-full w-full">
                        {children}
                        <Footer />
                    </div>
                </SidebarProvider>

    );
}
