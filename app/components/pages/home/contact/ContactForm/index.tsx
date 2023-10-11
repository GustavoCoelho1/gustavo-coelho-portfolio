'use client';

import { useState } from 'react';
import {
    IoIosAt,
    IoIosChatbubbles,
    IoMdArrowRoundForward,
    IoMdPerson,
} from 'react-icons/io';
import axios from 'axios';
import { toast } from 'react-toastify';
import { PopDiv, popIn } from '@/app/lib/animations';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [submitDisabled, setSubmitDisabled] = useState(false);

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleSubmitClick = async () => {
        setSubmitDisabled(true);

        if (email != '' && name != '' && message != '') {
            try {
                const data = { name, email, message };

                await axios.post('/api/contact', data);

                resetForm();

                toast.success('Mensagem enviada com sucesso!');
            } catch {
                toast.error(
                    'Houve um erro ao enviar a mensagem, tente novamente mais tarde!',
                );
            }
        } else {
            toast.warning('Por favor, preencha todos os campos!');
        }

        setSubmitDisabled(false);
    };

    return (
        <form className="flex w-[85%] flex-col gap-10 sm:max-w-[400px]">
            <PopDiv whileInView={popIn(0.3)} className="flex flex-col gap-3">
                <div
                    className={`flex items-center gap-1 transition duration-300 ${
                        name != '' ? 'text-white' : 'text-white/60'
                    }`}
                >
                    <IoMdPerson />
                    <span>Nome</span>
                </div>
                <input
                    value={name}
                    placeholder="Qual o seu nome?"
                    className="rounded-2xl border border-white bg-transparent px-5 py-3 text-white transition duration-300 placeholder-shown:border-white/60 focus:outline-none"
                    type="text"
                    onChange={(val) => setName(val.target.value)}
                />
            </PopDiv>

            <PopDiv whileInView={popIn(0.3)} className="flex flex-col gap-3">
                <div
                    className={`flex items-center gap-1 transition duration-300 ${
                        email != '' ? 'text-white' : 'text-white/60'
                    }`}
                >
                    <IoIosAt />
                    <span>E-mail</span>
                </div>
                <input
                    value={email}
                    placeholder="Qual o seu e-mail?"
                    className="rounded-2xl border border-white bg-transparent px-5 py-3 text-white transition duration-300 placeholder-shown:border-white/60 focus:outline-none"
                    type="email"
                    onChange={(val) => setEmail(val.target.value)}
                />
            </PopDiv>

            <PopDiv whileInView={popIn(0.3)} className="flex flex-col gap-3">
                <div
                    className={`flex items-center gap-1 transition duration-300 ${
                        message != '' ? 'text-white' : 'text-white/60'
                    }`}
                >
                    <IoIosChatbubbles />
                    <span>Mensagem</span>
                </div>
                <textarea
                    value={message}
                    placeholder="Digite uma mensagem..."
                    className="rounded-2xl border border-white bg-transparent px-5 py-3 text-white transition duration-300 placeholder-shown:border-white/60 focus:outline-none"
                    cols={30}
                    rows={5}
                    onChange={(val) => setMessage(val.target.value)}
                />
            </PopDiv>

            <PopDiv className="w-full" whileInView={popIn(0.3)}>
                <button
                    onClick={() => handleSubmitClick()}
                    disabled={submitDisabled}
                    type="button"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-3xl bg-gradient-to-tr from-pink-600 to-pink-500 px-7 py-5 text-2xl font-bold shadow-button transition-all duration-300 hover:scale-105 disabled:bg-slate-500"
                >
                    <span>Enviar mensagem</span>
                    <IoMdArrowRoundForward />
                </button>
            </PopDiv>
        </form>
    );
};

export default ContactForm;
