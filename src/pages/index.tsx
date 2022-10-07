import Head from "next/head";
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Surah from "../components/Surah";
import axios from "axios";

const HomePage = () => {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.quran.com/api/v4/chapters?language=en")
      .then((res) => {
        console.log(res.data);
      });
  });

  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <Hero />
      <div className="wrapper py-20">
        <h2 className="uppercase font-semibold text-xl">Surah</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:grid-cols-2">
          <Surah name="Al-Fatiha" meaning="The Opener" serial={1} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
