import React from "react";
import StoryPage3 from "../sections/story/StoryPage3";
import WordGameWithCategories from "../sections/alphabet/WordGameWithCategories";
import SpellingGame from "../sections/alphabet/SpellingGame";
import SentenceBuilder from "../sections/word/SentenceBuilder";
import SortableSentencesApp from "../sections/word/SortableSentencesApp";

export default function Home() {
  return (<>
  <div  className="">
    <div className="h5 container bg-info m-3 rounded text-center p-3">بچه ها از روی داستان بخوانند و تا بالای عکس را بنویسند. و گروه کلمات املای کلمات داده شده در پایین را یاد بگیرند و فعالیت  آن را تمرین کنند .</div>
    <StoryPage3 groupKey="alefba" wantedTitle="خارپُشت وَ پاییز" goalGroup="" />
    <SpellingGame/>

    {/* <SentenceBuilder/> */}
    {/* <SortableSentencesApp/> */}
    {/* <StoryPage3 groupKey="kalemat" wantedTitle="باغِ وَحش" goalGroup="گروه کلمات"/> */}
    {/* <WordGameWithCategories initialCategory="وسایل مدرسه" /> */}
  </div>

  </>)
}
