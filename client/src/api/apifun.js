import axios from "axios";

const base = axios.create({
    baseURL:'https://amathous.co/api'
})
export const contact_us = (data) => base.post("/contact-us", data);
