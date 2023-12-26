let isModalOpen = false;
let contrastToggle = false;


function moveBackground(event){
const shapes = document.querySelectorAll(".shape")
const x =event.clientX / 20
const y =event.clientY / 20

for (let i =0; i < shapes.length; ++i){
    const isOdd = i % 2 !== 0;
    const oddIntiger = isOdd ? -1: 1
    shapes[i].style.transform = `translate(${x * oddIntiger }px, ${y * oddIntiger }px)`
}

}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark-theme";
      localStorage.setItem("contrastToggle", "true");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("contrastToggle", "false");
    }
  }
  
  // On page load, check if dark mode is enabled in local storage
  const isDarkModeEnabled = localStorage.getItem("contrastToggle") === "true";
  if (isDarkModeEnabled) {
    document.body.classList += " dark-theme";
    contrastToggle = true;
  }

function contact(event) {
    event.preventDefault();
     const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
     emailjs
  .sendForm(
        'service_bqx4s2d',
        'template_74y021e',
        event.target,
        'K186n3klexni0hH1l'
   ).then(()=>{
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }) .catch(()=> {
        loading.classList.remove("modal__overlay--visible")
   alert(
    "The email service is temporarily unavailable. Please directly contact me on jangsing02@gmail.com"
   )
    })
}

function toggleModal(){
    if (isModalOpen){
        isModalOpen = false
        return document.body.classList.remove('modal--open')

    }
    isModalOpen = true
document.body.classList += " modal--open"
}

const text = "Hi, <span class='orange'>Jang</span> here.";
const typingElement = document.querySelector(".typing");
const typingSpeed = 150; // In milliseconds

function typeText() {
  let htmlText = "";
  let charIndex = 0;

  const typeNextChar = () => {
    if (charIndex < text.length) {
      let currentChar = text[charIndex];
      htmlText += currentChar;
      charIndex++;

      // Check if we are inside an HTML tag
      if (currentChar === "<") {
        while (charIndex < text.length && text[charIndex] !== ">") {
          htmlText += text[charIndex];
          charIndex++;
        }
        htmlText += text[charIndex];
        charIndex++;
      }

      typingElement.innerHTML = htmlText;
      setTimeout(typeNextChar, typingSpeed);
    }
  };

  typeNextChar();
}

document.addEventListener("DOMContentLoaded", typeText);


let angle;

const sketch = p5 => {
  p5.setup = () => {
    let canvas = p5.createCanvas(400, 400);
    canvas.parent('fractal-tree');
    angle = p5.PI / 4;
  };

  p5.draw = () => {
    p5.clear();
    p5.translate(200, p5.height);
    angle = p5.map(p5.sin(p5.frameCount * 0.01), -1, 1, p5.PI / 2, p5.PI / 16); // vary the angle using sin()
    
    if (contrastToggle) { // If dark mode is enabled
      p5.stroke(255); // Set stroke color to white
    } else {
      p5.stroke(0); // Set stroke color to black
    }
    
    branch(80);
  };

  function branch(len) {
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 4) {
      p5.push();
      p5.rotate(angle);
      branch(len * 0.67);
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(len * 0.67);
      p5.pop();
    }
  }
};

new p5(sketch);


