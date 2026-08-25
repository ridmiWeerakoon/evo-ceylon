import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import WhatsAppFab from "./WhatsAppFab";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <Header />
      <CartDrawer />
      <main><Outlet /></main>
      <WhatsAppFab />
      <Footer />
    </div>
  );
}