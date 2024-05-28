import CustomNavbar from "@/components/navbar/custom-navbar";
import CustomSidebar from "@/components/sidebar/custom-sidebar";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <CustomSidebar>
        <CustomNavbar />
        
        <div className="px-2 md:px-12">{children}</div>
      </CustomSidebar>
    </div>
  );
}
