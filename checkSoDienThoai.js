function isSoDienThoai(str) {
    // regexp = /^\([0-9]{2}\)\-\([0][1-9]{9}\)$/;
    regexp = /^[0-9]{2}[0][0-9]{9}$/;
    if (regexp.test(str)) {
        return 'là số điện thoại';
    } else {
        return 'không là số điện thoại';
    }
}