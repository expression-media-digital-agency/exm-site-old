/* eslint-disable spaced-comment */
/// <reference types="react-scripts" />

declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}

declare module 'next-page-transitions' {
    export {
        PageTransition
    }
}