import React, { FC } from "react";
import Head from "next/head";

interface PageMetadataProps {
    title: string;
}

const PageMetadata: FC<PageMetadataProps> = ({ title }) => (
    <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/chicken.png" />
    </Head>
);


export default PageMetadata;
