import React from "react";
import StoryPage3 from "../sections/story/StoryPage3";
import WordGameWithCategories from "../sections/alphabet/WordGameWithCategories";
import SpellingGame from "../sections/alphabet/SpellingGame";
import SentenceBuilder from "../sections/word/SentenceBuilder";
import SortableSentencesApp from "../sections/word/SortableSentencesApp";
import DragDropQuiz from "../sections/word/DragDropQuiz";
import SentenceObject from "../sections/word/SentenceObject";
import ObjectSentenceGame from "../sections/alphabet/ObjectSentenceGame";

export default function Home() {
  return (<>
  <div  className="">
    <div className="h5 container bg-info m-2 rounded text-center p-3">گروه الفبا جملات زیر را تمرین کنند و از روی 7 جمله جواب درست آن بنویسند. گروه کلمات جملات را مرتب و از روی 7 جمله درست آن بنویسند. </div>


    {/* <StoryPage3 groupKey="alefba" wantedTitle="پیک نیک" goalGroup="" /> */}
    {/* <SpellingGame/> */}
    <ObjectSentenceGame/>
    {/* <SentenceObject/> */}

    {/* <DragDropQuiz/> */}

    <SentenceBuilder/>
    {/* <SortableSentencesApp/> */}
    {/* <StoryPage3 groupKey="kalemat" wantedTitle="پیک نیک" goalGroup="گروه کلمات"/> */}
    {/* <WordGameWithCategories initialCategory="وسایل مدرسه" /> */}



    <StoryPage3 groupKey="dastan" wantedTitle="زنبورها در اکوسیستم‌ها" goalGroup="گروه داستان"/>
  </div>

  </>)
}
