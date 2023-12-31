import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import Spinner from '@/shared/ui/spinner/Spinner';

import s from './button.module.scss';

export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T;
    variant?: 'primary' | 'secondary' | 'outlined' | 'link';
    fullWidth?: boolean;
    className?: string;
    isLoading?: boolean;
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;

// С помощью Omit мы убираем из пропсов переданного компонента все пропсы,
// которые уже есть в наших кастомных пропсах, тем самым избегая коллизий.
export const Button = <T extends ElementType = 'button'>(
    props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
    const { variant = 'primary', fullWidth, className, children, isLoading, as: Component = 'button', ...rest } = props;

    return (
        <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest}>
            {children}
            {isLoading && <Spinner />}
        </Component>
    );
};
