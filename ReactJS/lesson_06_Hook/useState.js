/**
 * useSate: Trạng thái của dữ liệu
 * 
 * 1. Dùng khi nào?
 *  - Khi muốn dữ liệu thay đổi thid giao diện tự động
 *    được cập nhật (renderlaji theo dữ liệu)
 * 
 * 2. Cách dùng
 * ...jsx 
 */

import {useState} from 'react';

function Component() {
    const [state, setState] = useState(initState);

    // ...
}

/**
 *  *Lưu ý:
 *      - Component được render sau khi setState 
 *      - Initial state chỉ dùng cho lần đầu
 *      - Set state với callback
 *      - set state laf thay thế state bằng giá trị mới
 */
