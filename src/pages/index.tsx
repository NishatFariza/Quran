import Head from "next/head";
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Surah from "../components/Surah";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Chapter } from "../Models/ChapterModel";

const HomePage = () => {
  const [chapters, setChapters] = useState([]);

  const { data } = useQuery(["chapters"], async () => {
    const res = await axios.get("https://api.quran.com/api/v3/chapters");
    return res.data.chapters as Chapter[];
  });

  // const {data, isLoading} = useQuery([chapters], () => {

  //   const res = await axios.get("https://api.quran.com/api/v3/chapters?language=en");

  //   return res.data.chapters as Chapter[]

  // })

  // useEffect(() => {

  //     .then((res) => {
  //       setChapters(res.data.chapters);
  //     });
  // }, []);

  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <Hero />
      <div className="wrapper py-20">
        <h2 className="uppercase font-semibold text-xl">Surah</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:grid-cols-2">
          {data?.map((chapter, i) => (
            <Surah
              key={i}
              arabic_name={chapter.name_arabic}
              english_name={chapter.name_simple}
              meaning={chapter.translated_name.name}
              number_of_verses={chapter.verses_count}
              revelation_place={chapter.revelation_place}
              serial={chapter.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
