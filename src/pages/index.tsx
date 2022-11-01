import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Hero from "../components/Hero";
import Surah from "../components/Surah";
import { Chapter } from "../Models/ChapterModel";


interface props{
  chapters: Chapter[];
}



const HomePage: NextPage<props> = ({chapters}) => {

  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <Hero />

      <div className="wrapper py-20">
        <h2 className="uppercase font-semibold text-xl mb-6">Surah</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:grid-cols-2">
          {chapters?.map((chapter, i) => (
            <Link href={`/test`} key={i}>
              <a>
                <Surah
                  arabic_name={chapter.name_arabic}
                  english_name={chapter.name_simple}
                  meaning={chapter.translated_name.name}
                  number_of_verses={chapter.verses_count}
                  revelation_place={chapter.revelation_place}
                  serial={chapter.id}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// This make sure that the data is fetched before the page is rendered
export const getServerSideProps: GetServerSideProps = async () => {
    const res = await axios.get("https://api.quran.com/api/v3/chapters");

  return {
    props: {
      chapters: res.data.chapters,
    },
  };
}

export default HomePage;
