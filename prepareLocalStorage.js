
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

    var faculty_externalLinks = {
      profile: {
       title: "Profil",
       href: "https://www.uni-bamberg.de/en/wiai/the-faculty/profil/"
      },
      ootd: {
       title: "Office of the dean",
       href: "https://www.uni-bamberg.de/en/wiai/the-faculty/dekanat/"
      },
      gub: {
       title: "Gremien und Beauftragte",
       href: "https://www.uni-bamberg.de/wiai/die-fakultaet/gremien/"
      },
      edfw: {
        title: "Emeriti der Fakultät WIAI",
        href: "https://www.uni-bamberg.de/wiai/die-fakultaet/emeriti-der-fakultaet-wiai/"
       },

       wfh: {
        title: "WIAI Faculty History",
        href: "https://www.uni-bamberg.de/en/wiai/the-faculty/geschichte/"
       },
       md: {
        title: "Map/Directions",
        href: "https://www.uni-bamberg.de/en/wiai/the-faculty/mapdirections/"
       }
    };
    localStorage.setItem('faculty_externalLinks', JSON.stringify(faculty_externalLinks));

    var acs_externalLinks = {
      cc: {
       title: "Cultural Computing",
       href: "https://www.uni-bamberg.de/en/kinf/"
      },
      cs: {
       title: "Cognitive Systems",
       href: "https://www.uni-bamberg.de/en/cogsys/"
      },
      mi: {
       title: "Media Informatics",
       href: "https://www.uni-bamberg.de/en/minf/"
      },
      hci: {
        title: "Human-Computer Interaction",
        href: "https://www.uni-bamberg.de/en/hci/"
       },

       se: {
        title: "Smart Environments",
        href: "https://www.uni-bamberg.de/ai/smart-environments/"
       }
    };
    localStorage.setItem('acs_externalLinks', JSON.stringify(acs_externalLinks));

    var cs_externalLinks = {
      dsg: {
       title: "Distributed Systems Group",
       href: "https://www.uni-bamberg.de/en/pi/"
      },
      itg: {
       title: "Informatics Theory Group",
       href: "https://www.uni-bamberg.de/gdi/"
      },
      cstsacn: {
       title: "Communication Services, Telecomm. Systems and Computer Network",
       href: "https://www.uni-bamberg.de/en/ktr/"
      },
      mssm: {
        title: "Mobile Software Systems/Mobility",
        href: "https://www.uni-bamberg.de/en/mobi/"
       },

       strg: {
        title: "Software Technologies Research Group",
        href: "https://www.uni-bamberg.de/en/swt/"
       },
       pasiisg: {
        title: "Privacy and Security in Information Systems Group",
        href: "https://www.uni-bamberg.de/en/psi/"
       }
    };
    localStorage.setItem('cs_externalLinks', JSON.stringify(cs_externalLinks));

    var is_externalLinks = {
      ees: {
       title: "Energy Efficient Systems",
       href: "https://www.uni-bamberg.de/en/eesys/"
      },
      iis: {
       title: "Industrial Information Systems",
       href: "https://www.uni-bamberg.de/iis/"
      },
      iias: {
       title: "Information Systems and Services",
       href: "https://www.uni-bamberg.de/en/isdl/"
      },
      sn: {
        title: "Social Networks",
        href: "https://www.uni-bamberg.de/en/sna/"
       },

       sdada: {
        title: "System Development and Database Applications",
        href: "https://www.uni-bamberg.de/ism/"
       }
    };
    localStorage.setItem('is_externalLinks', JSON.stringify(is_externalLinks));
    
    
    // ****  Prepare Local Storage for Other Screens
    // you can fill the local storage with your data
    
    // ****  Finally
    localStorage.setItem('prepareLocalStorage', 'done');
  }
  else {
    console.debug('Leaving LocalStorage untouched');
  }
}

