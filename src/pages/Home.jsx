import React from "react";
import StoryPage3 from "../sections/story/StoryPage3";
import WordGameWithCategories from "../sections/alphabet/WordGameWithCategories";
import SpellingGame from "../sections/alphabet/SpellingGame";
import SentenceBuilder from "../sections/word/SentenceBuilder";
import SortableSentencesApp from "../sections/word/SortableSentencesApp";
import DragDropQuiz from "../sections/word/DragDropQuiz";
import SentenceObject from "../sections/word/SentenceObject";
import ObjectSentenceGame from "../sections/alphabet/ObjectSentenceGame";
import VideoCard from "../sections/alphabet/VideoCard";
import TypingQAImageSlider from "../sections/word/TypingQAImageSlider";

export default function Home() {
  return (<>
  <div  className="">
    <div className="h5 container  m-2 rounded text-center p-3 text-light" style={{backgroundColor: " #439929"}}>گروه الفبا : بچه ها داستان زیر را بخوانند و از روی چهارخط اول بنویسند. </div>


    {/* <ObjectSentenceGame/> */}
    {/* <SentenceObject/> */}
      {/* <VideoCard
        title="قصه کوتاه امروز"
        description="متن فارسی داستان زیر را بخوانید."
        videoFileName={`${process.env.PUBLIC_URL}/video/anty-1.mp4`}  // فقط اسم فایل ویدیوی mp4
      /> */}
    <StoryPage3 groupKey="alefba" wantedTitle="لِباسِ مِهمانی نازَنین" goalGroup="" />
    {/* <SpellingGame/> */}


        <div className="h5 container m-2 rounded text-center p-1 py-3 text-light" style={{backgroundColor: " #c579dcff"}}> گروه کلمات : بچه ها داستان زیر را بخوانند و کلمات مترادف را به همراه معنی انگلیسی آن بخوانند. </div>

        {/* <TypingQAImageSlider/> */}

    {/* <DragDropQuiz/> */}

    {/* <SentenceBuilder/> */}
    {/* <SortableSentencesApp/> */}
    <StoryPage3 groupKey="kalemat" wantedTitle="یِک بویِ خُوشمَزه" goalGroup="گروه کلمات"/>
    {/* <WordGameWithCategories initialCategory="وسایل مدرسه" /> */}



    {/* <StoryPage3 groupKey="dastan" wantedTitle="زنبورها در اکوسیستم‌ها" goalGroup="گروه داستان"/> */}
  </div>

  </>)
}
