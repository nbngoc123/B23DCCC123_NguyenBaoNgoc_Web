function Menu() {
    const arrayMenu = [
        "Trang chủ",
        "Giới thiệu",
        "Sản phẩm",
        "Liên hệ",
        "Đăng nhập",
        "Đăng ký",
        "Tin tức",
        "Thông tin",
        "Hỗ trợ",
        "Cài đặt",
        "Đăng xuất"
    ];

    return (
        <>
            <ul>
                {arrayMenu.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>
    )
}
export default Menu;