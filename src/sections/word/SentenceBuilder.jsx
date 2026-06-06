import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

/* ===== ابزار ===== */
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const SentenceBuilder = () => {
  /* ===== تشخیص موبایل ===== */
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ===== داده‌ها ===== */
  const sentenceData = {
  //   داستان_روباه2: [
  //   {
  //     fa: ["روباه", "کنار", "رود", "زندگی", "می‌کند"],
  //     correctFa: ["روباه", "کنار", "رود", "زندگی", "می‌کند"],
  //     en: "The fox lives by the river"
  //   },
  //   {
  //     fa: ["روباه", "هر", "روز", "آب", "می‌نوشد"],
  //     correctFa: ["روباه", "هر", "روز", "آب", "می‌نوشد"],
  //     en: "The fox drinks water every day"
  //   },
  //   {
  //     fa: ["یک", "روز", "رنگین‌کمان", "آمد"],
  //     correctFa: ["یک", "روز", "رنگین‌کمان", "آمد"],
  //     en: "One day a rainbow came"
  //   },
  //   {
  //     fa: ["روباه", "گفت", "چه", "رنگ‌های", "زیبایی"],
  //     correctFa: ["روباه", "گفت", "چه", "رنگ‌های", "زیبایی"],
  //     en: "The fox said what beautiful colors"
  //   },
  //   {
  //     fa: ["روباه", "خواست", "رنگین‌کمان","را", "ببیند"],
  //     correctFa: ["روباه", "خواست", "رنگین‌کمان","را", "ببیند"],
  //     en: "The fox wanted to see the rainbow"
  //   },
  //   {
  //     fa: ["رود", "آب", "و", "سنگ", "داشت"],
  //     correctFa: ["رود", "آب", "و", "سنگ", "داشت"],
  //     en: "The river had water and stones"
  //   },
  //   {
  //     fa: ["روباه", "فکر", "کرد"],
  //     correctFa: ["روباه", "فکر", "کرد"],
  //     en: "The fox thought"
  //   },
  //   {
  //     fa: ["روباه", "گفت", "باید", "از", "پل", "بروم"],
  //     correctFa: ["روباه", "گفت", "باید", "از", "پل", "بروم"],
  //     en: "The fox said I must go over the bridge"
  //   },
  //   {
  //     fa: ["روباه", "پل","را", "پیدا", "کرد"],
  //     correctFa: ["روباه", "پل","را", "پیدا", "کرد"],
  //     en: "The fox found the bridge"
  //   },
  //   {
  //     fa: ["روباه", "از", "پل", "گذشت"],
  //     correctFa: ["روباه", "از", "پل", "گذشت"],
  //     en: "The fox crossed the bridge"
  //   },
  //   {
  //     fa: ["روباه", "رنگین‌کمان","را", "دید"],
  //     correctFa: ["روباه", "رنگین‌کمان","را", "دید"],
  //     en: "The fox saw the rainbow"
  //   },
  //   {
  //     fa: ["روباه", "خوشحال", "شد"],
  //     correctFa: ["روباه", "خوشحال", "شد"],
  //     en: "The fox became happy"
  //   },
  //   {
  //     fa: ["روباه", "گفت", "من", "باهوش", "هستم"],
  //     correctFa: ["روباه", "گفت", "من", "باهوش", "هستم"],
  //     en: "The fox said I am clever"
  //   },
  //   {
  //     fa: ["روباه", "هر", "روز","به طَرَفِ", "رود", "می‌رود"],
  //     correctFa: ["روباه", "هر", "روز","به طَرَفِ", "رود", "می‌رود"],
  //     en: "The fox goes to the river every day"
  //   },
  //   {
  //     fa: ["روباه", "خوشحال", "است"],
  //     correctFa: ["روباه", "خوشحال", "است"],
  //     en: "The fox is happy"
  //   },
  // ],
    // داستان_روباه: [
    //   {
    //     fa: ["یک", "روباه", "باهوش", "کنار", "رودخانه", "زندگی", "می‌کرد"],
    //     correctFa: ["یک", "روباه", "باهوش", "کنار", "رودخانه", "زندگی", "می‌کرد"],
    //     en: "A clever fox lived beside a river"
    //   },
    //   {
    //     fa: ["روباه", "هر", "روز", "به", "کنار", "رود", "می‌رفت", "و", "آب", "می‌نوشید"],
    //     correctFa: ["روباه", "هر", "روز", "به", "کنار", "رود", "می‌رفت", "و", "آب", "می‌نوشید"],
    //     en: "The fox went to the river every day and drank water"
    //   },
    //   {
    //     fa: ["یک", "روز", "رنگین‌کمان", "زیبایی", "در", "آسمان", "پدیدار", "شد"],
    //     correctFa: ["یک", "روز", "رنگین‌کمان", "زیبایی", "در", "آسمان", "پدیدار", "شد"],
    //     en: "One day a beautiful rainbow appeared in the sky"
    //   },
    //   {
    //     fa: ["روباه", "گفت", "به‌به", "چه", "رنگ‌های", "قشنگی"],
    //     correctFa: ["روباه", "گفت", "به‌به", "چه", "رنگ‌های", "قشنگی"],
    //     en: "The fox said wow, what beautiful colors"
    //   },
    //   {
    //     fa: ["روباه", "خواست", "از", "روی", "رودخانه", "عبور", "کند"],
    //     correctFa: ["روباه", "خواست", "از", "روی", "رودخانه", "عبور", "کند"],
    //     en: "The fox wanted to cross the river"
    //   },
    //   {
    //     fa: ["رودخانه", "پر", "از", "سنگ", "و", "آب", "بود"],
    //     correctFa: ["رودخانه", "پر", "از", "سنگ", "و", "آب", "بود"],
    //     en: "The river was full of stones and water"
    //   },
    //   {
    //     fa: ["روباه", "خیلی", "فکر", "کرد"],
    //     correctFa: ["روباه", "خیلی", "فکر", "کرد"],
    //     en: "The fox thought a lot"
    //   },
    //   {
    //     fa: ["روباه", "گفت", "راه", "درست", "عبور", "از", "پل", "است"],
    //     correctFa: ["روباه", "گفت", "راه", "درست", "عبور", "از", "پل", "است"],
    //     en: "The fox said the right way is to cross the bridge"
    //   },
    //   {
    //     fa: ["روباه", "پل", "را", "پیدا", "کرد"],
    //     correctFa: ["روباه", "پل", "را", "پیدا", "کرد"],
    //     en: "The fox found the bridge"
    //   },
    //   {
    //     fa: ["روباه", "از", "روی", "پل", "عبور", "کرد"],
    //     correctFa: ["روباه", "از", "روی", "پل", "عبور", "کرد"],
    //     en: "The fox crossed the bridge"
    //   },
    //   {
    //     fa: ["روباه", "رنگین‌کمان", "را", "از", "طرف", "دیگر", "دید"],
    //     correctFa: ["روباه", "رنگین‌کمان", "را", "از", "طرف", "دیگر", "دید"],
    //     en: "The fox saw the rainbow from the other side"
    //   },
    //   {
    //     fa: ["روباه", "خیلی", "خوشحال", "شد"],
    //     correctFa: ["روباه", "خیلی", "خوشحال", "شد"],
    //     en: "The fox became very happy"
    //   },
    //   {
    //     fa: ["روباه", "گفت", "من", "روباه", "زیرکم"],
    //     correctFa: ["روباه", "گفت", "من", "روباه", "زیرکم"],
    //     en: "The fox said I am a clever fox"
    //   },
    //   {
    //     fa: ["روباه", "هر", "روز", "به", "رودخانه", "می‌رفت"],
    //     correctFa: ["روباه", "هر", "روز", "به", "رودخانه", "می‌رفت"],
    //     en: "The fox went to the river every day"
    //   },
    //   {
    //     fa: ["روباه", "از", "زندگی", "خود", "راضی", "بود"],
    //     correctFa: ["روباه", "از", "زندگی", "خود", "راضی", "بود"],
    //     en: "The fox was happy with his life"
    //   },
    // ],
    // برادر_کوچک_من: [
    //   {
    //     fa: ["یک", "روز", "صبح", "مادر", "مرا", "صدا", "زد"],
    //     correctFa: ["یک", "روز", "صبح", "مادر", "مرا", "صدا", "زد"],
    //     en: "One morning, mother called me"
    //   },
    //   {
    //     fa: ["مادر", "گفت", "برادرت", "بیدار", "شده", "است"],
    //     correctFa: ["مادر", "گفت", "برادرت", "بیدار", "شده", "است"],
    //     en: "Mother said your brother is awake"
    //   },
    //   {
    //     fa: ["من", "به", "اتاق", "برادرم", "رفتم"],
    //     correctFa: ["من", "به", "اتاق", "برادرم", "رفتم"],
    //     en: "I went to my brother's room"
    //   },
    //   {
    //     fa: ["برادرم", "نوید", "روی", "تختش", "در", "حال", "خوابیدن", "بود"],
    //     correctFa: ["برادرم", "نوید", "روی", "تختش", "در", "حال", "خوابیدن", "بود"],
    //     en: "My brother Navid was lying on his bed"
    //   },
    //   {
    //     fa: ["او", "با", "چشم‌های", "درشت", "به", "من", "نگاه", "کرد"],
    //     correctFa: ["او", "با", "چشم‌های", "درشت", "به", "من", "نگاه", "کرد"],
    //     en: "He looked at me with big eyes"
    //   },
    //   {
    //     fa: ["من", "به", "او", "لبخند", "زدم"],
    //     correctFa: ["من", "به", "او", "لبخند", "زدم"],
    //     en: "I smiled at him"
    //   },
    //   {
    //     fa: ["نوید", "دست", "کوچکش", "را", "بالا", "آورد"],
    //     correctFa: ["نوید", "دست", "کوچکش", "را", "بالا", "آورد"],
    //     en: "Navid raised his small hand"
    //   },
    //   {
    //     fa: ["من", "دست", "او", "را", "گرفتم"],
    //     correctFa: ["من", "دست", "او", "را", "گرفتم"],
    //     en: "I held his hand"
    //   },
    //   {
    //     fa: ["به", "برادرم", "گفتم", "من", "برادر", "بزرگت", "هستم"],
    //     correctFa: ["به", "برادرم", "گفتم", "من", "برادر", "بزرگت", "هستم"],
    //     en: "I told my brother I am your big brother"
    //   },
    //   {
    //     fa: ["مادر", "گفت", "برای", "نوید", "قصه", "بخوان"],
    //     correctFa: ["مادر", "گفت", "برای", "نوید", "قصه", "بخوان"],
    //     en: "Mother said read a story for Navid"
    //   },
    //   {
    //     fa: ["من", "کنار", "تخت", "نشستم", "و", "قصه", "شروع", "کردم"],
    //     correctFa: ["من", "کنار", "تخت", "نشستم", "و", "قصه", "شروع", "کردم"],
    //     en: "I sat beside the bed and started the story"
    //   },
    //   {
    //     fa: ["نوید", "با", "صدای", "کوچکش", "جواب", "داد"],
    //     correctFa: ["نوید", "با", "صدای", "کوچکش", "جواب", "داد"],
    //     en: "Navid answered with his little voice"
    //   },
    //   {
    //     fa: ["مادر", "گفت", "او", "با", "تو", "حرف", "می‌زند"],
    //     correctFa: ["مادر", "گفت", "او", "با", "تو", "حرف", "می‌زند"],
    //     en: "Mother said he is talking to you"
    //   },
    //   {
    //     fa: ["من", "برای", "نوید", "آواز", "خواندم"],
    //     correctFa: ["من", "برای", "نوید", "آواز", "خواندم"],
    //     en: "I sang a song for Navid"
    //   },
    //   {
    //     fa: ["من", "همیشه", "مراقب", "برادرم", "خواهم", "بود"],
    //     correctFa: ["من", "همیشه", "مراقب", "برادرم", "خواهم", "بود"],
    //     en: "I will always take care of my brother"
    //   }
    // ],
//     داستان_یپک_نیک : [
//   {
//     fa: ["یک", "روز", "آفتابی", "لیلا", "و", "مکس", "به", "سفر", "رفتند"],
//     correctFa: ["یک", "روز", "آفتابی", "لیلا", "و", "مکس", "به", "سفر", "رفتند"],
//     en: "One sunny day, Leila and Max went on a trip.",
//     image: ""
//   },
//   {
//     fa: ["پدر", "و", "مادر", "لیلا", "و", "مکس", "خوراکی", "و", "اسباب‌بازی", "در", "ماشین", "گذاشتند"],
//     correctFa: ["پدر", "و", "مادر", "لیلا", "و", "مکس", "خوراکی", "و", "اسباب‌بازی", "در", "ماشین", "گذاشتند"],
//     en: "Leila and Max’s parents put snacks and toys in the car.",
//     image: ""
//   },
//   {
//     fa: ["لیلا", "در", "راه", "گل‌های", "رنگی", "دید"],
//     correctFa: ["لیلا", "در", "راه", "گل‌های", "رنگی", "دید"],
//     en: "Leila saw colorful flowers on the way.",
//     image: ""
//   },
//   {
//     fa: ["مکس", "اردک‌ها", "را", "در", "برکه", "دید"],
//     correctFa: ["مکس", "اردک‌ها", "را", "در", "برکه", "دید"],
//     en: "Max saw ducks in the pond.",
//     image: ""
//   },
//   {
//     fa: ["لیلا", "و", "مکس", "آواز", "خواندند", "و", "خندیدند"],
//     correctFa: ["لیلا", "و", "مکس", "آواز", "خواندند", "و", "خندیدند"],
//     en: "Leila and Max sang and laughed.",
//     image: ""
//   },
//   {
//     fa: ["آن‌ها", "کنار", "جنگل", "پیک‌نیک", "کردند"],
//     correctFa: ["آن‌ها", "کنار", "جنگل", "پیک‌نیک", "کردند"],
//     en: "They had a picnic by the forest.",
//     image: ""
//   },
//   {
//     fa: ["لیلا", "و", "مکس", "ساندویچ", "و", "سیب", "خوردند"],
//     correctFa: ["لیلا", "و", "مکس", "ساندویچ", "و", "سیب", "خوردند"],
//     en: "Leila and Max ate sandwiches and apples.",
//     image: ""
//   },
//   {
//     fa: ["پرنده‌ها", "در", "جنگل", "آواز", "می‌خواندند"],
//     correctFa: ["پرنده‌ها", "در", "جنگل", "آواز", "می‌خواندند"],
//     en: "The birds were singing in the forest.",
//     image: ""
//   },
//   {
//     fa: ["آن‌ها", "یک", "سنجاب", "دیدند", "که", "فندق", "می‌خورد"],
//     correctFa: ["آن‌ها", "یک", "سنجاب", "دیدند", "که", "فندق", "می‌خورد"],
//     en: "They saw a squirrel eating a nut.",
//     image: ""
//   },
//   {
//     fa: ["لیلا", "و", "مکس", "به", "دریاچه", "رسیدند"],
//     correctFa: ["لیلا", "و", "مکس", "به", "دریاچه", "رسیدند"],
//     en: "Leila and Max arrived at the lake.",
//     image: ""
//   },
//   {
//     fa: ["آب", "در", "دریاچه", "می‌درخشید"],
//     correctFa: ["آب", "در", "دریاچه", "می‌درخشید"],
//     en: "The water in the lake was shining.",
//     image: ""
//   },
//   {
//     fa: ["لیلا", "سنگ‌ها", "را", "روی", "آب", "پرت", "کرد"],
//     correctFa: ["لیلا", "سنگ‌ها", "را", "روی", "آب", "پرت", "کرد"],
//     en: "Leila threw stones on the water.",
//     image: ""
//   },
//   {
//     fa: ["مکس", "قلعه‌ی", "شنی", "ساخت"],
//     correctFa: ["مکس", "قلعه‌ی", "شنی", "ساخت"],
//     en: "Max built a sand castle.",
//     image: ""
//   },
//   {
//     fa: ["شب", "ستاره‌ها", "در", "آسمان", "می‌درخشیدند"],
//     correctFa: ["شب", "ستاره‌ها", "در", "آسمان", "می‌درخشیدند"],
//     en: "At night, the stars were shining in the sky.",
//     image: ""
//   },
//   {
//     fa: ["مکس", "گفت", "این", "بهترین", "سفر", "دنیاست"],
//     correctFa: ["مکس", "گفت", "این", "بهترین", "سفر", "دنیاست"],
//     en: "Max said this is the best trip ever.",
//     image: ""
//   }
// ],
// مینا_و_راستگویی: [
//   {
//     fa: ["مینا", "عاشِقِ", "گَشتَن", "دَر", "جَنگَل", "بود"],
//     correctFa: ["مینا", "عاشِقِ", "گَشتَن", "دَر", "جَنگَل", "بود"],
//     en: "Mina loved exploring in the forest"
//   },
//   {
//     fa: ["یِک", "صُبحِ", "آفـتابی", "او", "چیزِ", "بَراق", "وَ", "قِرمِزی", "دید"],
//     correctFa: ["یِک", "صُبحِ", "آفـتابی", "او", "چیزِ", "بَراق", "وَ", "قِرمِزی", "دید"],
//     en: "One sunny morning, she saw something shiny and red"
//   },
//   {
//     fa: ["یِک", "تیـلِه‌", "قِرمِز", "زِیرِ", "نورِ", "خورشید", "می‌دِرَخشید"],
//     correctFa: ["یِک", "تیـلِه‌", "قِرمِز", "زِیرِ", "نورِ", "خورشید", "می‌دِرَخشید"],
//     en: "A red marble was shining under the sunlight"
//   },
//   {
//     fa: ["مینا", "دِلَش", "می‌خواست", "آن", "را", "هَمیـشه", "نِگه", "دارد"],
//     correctFa: ["مینا", "دِلَش", "می‌خواست", "آن", "را", "هَمیـشه", "نِگه", "دارد"],
//     en: "Mina wanted to keep it forever"
//   },
//   {
//     fa: ["اَمّا", "او", "یـادِ", "حَرف‌هایِ", "آقایِ", "جُغد", "اُفتاد"],
//     correctFa: ["اَمّا", "او", "یـادِ", "حَرف‌هایِ", "آقایِ", "جُغد", "اُفتاد"],
//     en: "But she remembered Mr. Owl’s words"
//   },
//   {
//     fa: ["آقایِ", "جُغد", "گُفته", "بود", "هَمیـشه", "راست", "بِگو"],
//     correctFa: ["آقایِ", "جُغد", "گُفته", "بود", "هَمیـشه", "راست", "بِگو"],
//     en: "Mr. Owl had said, 'Always tell the truth'"
//   },
//   {
//     fa: ["مینا", "جُلو‌تَر", "رَفت", "وَ", "آقایِ", "جُغد", "را", "دید"],
//     correctFa: ["مینا", "جُلو‌تَر", "رَفت", "وَ", "آقایِ", "جُغد", "را", "دید"],
//     en: "Mina walked ahead and saw Mr. Owl"
//   },
//   {
//     fa: ["مینا", "گُفت", "صُبح", "بِخیر", "آقایِ", "جُغد"],
//     correctFa: ["مینا", "گُفت", "صُبح", "بِخیر", "آقایِ", "جُغد"],
//     en: "Mina said, 'Good morning, Mr. Owl!'"
//   },
//   {
//     fa: ["او", "تیـلِه", "را", "بالا", "گِرِفت", "تا", "نور", "رویِ", "آن", "بَتابَد"],
//     correctFa: ["او", "تیـلِه", "را", "بالا", "گِرِفت", "تا", "نور", "رویِ", "آن", "بَتابَد"],
//     en: "She held up the marble so the light would shine on it"
//   },
//   {
//     fa: ["آقایِ", "جُغد", "پُرسید", "آن", "را", "اَز", "کُجا", "پِیدا", "کَردی"],
//     correctFa: ["آقایِ", "جُغد", "پُرسید", "آن", "را", "اَز", "کُجا", "پِیدا", "کَردی"],
//     en: "Mr. Owl asked, 'Where did you find it?'"
//   },
//   {
//     fa: ["مینا", "گُفت", "مَن", "آن", "را", "رویِ", "زَمین", "پِیدا", "کَردَم"],
//     correctFa: ["مینا", "گُفت", "مَن", "آن", "را", "رویِ", "زَمین", "پِیدا", "کَردَم"],
//     en: "Mina said, 'I found it on the ground'"
//   },
//   {
//     fa: ["آقایِ", "جُغد", "گُفت", "آفَرین", "مینا", "راست‌گُویی", "کارِ", "دُرُستی", "اَست"],
//     correctFa: ["آقایِ", "جُغد", "گُفت", "آفَرین", "مینا", "راست‌گُویی", "کارِ", "دُرُستی", "اَست"],
//     en: "Mr. Owl said, 'Well done, Mina! Telling the truth is the right thing'"
//   },
//   {
//     fa: ["پِسَری", "کوچَک", "بِه", "نامِ", "حَسَن", "با", "نِگَرانی", "آمَد"],
//     correctFa: ["پِسَری", "کوچَک", "بِه", "نامِ", "حَسَن", "با", "نِگَرانی", "آمَد"],
//     en: "A little boy named Hasan came with worry"
//   },
//   {
//     fa: ["او", "گُفت", "تیـلِه‌", "قِرمِزَم", "را", "گُم", "کَرده‌اَم"],
//     correctFa: ["او", "گُفت", "تیـلِه‌", "قِرمِزَم", "را", "گُم", "کَرده‌اَم"],
//     en: "He said, 'I lost my red marble'"
//   },
//   {
//     fa: ["مینا", "تیـلِه", "را", "بِه", "حَسَن", "داد", "وَ", "اِحساسِ", "شادّی", "کَرد"],
//     correctFa: ["مینا", "تیـلِه", "را", "بِه", "حَسَن", "داد", "وَ", "اِحساسِ", "شادّی", "کَرد"],
//     en: "Mina gave the marble to Hasan and felt happy"
//   }
// ],
// داستان_علی_و_تنبَلی: [
//   {
//     fa: ["عَلی", "پِسَری", "تَنبَل", "بود", "وَقتِش", "را", "هَدَر", "می‌داد"],
//     correctFa: ["عَلی", "پِسَری", "تَنبَل", "بود", "وَقتِش", "را", "هَدَر", "می‌داد"],
//     en: "Ali was a lazy boy who wasted his time"
//   },
//   {
//     fa: ["عَلی", "بیشتَر", "وَقتَش", "را", "روی", "مُبل", "دِراز", "می‌کِشید"],
//     correctFa: ["عَلی", "بیشتَر", "وَقتَش", "را", "روی", "مُبل", "دِراز", "می‌کِشید"],
//     en: "Ali spent most of his time lying on the sofa"
//   },
//   {
//     fa: ["مادَرَش", "اَز", "او", "خواست", "اُتاقَش", "را", "تَمیز", "کُنَد"],
//     correctFa: ["مادَرَش", "اَز", "او", "خواست", "اُتاقَش", "را", "تَمیز", "کُنَد"],
//     en: "His mother asked him to clean his room"
//   },
//   {
//     fa: ["عَلی", "با", "ناراحَتی", "غُر", "می‌زَد", "وَ", "کاری", "نَمی‌کَرد"],
//     correctFa: ["عَلی", "با", "ناراحَتی", "غُر", "می‌زَد", "وَ", "کاری", "نَمی‌کَرد"],
//     en: "Ali complained and did nothing"
//   },
//   {
//     fa: ["پِدَرَش", "اَز", "عَلی", "کُمَک", "خواست", "وَلی", "او", "نَرفت"],
//     correctFa: ["پِدَرَش", "اَز", "عَلی", "کُمَک", "خواست", "وَلی", "او", "نَرفت"],
//     en: "His father asked Ali for help but he did not go"
//   },
//   {
//     fa: ["هَمه", "می‌گُفتَند", "عَلی", "تَنبَل‌تَرین", "پِسَرِ", "مَحَلِّه", "اَست"],
//     correctFa: ["هَمه", "می‌گُفتَند", "عَلی", "تَنبَل‌تَرین", "پِسَرِ", "مَحَلِّه", "اَست"],
//     en: "Everyone said Ali was the laziest boy in the neighborhood"
//   },
//   {
//     fa: ["یِک", "روزِ", "گَرمِ", "تابِستان", "عَلی", "تَنها", "دَر", "خانِه", "بود"],
//     correctFa: ["یِک", "روزِ", "گَرمِ", "تابِستان", "عَلی", "تَنها", "دَر", "خانِه", "بود"],
//     en: "One hot summer day Ali was alone at home"
//   },
//   {
//     fa: ["او", "جِلوی", "پَنکه", "نِشَستِه", "بود", "وَ", "بازی", "می‌دید"],
//     correctFa: ["او", "جِلوی", "پَنکه", "نِشَستِه", "بود", "وَ", "بازی", "می‌دید"],
//     en: "He was sitting in front of the fan watching a game"
//   },
//   {
//     fa: ["ناگَهان", "بویِ", "دود", "دَر", "خانِه", "پَخش", "شُد"],
//     correctFa: ["ناگَهان", "بویِ", "دود", "دَر", "خانِه", "پَخش", "شُد"],
//     en: "Suddenly the smell of smoke spread in the house"
//   },
//   {
//     fa: ["عَلی", "فِکر", "کَرد", "هَمسایِه", "غَذا", "را", "سوزاندِه"],
//     correctFa: ["عَلی", "فِکر", "کَرد", "هَمسایِه", "غَذا", "را", "سوزاندِه"],
//     en: "Ali thought the neighbor had burned food"
//   },
//   {
//     fa: ["دود", "بیشتَر", "شُد", "وَ", "صِدایِ", "عَجیب", "آمد"],
//     correctFa: ["دود", "بیشتَر", "شُد", "وَ", "صِدایِ", "عَجیب", "آمد"],
//     en: "The smoke increased and a strange sound came"
//   },
//   {
//     fa: ["عَلی", "اَز", "پَنجره", "بیرون", "را", "با", "تَرس", "دید"],
//     correctFa: ["عَلی", "اَز", "پَنجره", "بیرون", "را", "با", "تَرس", "دید"],
//     en: "Ali looked outside the window in fear"
//   },
//   {
//     fa: ["او", "نورِ", "نارِنجی", "آتِش", "را", "دید", "وَ", "تَرسید"],
//     correctFa: ["او", "نورِ", "نارِنجی", "آتِش", "را", "دید", "وَ", "تَرسید"],
//     en: "He saw the orange light of fire and got scared"
//   },
//   {
//     fa: ["عَلی", "می‌خواست", "فِرار", "کُنَد", "وَلی", "بَدَنَش", "سَنگین", "بود"],
//     correctFa: ["عَلی", "می‌خواست", "فِرار", "کُنَد", "وَلی", "بَدَنَش", "سَنگین", "بود"],
//     en: "Ali wanted to escape but his body felt heavy"
//   },
//   {
//     fa: ["ناگَهان", "هَمه‌جا", "تاریک", "شُد", "وَ", "او", "بیدار", "شُد"],
//     correctFa: ["ناگَهان", "هَمه‌جا", "تاریک", "شُد", "وَ", "او", "بیدار", "شُد"],
//     en: "Suddenly everything became dark and he woke up"
//   },
//   {
//     fa: ["عَلی", "فَهمید", "آن", "هَمه", "فَقط", "یِک", "خواب", "بود"],
//     correctFa: ["عَلی", "فَهمید", "آن", "هَمه", "فَقط", "یِک", "خواب", "بود"],
//     en: "Ali realized it was all just a dream"
//   },
//   {
//     fa: ["او", "با", "خودَش", "فِکر", "کَرد", "تَنبُلی", "خوب", "نیست"],
//     correctFa: ["او", "با", "خودَش", "فِکر", "کَرد", "تَنبُلی", "خوب", "نیست"],
//     en: "He thought to himself that laziness is not good"
//   },
//   {
//     fa: ["صُبح", "عَلی", "زود", "اَز", "جا", "پَرید", "وَ", "کُمَک", "کَرد"],
//     correctFa: ["صُبح", "عَلی", "زود", "اَز", "جا", "پَرید", "وَ", "کُمَک", "کَرد"],
//     en: "In the morning Ali quickly got up and helped"
//   },
//   {
//     fa: ["او", "با", "پِدَرَش", "گُل‌ها", "را", "دَر", "حَیاط", "آب", "داد"],
//     correctFa: ["او", "با", "پِدَرَش", "گُل‌ها", "را", "دَر", "حَیاط", "آب", "داد"],
//     en: "He watered the flowers in the yard with his father"
//   },
//   {
//     fa: ["عَلی", "اَز", "آن", "روز", "مَسئولیت‌پَذیرتَر", "شُد", "وَ", "تَغییر", "کَرد"],
//     correctFa: ["عَلی", "اَز", "آن", "روز", "مَسئولیت‌پَذیرتَر", "شُد", "وَ", "تَغییر", "کَرد"],
//     en: "From that day on Ali became more responsible and changed"
//   }
// ],
// داستان_کمک_بهتر_از_خنده: [
//   {
//     fa: ["زَنگِ", "تَفریح", "بود"],
//     correctFa: ["زَنگِ", "تَفریح", "بود"],
//     en: "It was recess time"
//   },
//   {
//     fa: ["پِسَرها", "تویِ", "حَیاط", "بازی", "می‌کَردَند"],
//     correctFa: ["پِسَرها", "تویِ", "حَیاط", "بازی", "می‌کَردَند"],
//     en: "The boys were playing in the yard"
//   },
//   {
//     fa: ["سام", "با", "سُرعَت", "می‌دَوید"],
//     correctFa: ["سام", "با", "سُرعَت", "می‌دَوید"],
//     en: "Sam was running fast"
//   },
//   {
//     fa: ["پایَش", "گیر", "کَرد", "و", "اُفتاد"],
//     correctFa: ["پایَش", "گیر", "کَرد", "و", "اُفتاد"],
//     en: "His foot got stuck and he fell"
//   },
//   {
//     fa: ["چَند", "پِسَر", "به", "او", "خَندیدَند"],
//     correctFa: ["چَند", "پِسَر", "به", "او", "خَندیدَند"],
//     en: "Some boys laughed at him"
//   },
//   {
//     fa: ["سام", "ناراحَت", "شُد"],
//     correctFa: ["سام", "ناراحَت", "شُد"],
//     en: "Sam became sad"
//   },
//   {
//     fa: ["اَشک", "تویِ", "چِشمَش", "جَمع", "شُد"],
//     correctFa: ["اَشک", "تویِ", "چِشمَش", "جَمع", "شُد"],
//     en: "Tears gathered in his eyes"
//   },
//   {
//     fa: ["آرَش", "جِلو", "آمَد"],
//     correctFa: ["آرَش", "جِلو", "آمَد"],
//     en: "Arash came forward"
//   },
//   {
//     fa: ["او", "دَستِ", "سام", "را", "گِرِفت"],
//     correctFa: ["او", "دَستِ", "سام", "را", "گِرِفت"],
//     en: "He held Sam’s hand"
//   },
//   {
//     fa: ["سام", "آهِستِه", "بُلَند", "شُد"],
//     correctFa: ["سام", "آهِستِه", "بُلَند", "شُد"],
//     en: "Sam slowly stood up"
//   },
//   {
//     fa: ["آرَش", "خاکِ", "لِباسَش", "را", "تِکاند"],
//     correctFa: ["آرَش", "خاکِ", "لِباسَش", "را", "تِکاند"],
//     en: "Arash brushed the dirt off his clothes"
//   },
//   {
//     fa: ["بَچِّه‌ها", "ساکِت", "شُدَند"],
//     correctFa: ["بَچِّه‌ها", "ساکِت", "شُدَند"],
//     en: "The children became quiet"
//   },
//   {
//     fa: ["کُمَک", "کَردَن", "بِهتَر", "اَز", "خَندِه", "هَست"],
//     correctFa: ["کُمَک", "کَردَن", "بِهتَر", "اَز", "خَندِه", "هَست"],
//     en: "Helping is better than laughing"
//   }
// ],

داستان_پسر_چوپان_دروغگو: [
  {
    fa: ["روزی", "روزگاری", "چوپانی", "جَوان", "رویِ", "تَپّه‌ای", "بود"],
    correctFa: ["روزی", "روزگاری", "چوپانی", "جَوان", "رویِ", "تَپّه‌ای", "بود"],
    en: "Once upon a time, a young shepherd was on a hill"
  },
  {
    fa: ["او", "اَز", "گوسفَندانِ", "خُود", "نِگَه‌داری", "می‌کَرد"],
    correctFa: ["او", "اَز", "گوسفَندانِ", "خُود", "نِگَه‌داری", "می‌کَرد"],
    en: "He was taking care of his sheep"
  },
  {
    fa: ["پِسَر", "کَمی", "خَسته", "و", "بی‌حوصِلِه", "شُده", "بود"],
    correctFa: ["پِسَر", "کَمی", "خَسته", "و", "بی‌حوصِلِه", "شُده", "بود"],
    en: "The boy had become a little tired and bored"
  },
  {
    fa: ["او", "ناگَهان", "فَریاد", "زَد"],
    correctFa: ["او", "ناگَهان", "فَریاد", "زَد"],
    en: "Suddenly, he shouted"
  },
  {
    fa: ["مَردُمِ", "روستا", "با", "تَرس", "دویدَند"],
    correctFa: ["مَردُمِ", "روستا", "با", "تَرس", "دویدَند"],
    en: "The villagers ran in fear"
  },
  {
    fa: ["آن‌ها", "می‌خواستَند", "به", "پِسَر", "کُمَک", "کُنَند"],
    correctFa: ["آن‌ها", "می‌خواستَند", "به", "پِسَر", "کُمَک", "کُنَند"],
    en: "They wanted to help the boy"
  },
  {
    fa: ["اَمّا", "هیچ", "گُرگی", "آنجا", "نَبود"],
    correctFa: ["اَمّا", "هیچ", "گُرگی", "آنجا", "نَبود"],
    en: "But there was no wolf there"
  },
  {
    fa: ["پِسَرِ", "چوپان", "شُروع", "به", "خَندیدن", "کَرد"],
    correctFa: ["پِسَرِ", "چوپان", "شُروع", "به", "خَندیدن", "کَرد"],
    en: "The shepherd boy started laughing"
  },
  {
    fa: ["چَند", "روز", "بَعد", "او", "دُوبارِه", "دُروغ", "گُفت"],
    correctFa: ["چَند", "روز", "بَعد", "او", "دُوبارِه", "دُروغ", "گُفت"],
    en: "A few days later, he lied again"
  },
  {
    fa: ["مَردُم", "دُوبارِه", "فَریب", "خوردَند"],
    correctFa: ["مَردُم", "دُوبارِه", "فَریب", "خوردَند"],
    en: "The people were tricked again"
  },
  {
    fa: ["یِک", "شَب", "گُرگی", "واقعی", "آمَد"],
    correctFa: ["یِک", "شَب", "گُرگی", "واقعی", "آمَد"],
    en: "One night, a real wolf came"
  },
  {
    fa: ["گُرگ", "به", "گوسفَندان", "حَمله", "کَرد"],
    correctFa: ["گُرگ", "به", "گوسفَندان", "حَمله", "کَرد"],
    en: "The wolf attacked the sheep"
  },
  {
    fa: ["پِسَر", "با", "تَرس", "فَریاد", "زَد"],
    correctFa: ["پِسَر", "با", "تَرس", "فَریاد", "زَد"],
    en: "The boy shouted in fear"
  },
  {
    fa: ["کُمَک", "کُمَک", "این", "بار", "راست", "می‌گویم"],
    correctFa: ["کُمَک", "کُمَک", "این", "بار", "راست", "می‌گویم"],
    en: "Help! Help! This time I am telling the truth"
  },
  {
    fa: ["اَمّا", "هیچ‌کَس", "باوَر", "نَکَرد"],
    correctFa: ["اَمّا", "هیچ‌کَس", "باوَر", "نَکَرد"],
    en: "But nobody believed him"
  },
  {
    fa: ["هیچ‌کَس", "برایِ", "کُمَک", "نَیامَد"],
    correctFa: ["هیچ‌کَس", "برایِ", "کُمَک", "نَیامَد"],
    en: "Nobody came to help"
  },
  {
    fa: ["گُرگ", "چَند", "گوسفَند", "را", "با", "خُود", "بُرد"],
    correctFa: ["گُرگ", "چَند", "گوسفَند", "را", "با", "خُود", "بُرد"],
    en: "The wolf took some sheep away"
  },
  {
    fa: ["پِسَرِ", "چوپان", "اَز", "کارِ", "خُود", "پَشیمان", "شُد"],
    correctFa: ["پِسَرِ", "چوپان", "اَز", "کارِ", "خُود", "پَشیمان", "شُد"],
    en: "The shepherd boy became sorry for what he did"
  },
  {
    fa: ["دُروغ", "گُفتَن", "باعِث", "می‌شَوَد", "دیگَران", "تو", "را", "باوَر", "نَکُنَند"],
    correctFa: ["دُروغ", "گُفتَن", "باعِث", "می‌شَوَد", "دیگَران", "تو", "را", "باوَر", "نَکُنَند"],
    en: "Lying causes others not to believe you"
  }
],
  };

  const categories = Object.keys(sentenceData);

  /* ===== state ===== */
  const [category, setCategory] = useState(categories[0]);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [words, setWords] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hasMoved, setHasMoved] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const [chBorder,setChBorder] = useState(false);
  const [showCat , setShowCat] = useState(false)
  const currentSentences = sentenceData[category] || [];

  /* ===== مقداردهی امن words ===== */
  useEffect(() => {
    const sentence = currentSentences[sentenceIndex];
    if (sentence?.fa) {
      setWords(shuffleArray(sentence.fa));
      setHasMoved(false);
      setShowCorrect(false);
      setSelectedIndex(null);
      setDraggedIndex(null);
    }
  }, [category, sentenceIndex]);

  const currentSentence = currentSentences[sentenceIndex];
  if (!currentSentence) return null;
  const correctSentence = currentSentence.correctFa;

  /* ===== تغییر دسته ===== */
  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setSentenceIndex(0);
  };

  /* ===== جمله بعدی ===== */
  const handleNextSentence = () => {
    setSentenceIndex((prev) => (prev + 1) % currentSentences.length);
  };

  /* ===== Drag دسکتاپ ===== */
  const handleDragStart = (index) => setDraggedIndex(index);
  const handleDrop = (index) => {
    if (draggedIndex === null) return;
    let updated = [...words];
    const [draggedWord] = updated.splice(draggedIndex, 1);
    updated.splice(index, 0, draggedWord);
    setWords(updated);
    setDraggedIndex(null);
    setHasMoved(true);
  };

  /* ===== Click موبایل/تبلت ===== */
  const handleWordClick = (index) => {
    if (selectedIndex === null) {
      setSelectedIndex(index);
    } else {
      let updated = [...words];
      const [word] = updated.splice(selectedIndex, 1);
      updated.splice(index, 0, word);
      setWords(updated);
      setSelectedIndex(null);
      setHasMoved(true);
      
    }
  };

  return (
    <div
      className="container mt-4 p-4 p-md-5 rounded-4 shadow-lg"
      style={{
        fontFamily: "Vazir",
        maxWidth: "900px",
        background: "linear-gradient(135deg,#f5f7fa,#c3cfe2)",
      }}
      dir="rtl"
    >
      <h4 className="mb-3 text-center">🧩 جمله‌سازی فارسی</h4>

      {/* راهنما */}
      <div className="alert alert-secondary text-center fs-5">
        {isMobile
          ? "👉 اول یک کلمه را لمس کن، بعد جای درستش را انتخاب کن"
          : "👉 کلمه‌ها را بگیر و بکش تا جمله درست شود"}
          <button className="btn btn-gradient-primary me-5 text-light" onClick={()=>setShowCat(!showCat)}>{showCat ? ` فهرست پنهان` : `فهرست  نمایش`}</button>
      </div>

      {/* دسته‌ها */}
      {showCat && 
        <div className="mb-3 text-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn m-1 ${cat === category ? "btn-gradient-primary" : "btn-outline-primary"}`}
              onClick={() => {handleCategoryChange(cat); setShowCat(false)}}
            >
              {cat}
            </button>
          ))}
        </div>
      }

      {/* کلمات */}
      <div className="d-flex flex-wrap gap-2 justify-content-end mb-4">
        {words.map((word, index) => {
          let bg = "#fff";
          let borderColor = "#dee2e6";
          let scale = 1;

          if (hasMoved) {
            if (word === correctSentence[index]) {
              bg = "linear-gradient(135deg,#a8e6cf,#dcedc1)";
              borderColor = "#25a768";
            } else {
              bg = "linear-gradient(135deg,#ff8b94,#ffaaa5)";
              borderColor = "#c82333";
            }
          }

          if (selectedIndex === index) scale = 1.1;
          if (selectedIndex === index) borderColor = " #075a6dff";

          return (
            <div
              key={index}
              draggable={!isMobile}
              onDragStart={!isMobile ? () => handleDragStart(index) : undefined}
              onDragOver={!isMobile ? (e) => e.preventDefault() : undefined}
              onDrop={!isMobile ? () => handleDrop(index) : undefined}
              onClick={isMobile ? () => {handleWordClick(index);  setChBorder(true)} : undefined }
              className="sentence-word"
              style={{
                background: bg,
                borderColor: borderColor,
                transform: `scale(${scale})`,
                boxShadow:" 0 4px 12px rgba(118, 9, 9, 0.42)",
              }}
            >
              {word}
            </div>
          );
        })}
      </div>

      {/* ترجمه */}
      <div className="alert alert-light text-start" dir="ltr">
        <strong>{currentSentence.en}</strong>
      </div>

      {/* نمایش جمله */}
      <div className="alert alert-info">
        {showCorrect
          ? `جمله صحیح: ${correctSentence.join(" ")}`
          : `جمله فعلی: ${words.join(" ")}`}
      </div>

      {/* دکمه‌ها */}
      <div className="d-flex gap-2 justify-content-end mb-3">
        <button className="btn btn-success" onClick={handleNextSentence}>
          جمله بعدی
        </button>
        <button className="btn btn-warning" onClick={() => setShowCorrect((p) => !p)}>
          {showCorrect ? "پنهان کردن صحیح" : "نمایش صحیح"}
        </button>
      </div>

      {/* استایل */}
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css');

        .btn-gradient-primary {
          background: linear-gradient(135deg,#667eea,#764ba2);
          color: white;
          border: none;
          transition: transform 0.2s ease;
        }
        .btn-gradient-primary:hover {
          transform: scale(1.05);
        }

        .sentence-word {
          padding: 16px 22px;
          font-size: 1.6rem;
          font-weight: 600;
          border-radius: 18px;
          border: 2px solid #dee2e6;
          background: #fff;
          cursor: pointer;
          user-select: none;
          transition: all 0.3s ease, transform 0.2s ease;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }

        .sentence-word:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(118, 9, 9, 0.61);
        }

        @media (max-width: 768px) {
          .sentence-word {
            font-size: 1.2rem;
            padding: 15px 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default SentenceBuilder;
