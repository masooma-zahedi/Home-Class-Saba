import React from "react";
import StoryPage3 from "../sections/story/StoryPage3";
import WordGameWithCategories from "../sections/alphabet/WordGameWithCategories";
import SpellingGame from "../sections/alphabet/SpellingGame";
import SentenceBuilder from "../sections/word/SentenceBuilder";
import SortableSentencesApp from "../sections/word/SortableSentencesApp";

export default function Home() {
  return (<>
  <div >
    <SpellingGame/>
    <StoryPage3 groupKey="alefba" wantedTitle="خارپُشت وَ پاییز" goalGroup="" />

    {/* <SentenceBuilder/> */}
    {/* <SortableSentencesApp/> */}
    {/* <StoryPage3 groupKey="kalemat" wantedTitle="باغِ وَحش" goalGroup="گروه کلمات"/> */}
    {/* <WordGameWithCategories initialCategory="وسایل مدرسه" /> */}
  </div>

  </>)
}
