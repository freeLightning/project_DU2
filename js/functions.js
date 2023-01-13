
// G
// CODE According to specification
function click_filter_element (event) {

  /*
    ARGUMENTS
      event: event-object created when user clicks on one of the filter elements.

    SIDE-EFFECTS
      Marks the clicked filter element as selected / unselected.
      Since a filter element will have changed after the click, the list of
      programmes must be updated.

      Attention VG
        Careful with the propagation of the click-event

    NO RETURN VALUE

  */
  const click_filter_dom = event.currentTarget;
  click_filter_dom.classList.toggle("selected");

  update_programmes();
}


// G
// CODE according to specification
function create_filter_element (data) {

  /*
    ARGUMENTS
      data: object that contains the following keys:
        class (string): a class-name given to the created element
        textContent (string): the text that the element contains
        parent (reference to HTML-element): the HTML-element that is the parent of the created element

      No control of arguments.

    SIDE-EFFECTS
      Creates a new dom-element with the tag "li".
      Gives the new dom-element the class contained in data.class
      Appends the new dom-element to the element referenced in data.parent
      Sets the text content of the new dom-element to data.textContent
      Sets the function click_filter_element as a listener to "click" for the new dom-element

    RETURN VALUE
      Returns a reference to the new dom-element
  */  
  const parent = data.parent;
  const klass = data.class; 
  const new_element = document.createElement("li");

  new_dom_element.textContent = data.textContent;
  new_dom_element.classList.add(klass);
  parent.appendChild(new_dom_element);
  new_dom_element.addEventListener("click", click_filter_element);

  return new_dom_element;
}


// VG
// CODE according to specification
function add_group_toggling (filter_container_dom) {

  /*
    ARGUMENT
      filter_container_dom: reference to a HTML-element that contains a set of fliter_elements
            Exempel: the <ul> that contains the filters for Language.

    SIDE EFFECTS
      The function makes sure that when the user clicks on filter_container_dom, all the
      filter_elements that it contains are selected / unselected.
      Since some filter elements will have changed after the click, the list of
      programmes must be updated.

    NO RETURN VALUE

  */
  
}


// VG
// CODE according to specifications
function toggle_cities (event) {

  /*

    ARGUMENTS
      This function does not take any arguments

    SIDE EFFECTS
      This function checks the state of the first city-filter-element (Madrid).
      If it is selected then it de-selects ALL city-filter-elements
      If it is de-selected then it selects ALL city-filter-elements 

    NO RETURN VALUE

  */

}


