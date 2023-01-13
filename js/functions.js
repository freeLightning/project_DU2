function click_filter_element (event) {

  const filter_dom = event.currentTarget;
  filter_dom.classList.toggle("selected");

  update_programmes();

}



function create_filter_element (data) {

const text = data.textContent;
const parent = data.parent;
const klass = data.class; 

const new_dom_element = document.createElement("li");
new_dom_element.classList.add(klass);
parent.appendChild(new_dom_element);
new_dom_element.textContent = text;
new_dom_element.addEventListener("click", click_filter_element);

return new_dom_element;

}



function create_countries_cities_filters () {

/*
create_countries_cities_filters
    ARGUMENTS
    This function doesn't take any arguments.
    SIDE-EFFECTS
    Each element in the array COUNTRIES gets called as an argument in create_country.
    RETURN VALUE
    None.
*/

function create_country (country) {
  const dom = document.createElement("div");
  dom.classList.add("country");
  dom.classList.add("filter_container");
  dom.id = "country_" + country.id;
  document.querySelector("#country_filter > ul").append(dom);
  
  dom.innerHTML = `
    <h1>${country.name}</h1>
    <ul class="filter_list"></ul>
  `;
  
  const cities = array_filter(CITIES, test_function);
  function test_function (city) {
    return city.countryID === country.id;
  }

  array_each(cities, create_city);
}

/*
  create_country
  ARGUMENTS
  This function takes an object from array COUNTRIES that contains the following keys:
  id (number): the country id
  name (string): the country name
  imagesNormal (array of strings): country images    
  
  SIDE-EFFECTS
  This function creates a new dom-element and gives it two classes, “country” and “filter_container”,
  sets a new id “country_” and country.id.
  Appends the new dom-element to "#country_filter > ul".
  Sets the new dom-element through innerHTML a country name and a ul.
  For each element in the array CITIES that are in the country gets called as an argument in create_city.
  RETURN VALUE
  None.
  */

function create_city (city) {

  const dom = create_filter_element({
    parent: document.querySelector(`#country_${city.countryID} > ul`),
    class: "selected",
    textContent: city.name,
  });
  dom.dataset.id = city.id;

}

  /*create_city
  ARGUMENTS
  This function takes an object from the array cities as an argument: city
  SIDE-EFFECTS
  This function creates a new dom-element and gives it the parent "#country_${city.countryID} > ul"
  Gives the new dom-element the class "selected"
  Sets the text content of the new dom-element to city.name
  Sets dataset.id to city.id
  RETURN VALUE
  None.
  */

array_each(COUNTRIES, create_country);
}



function create_filter () {

/*
ARGUMENTS
This function doesn't take any arguments.
SIDE EFFECTS
This function creates a new li element for each element in array LEVELS, SUBJECTS and
LANGUAGE. 
Sets the li element to the correct filter ul/parent.
Sets the class to "selected".
Sets the text content to the the elements name.
RETURN VALUE
None.
*/
  
const arrayis = ["level", "subject", "language"];

function create_what (what) {

  const dom = create_filter_element ({
    parent: document.querySelector(`#${arrayis[number]}_filter > ul`),
    class: "selected",
    textContent: what.name,
  });
  dom.dataset.id = what.id;

}  
let number = 0;
array_each(LEVELS, create_what);
number = 1;
array_each(SUBJECTS, create_what);
number = 2;
array_each(LANGUAGES, create_what);
}



