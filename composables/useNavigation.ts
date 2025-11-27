import type { NavItem } from '~/types'

export const useNavigation = () => {
    const navItems: NavItem[] = [
        {
            label: "Dịch Vụ",
            href: "/dich-vu",
            children: [
                {
                    label: "Tiêm Botox",
                    href: "/dich-vu/tiem-botox",
                    description: "Xóa nhăn, thon gọn hàm hiệu quả tức thì"
                },
                {
                    label: "Tiêm Filler",
                    href: "/dich-vu/tiem-filler",
                    description: "Tạo hình khuôn mặt, làm đầy rãnh nhăn"
                },
                {
                    label: "Trị Liệu IPL",
                    href: "/dich-vu/tri-lieu-ipl",
                    description: "Trẻ hóa da, điều trị sắc tố bằng ánh sáng"
                },
                {
                    label: "Microneedling",
                    href: "/dich-vu/microneedling",
                    description: "Tái tạo bề mặt da, trị sẹo rỗ"
                },
                {
                    label: "HydraFacial",
                    href: "/dich-vu/hydrafacial",
                    description: "Làm sạch sâu và cấp ẩm đa tầng"
                },
                {
                    label: "Chăm Sóc Da",
                    href: "/dich-vu/cham-soc-da",
                    description: "Liệu trình chăm sóc da chuyên sâu"
                },
            ],
        },
        {
            label: "Khuyến Mãi",
            href: "/khuyen-mai",
        },
        {
            label: "Đội Ngũ Bác Sĩ",
            href: "/doi-ngu-bac-si",
        },
        {
            label: "Công Nghệ",
            href: "/cong-nghe",
        },
        {
            label: "Tin Tức",
            href: "/tin-tuc",
            children: [
                {
                    label: "Tin Tức Làm Đẹp",
                    href: "/tin-tuc/tin-tuc-lam-dep",
                    description: "Cập nhật xu hướng làm đẹp mới nhất"
                },
                {
                    label: "Mẹo Chăm Sóc Da",
                    href: "/tin-tuc/meo-cham-soc-da",
                    description: "Bí quyết giữ gìn làn da tươi trẻ"
                },
                {
                    label: "Xu Hướng Thẩm Mỹ",
                    href: "/tin-tuc/xu-huong-tham-my",
                    description: "Công nghệ thẩm mỹ tiên tiến"
                },
                {
                    label: "Câu Hỏi Thường Gặp",
                    href: "/tin-tuc/faq",
                    description: "Giải đáp thắc mắc phổ biến"
                },
            ],
        },
        {
            label: "Về Chúng Tôi",
            href: "/ve-chung-toi",
            children: [
                { label: "Giới Thiệu", href: "/ve-chung-toi" },
                { label: "Câu Chuyện", href: "/ve-chung-toi#cau-chuyen" },
                { label: "Sứ Mệnh & Tầm Nhìn", href: "/ve-chung-toi#su-menh" },
                { label: "Giá Trị Cốt Lõi", href: "/ve-chung-toi#gia-tri" },
                { label: "Cơ Sở Vật Chất", href: "/ve-chung-toi#co-so" },
            ],
        },
        {
            label: "Liên Hệ",
            href: "/lien-he",
            children: [
                { label: "Thông Tin Liên Hệ", href: "/lien-he" },
                { label: "Đặt Lịch Hẹn", href: "/lien-he/dat-lich-hen" },
            ],
        },
    ]

    return {
        navItems
    }
}