// WRITE SPECIFICATION
// ATTENTION: You need to write the specification of all three functions:
//            create_countries_cities_filters, create_country and create_city
function create_countries_cities_filters () {
/*
    ARGUMENTS
      This function does not take any arguments

    SIDE EFFECTS
      The function array_each is called with two arguments (the array COUNTRIES and the function "create_country")
      array_each loops through each element in the array COUNTRIES and compares if the key value countryID in CITIES is the same as country.id in COUNTRY
      If true a div element is created, set with classes "country" and "filter_container. Then appended to the ul parent with id "country_filter"

      A h1 inner HTML element is created and textcontent is set to the value of the key country.name
      An unsorted list (ul) is created with inner HTML and the class "filter_list" is added

      Finally the function create_city is called with the object key.city from array cities as an argument
      The function creates a new dom-element and append it to a ul parent that has the id "country_ + city.countryiD"
      Gives the new dom-element (li) the class "selected" and sets the textcontent to the value of city.name
      Sets dataset.id to city.id

    NO RETURN VALUE

  */

  function create_country (country) {
  /*

    ARGUMENTS
      Function receives an object as an argument (from the array COUNTRIES) containing two arrays, country and cities
      Both arrays containing country with the key id

    SIDE EFFECTS
      A div is created with the two classes "country" and "filter_container". Id is set to #country_ + country.id.value
      The created div is then appended to the parent (ul with id "country_filter")

      A h1 element is created with inner HTML and textcontent is set to the value of the key country.name
      An unsorted list (ul) is created with inner HTML and the class "filter_list"
      
      The function array_filter is called with two arguments, object CITIES and the callback function "test_function"
      array_filter returns a new array with all the elements in array that satisfy the test_function
      In this case if the value of city countryID is the same as country.id
      
      The function array_each is called with two arguments, the new array and callbackfunction "create_city"

    NO RETURN VALUE

  */
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
  function create_city (city) {
  /*

    ARGUMENTS
      The funktion is called from the function array_each with the arguments object key.city from array cities and callback "create_city". 

    SIDE EFFECTS
      This function creates a new dom-element (li) and gives it the parent "#country_${city.countryID} > ul"
      The function creates a new dom-element and append it to a ul parent that has the id "country_ + city.countryiD"
      Gives the new dom-element (li) the class "selected" and sets the textcontent to the value of city.name
      Sets dataset.id to city.id

    NO RETURN VALUE

  */

    const dom = create_filter_element({
      parent: document.querySelector(`#country_${city.countryID} > ul`),
      class: "selected",
      textContent: city.name,
    });
    dom.dataset.id = city.id;

  }

  array_each(COUNTRIES, create_country);
}


// G
// ABSTRACT AND WRITE SPECIFICATION
//    As you can see, all three functions below do basically the same thing.
//    Abstract them to one function, and write the specification of that function.
function create_filter_dom (data) {
  /*
    ARGUMENTS
        data: object that contains the following keys:
        parent (reference to HTML-element): the HTML-element that is the parent of the created element
        class (string): class-name is given to the created element
        textContent (string): the name that the element contains

      No control of arguments.

    SIDE-EFFECTS
      Creates a new dom-element with the tag "li".
      Gives the new dom-element the class "selected"
      Appends the new dom-element to the element referenced in data.parent
      Sets the textcontent of the new dom-element to data.name
      Sets the dataset.id to data.id;

    RETURN VALUE
      None
  */  
    const dom = create_filter_element({
      parent: document.querySelector(`#${data}_filter > ul`),
      class: "selected",
      textContent: data.name,
    });
    dom.dataset.id = data.id;
}

array_each(LEVELS, create_filter_dom);
array_each(LANGUAGES, create_filter_dom);
array_each(SUBJECTS, create_filter_dom);
  

// G / VG (see details in specification)
// CODE according to specifications
function create_programme (programme) {
  
  /*

    ARGUMENT
      programme (object): One of the objects from PROGRAMMES

    SIDE-EFFECTS
      This function creates the HTML-element that contains all the information
      about one programme, as seen in the video / image.
      
      VG: The background image is a random image from among the images of the city
          in which the programme is (via the university)
      G:  No background image required.


      VG: The "see more" interaction must be included.
      G:  The "see more" element is not required. And that information needs not be in place.

    NO RETURN VALUE

  */  

  const program_dom = document.querySelector("#programmes");
  const container = program_dom.children[1];
  container.classList.add("container");
  const programme_name = programme.name;
  
  /* 
  --------   LEVELS --------
    */
  let programme_level = programme.levelID;
  for (i = 0; i < LEVELS.length; i++){
      if(programme_level === LEVELS[i].id ) {
        programme_level = LEVELS[i].name; 
    }
  }

    /* 
  --------  SUBJECTS --------
    */
  let programme_subject = programme.subjectID;
    for (i = 0; i < SUBJECTS.length; i++){
      if(programme_subject === SUBJECTS[i].id ) {
        programme_subject = SUBJECTS[i].name;
    }
  }

  /* 
  -------- LANGUAGES --------
    */
  let programme_language = programme.languageID;
  for (i = 0; i < LANGUAGES.length; i++){
      if(programme_language === LANGUAGES[i].id ) {
        programme_language = LANGUAGES[i].name;
      }
  }
  
  /* 
  --------UNIVERSITIES --------
    */
  let programme_universityID=programme.universityID;
  let programme_city = programme.universityID;
  let programme_city_sun = programme.universityID;
  let programme_country = programme.universityID;
  for (i = 0; i < UNIVERSITIES.length; i++){
      
      if(programme_universityID === UNIVERSITIES[i].id ) {
        programme_universityID = UNIVERSITIES[i].name;
      }

      if(programme_city === UNIVERSITIES[i].id) {
          programme_city = UNIVERSITIES[i].cityID;
      }

      if(programme_city_sun === UNIVERSITIES[i].id) {
          programme_city_sun = UNIVERSITIES[i].cityID;
      }

      if(programme_country === UNIVERSITIES[i].id) {
          programme_country = UNIVERSITIES[i].cityID;
      }
  }

    /* 
  --------CITIES --------
    */
  for (i = 0; i < CITIES.length; i++){
      if(programme_city === CITIES[i].id) {
          programme_city = CITIES[i].name;
      }       

      if(programme_city_sun === CITIES[i].id) {
          programme_city_sun = CITIES[i].sun;
      }            

      if(programme_country === CITIES[i].id){
          programme_country = CITIES[ii].countryID;
      }
  }

  /* 
  -------- COUNTRIES --------
    */
  for (i = 0; i < COUNTRIES.length; i++){
      if(programme_country === COUNTRIES[i].id) {
          programme_country = COUNTRIES[i].name;
      }
  }
    
  const new_programme_dom = document.createElement("div");
  const programme_div = document.createElement("div");
  const programme_div2 = document.createElement("div");

  programme_div.innerHTML = `
  <p><b>${programme_name}</b>
  ${programme_universityID}
  ${programme_city}, ${programme_country}
  ${programme_level}, ${programme_subject}, ${programme_language} 
  </p>`

  programme_div2.innerHTML = `
  <p>${programme_city}, sun-index: ${programme_city_sun} ${programme_city_sun}%</p>`
  
  programme_div2.classList.add("bottom_programmes");
  new_programme_dom.classList.add("programmes");
  container.appendChild(new_programme_dom);
  new_programme_dom.appendChild(programme_div);
  new_programme_dom.appendChild(programme_div2);
  
}
  


// G
// CODE according to the specification
function update_programmes () {

  /*
      NO ARGUMENTS

      SIDE EFFECTS
        This function updates the programmes shown on the page according to
        the current filter status (which filter elements are selected / unselected).
        It uses the function read_filters to know which programmes need to be included.

        VG: The top images (header) need to be updated here

      NO RETURN VALUE

  */

  let children = document.querySelectorAll(".container div");
  for (const child of children) {
    child.remove();
  } 

  let programmes = read_filters();
  if(programmes.length !== 0) {
    let text = document.querySelector("#programmes > p");
    text.innerHTML = "";
  } 
  else {
    let text = document.querySelector("#programmes > p");
    text.innerHTML = "Inga program uppfyller nuvarande filter.";
  }

  array_each(programmes, create_programme);
}



// G
// WRITE SPECIFICATION
// You must understand how this function works. There will be questions about it
// in the code review (kodredovisning)

// Optional VG: Which parts of the function's code could be abstracted?
//              Implement it
function read_filters () {
  
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
