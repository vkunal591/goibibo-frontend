import Footer from "../components/common/Footer";
import Header from "../components/common/Navbar";
import Layout from "../components/layout/Layout";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <Layout protected>
    <Header />
    {children}
    <Footer />
  </Layout>;
}
