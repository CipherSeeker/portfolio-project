import React from "react";

import * as css from "./FormHead.styled";

import axios from 'axios';
import { Notify } from 'notiflix';

const FormHead = ({ onClose }) => {

    const onSendMessageTelegram = (e) => {
        e.preventDefault();

        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value
        const message = e.target.elements.message.value

        let messageAll = `<b>!!Заявка с сайта(Hire Me)!!</b>
        \nИмя: <b>${name}</b>
        \nEmail/Телефон: <b>${email}</b>
        \nСообщение: <b>${message}</b>`;

        const token = '6019073159:AAG6g-yZ6xRO4u4HPeec2mjdOvUDxzu7pJg';
        const chat = '-1001937943068';

        axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
            parse_mode: 'html',
            chat_id: chat,
            text: messageAll,
        });

        Notify.success(`Thank You. I will contact You as soon as possible.`);

        onClose();
    }


    return (
        <css.Full>
            <css.FullHead>
                <css.Title>What project are you looking for?</css.Title>
                <css.StyledBtnClose onClick={onClose}>
                    <css.StyledCloseIcon />
                </css.StyledBtnClose>
            </css.FullHead>
            <css.Form onSubmit={onSendMessageTelegram}>
                <input name="name" placeholder="Name" type="text" required />
                <input name="email" placeholder="Email\Tel" type="text" required />
                <textarea name="message" type="textarea" placeholder="Message" required />
                <css.ButtonForm type="submit">Submit</css.ButtonForm>
            </css.Form>

        </css.Full>
    )
}

export default FormHead;
