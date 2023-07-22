import Image from 'next/image';
import style from './Links.module.css';

export const Links = () => {
    return (
        <div className={style.links}>
            <Image src="/assets/google.png" alt="Sign up with google" width={36} height={36} />
            <Image src="/assets/gitHub.png" alt="Sign up with gitHub" width={36} height={36} />
        </div>
    );
};
