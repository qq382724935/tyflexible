/*
 * @Author: 刘利军
 * @Date: 2020-04-12 09:34:04
 * @LastEditors: 刘利军
 * @LastEditTime: 2020-04-12 23:02:25
 */
import Home from '@/pages/Home/Home';
import Demp from '@/pages/Demp/Demp';

const router = [
    {
        path: '/',
        name: '首页',
        exact: true,
        component: Home
    },
    {
        path: '/Demp',
        name: 'Demp',
        exact: false,
        component: Demp
    },
];
export default router;