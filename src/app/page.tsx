import { Building, Phone, Mail, Clock, Calendar, Users, Home, MapPin } from "lucide-react"
import { HeroSection } from "./shared/hero-section"
import { OrganizationStructure } from "./shared/organization-structure"
import { ContactInfoSection } from "./shared/contact-info-section"
import { QuickLinksSection } from "./shared/quick-links-section"
import { VillageStatisticSection } from "./shared/village-statistic-section"
import { MapSection } from "./shared/map-section"

export default function HomePage() {
    const contacts = [
        { icon: Phone, title: "Telepon", value: "+62 815-2619-1092", color: "text-blue-600" },
        { icon: Mail, title: "Email", value: "Desasuluuntiga@gmail.com", color: "text-green-600" },
        { icon: Clock, title: "Jam Kerja", value: "Senin-Jumat: 8AM-5PM", color: "text-purple-600" },
    ]

    const quickLinks = [
        {
            icon: Building,
            title: "Sejarah Desa",
            description: "Pelajari sejarah dan perkembangan desa kami",
            buttonText: "Jelajahi Sejarah",
            href: "/information",
            iconColor: "text-blue-600",
        },
        {
            icon: Mail,
            title: "Pengaduan Masyarakat",
            description: "Ajukan pengaduan atau saran untuk perbaikan desa",
            buttonText: "Ajukan Pengaduan",
            href: "/complaints",
            iconColor: "text-green-600",
        },
        {
            icon: Calendar,
            title: "Berita & Acara",
            description: "Dapatkan informasi terkini tentang acara dan pengumuman yang akan datang",
            buttonText: "Lihat Acara",
            href: "/announcements",
            iconColor: "text-purple-600",
        },
    ]



    return (
        <div className="min-h-screen">
            <HeroSection
                title="Selamat Datang di Desa Suluun Tiga"
                subtitle="Masyarakat yang Harmonis, Alam yang Indah"
                primaryButton={{ text: "Kenal Lebih Dalam Dengan Desa Suluun", href: "/information" }}
                secondaryButton={{ text: "Pengumuman", href: "/announcements" }}
                backgroundImage="/cover.png"
            />

            <OrganizationStructure />

            <VillageStatisticSection />

            <QuickLinksSection links={quickLinks} />

            {/* Find us */}
            <MapSection />

            {/* Contact Information */}
            <ContactInfoSection contacts={contacts} />
        </div>
    )
}
