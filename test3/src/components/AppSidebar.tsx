import { Home, Users, Package, Building, DollarSign, MessageSquare, Info, Phone } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Accueil", href: "#hero", icon: Home },
  { title: "Consulting & Accompagnement", href: "#consulting", icon: Users },
  { title: "SELYN Suite (Super App SaaS)", href: "#suite", icon: Package },
  { title: "Espace Coworking", href: "#coworking", icon: Building },
  { title: "Nos Offres & Tarifs", href: "#pricing", icon: DollarSign },
  { title: "Communauté & Réseautage", href: "#community", icon: MessageSquare },
  { title: "À propos", href: "#about", icon: Info },
  { title: "Contact", href: "#contact", icon: Phone },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-bold text-lg">
            SELYN
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a 
                      href={item.href}
                      className="flex items-center gap-3 hover:bg-muted hover:text-primary transition-colors"
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}