const experienceItems = {
  "3BX": {
    jobTitle: "Full Stack Developer @" ,
    duration: "AUG 2023 - PRESENT",
    desc: [
      "<span class='orange tablisttag'># </span> Developed and Launched Version 1 of 3BX a Multi-User Subscription Based App.",
      "<span class='orange tablisttag'># </span> Integrated Payment API’s for Secure and Seamless Transactions Resulting in 90% Less Errors.",
      "<span class='orange tablisttag'># </span> Implemented Lambda and S3 for Faster Response times and Scalability for 200% More Users."
    ]
  },
  "Pineville Initative": {
    jobTitle: "Software Engineer Intern @" ,
    duration: "AUG 2022 - PRESENT",
    desc: [
      "<span class='orange tablisttag'># </span> Contributed to Improved User Experience by Developing key Features and the app's Roadmap.",
      "<span class='orange tablisttag'># </span> Managed day-to-day Operations, Ensuring the Project's Completion and Success.",
      "<span class='orange tablisttag'># </span> Designed and Integrated a Data Visualization CMS System, Ensuring Real Time Data Accessibility."
    ]
  },
  "Frontend Tutor": {
    jobTitle: "CEO and Founder @" ,
    duration: "MAY 2023 - PRESENT",
    desc: [
      "<span class='orange tablisttag'># </span> Established an Educational Platform Focused on Teaching Individuals Frontend Development.",
      "<span class='orange tablisttag'># </span> Managed a Team of 7 Employees, including UX/UI designers, Developers, and Marketing Experts.",
      "<span class='orange tablisttag'># </span> Enforced Strict Adherence to Deadlines, Organized Critical Meetings, and Delegated Tasks among Team Members."
    ]
  },
    "Coding Dojo": {
      jobTitle: "Software Development Student @" ,
      duration: "AUG 2022 - PRESENT",
      desc: [
        "<span class='orange tablisttag'># </span> Participated in collaborative projects with students from across the country to gain hands-on experience in software development.",
        "<span class='orange tablisttag'># </span> Engaged in hands-on coding activities and worked on real-world projects to gain practical experience.",
        "<span class='orange tablisttag'># </span> Enhanced knowledge of distributed computing, storage, and indexing systems by working alongside experienced software engineers."
      ]
    },
    "Sierra College": {
      jobTitle: "Computer Science Student @",
      duration: "JULY 2021 - CURRENT",
      desc: [
        "<span class='orange tablisttag'># </span> Learning about different Data Structures, Algorithms, and Web development technologies",
        "<span class='orange tablisttag'># </span> Collaborated with other students to build multiple projects.",
        "<span class='orange tablisttag'># </span> Current GPA of 3.7 and expected to graduate with a bachelors degree in May 2025 ."
      ]
    }
  };
  
  const tabsContainer = document.querySelector(".joblist-tabs");
  const contentContainer = document.querySelector(".joblist-content");
  
  Object.keys(experienceItems).forEach((key, i) => {
    const tab = document.createElement("div");
    tab.classList.add("joblist-tab");
    tab.dataset.index = i;
    tab.innerText = key;
    tabsContainer.appendChild(tab);
  
    const panel = document.createElement("div");
    panel.classList.add("joblist-panel");
    panel.dataset.index = i;
    panel.innerHTML = `
      <span class="joblist-job-title">${experienceItems[key]["jobTitle"]} </span>
      <span class="joblist-job-company">${key}</span>
      <div class="joblist-duration">${experienceItems[key]["duration"]}</div>
      <ul class="job-description">
        ${experienceItems[key]["desc"].map(descItem => `<li>${descItem}</li>`).join('')}
      </ul>
    `;
    contentContainer.appendChild(panel);
  
    tab.addEventListener("click", (event) => {
      const selectedIndex = event.target.dataset.index;
  
      document.querySelectorAll(".joblist-tab").forEach((tab) => {
        if (tab.dataset.index === selectedIndex) {
          tab.classList.add("active");
        } else {
          tab.classList.remove("active");
        }
      });
  
      document.querySelectorAll(".joblist-panel").forEach((panel) => {
        if (panel.dataset.index === selectedIndex) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
    });
  
    if (i === 0) {
      tab.classList.add("active");
      panel.classList.add("active");
    }
  });
  const tabs = document.querySelectorAll('.joblist-tab');
  const activeLine = document.createElement('div');
  activeLine.classList.add('joblist-active-line');
  document.querySelector('.joblist-tabs').appendChild(activeLine);

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      const tabHeight = tab.offsetHeight;
      const tabTop = tab.offsetTop;
      activeLine.style.top = `${tabTop}px`;
    });
  });


  
