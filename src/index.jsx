/*
 * @Author: 刘利军
 * @Date: 2020-04-11 14:03:21
 * @LastEditors: 刘利军
 * @LastEditTime: 2020-04-12 23:41:35
 */
import ReactDOM from "react-dom";
import BasicLayout from "./router/index";
import { hot } from "react-hot-loader/root";
hot(BasicLayout);
ReactDOM.render(BasicLayout(), document.getElementById("root"));
