
function prepareLocalStorage(inDevelopment){
  hasPrepared = localStorage['prepareLocalStorage'];
  if (hasPrepared != 'done' || inDevelopment){
    console.debug('Initalsing LocalStorage');
    
    // ****  Prepare Local Storage for Home Screen
    // prepare JSON data structure and put in local storage 
    var home_externalLinks = {
      uniba: {
       title: "University of Bamberg",
       href: "http://www.uni-bamberg.de"
      },
      wiai: {
       title: "WIAI.de",
       href: "http://www.wiai.de"
      },
      feki: {
       title: "Feki.de",
       href: "http://www.feki.de"
      },
      contact: {
        title: "Contact Us",
        href: "https://www.uni-bamberg.de/wiai/kontaktnavigation/kontakt/"
       }
    };
    localStorage.setItem('home_externalLinks', JSON.stringify(home_externalLinks));

    var bachelor_externalLinks = {
      aps: {
       title: "Applied Computer Science",
       href: "https://www.uni-bamberg.de/ba-ai/"
      },
      iism: {
       title: "International Information Systems Management",
       href: "https://www.uni-bamberg.de/ba-iism/"
      },
      sss: {
       title: "Software Systems Science",
       href: "https://www.uni-bamberg.de/sosysc/"
      },
      bcs: {
        title: "Business computer science",
        href: "https://www.uni-bamberg.de/ba-wi/"
       }
    };
    localStorage.setItem('bachelor_externalLinks', JSON.stringify(bachelor_externalLinks));

    var master_externalLinks = {
      apsm: {
       title: "Applied Computer Science",
       href: "https://www.uni-bamberg.de/en/ma-ai/"
      },
      ch: {
       title: "Computing in the Humanities",
       href: "https://www.uni-bamberg.de/en/ma-cith/"
      },
      iism: {
       title: "International Information Systems Management (information in German)",
       href: "https://www.uni-bamberg.de/en/ma-iism/"
      },
      isss: {
        title: "International Software Systems Science",
        href: "https://www.uni-bamberg.de/en/ma-isosysc/"
       },

       is: {
        title: "Information Systems",
        href: "https://www.uni-bamberg.de/en/ma-wi/"
       },
       ebis: {
        title: "Education in Business and Information Systems",
        href: "https://www.uni-bamberg.de/en/wipaed-wi/"
       },
       vatpis: {
        title: "Virtual Advanced Training Programme in Information Systems (information in German)",
        href: "https://www.uni-bamberg.de/ma-vawi/"
       }
    };
    localStorage.setItem('master_externalLinks', JSON.stringify(master_externalLinks));
    
    
    // ****  Prepare Local Storage for Other Screens
    // you can fill the local storage with your data
    
    // ****  Finally
    localStorage.setItem('prepareLocalStorage', 'done');
  }
  else {
    console.debug('Leaving LocalStorage untouched');
  }
}

