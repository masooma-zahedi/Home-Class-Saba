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
    <div className="h5 container  m-2 rounded text-center p-3 text-light" style={{backgroundColor: " #439929"}}>گروه الفبا: بچه ها جملات زیر را درست کنند  و از روی 5 جمله آن بنویسند. </div>


    {/* <ObjectSentenceGame/> */}
    {/* <SentenceObject/> */}
        {/* <WordGameWithCategories initialCategory="زمستان" /> */}
      {/* <VideoCard
        title="قصه کوتاه امروز"
        description="متن فارسی داستان زیر را بخوانید."
        videoFileName={`${process.env.PUBLIC_URL}/video/fox&crew.mp4`}  // فقط اسم فایل ویدیوی mp4
      /> */}
          {/* <SentenceBuilder/> */}
    <DragDropQuiz/>
    {/* <StoryPage3 groupKey="alefba" wantedTitle="خانِهٔ مادَربُزُرگ" goalGroup="" /> */}
    {/* <SpellingGame/> */}


        <div className="h5 container m-2 rounded text-center mt-4 p-1 py-3 text-light" style={{backgroundColor: " rgb(86, 134, 202)"}}> گروه کلمات : بچه ها داستان زیر را بخوانند و از روی کلمات آن با معنی انگلیسی آن یک بار بنویسند. </div>

        {/* <TypingQAImageSlider/> */}
    <StoryPage3 groupKey="alefba" wantedTitle="خانِهٔ مادَربُزُرگ" goalGroup="" />


    {/* <StoryPage3 groupKey="kalemat" wantedTitle="کُلاه‌فُروش" goalGroup="گروه کلمات"/> */}
    {/* <SortableSentencesApp/> */}



    {/* <StoryPage3 groupKey="dastan" wantedTitle="زنبورها در اکوسیستم‌ها" goalGroup="گروه داستان"/> */}
  </div>

  </>)
}
