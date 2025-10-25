import React from "react";
import StoryPage3 from "../sections/story/StoryPage3";
import WordGameWithCategories from "../sections/alphabet/WordGameWithCategories";
import SpellingGame from "../sections/alphabet/SpellingGame";
import SentenceBuilder from "../sections/word/SentenceBuilder";
import SortableSentencesApp from "../sections/word/SortableSentencesApp";
import DragDropQuiz from "../sections/word/DragDropQuiz";
import SentenceObject from "../sections/word/SentenceObject";

export default function Home() {
  return (<>
  <div  className="">
    <div className="h5 container bg-info m-2 rounded text-center p-3">گروه الفبا جملات صبحانه را بخوانند و از روی 5 جمله آن بنویسند. گروه کلمات داستان را بخوانند و تا بالای عکس بنویسند</div>


    {/* <StoryPage3 groupKey="alefba" wantedTitle="پیک نیک" goalGroup="" /> */}
    {/* <SpellingGame/> */}
    
    <SentenceObject/>

    {/* <DragDropQuiz/> */}

    {/* <SentenceBuilder/> */}
    {/* <SortableSentencesApp/> */}
    <StoryPage3 groupKey="kalemat" wantedTitle="پیک نیک" goalGroup="گروه کلمات"/>
    <StoryPage3 groupKey="dastan" wantedTitle="مرغ ماهی‌خوار و ماهی" goalGroup="گروه داستان"/>
    {/* <WordGameWithCategories initialCategory="وسایل مدرسه" /> */}
  </div>

  </>)
}
