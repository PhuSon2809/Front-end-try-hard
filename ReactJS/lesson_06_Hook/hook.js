import {
    useState,
    useEffect,
    useLayoutEffect,
    useRef,
    useCallbacks,
    useMemo,
    useReducer,
    useContext,
    useImperativeHandle,
    useDebugValue,
} from 'react'

//Chưa dùng hooks, chỉ là UI component
function ComponentA(){
    return <h1>Haven''t used hooks yet</h1>
}

//Sử dụng hooks hỗ trợ thêm nhiều tính năng
function ComponentB(){
    //useState
    const [state, setState] = useState(initState);

    //useEffect
    useEffect(() => {

    }, [deps])

    //useLayoutEffect
    useLayoutEffect(() => {

    }, [deps])

    //useRef
    const ref = useRef()

    //useCallbacks
    const fn = useCallbacks(() => {

    }, [deps])

    //useMemo
    const result = useMemo(() => {

    }, [deps])

    //useReducer
    // const [state, dispatch] = useReducer(reducer, initialArg, init)

    //useContext
    const value = useContext(MyContext)

    //useImperativeHandle
    useImperativeHandle(ref, createHandle, [deps])

    //useDebugValue
    useDebugValue(isOnline ? 'Online' : 'Offline')

    return <h1>Hooks</h1>
}

/**
 * 1. Chỉ dùng cho function component
 * 2. ComponentB trở nên đơn giản và dễ hiểu
 *      - Không bị chia logic ra như methods trong lifecycle của class component
 *      - Không cần sử dụng this
 * 3. Sử dụng Hooks khi nào?
 *      - Dự án mới => hooks
 *      - Dự ám cũ
 *          - Component mới => Function component + Hooks
 *          - Component cũ => Giữ nguyên, có thời gian tối ưu sau
 *      - Logic nghiệp vụ cần sử dụng các tính chất của OOP => class component
 * 4. Người mới nên bắt đầu với Function Component hay class component
 * 5. Có kết hợp sử dụng class component & function component được ko?
 *      - Được
 */