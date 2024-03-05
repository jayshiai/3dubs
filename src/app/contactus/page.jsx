
"use client"

import { useEffect, useState } from 'react';
import ContactCard from "@/components/contactus/ContactCard"
import ContactClock from '@/components/contactus/ContactClock';
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';
import BackButton from '@/components/BackButton';
const page = () => {
    // Define your variants
    const variants = [<ContactCard />, <ContactClock />];

    // State to hold the selected variant index
    const [variantIndex, setVariantIndex] = useState();

    useEffect(() => {
        // Check if config exists in Session Storage
        const configString = sessionStorage.getItem('config');

        if (configString) {
            // Parse the config JSON string
            const config = JSON.parse(configString);

            // Update the variant index based on the 'about' key in the config
            setVariantIndex(config['contact']);
        }
        else {
            setVariantIndex(0)
        }
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    return (
        <>
            <BackButton />
            {variants[variantIndex]}
        </>
    )
}

export default page