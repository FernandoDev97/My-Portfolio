'use client'
import React, { useState } from 'react'
import { SectionTitle } from '../../section-title'
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from '../../button';
import useCheckMobileScreen from '@/app/hooks/useCheckMobileScreen';
import { AiOutlineDownload } from 'react-icons/ai';
import { motion } from 'framer-motion';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const animationProps = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
}

const ResumePdf = () => {
  const isMobile = useCheckMobileScreen();
  const [file, setFile] = useState("./resume.pdf");

  return (
    <section className='main-container pt-40 md:py-10'>
      <div className='"w-full max-w-[720px] mx-auto'>
        <SectionTitle className="items-center text-center" subtitle="currículo" title="Caso tenha interesse:" />
        <motion.div 
          {...animationProps}
          transition={{duration: 0.5}}
          className='flex justify-center items-center flex-col pt-9'
        >
          <Document file={file} className="resume flex justify-center items-center">
            <Page pageNumber={1} scale={isMobile ? 0.5 : 1.4} />
          </Document>
          <a href={file && file} target='_blank' className='pt-9'>
            <Button>
              Download CV
              <AiOutlineDownload size={24}/>
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ResumePdf