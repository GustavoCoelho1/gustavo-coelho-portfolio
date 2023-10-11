'use client';

import WavyShape from '@/app/components/design/WavyShape';
import ContactForm from './ContactForm';
import { PopSpan, popIn } from '@/app/lib/animations';

interface Props {
    background: string;
}

const ContactSection: React.FC<Props> = ({ background }) => {
    return (
        <section id="contact" className={`w-full ${background}`}>
            <div className="flex min-h-[80vh] w-full items-center justify-center">
                <WavyShape>
                    <div className="z-10 flex h-full w-full flex-col items-center justify-start gap-14 py-36 ">
                        <div className="flex flex-col items-center gap-2">
                            <PopSpan
                                whileInView={popIn(0.1)}
                                className="text-pink-400/80 "
                            >
                                Gostou do meu trabalho?
                            </PopSpan>
                            <PopSpan
                                whileInView={popIn(0.3)}
                                className="text-3xl font-bold sm:text-4xl"
                            >
                                Entre em contato!
                            </PopSpan>
                        </div>

                        <ContactForm />
                    </div>
                </WavyShape>
            </div>
        </section>
    );
};

export default ContactSection;
