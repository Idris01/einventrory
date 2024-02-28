'use client'
import Navbar from "@/components/others/navbar";
import Sidebar from "@/components/others/sidebar";
import { OrganizationProvider, useOrganization } from "@/contexts/organization-context";
import React, { useEffect, useState } from "react";

interface InventoryManagementLayoutProps {
  params: {
    organizationId: string;
  },
  children: React.ReactNode;
}

function InventoryManagementLayout ({
  params, children
 }: InventoryManagementLayoutProps) {
  const { fetchOrganization } = useOrganization();
  const { organizationId } = params  

  useEffect(() => {
    if (organizationId) {
      fetchOrganization(organizationId);
    }
  }, [fetchOrganization, organizationId]);

  return (
      <div className="min-h-screen flex">
        <Sidebar organizationId={organizationId}/>
        <main className="h-screen flex-grow flex flex-col">
          <div className="stick h-max top-0 z-10">
            <Navbar />
          </div>
          <div className="px-4 bg-secondary overflow-auto flex-1 flex flex-col">
            {children}
          </div>
        </main>
      </div>
  );
};

export default InventoryManagementLayout;
