import { useRouter } from 'next/router'
import React from 'react'
import { GetServerSideProps, NextPage } from "next";

interface Props{
    chapterId: string;
}

const ChapterDetails: NextPage<Props> = ({chapterId}) => {
    
  return (
      <div>ChapterDetails: {chapterId}</div>
  )
}

export const  getServerSideProps: GetServerSideProps = async (context) =>{
    return {
      props: {
        chapterId: context.query.chapterId as string,
      },
    };
}

export default ChapterDetails;