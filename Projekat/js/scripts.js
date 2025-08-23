const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("November 8 2025 08:00:00").getTime();

function timer (){
    const currentDate = new Date().getTime();
    const distance = targetDate-currentDate;
    
    const days = Math.floor(distance / 1000 / 60 / 60 / 24 ); // prvo sa 1000 da dobijemo sekunde pa 60 da dobijemo minute pa 60 da dobije sate pa 24 da dobijemo dane
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24; // 24 da bi sati bili od 0 do 24
    const minutes = Math.floor(distance / 1000 / 60 ) % 60; 
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML=days;
    Hours.innerHTML=hours;
    Minutes.innerHTML=minutes;
    Seconds.innerHTML=seconds;

    //Kad prodje datum za pocetak da ne krene da ide u minus
    if(distance < 0)
    {
        Days.innerHTML = "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";
    }
}
setInterval(timer,1000);


const Year = document.getElementById("copyrightYear");
const currentYear = new Date().getFullYear();
Year.innerText=currentYear;


// MODAL JS
//
const speakers = [
  {
    id: 1,
    name: "Slavimir Stosović",
    role: {
      en: "Professor & Team Lead at VTS Apps Team",
      sr: "Profesor i vođa tima u VTS Apps Team",
    },
    bio: {
      en: "Slavimir Stošović is a Professor at the Higher Technical School of Professional Studies in Nis and the founder of the VTS Apps Team. With over 20 years of experience in education and software development, he mentors students in programming, project-based learning, and tech competitions. Under his guidance, VTS Apps Team has become a leading platform for students to gain real-world experience and showcase their talent.",
      sr: "Slavimir Stošović je profesor na Višoj tehničkoj školi strukovnih studija u Nišu i osnivač VTS Apps Team. Sa više od 20 godina iskustva u obrazovanju i razvoju softvera, mentor je studentima u programiranju, učenju kroz projekte i tehnološkim takmičenjima. Pod njegovim vođstvom, VTS Apps Team je postao vodeća platforma za studente da steknu praktično iskustvo i pokažu svoj talenat.",
    },
    img: "img/speakers/1.jpg",
  },
  {
    id: 2,
    name: "Nikola Vukotić",
    role: {
      en: "DevOps Specialist",
      sr: "DevOps Stručnjak",
    },
    bio: {
      en: "Nikola Vukotić is a skilled DevOps Specialist with a strong background in cloud infrastructure, CI/CD pipelines, and system automation. He is passionate about improving deployment workflows, optimizing performance, and bridging the gap between development and operations. Nikola brings practical experience from working on scalable systems and modern DevOps toolchains.",
      sr: "Nikola Vukotić je stručnjak za DevOps sa bogatim iskustvom u radu sa cloud infrastrukturom, CI/CD pipeline-ovima i automatizacijom sistema. Strastveno radi na poboljšanju procesa implementacije, optimizaciji performansi i povezivanju razvoja i operacija. Nikola donosi praktično iskustvo sa skalabilnim sistemima i modernim DevOps alatima.",
    },
    img: "img/speakers/2.jpg",
  },
  {
    id: 3,
    name: "Nevena Minić",
    role: {
      en: "Frontend Developer",
      sr: "Frontend Developer",
    },
    bio: {
      en: "Nevena Minić is a creative and detail-oriented Frontend Developer with a strong focus on user experience and responsive design. She specializes in building modern web interfaces using HTML, CSS, JavaScript, and popular frameworks. Nevena is passionate about transforming ideas into intuitive, accessible, and visually engaging websites and applications.",
      sr: "Nevena Minić je kreativna i pedantna frontend developerka sa jakim fokusom na korisničko iskustvo i responzivni dizajn. Specijalizovana je za izradu modernih web interfejsa koristeći HTML, CSS, JavaScript i popularne framework-e. Strastveno transformiše ideje u intuitivne, pristupačne i vizuelno privlačne sajtove i aplikacije.",
    },
    img: "img/speakers/3.jpg",
  },
  {
    id: 4,
    name: "Mihajlo Mirković",
    role: {
      en: "UX/UI Designer",
      sr: "UX/UI Dizajner",
    },
    bio: {
      en: "Mihajlo Mirković is a UX/UI Designer with a strong sense for visual aesthetics and user-centered design. He focuses on creating intuitive and elegant digital experiences through thoughtful interface design and user research. Mihajlo combines creativity with usability principles to design products that are both functional and visually engaging.",
      sr: "Mihajlo Mirković je UX/UI dizajner sa razvijenim osećajem za vizuelnu estetiku i dizajn usmeren na korisnika. Fokusira se na kreiranje intuitivnih i elegantnih digitalnih iskustava kroz promišljeni dizajn interfejsa i istraživanje korisnika. Mihajlo kombinuje kreativnost i principe upotrebljivosti kako bi proizvodi bili funkcionalni i vizuelno privlačni.",
    },
    img: "img/speakers/4.jpg",
  },
  {
    id: 5,
    name: "Mihajlo Ćekić",
    role: {
      en: "Backend Developer",
      sr: "Backend Developer",
    },
    bio: {
      en: "Mihajlo Ćekić is a backend developer with a passion for building reliable, scalable, and secure server-side applications. He specializes in database design, API development, and system architecture. With a strong understanding of backend technologies and programming languages, Mihajlo ensures smooth functionality and performance behind the scenes of every application he works on.",
      sr: "Mihajlo Ćekić je backend developer sa strašću za izgradnju pouzdanih, skalabilnih i sigurnih server-side aplikacija. Specijalizovan je za dizajn baza podataka, razvoj API-ja i arhitekturu sistema. Sa dubokim razumevanjem backend tehnologija i programskih jezika, Mihajlo osigurava besprekornu funkcionalnost i performanse u svakoj aplikaciji na kojoj radi.",
    },
    img: "img/speakers/5.jpg",
  },
  {
    id: 6,
    name: "Milan Ristić",
    role: {
      en: "AI Researcher",
      sr: "AI Istraživač",
    },
    bio: {
      en: "Milan Ristić is an AI Researcher dedicated to exploring the frontiers of machine learning and artificial intelligence. His work involves developing intelligent systems, analyzing data, and creating models that can learn and adapt. With a deep interest in innovation, Milan focuses on bridging the gap between academic research and real-world AI applications.",
      sr: "Milan Ristić je AI istraživač posvećen istraživanju granica mašinskog učenja i veštačke inteligencije. Njegov rad uključuje razvoj inteligentnih sistema, analizu podataka i kreiranje modela koji mogu učiti i prilagođavati se. Sa dubokim interesovanjem za inovacije, Milan se fokusira na povezivanje akademskog istraživanja sa primenom AI u realnom svetu.",
    },
    img: "img/speakers/6.jpg",
  },
];


