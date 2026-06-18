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
import TypingImageText from "../sections/word/TypingImageText";

export default function Home() {
  return (<>
  <div  className="">
    <div className="h5 container  m-2 rounded text-center p-3 text-light" style={{backgroundColor: " #992988"}}>بچه ها داستان زیر را بخوانند و از روی 5 جمله آن بنویسند. </div>


    {/* <ObjectSentenceGame/> */}
    {/* <SentenceObject/> */}
        {/* <WordGameWithCategories initialCategory="زمستان" /> */}
      {/* <VideoCard
        title="قصه کوتاه امروز"
        description="متن فارسی داستان زیر را بخوانید."
        videoFileName={`${process.env.PUBLIC_URL}/video/elephent&ball.mp4`}  // فقط اسم فایل ویدیوی mp4
      /> */}
    {/* <DragDropQuiz/> */}
    {/* <StoryPage3 groupKey="alefba" wantedTitle="چوپان دروغ‌گو" goalGroup=" گروه الفبا " /> */}
        {/* <StoryPage3 groupKey="kalemat" wantedTitle="فیلِ مِهرَبان" goalGroup="گروه الفبا"/> */}
    {/* <SpellingGame/> */}
        {/* <TypingImageText srcImg="https://media.istockphoto.com/id/1204470108/vector/cute-kids-reading-book-and-librarian-in-library-flat-cartoon-illustration.jpg?s=612x612&w=0&k=20&c=NnfqdhoAmTMeNTBD6cvWHwc5pf8K3W-aCrbSOj9Plag="/> */}


        {/* <div className="h5 container m-2 rounded text-center mt-4 p-1 py-3 text-light" style={{backgroundColor: " rgb(86, 134, 202)"}}> گروه کلمات : بچه ها داستان زیر  را بخوانند و از روی کلمات آن با معنی انگلیسی آن دو بار بنویسند. </div> */}
        {/* <div className="h5 container m-2 rounded text-center mt-4 p-1 py-3 text-light" style={{backgroundColor: " rgb(86, 134, 202)"}}> گروه کلمات : بچه ها جملات زیر را مرتب کنند و از روی 5 جمله آن بنویسند. </div> */}
        {/* <TypingQAImageSlider/> */}
    {/* <SentenceBuilder/> */}
    <StoryPage3 groupKey="alefba" wantedTitle="زِندگی مَن" goalGroup="" />
    {/* <StoryPage3 groupKey="kalemat" wantedTitle="یِک نِگاهِ دیگَر" goalGroup="گروه کلمات"/> */}
    {/* <SortableSentencesApp/> */}



    {/* <StoryPage3 groupKey="dastan" wantedTitle="زنبورها در اکوسیستم‌ها" goalGroup="گروه داستان"/> */}
  </div>

  </>)
}

