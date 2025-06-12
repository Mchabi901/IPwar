// Simple animation for timeline entries
document.querySelectorAll('.timeline-event').forEach((event, index) => {
    event.style.opacity = '0';
    event.style.transform = 'translateX(-20px)';
    event.style.transition = `all 0.5s ease ${index * 0.2}s`;

    setTimeout(() => {
        event.style.opacity = '1';
        event.style.transform = 'translateX(0)';
    }, 500);
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*scroll tl s */
// Scroll-triggered animations
function checkScroll() {
  const events = document.querySelectorAll('.war-event');
  events.forEach(event => {
    const eventTop = event.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (eventTop < windowHeight * 0.75) { // Trigger when 75% in view
      event.classList.add('visible');
    }
  });
}

// Run on load and scroll
window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);
/*scroll tl e */
// Hamburger Menu Toggle
const hamburgerBtn = document.querySelector('.hamburger-btn');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a'); // All nav links

// Toggle menu on hamburger click
hamburgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when any nav item is clicked
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active'); // Hide menu
    hamburgerBtn.classList.remove('open'); // Reset icon (if using animation)
  });
});



// Person data (update these stories + images)
const personData = {
  cariappa: {
    name: "Field Marshal K. M. Cariappa",
    image: "images/cariappa.jpg",
    story: `Field Marshal K. M. Cariappa was the first Indian Commander-in-Chief of the Indian Army.,
      Led Indian forces during the 1947 Indo-Pak war.,
      Played a vital role in securing Kashmir for India.,
      Set foundation for a professional Indian Army.,
      Known for strong leadership and patriotism.,
      Helped transition Indian Army post-independence.,
      Influential in shaping India's military strategy.,
      Maintained discipline during turbulent times.,
      Earned respect from Indian and British officers.,
      Legacy continues as a symbol of Indian military pride.`
  },
  messervy: {
    name: "General Frank Messervy",
    image: "images/messervy.jpg",
    story: `First Commander-in-Chief of Pakistan Army after independence.,
      Laid groundwork for Pakistan Army’s structure.,
      Led early military strategies in 1947 Kashmir conflict.,
      Helped organize and build Pakistan's military forces.,
      Experienced British officer with prior service in India.,
      Oversaw transition of command post-partition.,
      Faced challenges in organizing a new army.,
      Set operational precedents for Pakistan Army.,
      Played a key role in early Indo-Pak military engagements.,
      His tenure influenced Pakistan Army’s future direction.`
  },
  chaudhuri: {
    name: "General J. N. Chaudhuri",
    image: "images/chaudhuri.jpg",
    story: `India's Army Chief during the 1965 war
      Led both defensive and offensive operations
      Credited with maintaining India’s territorial integrity
      Oversaw planning during intense Indo-Pak conflict
      Managed army morale under wartime pressure
      Experienced in strategic military leadership
      Coordinated with political leadership for war efforts
      Handled logistics and troop deployments effectively
      Known for his calm and composed leadership style
      Contributed to shaping India’s military doctrine`
  },
  musa: {
    name: "General Muhammad Musa",
    image: "images/musa.jpg",
    story: `Pakistan's Army Chief during the 1965 war
      Orchestrated several operations including Operation Gibraltar
      Led initial advances in Kashmir conflict
      Faced criticism for not capitalizing on early gains
      Experienced military strategist of Pakistan Army
      Managed complex battlefield scenarios
      Coordinated Pakistan’s army responses during the war
      Faced logistical and tactical challenges
      Held responsibility for war outcomes
      Legacy debated due to mixed military results`
  },
  manekshaw: {
    name: "Sam Manekshaw",
    image: "images/manekshaw.jpg",
    story: `One of India's most loved generals
      Led India to a decisive victory in the 1971 war
      Coordinated a successful three-front war
      Helped liberate Bangladesh from Pakistan rule
      Known for his wit and inspiring leadership
      Strategized efficient troop deployments
      Maintained high army morale during conflict
      Awarded India’s highest military honors
      Balanced diplomacy and military action skillfully
      Left a lasting legacy on Indian military history`
  },
  niazi: {
    name: "General A. A. K. Niazi",
    image: "images/niazi.png",
    story: `Commander of Pakistani forces in East Pakistan in 1971
      Led military operations during Bangladesh Liberation War
      Surrendered to Indian forces in Dhaka
      Surrender marked creation of Bangladesh
      Faced criticism for defeat and surrender
      Experienced in military command roles
      His decisions impacted the outcome of the war
      Oversaw Pakistani defense in East Pakistan
      Played a controversial role in 1971 conflict
      Legacy remembered in South Asian military history`
  },
  batra: {
    name: "Captain Vikram Batra",
    image: "images/batra.jpg",
    story: ` Known for bravery during the Kargil War
      Captured Point 5140 under extreme conditions
      Famous for the slogan Yeh Dil Maange More!
      Demonstrated exceptional leadership and courage
      Awarded Param Vir Chakra posthumously
      Inspired troops with his fearless attitude
      Played key role in reclaiming strategic peaks
      Led risky missions with success
      Became a symbol of Indian soldier’s valor
      Remembered as a war hero and martyr`
  },
  musharraf: {
    name: "General Pervez Musharraf",
    image: "images/musharraf.jpeg",
    story: `Army Chief during the Kargil conflict
      Architect of Pakistan’s infiltration strategy
      Led military operations in Kargil War
      Later became President of Pakistan via military coup
      Controversial figure in Pakistan’s history
      Managed army and political leadership roles
      Faced international pressure during conflict
      His decisions influenced Indo-Pak relations
      Known for strong but polarizing leadership
      Legacy debated over military and political actions`
  },
  abhinandan: {
    name: "Abhinandan Varthaman",
    image: "images/abhinandan.jpg",
    story: `Indian Air Force pilot during 2019 Balakot strike aftermath
      Shot down a Pakistani F-16 in dogfight
      Captured by Pakistan and later released
      Received widespread acclaim in India
      Symbol of bravery and patriotism
      His capture and release triggered diplomatic talks
      Known for calm and resilience during captivity
      Awarded the Vir Chakra for his actions
      Inspired many in Indian armed forces
      Became a national hero overnight`
  },    
  ghafoor: {
    name: "Asif Ghafoor",
    image: "images/ghafoor.jpg",
    story: `Director General of ISPR Pakistan’s military spokesperson
      Handled official communication during Balakot and Abhinandan incidents
      Shaped media narratives for Pakistan Army
      Known for articulate and confident briefings
      Managed information during tense Indo-Pak relations
      Played key role in military-media interface
      Influenced public perception in Pakistan
      Represented Pakistan Army in international media
      Communicated Pakistan’s official stance clearly
      Important figure in modern Pakistan military communication`
  }
};

// Show overlay
function showOverlay(key) {
  const person = personData[key];
  if (!person) return;

  document.getElementById("person-name").innerText = person.name;
  document.getElementById("person-image").src = person.image;
  document.getElementById("person-story").innerText = person.story;

  document.getElementById("person-overlay").style.display = "flex";
}

// Close overlay
function closeOverlay() {
  document.getElementById("person-overlay").style.display = "none";
}
// Show overlay
function showOverlay(key) {
  const person = personData[key];
  if (!person) return;

  document.getElementById("person-name").innerText = person.name;
  document.getElementById("person-image").src = person.image;
  document.getElementById("person-story").innerText = person.story;

  document.getElementById("person-overlay").style.display = "flex";
  document.body.classList.add("no-scroll"); // LOCK website scroll
}

// Close overlay
function closeOverlay() {
  document.getElementById("person-overlay").style.display = "none";
  document.body.classList.remove("no-scroll"); // UNLOCK website scroll
}