const speakerCards = document.querySelectorAll(".speaker-card");
const modal = document.getElementById("speakerModal");
const modalImg = document.getElementById("modalSpeakerImg");
const modalName = document.getElementById("modalSpeakerName");
const modalRole = document.getElementById("modalSpeakerRole");
const modalBio = document.getElementById("modalSpeakerBio");
const closeModal = document.querySelector(".close-modal");




speakerCards.forEach((card) => {
  card.addEventListener("click", () => {
    const id = parseInt(card.getAttribute("data-id"));
    const speaker = speakers.find((s) => s.id === id);

    if (speaker) {
      modalImg.src = speaker.img;
      modalName.textContent = speaker.name;
      modalRole.textContent = speaker.role[currentLang];
      modalBio.textContent = speaker.bio[currentLang];
      modal.style.display = "flex";
    }
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});



// GALLERY MODAL

const galleryImages =document.querySelectorAll(".gallery-img");
const galleryModal = document.getElementById("galleryModal");
const modalContent = galleryModal.querySelector(".gallery-modal-content");
const closeBtn = galleryModal.querySelector(".gallery-modal-close");
const prevBtn = galleryModal.querySelector(".gallery-modal-nav.prev");
const nextBtn = galleryModal.querySelector(".gallery-modal-nav.next");

let currentIndex = 0;


function showImage(index) {
  const imgUrl = galleryImages[index].style.backgroundImage.slice(5, -2); // slice da bi skratio url('  na pocetku a -2 da bi na kraj skratio ')
  modalContent.src = imgUrl;
  currentIndex = index;
  galleryModal.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
  galleryModal.style.display = "none";
});


galleryImages.forEach((img,index)=>{
  img.addEventListener("click",()=>{
    showImage(index);
  })
})
prevBtn.addEventListener("click", () => {
  currentIndex =
    currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex =
    currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
  showImage(currentIndex);
});
galleryModal.addEventListener("click", (e) => {
  if (e.target === galleryModal) {
    galleryModal.style.display = "none";
  }
});

// MULTI LANG

const translations = {
  en: {
    hero_title: "Welcome to TheDevWorld",
    hero_subtitle: "The biggest developer event in the region",
    nav_home: "Home",
    nav_about: "About",
    nav_speaker: "Speakers",
    nav_schedule: "Schedule",
    nav_tickets: "Buy tickets",
    hero_h1: "THEDEVWORLD 2025",
    hero_h3_1:
      "Where the world’s top developers unite to build the future <br> one line of code at a time.",
    hero_h3_2: "NIS · 8-11 November ",
    hero_btn: "GET YOUR TICKET",
    info_h3_dev: "DEVELOPERS",
    info_h3_comp: "COMPANIES",
    info_h3_speaker: "SPEAKERS",
    info_h3_ideas: "IDEAS",
    info_h3_line:
      "Code, connect, and be inspired — secure your spot at TheDevWorld 2025.",
    info_p_days: "Days",
    info_p_hours: "Hours",
    info_p_minutes: "Minutes",
    info_p_seconds: "Seconds",
    info_btn: "get your ticket",
    about_h2_title: "ABOUT CONFERENCE",
    about_h2_welcome:
      'welcome to <span class="yellow-span">thedevworld</span><br> conference',
    about_btn: "GET YOUR TICKET",
    about_p_desc_1:
      "TheDevWorld is not just another tech event — it’s a hub where developers, designers, and technology enthusiasts come together to share ideas, learn from experts, and build connections that shape the future of the tech industry.",
    about_p_desc_2:
      "Organized by VTS Apps Team, this conference aims to bridge the gap between students, professionals, and industry leaders through a series of keynote talks, hands-on workshops, and panel discussions. Whether you’re a seasoned developer or just stepping into the world of technology, TheDevWorld offers a unique opportunity to expand your knowledge, sharpen your skills, and become part of a vibrant tech community.",
    about_p_desc_3:
      "With a focus on innovation, collaboration, and real-world impact, TheDevWorld is the place where ideas turn into action.",
    about_day: "DayEvent",
    about_speakers: "Speakers",
    about_sponsors: "Sponsors",
    schedule_h2_title: "Event Schedule",
    schedule_day_1: "Day 1",
    schedule_day_2: "Day 2",
    schedule_day_3: "Day 3",
    //Day 1
    schedule_topic_1: "Designing Intuitive UX for AI-Driven Interfaces",
    schedule_topic_2: "Ethics and AI: Building Responsible Technology",
    schedule_topic_3: "Lunch Break",
    schedule_topic_4: "Accessibility in AI-Powered Solutions",
    schedule_topic_5: "AI in DevOps: Automating Deployment Pipelines",
    //Day 2
    schedule_topic_6: "Big Data Challenges in AI Projects",
    schedule_topic_7: "AI for Cybersecurity: Protecting Systems",
    schedule_topic_8: "Reinforcement Learning: From Theory to Practice",
    schedule_topic_9: "AI in Mobile App Development",
    //Day 3
    schedule_topic_10: "How AI is Transforming Product Design",
    schedule_topic_11:
      "Building AI-Powered Applications: Tools & Best Practices",
    schedule_topic_12: "Machine Learning in Real-World Products",
    schedule_topic_13: "Automating Business Processes with AI & Data Science",
    about_organizer_title: "About the Organizer",
    about_organizer_p_1:
      "<strong>VTS Apps Team</strong> is a team of passionate students from the Academy of Applied Technical Sciences Niš, led by <strong>Dr. Slavimir Stošović and Nikola Vukotić</strong>. For years, this team has been a hub for talented individuals specializing in software development, competitive programming, and hackathon innovation.",
    about_organizer_p_2:
      "Through numerous competitions, projects, and community-driven initiatives, VTS Apps Team empowers students to transform ideas into real-world solutions, promoting teamwork, creativity, and technical excellence.",
    about_organizer_p_3:
      "This conference is organized by VTS Apps Team with the mission to connect aspiring developers, industry experts, and tech enthusiasts under one roof, fostering a community of collaboration and innovation.",
    gallery_title: "GALLERY",
    sponsors_title: "SPONSORS",
    newsletter_h3: "Stay in the loop – get updates!",
    tickets_title: "Tickets",

    // Standard Ticket
    ticket_standard: "STANDARD TICKET",
    ticket_standard_1: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Regular Seating`,
    ticket_standard_2: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Coffee Break`,
    ticket_standard_3: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Custom Badge`,
    ticket_standard_4: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
      </svg> Community Access`,
    ticket_standard_5: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
      </svg> Workshop Access`,
    ticket_standard_6: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
      </svg> After Party`,

    // VIP Ticket
    ticket_vip: "VIP ticket",
    ticket_vip_price: "150$",
    ticket_vip_1: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Regular Seating`,
    ticket_vip_2: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Coffe Break`,
    ticket_vip_3: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Custom Badge`,
    ticket_vip_4: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Community Access`,
    ticket_vip_5: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
      </svg> Workshup Access`,
    ticket_vip_6: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
      </svg> After Party`,
    // Premium Ticket
    ticket_premium: "Premium ticket",
    ticket_premium_price: "250$",
    ticket_premium_1: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Regular Seating`,
    ticket_premium_2: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Coffee Break`,
    ticket_premium_3: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Custom Badge`,
    ticket_premium_4: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Community Access`,
    ticket_premium_5: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Workshop Acess`,
    ticket_premium_6: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> After Party`,
    // Button
    ticket_btn_buy: "Buy Now",
    contact_title: "GIVE US FEEDBACK",
    faq_title: "F.A.Q",
    faq_question_1: "What is TheDevWorld conference about?",
    faq_answer_1:
      "TheDevWorld is a 3-day developer conference dedicated to AI, software development, and product design. It brings together professionals, students, and tech enthusiasts to share knowledge, network, and explore the future of technology.",
    faq_question_2: "Who can attend TheDevWorld?",
    faq_answer_2:
      "TheDevWorld is open to developers, designers, entrepreneurs, students, and anyone passionate about technology and innovation.",
    faq_question_3: "How can I buy tickets for TheDevWorld?",
    faq_answer_3:
      "Tickets can be purchased online through our official website. Early bird tickets are available in limited quantities, so make sure to grab yours in time!",
    faq_question_4: "What topics will be covered at TheDevWorld?",
    faq_answer_4:
      "The conference will focus on AI integration in product design, software development best practices, UX/UI design for AI-driven applications, machine learning, automation, and the latest trends in tech innovation.",
    faq_question_5: "Can I meet the speakers in person?",
    faq_answer_5:
      "Yes! After each day’s sessions, there will be meet & greet and networking events where you can interact with speakers and fellow participants.",
    faq_question_6: "Where is TheDevWorld taking place?",
    faq_answer_6:
      "TheDevWorld will be held at <strong>Tami Residence Conference Hall, Niš, Serbia.</strong> Full details about the venue and directions will be provided upon ticket purchase.",
    contact_btn:"SUBMIT",
    footer_desc:
      "TheDevWorld is a 3-day conference dedicated to bringing together developers, designers, and technology enthusiasts to explore the latest advancements in AI, software development, and digital product design. Through inspiring talks, hands-on workshops, and networking opportunities, TheDevWorld creates a unique environment where innovation and collaboration shape the future of technology.",
    footer_links: "Useful Links",
    footer_link_1: "Home",
    footer_link_2: "About us",
    footer_link_3: "Speakers",
    footer_link_4: "Schedule",
    footer_link_5: "Tickets",
    footer_ticket: "GET YOUR TICKET",
    footer_ticket_desc:
      "Stay updated on all events and secure your spot in no time. Fast, easy, and safe – get your tickets",
    footer_btn: "GET YOUR TICKET",
  },
  sr: {
    hero_title: "Dobrodošli na TheDevWorld",
    hero_subtitle: "Najveći događaj za developere u regionu",
    nav_home: "Početna",
    nav_about: "O konferenciji",
    nav_speaker: "Predavači",
    nav_schedule: "Raspored",
    nav_tickets: "Kupi ulaznicu",
    hero_h1: "THEDEVWORLD 2025",
    hero_h3_1:
      "Gde se vodeći developeri sveta okupljaju da grade budućnost <br> liniju po liniju koda.",
    hero_h3_2: "NIŠ · 8-11 Novembar",
    hero_btn: "KUPI ULAZNICU",
    info_h3_dev: "DEVELOPERA",
    info_h3_comp: "KOMPANIJA",
    info_h3_speaker: "PREDAVAČA",
    info_h3_ideas: "IDEJA",
    info_h3_line:
      "Kodiraj, poveži se i inspiriši — obezbedi svoje mesto na TheDevWorld 2025.",
    info_p_days: "Dana",
    info_p_hours: "Sata",
    info_p_minutes: "Minuta",
    info_p_seconds: "Sekunde",
    info_btn: "kupi ulaznicu",
    about_h2_title: "O KONFERENCIJI",
    about_h2_welcome:
      'dobrodošli na <span class="yellow-span">thedevworld</span><br> konferenciju',
    about_btn: "KUPI ULAZNICU",
    about_p_desc_1:
      "TheDevWorld nije samo još jedan tech događaj — to je mesto gde developeri, dizajneri i tehnološki entuzijasti dolaze da razmenjuju ideje, uče od eksperata i grade veze koje oblikuju budućnost IT industrije.",
    about_p_desc_2:
      "Organizovan od strane VTS Apps Team-a, konferencija ima za cilj da poveže studente, profesionalce i lidere iz industrije kroz niz predavanja, praktičnih radionica i panel diskusija. Bilo da ste iskusni developer ili tek ulazite u svet tehnologije, TheDevWorld pruža jedinstvenu priliku za širenje znanja, usavršavanje veština i postajanje dela vibrantne tech zajednice.",
    about_p_desc_3:
      "Sa fokusom na inovaciju, saradnju i stvarni uticaj, TheDevWorld je mesto gde ideje postaju akcija.",
    about_day: "DanDogađaja",
    about_speakers: "Predavači",
    about_sponsors: "Sponzori",
    schedule_h2_title: "Raspored događaja",
    schedule_day_1: "Dan 1",
    schedule_day_2: "Dan 2",
    schedule_day_3: "Dan 3",
    schedule_topic_1: "Dizajn intuitivnog UX-a za AI interfejse",
    schedule_topic_2: "Etika i AI: Izgradnja odgovorne tehnologije",
    schedule_topic_3: "Pauza za ručak",
    schedule_topic_4: "Pristupačnost u AI rešenjima",
    schedule_topic_5: "AI u DevOps-u: Automatizacija deployment pipeline-a",
    schedule_topic_6: "Izazovi Big Data u AI projektima",
    schedule_topic_7: "AI za sajber bezbednost: Zaštita sistema",
    schedule_topic_8: "Reinforcement Learning: Od teorije do prakse",
    schedule_topic_9: "AI u razvoju mobilnih aplikacija",
    schedule_topic_10: "Kako AI transformiše dizajn proizvoda",
    schedule_topic_11: "Izgradnja AI aplikacija: Alati i najbolje prakse",
    schedule_topic_12: "Mašinsko učenje u realnim proizvodima",
    schedule_topic_13: "Automatizacija poslovnih procesa sa AI i Data Science",
    about_organizer_title: "O organizatoru",
    about_organizer_p_1:
      "<strong>VTS Apps Team</strong> je tim strastvenih studenata Akademije primenjenih tehničkih nauka u Nišu, pod vođstvom <strong>Dr. Slavimira Stošovića i Nikole Vukotića</strong>. Godinama, ovaj tim predstavlja centar talenata specijalizovanih za softverski razvoj, takmičarsko programiranje i inovacije kroz hackathone.",
    about_organizer_p_2:
      "Kroz brojne takmičenja, projekte i inicijative vođene zajednicom, VTS Apps Team omogućava studentima da svoje ideje pretvore u stvarna rešenja, promovišući timski rad, kreativnost i tehničku izvrsnost.",
    about_organizer_p_3:
      "Ovu konferenciju organizuje VTS Apps Team sa misijom da poveže buduće developere, industrijske eksperte i tehnološke entuzijaste pod jednim krovom, negujući zajednicu saradnje i inovacije.",
    gallery_title: "GALERIJA",
    sponsors_title: "SPONZORI",
    newsletter_h3: "Ostanite u toku – primajte novosti!",
    tickets_title: "Ulaznice",

    // Standard Ticket
    ticket_standard: "STANDARD TICKET",
    ticket_standard_1: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Regularno mesto`,
    ticket_standard_2: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Pauza za kafu`,
    ticket_standard_3: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Custom Akreditacija`,
    ticket_standard_4: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
      </svg> Pristup zajednici`,
    ticket_standard_5: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
      </svg> Radionice`,
    ticket_standard_6: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
      </svg> After Party`,

    // VIP Ticket
    ticket_vip: "VIP ticket",
    ticket_vip_price: "150$",
    ticket_vip_1: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Regularno mesto`,
    ticket_vip_2: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Pauza za kafu`,
    ticket_vip_3: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Custom akreditacija`,
    ticket_vip_4: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Pristup zajednici`,
    ticket_vip_5: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
      </svg> Radionice`,
    ticket_vip_6: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
      </svg> After Party`,
    // Premium Ticket
    ticket_premium: "Premium ticket",
    ticket_premium_price: "250$",
    ticket_premium_1: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Regularno mesto`,
    ticket_premium_2: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Pauza za kafu`,
    ticket_premium_3: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Custom Akreditacija`,
    ticket_premium_4: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Pristup zajednici`,
    ticket_premium_5: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> Radionice`,
    ticket_premium_6: `
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
           class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
      </svg> After Party`,
    // Button
    ticket_btn_buy: "Kupi Sada",
    contact_title: "OSTAVI KOMENTAR",
    faq_title: "Često Postavljana Pitanja",
    faq_question_1: "O čemu se radi na konferenciji TheDevWorld?",
    faq_answer_1:
      "TheDevWorld je trodnevna konferencija za developere posvećena AI-u, razvoju softvera i dizajnu proizvoda. Okuplja profesionalce, studente i tehnološke entuzijaste kako bi razmenili znanje, umrežili se i istražili budućnost tehnologije.",
    faq_question_2: "Ko može da prisustvuje TheDevWorld-u?",
    faq_answer_2:
      "TheDevWorld je otvoren za developere, dizajnere, preduzetnike, studente i sve koji su strastveni u vezi tehnologije i inovacija.",
    faq_question_3: "Kako mogu kupiti ulaznice za TheDevWorld?",
    faq_answer_3:
      "Ulaznice se mogu kupiti online preko zvaničnog sajta. Early bird ulaznice su dostupne u ograničenim količinama, zato obezbedite svoju na vreme!",
    faq_question_4: "Koje teme će biti pokrivene na TheDevWorld-u?",
    faq_answer_4:
      "Konferencija će se fokusirati na integraciju AI-a u dizajn proizvoda, najbolje prakse u razvoju softvera, UX/UI dizajn za AI aplikacije, mašinsko učenje, automatizaciju i najnovije trendove u tehnološkim inovacijama.",
    faq_question_5: "Da li mogu lično da upoznam predavače?",
    faq_answer_5:
      "Da! Nakon svake sesije biće meet & greet i networking događaji gde možete razgovarati sa predavačima i drugim učesnicima.",
    faq_question_6: "Gde se održava TheDevWorld?",
    faq_answer_6:
      "TheDevWorld će se održati u <strong>Tami Residence Conference Hall, Niš, Srbija.</strong> Svi detalji o lokaciji i uputstva biće dostupni nakon kupovine ulaznica.",
    contact_btn:"POŠALJI",
    footer_desc:
      "TheDevWorld je trodnevna konferencija posvećena okupljanju programera, dizajnera i entuzijasta tehnologije kako bi istražili najnovija dostignuća u oblasti veštačke inteligencije, razvoja softvera i dizajna digitalnih proizvoda. Kroz inspirativna predavanja, praktične radionice i mogućnosti umrežavanja, TheDevWorld stvara jedinstveno okruženje u kome inovacija i saradnja oblikuju budućnost tehnologije.",
    footer_links: "Korisni Linkovi",
    footer_link_1: "Pocetna",
    footer_link_2: "O nama",
    footer_link_3: "Predavači",
    footer_link_4: "Raspored",
    footer_link_5: "Karte",
    footer_ticket: "KUPI SVOJU KARTU",
    footer_ticket_desc:
      "Budite u toku sa svim događajima i obezbedite svoje mesto za tren oka. Brzo, jednostavno i sigurno – nabavite svoje karte",
    footer_btn: "KUPI SVOJU KARTU",
  },
};

const switcher = document.getElementById("lang-switcher");
let currentLang = "en";

switcher.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "sr" : "en";
  switcher.textContent = currentLang.toUpperCase();
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = translations[currentLang][key];
  });
});

