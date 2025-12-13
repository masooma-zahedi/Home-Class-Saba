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
    <div className="h5 container bg-info m-2 rounded text-center p-3">گروه الفبا : بچه ها فارسی داستان زیر را بخوانند و از روی 6 جمله آن بنویسند. </div>


    {/* <ObjectSentenceGame/> */}
    {/* <SentenceObject/> */}
      <VideoCard
        title="قصه کوتاه امروز"
        description="متن فارسی داستان زیر را بخوانید."
        videoFileName={`${process.env.PUBLIC_URL}/video/anty-1.mp4`}  // فقط اسم فایل ویدیوی mp4
      />
    {/* <StoryPage3 groupKey="alefba" wantedTitle="بازی در بَرف" goalGroup="" /> */}
    {/* <SpellingGame/> */}


        <div className="h5 container m-2 rounded text-center p-1 py-3 text-light" style={{backgroundColor: " #c579dcff"}}> گروه کلمات : جملات بهم ریخته زیر را مرتب کنند و از روی 6 جمله درست آن بنویسند. </div>

        {/* <TypingQAImageSlider/> */}

    {/* <DragDropQuiz/> */}

    <SentenceBuilder/>
    {/* <SortableSentencesApp/> */}
    <StoryPage3 groupKey="kalemat" wantedTitle="عَلی و تَنبلی" goalGroup="گروه کلمات"/>
    {/* <WordGameWithCategories initialCategory="وسایل مدرسه" /> */}



    {/* <StoryPage3 groupKey="dastan" wantedTitle="زنبورها در اکوسیستم‌ها" goalGroup="گروه داستان"/> */}
  </div>

  </>)
}