function create_programme (programme) { 

  const grand_parent = document.querySelector("#programmes");
  const parent = grand_parent.children[1];
  parent.classList.add("parent");
  const programme_name = programme.name;

  let programme_level = programme.levelID;
  let i = 0;
  while(i < LEVELS.length) {
    if(programme_level === LEVELS[i].id ) {
      programme_level = LEVELS[i].name;
      
    }
    i = i + 1;
  }

  let programme_subject = programme.subjectID;
   i = 0;
  while(i < SUBJECTS.length) {
    if(programme_subject === SUBJECTS[i].id ) {
      programme_subject = SUBJECTS[i].name;
    
    }
    i = i + 1;
  }

  let programme_language = programme.languageID;
  i = 0;
  while(i < LANGUAGES.length) {
    if(programme_language === LANGUAGES[i].id ) {
      programme_language = LANGUAGES[i].name;
    
    }
    i = i + 1;
  }

  let programme_universityID=programme.universityID;
  i = 0;
  while(i < UNIVERSITIES.length) {
    if(programme_universityID === UNIVERSITIES[i].id ) {
      programme_universityID = UNIVERSITIES[i].name;
    
    }
    i = i + 1;
  }

  let programme_city = programme.universityID;
  i = 0;
  while(i < UNIVERSITIES.length) {
    if(programme_city === UNIVERSITIES[i].id) {
      programme_city = UNIVERSITIES[i].cityID;
    }
    i = i + 1;
  }      
  let ii = 0;   
  while(ii < CITIES.length) {
      if(programme_city === CITIES[ii].id) {
        programme_city = CITIES[ii].name;
      }       
      ii = ii + 1;
    }      

    let programme_city_sun = programme.universityID;
    i = 0;
    while(i < UNIVERSITIES.length) {
      if(programme_city_sun === UNIVERSITIES[i].id) {
        programme_city_sun = UNIVERSITIES[i].cityID;
      }
      i = i + 1;
    }      
    ii = 0;   
    while(ii < CITIES.length) {
        if(programme_city_sun === CITIES[ii].id) {
          programme_city_sun = CITIES[ii].sun;
        }       
        ii = ii + 1;
      }      

  
  let programme_country = programme.universityID;
  i = 0;
  while(i < UNIVERSITIES.length) {
    if(programme_country === UNIVERSITIES[i].id) {
      programme_country = UNIVERSITIES[i].cityID;
    }
    i = i + 1;
  }
  ii = 0;
  while(ii < CITIES.length) {
  if(programme_country === CITIES[ii].id){
  programme_country = CITIES[ii].countryID;
  }
  ii = ii + 1;
  }
  let iii = 0;
  while(iii < COUNTRIES.length) {
  if(programme_country === COUNTRIES[iii].id) {
  programme_country = COUNTRIES[iii].name;
  }
  iii = iii + 1; 
  }
    

  const new_programme = document.createElement("div");
  const programme_div = document.createElement("div");
  const programme_div2 = document.createElement("div");

  programme_div.innerHTML = `
  <p><b>${programme_name}</b> <br>
  ${programme_universityID} <br>
  ${programme_city}, ${programme_country} <br>
  ${programme_level}, ${programme_subject}, ${programme_language} 
  </p>`

  programme_div2.innerHTML = `
  <p>${programme_city}, sun-index: ${programme_city_sun} (${percenter(programme_city_sun, 365)}%)
  </p>`
  
  programme_div2.classList.add("bottom_programme");
  new_programme.classList.add("programme");
  parent.appendChild(new_programme);
  new_programme.appendChild(programme_div);
  new_programme.appendChild(programme_div2);

}



function update_programmes () {

    let children = document.querySelectorAll(".parent div");
    for (const child of children) {
      child.remove();
    } 
  
    let programmes = read_filters();
    if(programmes.length !== 0) {
      let text = document.querySelector("#programmes > p");
      text.innerHTML = ``;
    } else {
      let text = document.querySelector("#programmes > p");
      text.innerHTML = `Inga program uppfyller nuvarande filter.`;
    }

    array_each(programmes, create_programme);

}



function read_filters () {

/*
ARGUMENTS
This function doesn't take any arguments.
SIDE-EFFECTS
This function creates an array "programmes" which includes all the programmes
(from the array PROGRAMMES) that includes what filters, city, level, subject, languages
that is selected, as well as any value taken from the search-field.
RETURN VALUE
programmes.
*/

const city_selected_dom = document.querySelectorAll("#country_filter li.selected");

const city_id_selected = [];
function callback_add_cityID (dom_element) {
  const id_as_integer = parseInt(dom_element.dataset.id);
  city_id_selected.push(id_as_integer);
}
array_each(city_selected_dom, callback_add_cityID);

const universities = [];
for (let i = 0; i < city_id_selected.length; i++) {
  const city_id = city_id_selected[i];
  for (let ii = 0; ii < UNIVERSITIES.length; ii++) {
    const university = UNIVERSITIES[ii];
    if (university.cityID === city_id) {
      universities.push(university);
    }
  }
}

let programmes = [];
function callback_add_programmes (university) {
  const university_id = university.id;
  for (let i = 0; i < PROGRAMMES.length; i++) {
    const programme = PROGRAMMES[i];
    if (programme.universityID === university_id) {
      programmes.push(programme);
    }
  }
}
array_each(universities, callback_add_programmes);



const level_selected_dom = document.querySelectorAll("#level_filter li.selected");
const level_id_selected = [];
function callback_add_levelID (dom_element) {
  const id_as_integer = parseInt(dom_element.dataset.id);
  level_id_selected.push(id_as_integer);
}
array_each(level_selected_dom, callback_add_levelID);

function test_function_level (programme) {
  return level_id_selected.includes(programme.levelID);
}
programmes = array_filter(programmes, test_function_level);



const language_selected_dom = document.querySelectorAll("#language_filter li.selected");
const language_id_selected = [];
function callback_add_languageID (dom_element) {
  const id_as_integer = parseInt(dom_element.dataset.id);
  language_id_selected.push(id_as_integer);
}
array_each(language_selected_dom, callback_add_languageID);



function test_function_language (programme) {
  return language_id_selected.includes(programme.languageID);
}
programmes = array_filter(programmes, test_function_language);



const subject_selected_dom = document.querySelectorAll("#subject_filter li.selected");
const subject_id_selected = [];
function callback_add_subjectID (dom_element) {
  const id_as_integer = parseInt(dom_element.dataset.id);
  subject_id_selected.push(id_as_integer);
}
array_each(subject_selected_dom, callback_add_subjectID);



function test_function_subject (programme) {
  return subject_id_selected.includes(programme.subjectID);
}
programmes = array_filter(programmes, test_function_subject);



const search_string = document.querySelector("#search_field input").value;
if (search_string !== "") {
  function test_function (programme) {
    return programme.name.includes(search_string);
  }
  programmes = array_filter(programmes, test_function);
}

return programmes;
}