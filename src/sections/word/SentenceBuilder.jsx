// SentenceBuilder.jsx
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

// تابع شافل کردن آرایه
const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// کمک برای بازگرداندن آرایه با ترتیب جدید بعد از درگ
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const SentenceBuilder = () => {
  const sentenceData = {
    داستان_یپک_نیک: [
      {
        fa: ["یک", "روز", "آفتابی", "لیلا", "و", "مکس", "به", "سفر", "رفتند"],
        correctFa: ["یک", "روز", "آفتابی", "لیلا", "و", "مکس", "به", "سفر", "رفتند"],
        en: "One sunny day, Leila and Max went on a trip.",
        image: ""
      },
      {
        fa: ["پدر", "و", "مادر", "لیلا", "و", "مکس", "خوراکی", "و", "اسباب‌بازی", "در", "ماشین", "گذاشتند"],
        correctFa: ["پدر", "و", "مادر", "لیلا", "و", "مکس", "خوراکی", "و", "اسباب‌بازی", "در", "ماشین", "گذاشتند"],
        en: "Leila and Max’s parents put snacks and toys in the car.",
        image: ""
      },
      // ... (باقی جملات همان‌طور که در نسخه‌ی شماست)
    ]
  };

  const categories = Object.keys(sentenceData);
  const [category, setCategory] = useState(categories[0]);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [words, setWords] = useState(() =>
    shuffleArray(sentenceData[categories[0]][0].fa)
  );
  const [hasDragged, setHasDragged] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);
  const [showCategories, setShowCategories] = useState(true);

  // هر بار دسته یا شماره جمله تغییر کرد، لیست کلمات جدید (شافل) بذار
  useEffect(() => {
    setWords(shuffleArray(sentenceData[category][sentenceIndex].fa));
    setHasDragged(false);
    setShowCorrect(false);
  }, [category, sentenceIndex]);

  const correctSentence = sentenceData[category][sentenceIndex].correctFa;

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setSentenceIndex(0);
    // useEffect بالا ترتیب و شافل رو انجام می‌ده
  };

  const handleNextSentence = () => {
    const nextIndex = (sentenceIndex + 1) % sentenceData[category].length;
    setSentenceIndex(nextIndex);
  };

  // این تابع توسط @hello-pangea/dnd صدا زده می‌شود
  const onDragEnd = (result) => {
    const { destination, source } = result;

    // اگر مقصد یا تغییر وجود نداشت، کاری نکن
    if (!destination) return;
    if (destination.index === source.index) return;

    const newWords = reorder(words, source.index, destination.index);
    setWords(newWords);
    setHasDragged(true);
  };

  return (
    <div
      className="container mt-4 p-4 rounded shadow"
      style={{ fontFamily: "Vazir", width: "95%" }}
      dir="rtl"
    >
      <h4 className="mb-3">🧩 جمله‌سازی فارسی</h4>

      <div className="mb-2">
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => setShowCategories((prev) => !prev)}
        >
          {showCategories ? "پنهان کردن فهرست دسته‌ها" : "نمایش فهرست دسته‌ها"}
        </button>
      </div>

      {showCategories && (
        <div className="mb-3 border rounded p-2 bg-light">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn m-1 ${
                category === cat ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* DragDropContext و Droppable برای پشتیبانی موبایل */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="words" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="d-flex flex-wrap h3 gap-2 mb-3 justify-content-end"
              style={{
                // به موبایل کمک می‌کند که اسکرول افقی داشته باشد اگر لازم باشد
                overflowX: "auto",
                paddingBottom: 6,
                WebkitOverflowScrolling: "touch",
              }}
            >
              {words.map((word, index) => {
                // تعیین رنگ پس‌زمینه بر اساس حالت پاسخ
                let bg = "#f8f9fa";
                let color = "#000";

                if (hasDragged) {
                  if (word === correctSentence[index]) {
                    bg = "rgba(0, 255, 0, 0.18)";
                  } else {
                    bg = "rgba(255, 0, 0, 0.12)";
                  }
                }

                return (
                  <Draggable key={`${word}-${index}`} draggableId={`${word}-${index}`} index={index}>
                    {(providedDraggable, snapshotDraggable) => (
                      <div
                        ref={providedDraggable.innerRef}
                        {...providedDraggable.draggableProps}
                        {...providedDraggable.dragHandleProps}
                        className="px-3 py-2 rounded border text-danger sizeWord"
                        style={{
                          userSelect: "none",
                          cursor: snapshotDraggable.isDragging ? "grabbing" : "grab",
                          backgroundColor: bg,
                          color: color,
                          transition: "background-color 0.25s ease",
                          margin: "4px",
                          // merge استایل‌های داخلی کتابخانه با استایل ما
                          ...providedDraggable.draggableProps.style,
                        }}
                      >
                        {word}
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="alert alert-light text-start" dir="ltr">
        Translation:{" "}
        <strong>{sentenceData[category][sentenceIndex].en}</strong>
      </div>

      <div className="alert alert-info" style={{ minHeight: "40px" }}>
        {showCorrect
          ? `جمله صحیح: ${correctSentence.join(" ")}`
          : `جمله فعلی: ${words.join(" ")}`}
      </div>

      <div className="mt-3 d-flex gap-2 justify-content-end">
        <button className="btn btn-success" onClick={handleNextSentence}>
          جمله بعدی
        </button>
        <button
          className="btn btn-warning"
          onClick={() => setShowCorrect((prev) => !prev)}
        >
          {showCorrect ? "پنهان کردن صحیح" : "نمایش صحیح"}
        </button>
      </div>

      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css');
        @media (max-width: 440px) {
          .sizeWord { font-size: 15px }
        }
      `}</style>

      <div className="text-end text-muted fs-6">SentenceBuilder</div>
    </div>
  );
};

export default SentenceBuilder;
