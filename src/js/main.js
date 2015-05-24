/* global document */
// This file is just for dev purposes
require("../scss/main.scss");
import 'babel/polyfill';
import * as App from './app';
import moment from "moment";
moment.locale('pt-BR');

App.run(document.body);
