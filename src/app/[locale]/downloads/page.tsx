"use client";

import { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import Link from "next/link";

import { LinearProgress } from "@mui/material";

import DownloadButton from "@/components/DownloadButton";

import { getIntl } from "@/lib/intl";

type DownloadsProps = {
    params: { locale: string };
  }
  
  export default function Downloads({ params }: DownloadsProps) {
    const { locale } = params;
    const [intl, setIntl] = useState<any>(null);


    useEffect(() => {
        async function loadTranslations() {
          const loadedIntl = await getIntl(locale);
          setIntl(loadedIntl);
        }
        loadTranslations();
      }, []);

    if (!intl) {
        return <div><LinearProgress color='success'/></div>
    }
  
    return (
      <div className='page'>
          <h1>{intl.formatMessage({ id: "files.title" })}</h1>
          <div>
            <DownloadButton href="/img/food-ingredients-english.pdf"  download="food-ingredients-english.pdf" text={intl.formatMessage({ id: "files.incompatibilities_en" })}></DownloadButton> 
            <DownloadButton href="/img/food-ingredients-german.pdf"  download="food-ingredients-german.pdf" text={intl.formatMessage({ id: "files.incompatibilities_de" })}></DownloadButton>
            <DownloadButton href="/img/breakfast_times.pdf"  download="breakfast_times.pdf" text={intl.formatMessage({ id: "files.breakfast_times" })}></DownloadButton>               
            <DownloadButton href="/img/lunch_groups_tuesday.pdf"  download="lunch_groups_tuesday.pdf" text={intl.formatMessage({ id: "files.lunch_groups_tuesday" })}></DownloadButton>               

          </div>
          
          
          
      </div>
    );
  };
    
  