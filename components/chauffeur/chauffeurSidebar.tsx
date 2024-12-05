import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail, SidebarTrigger } from "@/components/ui/sidebar";
import { Home, Car, History, User, Lock, LogOut } from "lucide-react";

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Dashboard",
      actions: [
        { title: "Accueil", url: "/dashbord", icon: <Home /> },
      ],
    },
    {
      title: "Trips",
      actions: [
        { title: "Créer un nouveau trajet", url: "/chauffeur/new", icon: <Car /> },
        { title: "Voir les voyages en cours en même trajet", url: "#", icon: <Car /> },
        { title: "Consulter l'historique des trajets", url: "#", icon: <History /> },
        { title: "Changer l'état d'un trajet", url: "#", icon: <Car /> },
      ],
    },
    {
      title: "Profile",
      actions: [
        { title: "Informations personnelles", url: "#", icon: <User /> },
        { title: "Changer le mot de passe", url: "#", icon: <Lock /> },
        { title: "Déconnecter", url: "/", icon: <LogOut /> },
      ],
    },
  ],
};


export function ChauffeurSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <h1 className="truncate">Espace Chauffeur</h1>
          <SidebarTrigger />
        </SidebarHeader>
        <SidebarContent>
          {data.navMain.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.actions.map((action) => (
                    <SidebarMenuItem key={action.title}>
                      <SidebarMenuButton asChild>
                        <a href={action.url} className="flex items-center space-x-2">
                          {action.icon}
                          <span>{action.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    );
  }
  