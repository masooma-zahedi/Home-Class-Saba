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

export default function Home() {
  return (<>
  <div  className="">
    <div className="h5 container bg-info m-2 rounded text-center p-3">گروه الفبا بچه ها فیلم زیر را ببینند و جملات فارسی آن را بخوانند. و از روی 6 جمله آن بنویسند. گروه کلمات داستان را بخوانند و از روی 7 خط آن بنویسند. </div>


    {/* <ObjectSentenceGame/> */}
    {/* <SentenceObject/> */}
      <VideoCard
        title="قصه کوتاه امروز"
        description="متن فارسی داستان زیر را بخوانید."
        videoFileName={`${process.env.PUBLIC_URL}/video/chick.mp4`}  // فقط اسم فایل ویدیوی mp4
      />
    <StoryPage3 groupKey="alefba" wantedTitle="دَفترِ رِضوان" goalGroup="" />
    <SpellingGame/>


    {/* <DragDropQuiz/> */}

    {/* <SentenceBuilder/> */}
    {/* <SortableSentencesApp/> */}
    {/* <StoryPage3 groupKey="kalemat" wantedTitle="پیک نیک" goalGroup="گروه کلمات"/> */}
    {/* <WordGameWithCategories initialCategory="وسایل مدرسه" /> */}



    <StoryPage3 groupKey="dastan" wantedTitle="زنبورها در اکوسیستم‌ها" goalGroup="گروه داستان"/>
  </div>

  </>)
}
