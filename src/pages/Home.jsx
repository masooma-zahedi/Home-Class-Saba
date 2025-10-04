import React from "react";
import StoryPage3 from "../sections/story/StoryPage3";
import WordGameWithCategories from "../sections/alphabet/WordGameWithCategories";

export default function Home() {
  return (<>
  <div >
    <StoryPage3 groupKey="alefba" wantedTitle="2-لیا و سوت زدن" goalGroup="گروه الفبا" />
    <StoryPage3 groupKey="kalemat" wantedTitle="باغِ وَحش" goalGroup="گروه کلمات"/>
    <WordGameWithCategories initialCategory="وسایل مدرسه" />
  </div>

  </>)
}
