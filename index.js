const menuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const btnCloseNav = document.querySelector('.btn-close-nav');
const linkPortfolio = document.querySelector('.link-portfolio');
const linkAbout = document.querySelector('.link-about');
const linkContact = document.querySelector('.link-contact');
const arrayBtnPopup = document.querySelectorAll('.btn-popup');
const form = document.querySelector('.form-input');
const [firstName, email, textArea] = form.elements;
let inputData = {
  firstName: document.getElementById('user-name').value,
  email: document.getElementById('email').value,
  textArea: document.getElementById('textArea').value,
};
if (localStorage.savedForm) {
  inputData = JSON.parse(localStorage.getItem('savedForm'));
}

firstName.addEventListener('change', () => {
  inputData.firstName = firstName.value;
});

email.addEventListener('change', () => {
  inputData.email = email.value;
});

textArea.addEventListener('change', () => {
  inputData.textArea = textArea.value;
});

const fillDataInput = () => {
  if (inputData.firstName) {
    firstName.value = inputData.firstName;
  }
  if (inputData.email) {
    email.value = inputData.email;
  }
  if (inputData.textArea) {
    textArea.value = inputData.textArea;
  }
};

const populateFields = () => {
  localStorage.setItem('savedForm', JSON.stringify(inputData));
  fillDataInput();
};
populateFields();
form.onchange = populateFields;

const errMsgEmail = document.querySelector('small');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('hidden');
  headerNavMobile.classList.remove('hidden');
});

btnCloseNav.addEventListener('click', () => {
  menuBtn.classList.remove('hidden');
  headerNavMobile.classList.add('hidden');
});

linkPortfolio.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkAbout.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkContact.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const regex = /[A-Z]/;
  if (!regex.test(email.value)) {
    form.submit();
  } else {
    errMsgEmail.innerText = 'Please enter only lower case';
  }
});

const dataCards = [
  {
    id: 0,
    url: './img/pop-img.png',
    title: 'Keeping track of hundreds of components',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://ameerhamzakhalid.github.io/portfolio-ameer-hamza/',
    linkSource: 'https://github.com/ameerhamzakhalid/',
  },
  {
    id: 1,
    url: './img/pop-img.png',
    title: 'Keeping track of hundreds of components 1',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://ameerhamzakhalid.github.io/portfolio-ameer-hamza/',
    linkSource: 'https://github.com/ameerhamzakhalid/',
  },
  {
    id: 2,
    url: './img/pop-img.png',
    title: 'Keeping track of hundreds of components 2',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://ameerhamzakhalid.github.io/portfolio-ameer-hamza/',
    linkSource: 'https://github.com/ameerhamzakhalid/',
  },
  {
    id: 3,
    url: './img/pop-img.png',
    title: 'Keeping track of hundreds of components 3',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://ameerhamzakhalid.github.io/portfolio-ameer-hamza/',
    linkSource: 'https://github.com/ameerhamzakhalid/',
  },
  {
    id: 4,
    url: './img/pop-img.png',
    title: 'Keeping track of hundreds of components 4',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://ameerhamzakhalid.github.io/portfolio-ameer-hamza/',
    linkSource: 'https://github.com/ameerhamzakhalid/',
  },
  {
    id: 5,
    url: './img/pop-img.png',
    title: 'Keeping track of hundreds of components 5',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
  and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tecnologies: {
      tech1: 'Rubi on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linkVersion: 'https://ameerhamzakhalid.github.io/portfolio-ameer-hamza/',
    linkSource: 'https://github.com/ameerhamzakhalid/',
  },
];

const cardWorkDetailsMobile = (index) => `
  <article class="card-work-details-mobile">

    <div class="btn-close" >
    <button type="button" class="btn-close-details">
    <img src="./img/cancel-ic.svg" alt="close icon">
    </button>
    </div>

          <div class="card-image-details-mobile">
              <img src=${dataCards[index].url} alt="Medical illustration sets">
          </div>
          <h2 class="card-title-mobile">
              ${dataCards[index].title}
          </h2>
          <ul class="card-tags-mobile">
              <li class="tag-mobile">${dataCards[index].tecnologies.tech1}</li>
              <li class="tag-mobile">${dataCards[index].tecnologies.tech2}</li>
              <li class="tag-mobile">${dataCards[index].tecnologies.tech3}</li>
              <li class="tag-mobile">${dataCards[index].tecnologies.tech4}</li>
          </ul>
          <p class="card-paragraph-mobile">
            ${dataCards[index].description}
          </p>
          <div class="card-button-mobile">
                  <a href=${dataCards[index].linkVersion} class="btn-card-details-mobile">
                  See Live
                  <img src="./img/live-ic.svg" alt="see live icon">
                  </a>
                  <a href=${dataCards[index].linkSource} class="btn-card-details-mobile">
                  See Sources
                  <img src="./img/gith-white.svg" alt="see github icon">
                  </a>
          </div>
          <script src="index.js"></script>
  </article>
  `;

for (let i = 0; i < arrayBtnPopup.length; i += 1) {
  arrayBtnPopup[i].addEventListener('click', () => {
    document.body.innerHTML = cardWorkDetailsMobile(i);
    const btnCloseDetailsMobile = document.querySelector('.btn-close-details');
    btnCloseDetailsMobile.addEventListener('click', () => {
      window.location.reload();
    });
  });
}