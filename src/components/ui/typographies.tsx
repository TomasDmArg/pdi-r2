import React from "react";

// Text components
interface HeadingProps extends React.ComponentPropsWithoutRef<"h1"> { }

export function H1(props: HeadingProps) {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {props.children}
        </h1>
    )
}

export function H2(props: HeadingProps) {
    return (
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">
            {props.children}
        </h2>
    )
}

export function P(props: React.ComponentPropsWithoutRef<"p">) {
    return (
        <p className="leading-7">
            {props.children}
        </p>
    )
}

export function H3(props: HeadingProps) {
    return (
        <h3 className="text-2xl font-semibold tracking-tight">
            {props.children}
        </h3>
    )
}

export function H4(props: HeadingProps) {
    return (
        <h4 className="|text-xl font-semibold tracking-tight">
            {props.children}
        </h4>
    )
}

export function A(props: React.ComponentPropsWithoutRef<"a">) {
    return (
        <a className="text-blue-600 hover:underline">
            {props.children}
        </a>
    )
}