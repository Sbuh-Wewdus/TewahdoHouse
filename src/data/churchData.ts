
export const CHURCH_DATA = {
  history: {
    title: "History of the Tewahedo Church",
    content: "The Ethiopian Orthodox Tewahedo Church and the Eritrean Orthodox Tewahedo Church share a rich, unified history and common liturgical traditions. As Oriental Orthodox bodies, they trace their origins to the apostolic work of Saint Philip and Saint Frumentius. Christianity became the state religion of the Aksumite Empire, which encompassed much of present-day Eritrea and Ethiopia, in the 4th century AD under King Ezana. The word 'Tewahedo' (Ge'ez: ተዋሕዶ) means 'being made one' or 'unified', referring to the belief in the single unified nature of Christ.",
    milestones: [
      { year: "34 AD", event: "The conversion of the Ethiopian Eunuch (Acts 8:26-39)." },
      { year: "330 AD", event: "Saint Frumentius (Abba Selama) consecrates the first Bishop of Axum." },
      { year: "5th Century", event: "The Nine Saints arrive, translating the Bible into Ge'ez and establishing monasteries." }
    ]
  },
  liturgy: {
    title: "The Divine Liturgy (Qidase)",
    description: "The Holy Qidase is the central act of worship. It consists of several Anaphoras (propers), with the Anaphora of the Apostles being the most commonly used.",
    aspects: [
      "Sung in Ge'ez, the ancient liturgical language.",
      "Involves intricate chanting (Zema) developed by Saint Yared.",
      "Traditional use of instruments like the Kebero (drum) and Sana'tsel (sistrum)."
    ]
  },
  pillars: [
    { title: "Misterat", description: "The Seven Sacraments including Baptism, Confirmation, and Holy Communion." },
    { title: "Haymanot", description: "The Five Pillars of Mystery (Amistu Misterate Haymanot)." },
    { title: "Fast", description: "Strict adherence to fasting periods, totaling over 250 days a year for the most devout." }
  ],
  resources: [
    { title: "Qidase Powerpoints", description: "Visual aids for following the Divine Liturgy.", available: true, category: 'powerpoint' },
    { title: "Liturgical Audios", description: "Sacred hymns and chants by famous cantors.", available: true, category: 'audio' },
    { title: "Ge'ez Lessons", description: "Introduction to the liturgical language.", available: true, category: 'education' },
    { title: "Church Calendar", description: "The 13-month calendar with major feasts.", available: true, category: 'general' }
  ],
  externalSources: [
    { name: "Ethiopian Orthodox Patriarchate", url: "https://eotc.org.et", description: "Official website of the EOTC." },
    { name: "Eritrean Orthodox Tewahedo Church", url: "https://eritreanorthodox.info", description: "Official website of the Eritrean Patriarchate." },
    { name: "Saint Yared's Liturgical Music", url: "https://st-yared.com", description: "A digital library of Tewahedo hymns." },
    { name: "Ancient Ge'ez Manuscripts", url: "https://hmml.org", description: "The Hill Museum & Manuscript Library's extensive collection." },
    { name: "Tewahedo Faith", url: "https://tewahedo.faith", description: "Teachings and resources on the Orthodox faith." },
    { name: "EOTC Media", url: "https://eotcmk.org", description: "Educational and media platform of Mahibere Kidusan." }
  ],
  categories: [
    "Holy Qidase (Liturgy)",
    "Mezmur (Hymns)",
    "Mahlet & Chants",
    "Dogma & Theology",
    "Church History",
    "Hagiography (Saints)",
    "Sunday School & Youth",
    "Scriptures & Commentaries"
  ],
  mediaItems: [
    { id: 1, type: 'powerpoint', title: 'Qidase of Saint Basil (English-Ge’ez)', contributor: 'Dn. Tesfaye', date: '2024-05-12', category: "Holy Qidase (Liturgy)", url: "https://www.slideshare.net/abrahameyale/kidase-englishtigrinyageez" },
    { id: 2, type: 'audio', title: 'Degua: Selam Leki (Classic)', contributor: 'Memeher Pawlos', date: '2024-04-20', category: "Mahlet & Chants" },
    { id: 3, type: 'powerpoint', title: 'Anaphora of Saint John Chrysostom', contributor: 'Eritrean Parish A', date: '2024-06-01', category: "Holy Qidase (Liturgy)", url: "https://english.eritreantewahdo.org/divine-liturgy-powerpoints/" },
    { id: 4, type: 'audio', title: 'Kidasse Araray Melody', contributor: 'Liqe Diyaqon', date: '2024-03-15', category: "Holy Qidase (Liturgy)" },
    { id: 5, type: 'powerpoint', title: 'The Anaphora of Mary (Qidase Mariam)', contributor: 'Dn. Berhane', date: '2024-06-15', category: "Holy Qidase (Liturgy)", url: "https://english.eritreantewahdo.org/divine-liturgy-powerpoints/" },
    { id: 6, type: 'powerpoint', title: 'The Anaphora of the Apostles', contributor: 'Abba Tesfasion', date: '2024-07-02', category: "Holy Qidase (Liturgy)", url: "https://english.eritreantewahdo.org/divine-liturgy-powerpoints/" },
    { id: 7, type: 'powerpoint', title: 'The 5 Pillars of Mystery Explained', contributor: 'Youth Group', date: '2024-08-01', category: "Dogma & Theology" },
    { id: 8, type: 'audio', title: 'Zema: Tselote Haymanot (Creed)', contributor: 'Memeher Tekle', date: '2024-08-05', category: "Dogma & Theology" },
    { id: 9, type: 'powerpoint', title: 'Life of Saint Tekle Haymanot', contributor: 'Dn. Michael', date: '2024-08-10', category: "Hagiography (Saints)" },
    { id: 10, type: 'powerpoint', title: 'Introduction to Sunday School', contributor: 'Sunday School Dept', date: '2024-08-15', category: "Sunday School & Youth", url: "https://www.tewahdo.org/oldsite/Diocese/SundaySchool/Grades_11_12.pdf" },
    { id: 11, type: 'pdf', title: 'The Liturgy of the Ethiopian Church (Complete)', contributor: 'Rev. Marcos', date: '2024-01-01', category: "Holy Qidase (Liturgy)", url: "https://www.ethiopianorthodox.org/english/church/englishethiopianliturgy.pdf" }
  ]
};
