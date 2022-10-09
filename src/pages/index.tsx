import Head from "next/head";
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Surah from "../components/Surah";
import axios from "axios";

const HomePage = () => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.quran.com/api/v3/chapters?language=en")
      .then((res) => {
        setChapters(res.data.chapters);
      });
  }, []);


  

  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <Hero />
      <div className="wrapper py-20">
        <h2 className="uppercase font-semibold text-xl">Surah</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:grid-cols-2">
          {chapters.map((chapter, i) => {
            <Surah key={i} name="Al-Fatiha" meaning="The Opener" serial={1} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
